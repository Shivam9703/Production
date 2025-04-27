public class D365VendorService extends D365EntityService {
    
    public override void createCall(){
        System.debug('D365VendorService createCall');
        String requestBody = generateRequest();
        Http response = sendRequest(requestBody);
        processResponse(response.toString());
        logRequest(response.toString());
    }
    
    public override void updateCall(){
        System.debug('D365VendorService updateCall');
    }
    
    public override String generateRequest(){
        System.debug('D365VendorService generateRequest');
        return 'Mock Request';
    }
    
    public override void processResponse( String responseBody ){
        System.debug('D365VendorService processResponse');
        System.debug('D365VendorService processResponse responseBody' + responseBody);
    }
}