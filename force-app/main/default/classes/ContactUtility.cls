public with sharing class ContactUtility {

    @auraEnabled( cacheable = true)
    public static List<Contact> getNContacts(Integer numberofcontacts){
        return [SELECT Id, FirstName, LastName, Phone, Email FROM Contact LIMIT :numberofcontacts];
    }
}