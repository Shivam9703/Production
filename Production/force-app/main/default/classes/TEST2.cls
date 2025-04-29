public with sharing class TEST2 {
    public static List<Acount> getAccount(){
        Integer check = 3;
        String str = 'Hello';
        return [SELECT Id, Name FROM Account];
    }
}