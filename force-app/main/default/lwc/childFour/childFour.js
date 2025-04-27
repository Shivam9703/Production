import { LightningElement,api } from 'lwc';

export default class ChildFour extends LightningElement {
  @api recordFromChildThree='';

  // handleClick(){
  //   this.childFourValue = 'Data from childFour';
  //   const event = new CustomEvent('childFourdatachange', {
  //     detail: { message: 'Data from childFour' },
  //     bubbles: true,
  //     composed: true // Allows the event to cross shadow DOM boundaries
  //   });
  //   this.dispatchEvent(event);
  // }
}