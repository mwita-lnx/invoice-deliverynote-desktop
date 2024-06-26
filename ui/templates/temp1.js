function templateHtml(template_data, invoice_data) {

  let display = "block";

  if (template_data.delivery_note) {
    display = "none";
  }
  function isDeliveryNote(x) {
    if (template_data.delivery_note) {
      if (x.toLowerCase() == "invoice") {
        return "DELIVERY NOTE"
      }
      else {
        return ' '
      }

    }
    else {
      return x;
    }
  }
  let temp = `
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="robots" content="noindex,nofollow" />
    <meta name="viewport" content="width=device-width; initial-scale=1.0;" />
    <style type="text/css">
      @import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);
      body { margin: 0; padding: 0; background: #e1e1e1; }
      div, p, a, li, td { -webkit-text-size-adjust: none; }
      .ReadMsgBody { width: 100%; background-color: #ffffff; }
      .ExternalClass { width: 100%; background-color: #ffffff; }
      body { width: 100%; height: 100%; background-color: #e1e1e1; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
      html { width: 100%; }
      p { padding: 0 !important; margin-top: 0 !important; margin-right: 0 !important; margin-bottom: 0 !important; margin-left: 0 !important; }
      .visibleMobile { display: none; }
      .hiddenMobile { display: block; }
    
      @media only screen and (max-width: 600px) {
      body { width: auto !important; }
      table[class=fullTable] { width: 96% !important; clear: both; }
      table[class=fullPadding] { width: 85% !important; clear: both; }
      table[class=col] { width: 50% !important; }
      .erase { display: none; }
      }
    
      @media only screen and (max-width: 420px) {
      table[class=fullTable] { width: 100% !important; clear: both; }
      table[class=fullPadding] { width: 85% !important; clear: both; }
      table[class=col] { width: 100% !important; clear: both; }
      table[class=col] td { text-align: left !important; }
      .erase { display: none; font-size: 0; max-height: 0; line-height: 0; padding: 0; }
      .visibleMobile { display: block !important; }
      .hiddenMobile { display: none !important; }
      }
    </style>
    
    
    <!-- Header -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable" bgcolor="#e1e1e1">
      <tr>
        <td height="20"></td>
      </tr>
      <tr>
        <td>
          <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable" bgcolor="#ffffff" style="border-radius: 10px 10px 0 0;">
            <tr class="hiddenMobile">
              <td height="10"></td>
            </tr>
            <tr class="visibleMobile">
              <td height="30"></td>
            </tr>
    
            <tr>
              <td>
                <table width="480" border="0" cellpadding="0" cellspacing="0" align="center" class="fullPadding">
                  <tbody>
                    <tr>
                      <td>
                        <table width="220" border="0" cellpadding="0" cellspacing="0" align="left" class="col">
                          <tbody>
                            <tr>
                              <td align="left"> <img src="http://www.supah.it/dribbble/017/logo.png" width="32" height="32" alt="logo" border="0" /></td>
                            </tr>
                            <tr class="hiddenMobile">
                              <td height="40"></td>
                            </tr>
                            <tr class="visibleMobile">
                              <td height="20"></td>
                            </tr>
                            <tr>
                            
                              <td style="font-size: 12px; color: #5b5b5b; font-family: 'Open Sans', sans-serif; line-height: 18px; vertical-align: top; text-align: left;">
                              <strong>${template_data.company_name}</strong><br>
                                ${template_data.company_details}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table width="220" border="0" cellpadding="0" cellspacing="0" align="right" class="col">
                          <tbody>
                            <tr class="visibleMobile">
                              <td height="20"></td>
                            </tr>
                            <tr>
                              <td height="5"></td>
                            </tr>
                            <tr>
                              <td style="font-size: 40px; color: #ff0000; letter-spacing: -1px; font-family: 'Open Sans', sans-serif; line-height: 1; vertical-align: top; text-align: left;">
                              ${isDeliveryNote('INVOICE')}
                              </td>
                            </tr>
                            <tr>
                            <tr class="hiddenMobile">
                              <td height="10"></td>
                            </tr>
                            <tr class="visibleMobile">
                              <td height="20"></td>
                            </tr>
                            <tr>
                              <td style="font-size: 12px; color: #5b5b5b; font-family: 'Open Sans', sans-serif; line-height: 18px; vertical-align: top; text-align: right;">
                                <small>ORDER</small> <br />
                                <small style="text-align: right;">DATE : ${template_data.date}</small>
                                <table width="220" border="0" cellpadding="0" cellspacing="0" align="right" class="col">
                                <tbody>
                                  <tr class="hiddenMobile">
                                    <td height="5"></td>
                                  </tr>
                                  <tr class="visibleMobile">
                                    <td height="20"></td>
                                  </tr>
                                  <tr>
                                    <table width="200" border="0" cellpadding="0" cellspacing="0" align="right" class="col">
                                <tbody>
                                  <tr class="visibleMobile">
                                    <td height="20"></td>
                                  </tr>
                                  <tr>
                                    <td style="font-size: 11px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 1; vertical-align: top;text-align: right; ">
                                      <strong>${isDeliveryNote('PAYMENT INFORMATION')}</strong>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="100%" height="10"></td>
                                  </tr>
                                  <tr>
                                    <td style=" display:${display}; font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 20px; vertical-align: top; text-align: right; ">
                                      ${template_data.payment_info}
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                                  </tr>
                                </tbody>
                              </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
    <!-- /Header -->
    <!-- Order Details -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable" bgcolor="#e1e1e1">
      <tbody>
        <tr>
          <td>
            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable" bgcolor="#ffffff">
              <tbody>
                <tr>
                <tr class="hiddenMobile">
                  <td height="60"></td>
                </tr>
                <tr class="visibleMobile">
                  <td height="40"></td>
                </tr>
                <tr>
                  <td>
                    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="fullPadding maintable">
                      <tbody>
                        <tr>
                          <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 10px 7px 0;" width="52%" align="left">
                            Item
                          </th>
                          <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px;" align="left">
                            Quantity
                          </th>
                          <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px;" align="center">
                            Unit Price
                          </th>
                          <th style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33; font-weight: normal; line-height: 1; vertical-align: top; padding: 0 0 7px;" align="right">
                            Subtotal
                          </th>
                        </tr>
                        <tr>
                          <td height="1" style="background: #bebebe;" colspan="4"></td>
                        </tr>
                        <tr>
                          <td height="10" colspan="4"></td>

                        </tr>
                        <tr>
                        
                          <td height="1" colspan="4" style="border-bottom:1px solid #e4e4e4"></td>
                        </tr>
                        <tr>
                          <td height="1" colspan="4" style="border-bottom:1px solid #e4e4e4"></td>
                        </tr>
                        ${invoice_data}
                        <tr>
                        
                          <td height="1" colspan="4" style="border-bottom:1px solid #e4e4e4"></td>
                        </tr>
                        <tr>
                          <td height="1" colspan="4" style="border-bottom:1px solid #e4e4e4"></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td height="20"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- /Order Details -->
    <!-- Total -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable" bgcolor="#e1e1e1">
      <tbody>
        <tr>
          <td>
            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable" bgcolor="#ffffff">
              <tbody>
                <tr>
                  <td>
    
                    <!-- Table Total -->
                    <table width="480" border="0" cellpadding="0" cellspacing="0" align="center" class="fullPadding">
                      <tbody>
                        <tr>
                        </tr>
                        <tr>
                          <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000; line-height: 22px; vertical-align: top; text-align:right; ">
                            <strong>Grand Total</strong>
                          </td>
                          <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #000; line-height: 22px; vertical-align: top; text-align:right; ">
                            <strong>${template_data.total}</strong>
                          </td>
                        </tr>
                        <tr>
                        </tr>
                      </tbody>
                    </table>
                    <!-- /Table Total -->
    
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- /Total -->
    <!-- Information -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable" bgcolor="#e1e1e1">
      <tbody>
        <tr>
          <td>
            <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable" bgcolor="#ffffff">
              <tbody>
                <tr>
                <tr class="hiddenMobile">
                  <td height="60"></td>
                </tr>
                <tr class="visibleMobile">
                  <td height="40"></td>
                </tr>
                <tr>
                  <td>
                    <table width="480" border="0" cellpadding="0" cellspacing="0" align="center" class="fullPadding">
                      <tbody>
                        <tr>
                          <td>
                            <table width="200" border="0" cellpadding="0" cellspacing="0" align="left" class="col">
    
                              <tbody>
                                <tr>
                                  <td style="font-size: 11px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 1; vertical-align: top; ">
                                    <strong>SHIPPED TO</strong>
                                  </td>
                                </tr>
                                <tr>
                                  <td width="100%" height="10"></td>
                                </tr>
                                <tr>
                                  <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 20px; vertical-align: top; ">
                                    ${template_data.to}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            
                            <table width="200" border="0" cellpadding="0" cellspacing="0" align="left" class="col">
    
                            <tbody>
                              <tr>
                                <td style="font-size: 11px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 1; vertical-align: top; ">
                                  <strong>BILL TO</strong>
                                </td>
                              </tr>
                              <tr>
                                <td width="100%" height="10"></td>
                              </tr>
                              <tr>
                                <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #5b5b5b; line-height: 20px; vertical-align: top; ">
                                  ${template_data.from}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                           </td>
                </tr>
                <tr>
                  <td>
                    <table width="220" border="0" cellpadding="0" cellspacing="0" align="right" class="col">
                              <tbody>
                                <tr class="hiddenMobile">
                                  <td height="30"></td>
                                </tr>
                                <tr class="visibleMobile">
                                  <td height="20"></td>
                                </tr>
                                <tr>
      
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr class="hiddenMobile">
                  <td height="10"></td>
                </tr>
                <tr class="visibleMobile">
                  <td height="30"></td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- /Information -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable" bgcolor="#e1e1e1">
    
      <tr>
        <td>
          <table width="600" border="0" cellpadding="0" cellspacing="0" align="center" class="fullTable" bgcolor="#ffffff" style="border-radius: 0 0 10px 10px;">
            <tr>
              <td>
                <table width="480" border="0" cellpadding="0" cellspacing="0" align="center" class="fullPadding">
                  <tbody>
                    <tr>
                      <td style="font-size: 12px; color: #5b5b5b; font-family: 'Open Sans', sans-serif; line-height: 18px; vertical-align: top; text-align: left;">
                      ${template_data.footnotes}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr class="spacer">
              <td height="50"></td>
            </tr>
    
          </table>
        </td>
      </tr>
      <tr>
        <td height="20"></td>
      </tr>
    </table>`


  return temp;
}

function invoiceDataHtml(invoice_data) {
  console.log(invoice_data)
  let html = ``;
  let unit_price, description, quantity, subtotal;


  for (let i = 0; i < items; i++) {
    description = invoice_data.description[i]
    unit_price = invoice_data.unit_price[i]
    quantity = invoice_data.quantity[i]
    subtotal = invoice_data.quantity[i]
    let row = `<tr>
  <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #ff0000;  line-height: 18px;  vertical-align: top; padding:10px 0;" class="article">
    ${description}
  </td>
  <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e;  line-height: 18px;  vertical-align: top; padding:10px 0;">${quantity}</td>
  <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #646a6e;  line-height: 18px;  vertical-align: top; padding:10px 0;" align="center">${unit_price}</td>
  <td style="font-size: 12px; font-family: 'Open Sans', sans-serif; color: #1e2b33;  line-height: 18px;  vertical-align: top; padding:10px 0;" align="right">${subtotal}</td>
</tr>
<tr>
  <td height="1" colspan="4" style="border-bottom:1px solid #e4e4e4"></td>
   </tr>`
    let items = invoice_data.items
    html = html + row;
    console.log(description)
  }

  return html

}


module.exports = { templateHtml, invoiceDataHtml }