const remote = require('@electron/remote');
const { dialog } = remote;
const generateDocument = require('../docxTempHandler.js'); 
const serial = new SerialNumberGenerator(appStoragePath) 
// const pdf_gen = require('../index.js')

async function updateHomeDocVeiw(template_data){
 let temp_data = await template_data

  function genTableRows(data) {
    let rows =''
    for (var i = 0; i < data.items; i++) {
      var newRow = '<tr class="fw-bolder text-gray-700 fs-5 ">' +
        '<td class="d-flex align-items-center">' +
        '<i class="fa fa-genderless text-success fs-2 me-2"></i>' + data.description[i] + '</td>' +
        '<td>' + data.quantity[i] + '</td>' +
        '<td>' + '' + data.unit_price[i] + '</td>' +
        '<td class="fs-5 text-dark fw-boldest text-end">' + data.subtotal[i] + '</td>' +
        '</tr>';
        rows = rows + newRow
      
    }
    return rows
  }
  $(".issue_date").html(temp_data.date);
  $(".due_date").html(temp_data.due_date);
  $(".bill_to").html(temp_data.bill_to);
  $(".shipped_to").html(temp_data.shipped_to);
  $(".contact_info").html(temp_data.contact_info);
  $(".foot_note").html(temp_data.footnotes);
  $(".address").html(temp_data.address);
  $(".company_name").html(temp_data.company_name);
  $(".payment_info").html(temp_data.payment_info);
  $(".total").html(temp_data.total);
  $(".bill_no").html(temp_data.bill_no);
  $(".invoice_home").html(genTableRows(temp_data.invoice_data));
  $('.serial_no').html(temp_data.serial_no)
  }


