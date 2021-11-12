public with sharing class ContactController {
  @AuraEnabled(cacheable=true)
  public static List<Contact> getContactList() {
    return [
      SELECT Id, FirstName, LastName, Title, Phone, Email, DoNotCall
      FROM Contact
      LIMIT 10
    ];
  }
}
