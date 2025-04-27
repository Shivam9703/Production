public with sharing class TEST2 {
    public static List<Acount> getAccount(){
        return [SELECT Id, Name FROM Account];
    }
}