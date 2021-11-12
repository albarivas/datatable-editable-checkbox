import { api, LightningElement } from "lwc";

export default class CustomCheckbox extends LightningElement {
  @api recordId;

  submitForm() {
    this.template.querySelector("lightning-record-edit-form").submit();
  }
}
