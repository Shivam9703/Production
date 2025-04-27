import { LightningElement, api, track, wire } from 'lwc';
import getRelatedDetail from '@salesforce/apex/TestRelatedDetailController.getRelatedDetail';
export default class TestReatedDetail extends LightningElement {
		
		@track details;
		@api recordId;
		
		
		@wire(getRelatedDetail,{parentRecordId: '$recordId'}) 
    WireRecords({error, data}){
        if(data){
						console.log('Data -> ' + JSON.stringify(data));
            this.details = data;
        }else{
            this.details = undefined;
        }
    }
		
		/*connectedCallback(){
				console.log('recordId ->' + this.recordId);
				getRelatedDetail({parentRecordId: this.recordId})
        .then((result) => {
            console.log(result);
						this.details = result;
        })
        .catch((error) => {
            console.log('In connected call back error....');
            this.error = error;
            console.log('Error is', this.error); 
        });
		}*/
		
}