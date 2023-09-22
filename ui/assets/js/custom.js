const fs = require("fs");
const path = require("path");

const dvynotePath =  path.resolve("resources","app","ui","assets","templates","delivery-note");
const InvoicePath =  path.resolve("resources","app","ui","assets","templates","invoices");
const defaultLogoPath =  path.resolve("resources","app","ui","assets","media","default.png");
const jsonStoragePath =  path.resolve("resources","app","ui","assets","jsons","template_datas.json");
const appStoragePath =  path.resolve("resources","app","ui","assets","jsons","appStorage.json");

// const dvynotePath = path.resolve("ui", "assets", "templates", "delivery-note");
// const InvoicePath = path.resolve("ui", "assets", "templates", "invoices");
// const defaultLogoPath = path.resolve("ui", "assets", "media", "default.png");
// const jsonStoragePath = path.resolve("ui","assets","jsons","template_datas.json");
// const appStoragePath = path.resolve("ui","assets","jsons","appStorage.json");

var blank_input_html = `
<div class="modal-content ">
					
<!--begin::Modal body-->
<div class="modal-body py-lg-10 px-lg-10">
  <!--begin::Stepper-->
  <!--begin::Stepper-->
<div class="stepper stepper-pills" id="kt_stepper_example_clickable">
  <!--begin::Nav-->
  <div class="stepper-nav flex-center flex-wrap mb-10">
    <!--begin::Step 1-->
    <div class="stepper-item mx-2 my-4 current" data-kt-stepper-element="nav" data-kt-stepper-action="step">
      <!--begin::Line-->
      <div class="stepper-line w-40px"></div>
      <!--end::Line-->

      <!--begin::Icon-->
      <div class="stepper-icon w-40px h-40px">
        <i class="stepper-check fas fa-check"></i>
        <span class="stepper-number">1</span>
      </div>
      <!--end::Icon-->

      <!--begin::Label-->
      <div class="stepper-label">
        <h3 class="stepper-title">
          Step 1
        </h3>

        <div class="stepper-desc">
          Description
        </div>
      </div>
      <!--end::Label-->
    </div>
    <!--end::Step 1-->

    <!--begin::Step 2-->
    <div class="stepper-item mx-2 my-4" data-kt-stepper-element="nav" data-kt-stepper-action="step">
      <!--begin::Line-->
      <div class="stepper-line w-40px"></div>
      <!--end::Line-->

      <!--begin::Icon-->
      <div class="stepper-icon w-40px h-40px">
        <i class="stepper-check fas fa-check"></i>
        <span class="stepper-number">2</span>
      </div>
      <!--begin::Icon-->

      <!--begin::Label-->
      <div class="stepper-label">
        <h3 class="stepper-title">
          Step 2
        </h3>

        <div class="stepper-desc">
          Description
        </div>
      </div>
      <!--end::Label-->
    </div>
    <!--end::Step 2-->

    <!--begin::Step 3-->
    <div class="stepper-item mx-2 my-4" data-kt-stepper-element="nav" data-kt-stepper-action="step">
      <!--begin::Line-->
      <div class="stepper-line w-40px"></div>
      <!--end::Line-->

      <!--begin::Icon-->
      <div class="stepper-icon w-40px h-40px">
        <i class="stepper-check fas fa-check"></i>
        <span class="stepper-number">3</span>
      </div>
      <!--begin::Icon-->

      <!--begin::Label-->
      <div class="stepper-label">
        <h3 class="stepper-title">
          Step 3
        </h3>

        <div class="stepper-desc">
          Description
        </div>
      </div>
      <!--end::Label-->
    </div>
    <!--end::Step 3-->

    <!--begin::Step 4-->
    <div class="stepper-item mx-2 my-4" data-kt-stepper-element="nav" data-kt-stepper-action="step">
      <!--begin::Line-->
      <div class="stepper-line w-40px"></div>
      <!--end::Line-->

      <!--begin::Icon-->
      <div class="stepper-icon w-40px h-40px">
        <i class="stepper-check fas fa-check"></i>
        <span class="stepper-number">4</span>
      </div>
      <!--begin::Icon-->

      <!--begin::Label-->
      <div class="stepper-label">
        <h3 class="stepper-title">
          Step 4
        </h3>

        <div class="stepper-desc">
          Description
        </div>
      </div>
      <!--end::Label-->
    </div>
    <!--end::Step 4-->
  </div>
  <!--end::Nav-->

  <!--begin::Form-->
  <form class="form  mx-auto" novalidate="novalidate" id="kt_stepper_example_basic_form">
    <!--begin::Group-->
    <div class="mb-5">
      <!--begin::Step 1-->
      <div class="flex-column current" data-kt-stepper-element="content">
        <!--begin::Input group-->
  <!--end::Nav-->
    <div class="card">
    <!--begin::Card body-->
    <div class="card-body">
      <!--begin::Row-->
      <div class="row mb-5">
        <!--begin::Col-->
        <div class="col-md-6 pe-md-10 mb-10 mb-md-0">
          <!--begin::Accordion-->
          <!--begin::Section-->
          <div class="m-0">
            <!--begin::Heading-->
            <div class="d-flex align-items-center collapsible py-3 toggle mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_4_1">
              <!--begin::Icon-->
              <div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                <!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
                <span class="svg-icon toggle-off svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black" />
                    <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Icon-->
              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">Company Name</h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Body-->
            <div id="kt_job_4_1" class="collapse show fs-6 ms-1">
              <!--begin::Text-->
              <div class="mb-4 text-gray-600 fw-bold fs-6 ps-10">
                
                <textarea placeholder="Company Name" class="form-control form-control form-control-solid company_name_in" data-kt-autosize="true"></textarea>
              </div>
              <!--end::Text-->
            </div>
            <!--end::Content-->
            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>
          <!--end::Section-->
          <!--begin::Section-->
          <div class="m-0">
            <!--begin::Heading-->
            <div class="d-flex align-items-center collapsible py-3 toggle mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_4_2">
              <!--begin::Icon-->
              <div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                <!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
                <span class="svg-icon toggle-off svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black" />
                    <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Icon-->
              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">Company Address</h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Body-->
            <div id="kt_job_4_2" class="show collapse fs-6 ms-1">
              <!--begin::Text-->
              <div contenteditable class=" address_in mb-4 text-gray-600 fw-bold fs-6 ps-10">Nairobi<br>Plaza house<br>additional..</div>
            </div>
            <!--end::Content-->
            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>
          <!--end::Section-->
          <!--begin::Section-->
          <div class="m-0">
            <!--begin::Heading-->
            <div class="d-flex align-items-center collapsible py-3 toggle  mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_4_3">
              <!--begin::Icon-->
              <div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                <!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
                <span class="svg-icon toggle-off svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black" />
                    <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Icon-->
              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">Contact Info</h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Body-->
            <div id="kt_job_4_3" class="show collapse fs-6 ms-1">
              <!--begin::Text-->
              <div contenteditable class="mb-4 text-gray-600 fw-bold fs-6 ps-10 contact_info_in">
                Web: <a href="#">www.yourwebsite.com</a><br>
                Mail: <a href="#">name@domain.com</a><br>
                Tel: +254 757 xxx 121<br></div>
              <!--end::Text-->
            </div>
            <!--end::Content-->
            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>
          <!--end::Section-->
          <!--end::Accordion-->
        </div>
        <!--end::Col-->
        <!--begin::Col-->
        <div class="col-md-6 ps-md-10">
          <!--begin::Accordion-->
          <!--begin::Section-->
          <div class="m-0">
            <!--begin::Heading-->
            <div class="d-flex align-items-center collapsible py-3 toggle mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_5_1">
              <!--begin::Icon-->
              <div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                <!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
                <span class="svg-icon toggle-off svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black" />
                    <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Icon-->
              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">Payment Info</h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Body-->
            <div id="kt_job_5_1" class="collapse show fs-6 ms-1">
              <!--begin::Text-->
              <div contenteditable class="payment_info_in mb-4 text-gray-600 fw-bold fs-6 ps-10">
                Credit Card <br>
                Card Type: Visa
              </div>
              <!--end::Text-->
            </div>
            <!--end::Content-->
            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>
          <!--end::Section-->
          <!--begin::Section-->
          <div class="m-0">
            <!--begin::Heading-->
            <div class="d-flex align-items-center collapsible py-3 toggle  mb-0" data-bs-toggle="collapse" data-bs-target="#kt_job_5_2">
              <!--begin::Icon-->
              <div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                <!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
                <span class="svg-icon toggle-off svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black" />
                    <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Icon-->
              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">Bill To</h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Body-->
            <div id="kt_job_5_2" class="collapse show fs-6 ms-1">
              <!--begin::Text-->
              <div contenteditable class="bill_to_in mb-4 text-gray-600 fw-bold fs-6 ps-10">
                someone <br>
                Adress  <br>
                22850 Stadt
            </div>
            </div>
            <!--end::Content-->
            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>
          <!--end::Section-->
          <!--begin::Section-->
          <div class="m-0">
            <!--begin::Heading-->
            <div class="d-flex align-items-center collapsible py-3 toggle  mb-0" data-bs-toggle="collapse" data-bs-target="#shipped_to">
              <!--begin::Icon-->
              <div class="btn btn-sm btn-icon mw-20px btn-active-color-primary me-5">
                <!--begin::Svg Icon | path: icons/duotune/general/gen036.svg-->
                <span class="svg-icon toggle-on svg-icon-primary svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="6.0104" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen035.svg-->
                <span class="svg-icon toggle-off svg-icon-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="5" fill="black" />
                    <rect x="10.8891" y="17.8033" width="12" height="2" rx="1" transform="rotate(-90 10.8891 17.8033)" fill="black" />
                    <rect x="6.01041" y="10.9247" width="12" height="2" rx="1" fill="black" />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </div>
              <!--end::Icon-->
              <!--begin::Title-->
              <h4 class="text-gray-700 fw-bolder cursor-pointer mb-0">Ship To</h4>
              <!--end::Title-->
            </div>
            <!--end::Heading-->
            <!--begin::Body-->
            <div id="shipped_to" class="show collapse fs-6 ms-1">
              <!--begin::Text-->
              <div contenteditable class="shipped_to_in mb-4 text-gray-600 fw-bold fs-6 ps-10">
                someone <br>
                Adress  <br>
                22850 Stadt
            </div>
            </div>
            <!--end::Content-->
            <!--begin::Separator-->
            <div class="separator separator-dashed"></div>
            <!--end::Separator-->
          </div>
          <!--end::Section-->
          <!--begin::Section-->
          <!--end::Accordion-->
        </div>
        <!--end::Col-->
      </div>
      <!--end::Row-->
    </div>
    <!--end::Card body-->
  </div>
        <!--end::Input group-->
      </div>
      <!--begin::Step 1-->

      <!--begin::Step 1-->
      <div class="flex-column" data-kt-stepper-element="content">
        <div class="invoicelist-body">
          <table class="table table-striped gy-7 gs-7">
            <thead contenteditable="">
              <tr class="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
              <th><div style="padding-right: 10px;">No</div></th>
              <th style="width: 50%;">Item Description</th>
              <th style="width: 10%;">Quantity</th>
              <th style="width: 20%;">Unit Price</th>
              <th style="width: 20%;">Subtotal</th>
              </tr></thead>
            <tbody class="table">
            <tr>
              <td><a class="control removeRow" href="#">x</a> <span class="id" id="1" contenteditable="">1</span></td>
              <td class="item_description" id="item_description" contenteditable=""> <textarea class="form-control form-control form-control-solid description" data-kt-autosize="true"></textarea></td>
              <td class="amount"><input type="text" placeholder="quantity"></td>
              <td class="unit_price"><input type="text" placeholder="unit price"></td>
              <td class="subtotal" id="subtotal"></td>
            </tr>
            </tbody>
          </table>
          <a class="control newRow btn btn-sm btn-success" href="#">+ ADD ITEM</a>
          
          </div>
          <div class="invoicelist-footer">
          <table>
            <tr>
            <td><strong>TOTAL PRICE:</strong></td>
            <td id="total_price" class="total_in"></td>
            </tr>
          </table>
          </div>
      </div>
      <!--begin::Step 1-->

      <!--begin::Step 1-->
      <div  class=" flex-wrap fd-flex  flex-row-auto  mx-2 my-4" data-kt-stepper-element="content" style="
      position: relative;
      left: 10%;">
        <!--begin::Input group-->
        <div class="mb-10 mx-2 d-flex flex-wrap flex-row-auto">
          <label for="" class="form-label">Date </label>
          <input class="form-control date_in"  placeholder="Pick a date" id="kt_datepicker_1"/>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="mb-10 mx-2 d-flex flex-wrap flex-row-auto">
          <label for="" class="form-label">Payable To</label>
          <input class="form-control due_date_in"  placeholder="Pick a date" id="kt_datepicker_2"/>
        </div>
        <div style="width: 40%;" class="mb-10 mx-2 d-flex flex-wrap flex-row-auto">
          <label for="" class="form-label">Foot Note </label>
          <textarea class="form-control footnotes_in" placeholder="Eg VAT included, sign.............by........" id="foot_note_in"></textarea>
        </div>
        <div class="mb-10 mx-2 d-flex flex-wrap flex-row-auto">
          <label for="" class="form-label">Add logo</label>
          <input class="form-control logo_path_in" type="button"  value="select" placeholder="" id=""/>
        </div>
        <!--end::Input group-->
      </div>
      <!--begin::Step 1-->

      <!--begin::Step 1-->
      <div class="flex-column flex-center" data-kt-stepper-element="content">
        <!--begin::Input group-->
        <div class="fv-row mb-10">
          <!--begin::Label-->
          <label class="form-label d-flex align-items-center">
            <span class="required">Click to generate</span>
          </label>
          <!--end::Label-->

          <!--begin::Input-->
          <a href="#"  class="btn btn-sm btn-success me-2 update_home_view" data-bs-dismiss="modal">GENERATE</a>
          <!--end::Input-->
        </div>
        <!--end::Input group-->
      </div>
      <!--begin::Step 1-->
    </div>
    <!--end::Group-->

    <!--begin::Actions-->
    <div class="d-flex flex-stack">
      <!--begin::Wrapper-->
      <div class="me-2">
        <button type="button" class="btn btn-light btn-active-light-primary" data-kt-stepper-action="previous">
          Back
        </button>
      </div>
      <!--end::Wrapper-->
        
      <!--begin::Wrapper-->
      <div>
        <button type="button" class="btn btn-primary" data-kt-stepper-action="submit">
          <span class="indicator-label">
            Submit
          </span>
          <span class="indicator-progress">
            Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>

        <button type="button" class="btn btn-primary" data-kt-stepper-action="next">
          Continue
        </button>
      </div>
      <!--end::Wrapper-->
    </div>
    <!--end::Actions-->
  </form>
  <!--end::Form-->
</div>
<!--end::Stepper-->
  <!--end::Stepper-->
</div>
<!--end::Modal body-->
</div>`






