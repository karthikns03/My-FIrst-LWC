import { LightningElement, track } from "lwc";

export default class YourComponent extends LightningElement {
  @track isLoaded = false;

  renderedCallback() {
    if (!this.isLoaded) {
      this.isLoaded = true;
      const divs = this.template.querySelectorAll("div");
      divs.forEach((div) => div.classList.add("loaded"));
    }
  }
}
