public with sharing class ContentfulController {

    @AuraEnabled
    public static ContentfullRestCallout.ResponseWrapper getContentfulResource(){
        ContentfullRestCallout.ResponseWrapper responseWrp = new ContentfullRestCallout.ResponseWrapper();
        responseWrp = ContentfullRestCallout.makeCallout();
        System.debug('In ContentfulController -> ' + responseWrp);
        return responseWrp;
    }
}