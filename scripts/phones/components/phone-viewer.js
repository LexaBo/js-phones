import Component from "../../component.js";

export default class PhoneViewer extends Component {
    constructor({element}) {
        super({element});
        this._element.addEventListener('click', ev => {
            this._onBackClick(ev)
        });
    }

    _onBackClick(ev) {
        const buttonBack = ev.target.closest('[data-element="button"]');
        if (!buttonBack) {
            return;
        }
        super.hide();
        let event = new Event("hide", {bubbles: true, cancelable: false});
        this._element.dispatchEvent(event);
    }



    show(phone) {
        this._render(phone);
        super.show();
    }

    _render(phone) {
        this._element.innerHTML = `
            
            <img class="phone" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
      <button data-element="button">Back</button>
      <button>Add to basket</button>
  
      <h1>Motorola XOOM™ with Wi-Fi</h1>
  
      <p>Motorola XOOM with Wi-Fi has a super-powerful dual-core processor and Android™ 3.0 (Honeycomb) — the Android platform designed specifically for tablets. With its 10.1-inch HD widescreen display, you’ll enjoy HD video in a thin, light, powerful and upgradeable tablet.</p>
  
      <ul class="phone-thumbs">
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.0.jpg">
        </li>
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.1.jpg">
        </li>
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.2.jpg">
        </li>
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.3.jpg">
        </li>
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.4.jpg">
        </li>
        <li>
          <img src="img/phones/motorola-xoom-with-wi-fi.5.jpg">
        </li>
      </ul>`;
    }
}
