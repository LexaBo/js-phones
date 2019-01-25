import Component from "../../component.js";

export default class Search extends Component{
    constructor({element}) {
        super({element});
        this._render();
    }

    _render() {
        this._element.innerHTML = `  
   <p>
    Search:
    <input>
   </p>`
    }
}