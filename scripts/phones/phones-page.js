import PhoneCatalog from './components/phone-catalog.js';
import PhoneViewer from './components/phone-viewer.js';
import PhoneService from "./services/phone-service.js";
import ShoppingCart from './components/shopping-cart.js';
import Select from './components/select.js';
import Search from './components/search.js';

export default class PhonesPage {
    constructor({element}) {
        this._element = element;
        this._render();
        this._initSearch();
        this._initSelect();
        this._initViewer();
        this._initCatalog();
        this._initShoppingCart();
    }

    _initCatalog() {
        this._catalog = new PhoneCatalog({
            element: this._element.querySelector('[data-component="phone-catalog"]'),
            phones: PhoneService.getPhones(document.querySelector('[data-element="select"]').value),
            onPhoneSelected: id => {
                this._catalog.hide();
                let promise = PhoneService.getPhone(id);

                promise.then((phone) => {
                    this._viewer.show(phone);
                });
            },

            onClickAdd: id => {
                this._shoppingCart.addItem(id);
            }
        });
    }

    _initViewer() {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]'),
            onClickImg: elem => {
                this._element.querySelector('[data-item="large-img"]').src = elem.src;
            },

            onClickAdd: id => {
                this._shoppingCart.addItem(id);
            }
    });
        this._element.addEventListener('hide', ev => {
            this._catalog.show();
            this._viewer.hide();
        });
    }

    _initShoppingCart() {
        this._shoppingCart = new ShoppingCart({
            element: this._element.querySelector('[data-component="shopping-cart"]'),
            onClickDelete: id => {
                this._shoppingCart.deleteItem(id);
            }
        });
    }

    _initSelect() {
        this._select = new Select({
            element: this._element.querySelector('[data-component="select"]'),
        });

        this._element.addEventListener("change", ev => {
            this._catalog = new PhoneCatalog({
                element: this._element.querySelector('[data-component="phone-catalog"]'),
                phones: PhoneService.getPhones(document.querySelector('[data-element="select"]').value),
            });
        });
    }

    _initSearch() {
        this._search = new Search({
            element: this._element.querySelector('[data-component="search"]'),
        });
        this._element.addEventListener("input", ev => {
            if(document.querySelector('input').value === ''){
                this._catalog = new PhoneCatalog({
                    element: this._element.querySelector('[data-component="phone-catalog"]'),
                    phones: PhoneService.getPhones(document.querySelector('[data-element="select"]').value),
                });
            }else {
                this._catalog = new PhoneCatalog({
                    element: this._element.querySelector('[data-component="phone-catalog"]'),
                    phones: PhoneService.getPhones(document.querySelector('input').value),
                });
            }
        });
    }

    _render() {
        this._element.innerHTML = `
            <div class="row">
              <!--Sidebar-->
              <div class="col-md-2">
                                       <section>
                                        <div data-component="search"></div>
                                        <div data-component="select"></div>
                                       </section>
                                       <section>
                                       <div data-component="shopping-cart">
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
