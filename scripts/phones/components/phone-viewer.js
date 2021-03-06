import Component from "../../component.js";

export default class PhoneViewer extends Component {
    constructor({element, onClickImg, onClickAdd}) {
        super({element});
        this.initEvents();
        this._onClickAdd =onClickAdd;
        this._onClickImg = onClickImg;
    }

    initEvents() {
        this._element.addEventListener('click', ev => {
            this._onBackClick(ev);
            this._onSelectImg(ev);
            this._onClickButtonAdd(ev);
        });
    }

    _onBackClick(ev) {
        const buttonBack = ev.target.closest('[data-element="button"]');
        if (!buttonBack) {
            return;
        }
        let event = new Event("hide", {bubbles: true, cancelable: false});
        this._element.dispatchEvent(event);
    }


    _onSelectImg(ev) {
        const img = ev.target.closest('img');
        if (!img) {
            return;
        }
        this._onClickImg(img);
    }

    _onClickButtonAdd(ev) {
        const buttonAdd = ev.target.closest('[data-button="add"]');
        if (!buttonAdd) {
            return;
        }
        this._onClickAdd(buttonAdd.dataset.phoneId)
    }

    show(phone) {
        this._render(phone);
        super.show();
    }

    _render(phone) {
        this._element.innerHTML =
            `<img alt = '' data-item="large-img" class="phone" src="${phone.images[0]}">
      <button data-element="button">Back</button>
      <button data-phone-id="${phone.id}" data-button="add">Add to basket</button>
  
      <h1>${phone.id}</h1>
  
      <p>${phone.description}</p>
  
      <ul class="phone-thumbs">
      ${phone.images.map(i => {
            return ` <li><img alt="" src="${i}"</li>`
        }).join('')}
      </ul>`;
    }
};
