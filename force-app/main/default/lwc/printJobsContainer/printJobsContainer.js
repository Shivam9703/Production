import { LightningElement, wire } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import downloadjs from '@salesforce/resourceUrl/downloadjs';
import downloadPDF from '@salesforce/apex/PrintJobPDFController.getPdfFileAsBase64String';

export default class PrintJobsContainer extends LightningElement {
    boolShowSpinner = false;
    pdfString;
    generatePdf(){
        this.boolShowSpinner = true;
        downloadPDF({}).then(response => {
            console.log('response' + JSON.stringify(response));
            this.boolShowSpinner = false;
            var strFile = "data:application/pdf;base64,"+response;
            //window.download(strFile, "sample.pdf", "application/pdf");
						//window.open(response[1]);
						window.print();
        }).catch(error => {
            console.error(error);
        });
    }
    renderedCallback() {
        loadScript(this, downloadjs)
        .then(() => console.log('Loaded download.js'))
        .catch(error => console.log(error));
    }        
}