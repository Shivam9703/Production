public class D365ClientService extends D365EntityService {
	
    public override void createCall(){
        System.debug('D365ClientService createCall');
        String requestBody = generateRequest();
        Http response = sendRequest(requestBody);
        processResponse(response.toString());
        logRequest(response.toString());
    }
    
    public override void updateCall(){
        System.debug('D365ClientService updateCall');
    }
    
    public override String generateRequest(){
        System.debug('D365ClientService generateRequest');
        return 'Mock Request';
    }
    
    public override void processResponse( String responseBody ){
        System.debug('D365ClientService processResponse');
        System.debug('D365ClientService processResponse responseBody' + responseBody);
    }
}