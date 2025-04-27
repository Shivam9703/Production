import { LightningElement, api } from 'lwc';

export default class ChildOne extends LightningElement {
  // @api childOneValue='';
  
  // handleClick(){
  //   this.childOneValue = 'Data from childOne';
  //   const event = new CustomEvent('childonedatachange', {
  //     detail: { message: 'Data from childOne' },
  //     bubbles: true,
  //     composed: true // Allows the event to cross shadow DOM boundaries
  //   });
  //   this.dispatchEvent(event);
  // }
}