class SerialNumberGenerator {
  constructor(storageFilePath) {
    this.storageFilePath = storageFilePath;
    this.counter = 0;
    this.loadCounter();
  }

  loadCounter() {
    try {
      // Attempt to read the counter value from the JSON file
      const data = fs.readFileSync(this.storageFilePath, 'utf8');
      const parsedData = JSON.parse(data);
      if (parsedData.hasOwnProperty('counter')) {
        this.counter = parsedData.counter;
      }
    } catch (err) {
      // Handle errors, e.g., if the file doesn't exist yet
      console.error('Error reading counter from storage:', err);
    }
  }

  saveCounter() {
    try {
      // Save the current counter value to the JSON file
      const dataToWrite = { counter: this.counter };
      fs.writeFileSync(this.storageFilePath, JSON.stringify(dataToWrite, null, 2), 'utf8');
    } catch (err) {
      // Handle errors, e.g., if the file couldn't be written
      console.error('Error writing counter to storage:', err);
    }
  }

  generateSerialNumber() {
    // Increment the counter
    this.counter++;

    // Save the updated counter value to storage
    this.saveCounter();

    // Convert the counter to a formatted string
    const formattedCounter = this.counter.toString().padStart(5, '0');

    // Generate the serial number
    const serialNumber = `#DOC${formattedCounter}`;

    return serialNumber;
  }
}



