import { LightningElement, wire } from "lwc";
import getContactList from "@salesforce/apex/ContactController.getContactList";

const columns = [
  { label: "First Name", fieldName: "FirstName" },
  { label: "Last Name", fieldName: "LastName" },
  { label: "Title", fieldName: "Title" },
  { label: "Phone", fieldName: "Phone", type: "phone" },
  { label: "Email", fieldName: "Email", type: "email" },
  {
    label: "Do not call",
    fieldName: "Id",
    type: "customCheckbox"
  }
];
export default class DatatableCheckboxEdit extends LightningElement {
  error;
  columns = columns;

  @wire(getContactList)
  contacts;
}
