@RestResource(urlMapping='/case/*/close')
global with sharing class CaseCloseResource {
    @HttpPost
    global static void closeCase (String reason) {
        
        RestRequest request = RestContext.request;
        String caseId = request.requestURI.substringBetween('case/','/close');
        
        system.debug('caseId**'+caseId);
        
        Set<Id> caseIds = new Set<Id>();
        caseIds.add(Id.valueOf(caseId));
        CaseService.closeCases(caseIds,reason);
        
    }
}