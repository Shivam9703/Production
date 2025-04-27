public class TestRelatedDetailController {

    @AuraEnabled(cacheable=true)
    public static List<Test_Child__c> getRelatedDetail( String parentRecordId ){
        return [SELECT Id, Name from Test_Child__c where TestLookup__c  =: parentRecordId];
    }
    
}