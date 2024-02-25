import { LightningElement } from 'lwc';

export default class ViewMessageText extends LightningElement {

    ilkValue;
    ikinciValue;


    ilkKutuHandler(event){
        this.ilkValue = event.target.value;
    
    }

    ikinciKutuHandler(event){
        this.ikinciValue = event.target. value;
    }
}