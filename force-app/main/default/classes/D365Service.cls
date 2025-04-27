public class D365Service {
	public String entityType;
    public String entityId;
    public String officeCode;
    public String action;
    
    public D365Service(String entityType, String entityId, String officeCode, String action){
        this.entityType = entityType;
        this.entityId = entityId;
        this.officeCode = officeCode;
        this.action = action;
    }
    
    public void process(){
		D365ServiceFactory serviceFactory = new D365ServiceFactory();
		D365EntityService service = serviceFactory.getInstance(this.entityType);
        D365EntityService.officeCode = this.officeCode;
        D365EntityService.recordId = this.entityId;
        if(this.action == 'Create'){
            service.createCall();
        }else if( this.action == 'Update'){
            service.updateCall();
        }
    }
}