public class ContentfullRestCallout {
    
    Public Class ResponseWrapper{
        @AuraEnabled public Sys sys;
		@AuraEnabled public Integer total;
		@AuraEnabled public Integer skip;
		@AuraEnabled public Integer lmt;
		@AuraEnabled public Items[] items;
		@AuraEnabled public Includes includes;
    }
    
	class Sys {
		@AuraEnabled public String id;	
		@AuraEnabled public String type;	
		@AuraEnabled public String linkType;
		@AuraEnabled public Integer revision;	
		@AuraEnabled public String locale;
	}
	class Items {
		@AuraEnabled public Metadata metadata;
		@AuraEnabled public Sys sys;
		@AuraEnabled public Fields fields;
	}
	class Metadata {
		@AuraEnabled public Tags[] tags;
	}
	class Tags {
	}
	class Space {
		@AuraEnabled public Sys sys;
	}
	class Environment {
		@AuraEnabled public Sys sys;
	}
	class ContentType {
		@AuraEnabled public Sys sys;
	}
	class Fields {
		@AuraEnabled public String title;
		@AuraEnabled public Images[] images;
		@AuraEnabled public String body;
		@AuraEnabled public String description;	
		@AuraEnabled public File file;
	}
	class Images {
		@AuraEnabled public Sys sys;
	}
	class Includes {
		@AuraEnabled public Asset[] Asset;
	}
	class Asset {
		@AuraEnabled public Metadata metadata;
		@AuraEnabled public Sys sys;
		@AuraEnabled public Fields fields;
	}
	class File {
		@AuraEnabled public String url;	
		@AuraEnabled public Details details;
		@AuraEnabled public String fileName;	
		@AuraEnabled public String contentType;	
	}
	class Details {
		@AuraEnabled public Integer size;	
		@AuraEnabled public Image image;
	}
	class Image {
		@AuraEnabled public Integer width;	
		@AuraEnabled public Integer height;	
	}
    
    @AuraEnabled
    public static ResponseWrapper makeCallout(){
        ResponseWrapper responseWrp = new ResponseWrapper();
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://cdn.contentful.com/spaces/tq5y63v89g2x/entries?access_token=h-tyh4498Yrvoto7E1wIvYQ5zcBGTuKQCdXvJv_Wqxk');
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        System.debug('Response Status ->' + response.getStatusCode());
        if(response.getStatusCode() == 200) {
            System.debug('Response Body ->' + response.getBody());
            Map<String, Object> results = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            System.debug('results -> ' + results);
            responseWrp = (ResponseWrapper)JSON.deserialize(response.getBody().replace('limit','lmt'), ResponseWrapper.class);
			System.debug('responseWrp -> ' + responseWrp);
        }
        return responseWrp;
    }
    
}