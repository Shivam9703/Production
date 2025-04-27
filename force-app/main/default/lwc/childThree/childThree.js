import { LightningElement, api } from 'lwc';

export default class ChildThree extends LightningElement {
  @api childThreeValue='';
  
  handleClick(){
    console.log('event fired from child 3');
    this.childThreeValue = 'Data from childThree';
    const event = new CustomEvent('childthreedatachange', {
      detail: { message: 'Data from childThree' },
      bubbles: true,
      composed: true // Allows the event to cross shadow DOM boundaries
    });
    this.dispatchEvent(event);
  }
}