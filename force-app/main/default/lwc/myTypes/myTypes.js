import LightningDatatable from "lightning/datatable";
import customCheckboxTemplate from "./customCheckboxTemplate.html";

export default class MyTypes extends LightningDatatable {
  static customTypes = {
    customCheckbox: {
      template: customCheckboxTemplate
    }
  };
}
