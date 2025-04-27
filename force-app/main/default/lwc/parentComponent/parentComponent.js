import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
  handlechildThreeEvent(event){
    console.log('in handle event in parent cmp');
    const dataFromB = event.detail.message;
        // Pass the data to F using a public property or another event
    //this.template.querySelector('c-child-four').recordFromChildThree = dataFromB;
  }
}