class JSONFileManager {
  constructor(filePath) {
    this.filePath = filePath;
  }
  async initShowDocs(){
    (async () => {
      try {
        const parameters = await this.getParameters("date", "serial_no");

        // Loop through and access the parameters
        let serial_nos= parameters.serial_no
        let dates = parameters.date
        this.addToDocList(serial_nos,dates)
        try {
          const jsonData = await this.read();
          let mostRecentItem = null;
          let mostRecentSerialNo = null;
      
          for (const serialNo in jsonData.items) {
            if (jsonData.items.hasOwnProperty(serialNo)) {
              const item = jsonData.items[serialNo];
              
              // Extract the numerical part of the serial number
              const serialNumberParts = serialNo.match(/(\d+)/);
              if (serialNumberParts) {
                const itemSerialNo = parseInt(serialNumberParts[0]);
                
                // Check if it's the most recent serial number
                if (mostRecentSerialNo === null || itemSerialNo > mostRecentSerialNo) {
                  mostRecentSerialNo = itemSerialNo;
                  mostRecentItem = item;
                }
              }
            }
          }
      
          updateHomeDocVeiw(mostRecentItem)
          template_data = mostRecentItem
          invoice_data = template_data.invoice_data
        } catch (err) {
          throw err;
        }

      } catch (err) {
        console.error("Error:", err);
      }
    })();
  }
  async read() {
    try {
      const data =  fs.readFileSync(this.filePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      throw err;
    }
  }

  async write(data) {
    try {
      fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf8');
      this.initShowDocs()
     
    } catch (err) {
      throw err;
    }
  }
  async getItemBySerialNo(serialNo) {
    try {
      const jsonData = await this.read();
      return jsonData.items[serialNo];

    } catch (err) {
      throw err;
    }
  }
  async search(query) {
    try {
      const jsonData = await this.read();
      const results = [];
  
      for (const serialNo in jsonData.items) {
        if (jsonData.items.hasOwnProperty(serialNo)) {
          const item = jsonData.items[serialNo];
          
          // Implement your search logic here
          // For example, checking if 'itemName' includes the query
          if (item.itemName.toLowerCase().includes(query.toLowerCase())) {
            results.push(item);
          }
        }
      }
  
      return results;
    } catch (err) {
      throw err;
    }
  }
  

  async update(serialNo, newData) {
    try {
      const jsonData = await this.read();
      
      if (!jsonData.items[serialNo]) {
        jsonData.items[serialNo] = {};
        this.addToDocList([serialNo],[newData.date])
      }
      const itemToUpdate = jsonData.items[serialNo];
    
      // Update the item's data
      Object.assign(itemToUpdate, newData);
  
      // Write the updated data back to the file
      await this.write(jsonData);
      
      return itemToUpdate;
    } catch (err) {
      throw err;
    }
  }

 

  async getParameters(...parameterNames) {
    try {
      const jsonData = await this.read();
      const parameters = {};

      for (const paramName of parameterNames) {
        parameters[paramName] = [];
      }

      for (const serialNo in jsonData.items) {
        if (jsonData.items.hasOwnProperty(serialNo)) {
          const item = jsonData.items[serialNo];
          parameterNames.forEach((paramName) => {
            if (item[paramName] !== undefined) {
              parameters[paramName].push(item[paramName]);
            }
          });
        }
      }
     
      return parameters;
    } catch (err) {
      throw err;
    }
  }
 async addToDocList(serial_nos, dates) {
    // Check if the lengths of serial_nos and dates arrays match
    if (serial_nos.length !== dates.length) {
        console.error('Serial numbers and dates arrays must have the same length.');
        return;
    }

    // Combine serial numbers and dates into an array of objects for sorting
    const items = serial_nos.map((serial_no, index) => ({
        serial_no,
        date: dates[index]
    }));

    // Sort the items in descending order based on the serial_no
    items.sort((a, b) => b.serial_no.localeCompare(a.serial_no));

    // Generate the HTML elements in descending order
    const doc_list_html = items.map(item => `
        <div class="mb-10 ${item.serial_no} doc_list_side" name="${item.serial_no}">
            <!--begin::Item-->
            <a href="#" class="custom-list d-flex align-items-center px-5 py-4">
                <!--begin::Symbol-->
                <div class="symbol symbol-40px me-5">
                    <span class="symbol-label">
                        <img src="assets/media/svg/files/doc.svg" class="h-50 align-self-center" alt="" />
                    </span>
                </div>
                <!--end::Symbol-->
                <!--begin::Description-->
                <div class="d-flex flex-column flex-grow-1">
                    <!--begin::Title-->
                    <h5 class="custom-list-title fw-bold text-gray-800 mb-1">Document ${item.serial_no}</h5>
                    <!--end::Title-->
                    <!--begin::Link-->
                    <span class="text-gray-400 fw-bold">${item.date}</span>
                    <!--end::Link-->
                </div>
                <!--begin::Description-->
            </a>
            <!--end::Item-->
        </div>`).join('');

    // Replace the content of .doc_list with the generated HTML elements
    $(".doc_list").html(doc_list_html);
    
    $('.doc_list_side').on('click', async (event) => {
      // Get the name attribute of the clicked item
      const itemName = $(event.currentTarget).attr('name'); // Use event.currentTarget
    
      // Use the getItemBySerialNo method to retrieve the item by serial number
      let item = this.getItemBySerialNo(itemName)
        if (item) {
          // You have the 'item' object, you can use it here
          // For example, you can update the template_data and call updateHomeDocView
          template_data = await item;
          invoice_data = template_data.invoice_data
      
          updateHomeDocVeiw(template_data)
        } else {
          // Handle the case when the item is not found
          console.log('Item not found.');
        }
      });
    
}

 addNewInstance(serial_no, date) {
    // Create a new item
    const newItem = {
        serial_no,
        date
    };

    // Add the new item to the items array
    items.push(newItem);

    // Sort the items array in descending order based on serial_no
    items.sort((a, b) => b.serial_no.localeCompare(a.serial_no));

    // Regenerate the HTML elements
    const serial_nos = items.map(item => item.serial_no);
    const dates = items.map(item => item.date);
    addToDocList(serial_nos, dates);
}


  
  // Example usage

  async getMostRecent() {
    try {
      const jsonData = await this.read();

      // Find the most recent item based on a date property (e.g., "date")
      let mostRecentItem = null;
      let mostRecentDate = null;

      for (const item of jsonData.items) {
        if (!mostRecentDate || new Date(item.date) > mostRecentDate) {
          mostRecentDate = new Date(item.date);
          mostRecentItem = item;
        }
      }

      return mostRecentItem;
    } catch (err) {
      throw err;
    }
  }
}



var invoice_data_lst = []


var invoice_data = {
  description : [],
  unit_price : [],
  quantity : [],
  subtotal : [],
  items : 0


}
var template_data_blueprint ={
  serial_no:"",
  invoice_data :invoice_data,
  shipped_to_H:"SHIP TO",
  shipped_to : '',
  bill_to:"",
  date:"",
  contact_info:"",
  address:"",
  company_name:"",
  bill_no:$('#serial_no_in').val(),
  payment_info:"",
  company_details:"",
  timeline: "",
  footnotes:"",
  due_date:"",
  total:null,
  logo_path :defaultLogoPath,
  templatePath:'',
  delivery_note : true
}

var template_data ={
  serial_no:null,
  invoice_data :invoice_data,
  shipped_to_H:"SHIP TO",
  shipped_to : '',
  bill_to:"",
  date:"",
  contact_info:"",
  address:"",
  company_name:"",
  bill_no:$('#serial_no_in').val(),
  payment_info:"",
  company_details:"",
  timeline: "",
  footnotes:"",
  due_date:"",
  total:null,
  logo_path :defaultLogoPath,
  templatePath:'',
  delivery_note : true
}



async function getSavePath() {
  const { filePath } = await dialog.showSaveDialog({
    buttonLabel: 'Save File',
    filters: [ { name: 'docx', extensions: [ 'docx' ] } ]
  });  
  if(filePath){
    return filePath
  }
  else{
    false
  }
}

