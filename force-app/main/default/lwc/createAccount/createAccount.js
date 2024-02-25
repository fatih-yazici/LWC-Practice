import { LightningElement } from 'lwc';

export default class CreateAccount extends LightningElement {
        successMessage;

        successHandler(event){
            this.successMessage = 'Account Created Successfully with Id: '+event.detail.id;
        }



}