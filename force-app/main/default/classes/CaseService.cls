public class CaseService {
    public static void closeCases (Set<Id>caseIds , String closeReason){
 
 
    List<Case> caseList = [Select Id ,Status, Reason FROM Case where Id IN :caseIds ];
 
 
    if(caseList.size()>0){
 
        for(Case caseRecord : caseList){
 
            caseRecord.Reason = closeReason;
            caseRecord.Status = 'Closed';
 
        }
 
 
        Database.update(caseList, false);
    }
 
}
}