 function getLogoPath() {
  const filePath =  dialog.showOpenDialogSync({
    buttonLabel: 'SELECT',
    properties: ['openFile',],
    filters: [  { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
     { name: 'All Files', extensions: ['*'] },
    ]
  });  
  if(filePath){
    return filePath
  }
  else{
    false
  }
}


  

function calculate(){

  var total_price = 0


  $('.invoicelist-body tbody tr').each( function(){
    var row = $(this),
        unit_price   = row.find('.unit_price input').val(),
        amount = row.find('.amount input').val();
    
    var subtotal = unit_price * amount;
    
    
    
    total_price = total_price + subtotal;

    
    row.find('.subtotal').text( subtotal.toFixed(2) );  
  });

  $('#total_price').text(total_price.toFixed(2));
  template_data.total = total_price.toFixed(2)

}


$('.invoicelist-body').on('keyup','input',function(){
  
  calculate();
});


function getTableData(){
  $('.invoicelist-body tbody tr').each( function(){
    var row = $(this),
        description = row.find('.description ').val(),
        unit_price   = row.find('.unit_price input').val(),
        quantity = row.find('.amount input').val();
        subtotal = row.find('.subtotal').text(); 
        id = row.find('.id').text();
        
  
        invoice_data.description[id-1]=description
        invoice_data.unit_price[id-1]=unit_price
        invoice_data.quantity[id-1]=quantity
        invoice_data.subtotal[id-1]=subtotal
        invoice_data_lst[id-1] = {description:description,unit_price:unit_price,quantity:quantity,subtotal:subtotal}
        
  });
}
var item_instance =[]
$('.invoicelist-body').on('keyup','table',function(){
  getTableData()
});
  



$('.newRow').on('click',function(e){

  invoice_data.items = invoice_data.items+1
  let items =invoice_data.items
  var newRow = `
<tr>
        <td><a class="control removeRow" href="#">x</a> 
        <span class="id" id="${items}" contenteditable>${items}</span></td>
        <td class="item_description" id="item_description" contenteditable><textarea class="form-control form-control form-control-solid description" data-kt-autosize="true"></textarea></td>
        <td class="amount"><input type="text" placeholder="quantity"/></td>
        <td class="unit_price"><input type="text" placeholder="unit price"/></td>
        <td class="subtotal" id="subtotal"></td>
      </tr>`;
  $('.invoicelist-body tbody').append(newRow);
  e.preventDefault();
  calculate();
});

$('body').on('click','.removeRow',function(e){
  $(this).closest('tr').remove();
  e.preventDefault();
   // Update the number of items
   invoice_data.items -= 1;
  
   // Update the IDs of remaining rows
   $('.id').each(function(index) {
     $(this).attr('id', index + 1);
     $(this).text(index + 1);
   });
  
   calculate();
   getTableData()
});

function isElementVisible(elementSelector) {
  const $element = $(elementSelector);
  const $parent = $element.parent();
  return $parent.hasClass('show');
}

// async function gen_pdf(tempno){
//     let invoicedatahtml = tempno.invoiceDataHtml(template_data.invoice_data)
//     var testTemp =tempno.templateHtml(template_data,invoicedatahtml)

// let path_ = await getSavePath()
// if(path_){
//   let res = pdf_gen.pdf_handler(testTemp,path_)
//   if(res){
//     alert('file is saved')
//   }else{
//     alert('Error')
//   }
// }
// }





function getInvoiceData() {
  function replaceNewlinesWithBr(inputString) {
    return inputString.replace(/\n/g, "<br>");
  }
var fields = {
  '.shipped_to_in': 'shipped_to',
  '.bill_to_in': 'bill_to',
  '.payment_info_in': 'payment_info',
  '.contact_info_in': 'contact_info',
  '.address_in': 'address'
};

var date = $('.date_in').val();

var due_date_no = $('.due_date_in').val();
var total = $('.total_in').text();
var company_name = $('.company_name_in').val();
var foot_note = $('.footnotes_in').val();


template_data.date = date;
template_data.footnotes = foot_note;
template_data.due_date_no = due_date_no;
template_data.total = total;
template_data.company_name = company_name;

for (var fieldSelector in fields) {
  var fieldValue = $(fieldSelector).val();
  if (isElementVisible(fieldSelector)) {
    template_data[fields[fieldSelector]] = replaceNewlinesWithBr(fieldValue)
    
  } else {
    template_data[fields[fieldSelector]] = '';
    if(fieldSelector=='.shipped_to_in'){
      template_data.shipped_to_H = ''
    }
   
  }
 
  
 
}

}

function resetFieldsFromData(data) {
  function replaceBrWithNewlines(inputString) {
    return inputString.replace(/<br\s*\/?>/gi, "\n");
  }
  // Function to update HTML for the invoice table based on invoice_data
  // Function to reset the table with invoice data
async function resetTableWithInvoiceData(invData) {
  // Clear the table
  let invoiceData = await invData

  $('.invoicelist-body tbody').empty();
if (invoiceData.items == 0) {
  
  invoice_data.items = 1
  var row = `
  <tr>
      <td><a class="control removeRow" href="#">x</a> 
      <span class="id" id="1" contenteditable>1</span></td>
      <td class="item_description" id="item_description" contenteditable><textarea class="form-control form-control form-control-solid description" data-kt-autosize="true"></textarea></td>
      <td class="amount"><input type="text" placeholder="quantity" value=""/></td>
      <td class="unit_price"><input type="text" placeholder="unit price" value=""/></td>
      <td class="subtotal" id="subtotal"></td>
  </tr>`;
$('.invoicelist-body tbody').append(row);
}else{
 // Loop through the invoice data and add rows to the table
 for (let i = 0; i < invoiceData.items; i++) {
  var newRow = `
      <tr>
          <td><a class="control removeRow" href="#">x</a> 
          <span class="id" id="${i + 1}" contenteditable>${i + 1}</span></td>
          <td class="item_description" id="item_description" contenteditable><textarea class="form-control form-control form-control-solid description" data-kt-autosize="true">${invoiceData.description[i] || ' hh'}</textarea></td>
          <td class="amount"><input type="text" placeholder="quantity" value="${invoiceData.quantity[i] || ''}"/></td>
          <td class="unit_price"><input type="text" placeholder="unit price" value="${invoiceData.unit_price[i] || ''}"/></td>
          <td class="subtotal" id="subtotal">${invoiceData.subtotal[i] || ''}</td>
      </tr>`;
  $('.invoicelist-body tbody').append(newRow);
}
}
 

  // Attach event listeners (e.g., removeRow) to the new rows if needed
  // ...

  // Call the calculate function
  calculate();
  // Call the getTableData function if needed
  // ...
}

  var fields = {
    '.shipped_to_in': 'shipped_to',
    '.bill_to_in': 'bill_to',
    '.payment_info_in': 'payment_info',
    '.contact_info_in': 'contact_info',
    '.address_in': 'address',
  };

  // Reset fields based on the provided 'data' parameter
  for (var fieldSelector in fields) {
    if (data.hasOwnProperty(fields[fieldSelector])) {
      var fieldValue = data[fields[fieldSelector]];
      $(fieldSelector).val(replaceBrWithNewlines(fieldValue));
    } else {
      // Handle the case where a field is not present in 'data'
      $(fieldSelector).html('');
      if (fieldSelector == '.shipped_to_in') {
        $('.shipped_to_H').html('');
      }
    }
  }

  // Reset other fields using direct assignments
  $('.date_in').val(data.date || '');
  $('.bill_no_in').val(data.bill_no || '');
  $('.due_date_in').val(data.due_date_no || '');
  $('.total_in').text(data.total || '');
  $('.company_name_in').val(data.company_name || '');
  $('.footnotes_in').val(data.footnotes || '');
  $('#serial_no_in').val(data.serial_no || '');
  resetTableWithInvoiceData(data.invoice_data);
  // Update the 'template_data' object with the new data
}



function attachEventHandlers() {
  // Handle radio button change
  $('input[name="options"]').on('change', function() {
    const templateName = $(this).val();
    console.log('Selected template:', templateName);
  });

  // Handle "GET TEMPLATE" button click
  $('#kt_explore_footer a').on('click', async function(e) {
    e.preventDefault();
    template_data.invoice_data = invoice_data_lst
    const selectedOption = $('input[name="options"]:checked').val();
    if (selectedOption) {
      // Perform any action based on the selected option
      console.log('Selected template:', selectedOption);
      let path__;
      if(template_data.delivery_note == true){
        path__ = path.join(dvynotePath,`${selectedOption}.docx`)
      }else{
        path__ = path.join(InvoicePath,`${selectedOption}.docx`)
      }
     
      let save_path__ = await getSavePath()
      getInvoiceData()
      generateDocument(template_data, path__, save_path__);
      
    } else {
      alert('No template selected.');
    }
   
  });
}


const jsonManager = new JSONFileManager(jsonStoragePath);
jsonManager.initShowDocs()



$('.generateivc').on('click',function(e){
  template_data.delivery_note = false
  populateTemplateOptions(InvoicePath)
  $("#kt_select_temp").addClass("drawer-on");
  getInvoiceData()
  e.preventDefault();
   
});

$('.logo_path_in').on('click',async function(e){
  let _path =  getLogoPath()
  template_data.logo_path = _path[0]
 
  e.preventDefault();
   
});

$('.generatednt').on('click',function(e){
  template_data.delivery_note = true
  populateTemplateOptions(dvynotePath)
  $("#kt_select_temp").addClass("drawer-on");
  getInvoiceData()
  e.preventDefault();
});

$('#new_doc').on('click',function(e){
  template_data = {...template_data,...template_data_blueprint}
  template_data.invoice_data = {
    description : [],
    unit_price : [],
    quantity : [],
    subtotal : [],
    items : 0
  }
  resetFieldsFromData(template_data)
   e.preventDefault(); 
});

$('#edit_doc').on('click',function(e){

  resetFieldsFromData(template_data)
   e.preventDefault();
  
});


$('.update_home_view').on('click',function(e){

  template_data.invoice_data = invoice_data
  getInvoiceData()

  if(!template_data.serial_no){
    let serialNo = serial.generateSerialNumber()
   
    template_data.serial_no = serialNo
    template_data.bill_no = serialNo
  }
  jsonManager.update(template_data.serial_no,template_data)
  updateHomeDocVeiw(template_data)
  console.log(template_data)
  e.preventDefault();

});
$('.doc_list_side').on('click', function() {
  // Get the name attribute of the clicked element using $(this)
  const nameAttribute = $(this).attr('name');
  
  // Log the name attribute to the console
  sel_name = nameAttribute;
});

attachEventHandlers()
calculate();





// Example usage:


