public class D365ActivityCodeService extends D365ItemService {
    
    public override void createCall(){
        System.debug('D365ActivityCodeService createCall');
        String requestBody = generateRequest();
        Http response = sendRequest(requestBody);
        processResponse(response.toString());
        logRequest(response.toString());
    }
    
    public override void updateCall(){
        System.debug('D365ActivityCodeService updateCall');
    }
    
    public override String generateRequest(){
        System.debug('D365ActivityCodeService generateRequest');
        return 'Mock Request';
    }
    
    public override void processResponse( String responseBody ){
        System.debug('D365ActivityCodeService processResponse');
        System.debug('D365ActivityCodeService processResponse responseBody' + responseBody);
    }
}