function stepper() {
  var element = document.querySelector("#kt_stepper_example_clickable");

  // Initialize Stepper
  var stepper = new KTStepper(element);
  // Handle navigation click
  stepper.on("kt.stepper.click", function (stepper) {
    stepper.goTo(stepper.getClickedStepIndex()); // go to clicked step
  });

  // Handle next step
  stepper.on("kt.stepper.next", function (stepper) {
    stepper.goNext(); // go next step
  });

  // Handle previous step
  stepper.on("kt.stepper.previous", function (stepper) {
    stepper.goPrevious(); // go previous step
  });
}

function dateHandler() {
  $("#kt_datepicker_1").flatpickr({
    dateFormat: "d-m-Y",
    defaultDate: "today",
  });
  $("#kt_datepicker_2").flatpickr({
    dateFormat: "d-m-Y",
  });
}

function generateRandomSerialNumber() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const serialLength = 8;
  let serialNumber = "#";

  for (let i = 0; i < serialLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    serialNumber += characters[randomIndex];
  }

  serialNumber;
  $("#serial_no_in").val(serialNumber);

  return serialNumber;
}

function getTemplateFiles(templatePath) {
  const templateFiles = [];

  try {
    const files = fs.readdirSync(templatePath);

    files.forEach((file) => {
      const filePath = path.join(templatePath, file);
      const fileStat = fs.statSync(filePath);

      if (fileStat.isFile() && file.endsWith(".docx")) {
        templateFiles.push(filePath);
      }
    });

    return templateFiles;
  } catch (error) {
    console.error("Error while reading directory:", error);
    return [];
  }
}

