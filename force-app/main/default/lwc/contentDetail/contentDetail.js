import { LightningElement, api } from 'lwc';

export default class ContentDetail extends LightningElement {
    @api richtext;
    connectedCallback(){
        console.log('in content detail ->' + this.richtext);
    }
}