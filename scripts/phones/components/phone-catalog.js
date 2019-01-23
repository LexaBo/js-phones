import Component from '../../component.js';

export default class PhoneCatalog extends Component {
    constructor({element, phones, onPhoneSelected, onClickAdd}) {
        super({element});
        this._phones = phones;
        this._onPhoneSelected = onPhoneSelected;
        this._onClickAdd = onClickAdd;
        this._render();
        this._element.addEventListener('click', ev => {
            this._onPhoneClick(ev);
            this._onClickButtonAdd(ev);
        });
    }

    _onPhoneClick(ev) {
        ev.preventDefault();
        const phoneElement = ev.target.closest('[data-link="link"]');
        if (!phoneElement) {
            return;
        }

        this._onPhoneSelected(phoneElement.dataset.phoneId)
    }

    _onClickButtonAdd(ev) {
        const buttonAdd = ev.target.closest('[data-button="add"]');
        if (!buttonAdd) {
            return;
        }
       this._onClickAdd(buttonAdd.dataset.phoneId)
    }

    _render() {
        this._element.innerHTML = `
        <ul class="phones">
            ${this._phones.map(phone => `
                <li class="thumbnail"
                    data-element="phone">
                    <a data-link="link" data-phone-id="${phone.id}" href="#!/phones/${phone.id}" class="thumb">
                      <img alt="${phone.name}" src="${phone.imageUrl}">
                    </a>
                    
                    <div class="phones__btn-buy-wrapper">
                        <a data-phone-id="${phone.id}" data-button="add" class="btn btn-success">
                            Add
                        </a>
                    </div>
                    
                    <a data-link="link" data-phone-id="${phone.id}" href="#!/phones/${phone.id}">${phone.name}</a>
                    
                    <p>${phone.snippet}</p>
                </li>`).join('')}
        </ul>`;
    }
}
