const fs = require('fs');
const path = require('path');
const bootstrap_path_css = path.resolve("ui","templates","bootstrap.css");
//const bootstrap_path_css = path.resolve("resources","app","ui","templates","bootstrap.css");
const bootstrap_css = fs.readFileSync(bootstrap_path_css, 'utf-8');



function templateHtml(template_data,invoice_data) {

    let display = "block";

    if(template_data.delivery_note){
       display = "none";
    }
    
    function isDeliveryNote(x) {
        if (template_data.delivery_note){
            if(x.toLowerCase() == "invoice"){
                console.log(template_data.delivery_note)
                return "DELIVERY NOTE"

            }
            else{
                return ' '
            }
           
        }
        else{
            return x;
        }
    }
    console.log(template_data.date)
    let temp =`
    <title>CodePen - Invoice V3</title>
    <style>${bootstrap_css}</style>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css'>
    <style>
    body {
        -webkit-print-color-adjust: exact;
      }
      .gray{
        color: #333;
      }
      
      .gray-ish{
        color: #666;
      }
      
      .almost-gray{
        color: #999;
      }
      
      
      body{
    background-color: #eee;
  
   
    width: 100%;
  
  }
  
      div.container{
        background-color: white;
        height: 100%;
        position: relative;
       
      }
      
      .invoice-header{
        background-color: #444;
        color: white;
        border-bottom: 3px solid rgb(255, 77, 77);
      }
      
      div.invoice-header > div > p{
        
        font-weight: 350;
      }
      
      div.invoice-header > div > h1{
        font-size: 4rem;
      }
      
      div.invoice-table{
        border-top: 3px solid rgb(255, 77, 77);
      }
      
      div.invoice-table > table.table > thead, div.invoice-table > table.table > thead.thead > tr, div.invoice-table > table.table > thead.thead > tr > th {
        border-top: none;
        
      }
      
      div.total-field{
        position: relative;
      }
      
      h5.due-date{
        position: absolute;
        bottom: 10px;
        right: 15px;
      }
      
      div.sub-table{
        border-left: 3px solid rgb(255, 77, 77);
        padding-left: 0;
      }
      
      div.sub-table > table{
        padding-bottom: 0;
        margin-bottom: 0;
      }
      
      tr.last-row{
        margin-top: 25px;
        background-color: #555;
        color: white;
        border-top: 3px solid rgb(255, 77, 77);
      }
      
      p.footer{
          bottom: 0;
          width: 100%;
          background-color: #333;
          color: white;
          padding-top: 15px;
          border-top: 3px solid red;
  
     
      }
      .container{
        max-width: 100%;
        margin: 0px;
      }
  
      p{
        margin: 0px;
      }
  
      .table th {
      padding: 0.15rem;
    }
  
      </style>
  
  </head>
  <body>
  <!-- partial:index.partial.html -->
  <div class="container">
    <div class="row invoice-header  py-4">
      <div class="col-4">
        <p>${template_data.company_name}</p>
        <h2>${isDeliveryNote('INVOICE')}</h2>
      </div>
      <div class="col-4 text-right">
        <p>${template_data.company_details}</p>
      </div>
      <div class="col-4 text-right">
      <p>${template_data.contact_info}</p>
      </div>
    </div>
  
    <div class="invoice-content row py-3">
      <div class="col-4">
        <h5 class="almost-gray mb-3">To:</h5>
        <p class="gray-ish">${template_data.from}</p>
      </div>
      <div class="col-4">
        <h5 class="almost-gray">Ship to:</h5>
        <p class="gray-ish">${template_data.to}</p>
      </div>
      <div class="col-4" style="display:${display}">
      <h5 class="almost-gray">Payment Info:</h5>
      <p class="gray-ish">${template_data.payment_info}</p>
    </div>
    </div>
  
    <div class="row mt-2">
      <div class="col-12  invoice-table pt-1">
        <table class="table table-hover">
              <thead class="thead splitForPrint">
                <tr>
                  <th scope="col gray-ish" style="max-width: 10px;">No.</th>
                  <th scope="col gray-ish" style="max-width: 70px;">Item Description</th>
                  <th scope="col gray-ish" style="max-width: 15px;">Qty</th>
                  <th scope="col gray-ish" style="max-width: 20px;">U.Price</th>
                  <th scope="col gray-ish" style="max-width: 30px;">Amount</th>
                </tr>
              </thead>
              <tbody>
                ${invoice_data}
              </tbody>
            </table>
          </div>
     </div>
     <div class="invoice-content row ">
     <div class="col-3">
     </div>
     <div class="col-3">
     </div>

     <div class="col-6 text-right total-field">
     <h4 class="almost-gray">Invoice Total</h4>
       <h3 class="gray-ish">${template_data.total}</span></h3>
     </div>
   </div>
   <div><h6>${template_data.footnotes}</h6></div>
  </div>
  <!-- partial -->
  <script src="/home/lnx/Desktop/projects/invoicegen/New folder/ui/jquery.js"></script>
  
  </body>
  
  `
      
      
  return temp;
}

function invoiceDataHtml(invoice_data){
  console.log(invoice_data)
  let html =`` ; 
  let unit_price,description,quantity,subtotal;
  let items = invoice_data.items
  
  for (let i = 0; i < items; i++) {
     description = invoice_data.description[i]
     unit_price = invoice_data.unit_price[i]
     quantity =  invoice_data.quantity[i]
     subtotal = invoice_data.quantity[i]
     let row = `
   <tr>
   <th scope="row" style="max-width: 10px;">${i+1}</th>
   <td class="item" style="max-width: 50px;"> ${description}</td>
   <td style="max-width: 15px;">${quantity}</td>
   <td style="max-width: 20px;">${unit_price}</td>
   <td  style="max-width: 25px;">${subtotal}</td>
 </tr>
   
   `
     html = html + row;
     console.log(description)
  }
  
     return html
     
}


module.exports = {templateHtml,invoiceDataHtml}


