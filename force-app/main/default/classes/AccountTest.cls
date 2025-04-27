@isTest(SeeAllData = true)
public class AccountTest {

    @isTest
    public static void testAccount(){
        Account acc = new Account();
        acc.Name = 'Test';
        insert acc;
        
        List<Account> accList = [Select Id,Name from Account where Name = 'Test'];
        System.debug('accList -> ' + accList.size());
        
        delete accList;
        
        List<Account> accListAfterDelete = [Select Id,Name from Account where Name = 'Test'];
        System.debug('accListAfterDelete -> ' + accListAfterDelete.size());
    }
}