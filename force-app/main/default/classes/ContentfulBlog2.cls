public class ContentfulBlog2 {
    
    public class Blog2Wrapper{
        @AuraEnabled public cls_sys sys;
        @AuraEnabled public Integer total;	
        @AuraEnabled public Integer skip;	
        @AuraEnabled public Integer lmt;	
        @AuraEnabled public cls_items[] items;
        @AuraEnabled public cls_includes includes;
        
    }
    class cls_sys {
        @AuraEnabled public String id;	
        @AuraEnabled public String type;	
        @AuraEnabled public String linkType;	
        @AuraEnabled public Integer revision;
        @AuraEnabled public String locale;
    }
    class cls_items {
        @AuraEnabled public cls_metadata metadata;
        @AuraEnabled public cls_sys sys;
        @AuraEnabled public cls_fields fields;
    }
    class cls_metadata {
        @AuraEnabled public cls_tags[] tags;
    }
    class cls_tags {
    }
    class cls_space {
        @AuraEnabled public cls_sys sys;
    }
    class cls_environment {
        @AuraEnabled public cls_sys sys;
    }
    class cls_contentType {
        @AuraEnabled public cls_sys sys;
    }
    class cls_fields {
        @AuraEnabled public String title;	
        @AuraEnabled public cls_body body;
        @AuraEnabled public String description;	
        @AuraEnabled public cls_file file;
    }
    class cls_body {
        @AuraEnabled public String nodeType;	
        @AuraEnabled public cls_data data;
        @AuraEnabled public cls_content[] content;
    }
    class cls_data {
        @AuraEnabled public cls_target target;
    }
    class cls_content {
        @AuraEnabled public cls_content[] content;
        @AuraEnabled public String nodeType;	
		@AuraEnabled public String value;	
		@AuraEnabled public cls_marks[] marks;
		@AuraEnabled public cls_data data;
    }
    class cls_marks {
		@AuraEnabled public String type;	
	}
    class cls_target {
        @AuraEnabled public cls_sys sys;
    }
    class cls_includes {
        @AuraEnabled public cls_Asset[] Asset;
    }
    class cls_Asset {
        @AuraEnabled public cls_metadata metadata;
        @AuraEnabled public cls_sys sys;
        @AuraEnabled public cls_fields fields;
    }
    class cls_file {
        @AuraEnabled public String url;	////images.ctfassets.net/tq5y63v89g2x/1DQ5lKtogvE6WS3vJz4QKc/286120fb38dcc59d753493efa0aeff95/pasted_image_0__1_.png
        @AuraEnabled public cls_details details;
        @AuraEnabled public String fileName;	//pasted image 0 (1).png
        @AuraEnabled public String contentType;	//image/png
    }
    class cls_details {
        @AuraEnabled public Integer size;	//37980
        @AuraEnabled public cls_image image;
    }
    class cls_image {
        @AuraEnabled public Integer width;	//1047
        @AuraEnabled public Integer height;	//456
    }
    
    @AuraEnabled
    public static Blog2Wrapper makeCallout(){
        Blog2Wrapper responseWrp = new Blog2Wrapper();
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
            responseWrp = (Blog2Wrapper)JSON.deserialize(response.getBody().replace('limit','lmt'), Blog2Wrapper.class);
            System.debug('responseWrp -> ' + responseWrp);
        }
        return responseWrp;
    }
    
    
}