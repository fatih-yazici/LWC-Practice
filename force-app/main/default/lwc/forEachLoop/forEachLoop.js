import { LightningElement } from 'lwc';

export default class ForEachLoop extends LightningElement {

    contacts = [

        {
            Id: '1',
            Name: 'Adam Rex',
            Title : 'Python Developer',
            Phone: '123456'
        },
        {
            Id: '2',
            Name: 'Ava Mama',
            Title : 'Java Developer',
            Phone: '222222'
        },
        {
            Id: '3',
            Name: 'Tom Bob',
            Title : 'Salesforce Developer',
            Phone: '33333'
        }
    ]
}