import { LightningElement , wire} from 'lwc';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class LwrNavBarContext extends LightningElement {
    name ;
    @wire(CurrentPageReference) objpageReference;

    handleClick(event){
       this.name = event.target.name ;
       fireEvent(this.objpageReference, 'sendNameEvent', this.name);
    }
}