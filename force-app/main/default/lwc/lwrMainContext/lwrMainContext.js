import { LightningElement,api , wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners } from 'c/pubsub';

export default class LwrMainContext extends LightningElement {
    headerValue = '' ;
    @wire(CurrentPageReference) pageRef;

    // This method will run once the component is rendered on DOM and will add the listener.
    connectedCallback(){
        registerListener('sendNameEvent', this.setCaptureText, this);
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }
    
    setCaptureText(objPayload){
        this.headerValue = objPayload;
    }


}