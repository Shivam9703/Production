public with sharing class Test {

    @AuraEnabled
    public static List<Test__c> test1(){
        List<Test__c> tests = new List<Test__c>();
        tests = [Select Id,Name,Test_Type__c from Test__c With SECURITY_ENFORCED limit 10];
        //if(Schema.sObjectType.Contact.isAccessible()){
			//tests = [Select Id,Name,Test_Type__c from Test__c limit 10];
        //}
        System.debug('tests -> ' +tests);
        return tests;
    }
}