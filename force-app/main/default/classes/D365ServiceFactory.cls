public class D365ServiceFactory {
    public D365EntityService getInstance(String entityType){
        if (entityType == null || String.isBlank(entityType)){
            return null;
        }
        switch on entityType {
            when 'Client' {
                return new D365ClientService();
            }	
            when 'Vendor' {
                return new D365VendorService();
            }
            when 'Activity Code' {
                return new D365ActivityCodeService();
            }
            when else {
                return null; // Throw Exception
            }
        }
    }
}