// Function to dynamically populate template options
function populateTemplates(templateFiles) {
  const templateTable = $(".temp_table");
  let rows = "";
  templateFiles.forEach((templateFile, index) => {
    const templateName = path.basename(templateFile, ".docx");

    const templateRow = `
      <div class="d-flex align-items-center bg-light-success rounded p-5 mb-7">
        <!--begin::Icon-->
        <span class="svg-icon text-success me-5">
            <i class="ki-duotone ki-file-added fs-1 text-success"><span class="path1"></span><span class="path2"></span></i>                                    
        </span>
        <!--end::Icon-->

        <!--begin::Title-->
        <div class="flex-grow-1 me-2">
            <a href="#" class="fw-bold text-gray-800 text-hover-primary fs-6">${templateName}</a>
        </div>
        <!--end::Title-->

        <!--begin::Lable-->
        <span class="fw-bold text-success py-1"><input type="radio" class="radio" name="options" value="${templateName}" ></span>
        <!--end::Lable-->
    </div>
      `;

    rows = rows + templateRow;
  });
  templateTable.html(rows);
}

function populateTemplateOptions(templatePath) {
  // Example templatePath, modify as needed

  // Call getTemplateFiles to retrieve available template files
  const templateFiles = getTemplateFiles(templatePath);

  // Populate the template options in the HTML
  populateTemplates(templateFiles);
}


stepper();
dateHandler();
