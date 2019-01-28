export default class ShoppingCart {
    constructor({element}) {
        this._element = element;
        this.item ={};
        this._element.addEventListener('click', ev => {
            this._onClickButtonDelete(ev);
        });
    };

    addItem(id) {
        if(this.item[id]){
            this.item[id]++
        }else {
            this.item[id] = 1;
        }
        this._render(Object.keys(this.item));
    }

    deleteItem(id) {
        if(this.item[id] !== 1){
           this.item[id]--
        }else {
          delete  this.item[id];
        }
        this._render(Object.keys(this.item));
    }

    _onClickButtonDelete(ev) {
        const buttonAdd = ev.target.closest('[data-button="delete"]');
        if (!buttonAdd) {
            return;
        }
        this.deleteItem(buttonAdd.dataset.phoneId);
    }

    _render(obj) {
        this._element.innerHTML = `
        <p>Shopping Cart</p>
        <ul>
           ${obj.map(i =>
         `<li class = "shopping-item">${i} (${this.item[i]}) <button data-phone-id="${i}" data-button="delete">x</button></li>`)}
        </ul>`
    }
};