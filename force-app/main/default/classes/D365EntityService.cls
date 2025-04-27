public abstract class D365EntityService {
	public static String recordId;
    public static String officeCode;
    
    public static Http sendRequest(String requestBody){
        //make callout to send request 
        Http response = new Http();
        System.debug('D365EntityService SendRequest');
        System.debug('D365EntityService SendRequest requestBody' + requestBody);
        System.debug('D365EntityService SendRequest recordId' + recordId);
        System.debug('D365EntityService SendRequest officeCode' + officeCode);
        System.debug('Return D365EntityService SendRequest');
        return response;
    }
    
    public abstract void createCall();
    
    public abstract void updateCall();
    
    public abstract String generateRequest();
    
    public abstract void processResponse(String responseBody);
    
    public static void logRequest(String responseBody){
        //Code to log request status
        System.debug('D365EntityService logRequest');
        System.debug('D365EntityService logRequest responseBody' + responseBody);
    }
}