import { LightningElement, track } from 'lwc';
import test1 from '@salesforce/apex/Test.test1';

export default class Unittest extends LightningElement {
    @track records;
    @track error;
    connectedCallback() {
        test1()
            .then(result => {
                console.log('in Unittest result' + JSON.stringify(result));
                this.records = JSON.stringify(result);
            })
            .catch(error => {
                console.log('in Unittest error' + JSON.stringify(error));
                this.records = 'error';
                this.error = error;
            });
    }
}