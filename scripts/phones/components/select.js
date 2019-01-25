export default class Select{
    constructor({element}) {
        this._element = element;
        this._render();
}

    _render() {
        this._element.innerHTML = `
    
    <p>
        Sort
        by:
            <select data-element = "select" >
             <option value = "age" > Newest </option>
             <option value = "name" > Alphabetical </option>
            </select>
            </p>`
    }
}