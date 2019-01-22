import PhoneCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import PhoneService from "./services/phone-service.js";

export default class PhonesPage {
    constructor({element}) {
        this._element = element;
        this._render();
        this._initViewer();
        this._initCatalog();
    }

    _initCatalog() {
        this._catalog = new PhoneCatalog({
            element: this._element.querySelector('[data-component="phone-catalog"]'),
            phones: PhoneService.getPhones(),
            onPhoneSelected: id => {
                this._catalog.hide();
                let promise = PhoneService.getPhone(id);

                promise.then((phone) => {
                    this._viewer.show(phone);
                });
            }
        });
    }

    _initViewer() {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]'),
            onClickImg: elem => {
                this._element.querySelector('[data-item="large-img"]').src = elem.src;
            }
    });
        this._element.addEventListener('hide', ev => {
            this._catalog.show();
            this._viewer.hide();
        });
    }

    _render() {
        this._element.innerHTML = `
            <div class="row">
              <!--Sidebar-->
              <div class="col-md-2">
                                       <section>
                                       <p>
                                       Search:
                                       <input>
                                       </p>
                                       
                                       <p>
                                       Sort by:
                                       <select>
                                       <option value="name">Alphabetical</option>
                                       <option value="age">Newest</option>
                                       </select>
                                       </p>
                                       </section>
                                       
                                       <section>
                                       <p>Shopping Cart</p>
                                       <ul>
                                       <li>Phone 1</li>
                                       <li>Phone 2</li>
                                       <li>Phone 3</li>
                                       </ul>
                                       </section>
                                       </div>

              <!--Main content-->
              <div class="col-md-10">
                <div data-component="phone-catalog"></div>
                <div data-component="phone-viewer"></div>
              </div>
            </div>`;
    }
}
