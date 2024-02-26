import { LightningElement } from 'lwc';
import getAllContacts from '@salesforce/apex/ContactUtility.getNContacts';

export default class GetContactsViaApex extends LightningElement {

numberOfRecords;
contacts;

error;
numberHandler(event){
    this.numberOfRecords = event.target.value;
    this.getContacts();

}

getContacts(){
    getAllContacts({numberofcontacts : this.numberOfRecords}).then(Response => {this.contacts = Response}).catch
    (Error => {
        console.log('Error in getting contacts');
        this.error=Error});



}
}