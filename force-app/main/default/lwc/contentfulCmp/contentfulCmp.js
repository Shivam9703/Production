import { LightningElement } from 'lwc';
import getContentfulResource from '@salesforce/apex/ContentfulController.getContentfulResource';
import { NavigationMixin } from 'lightning/navigation';
export default class ContentfulCmp extends NavigationMixin(LightningElement) {
    content;
    blogs = [];
    items = [];
    richtext;
    itemMap = new Map();
    assets = [];
    assetIdVsUrl = new Map();
    response;
 
    async connectedCallback(){
        /*const calloutURL = "https://cdn.contentful.com/spaces/tq5y63v89g2x/entries?access_token=h-tyh4498Yrvoto7E1wIvYQ5zcBGTuKQCdXvJv_Wqxk";
        console.log("calloutURL -->>"+ calloutURL);
        await fetch(calloutURL, {
            method: "GET",
            headers: {
              Accept: "application/json"
            }
          })
            .then((response) => {
                console.log("response.Ok ->>"+ JSON.stringify(response.ok));
              if (response.ok) {
                return response.json();
              }
            })
            .then((responseJSON) => {
                console.log('responseJSON ->>' + JSON.stringify(responseJSON));
                console.log(responseJSON);
                console.log(responseJSON.items);
                this.items = responseJSON.items;
                console.log('responseJSON.items.sys.id ->>' + responseJSON.items[0].sys.id);
                const blogs = [];
                responseJSON.items.forEach(item => 
                    {
                        console.log(item.fields.title);
                        // adding some elements to the map
                        this.itemMap.set(item.sys.id, item.fields);
                    }
                );
                this.blogs = blogs;
              this.content = JSON.stringify(responseJSON);
            });

            console.log("End calloutURL -->>"+ calloutURL);*/

            const responseJSON = await getContentfulResource();
            if( responseJSON != null ){
              this.response = JSON.stringify(responseJSON);
                console.log('response ->>' + JSON.stringify(responseJSON));
                console.log(responseJSON);
                this.items = responseJSON.items;
                console.log('responseJSON.items.sys.id ->>' + responseJSON.items[0].sys.id);
                const blogs = [];
                responseJSON.items.forEach(item => 
                    {
                        // adding some elements to the map
                        this.itemMap.set(item.sys.id, item.fields);
                       
                    }
                );

                responseJSON.includes.Asset.forEach(item => 
                  {
                      
                      console.log('id ->>' + item.sys.id);
                      console.log('url -->' +item.fields.file.url);
                      this.assetIdVsUrl.set(item.sys.id, item.fields.file.url);
                  }
                );
                this.blogs = blogs;
              this.content = JSON.stringify(responseJSON);
            }


    }

    handleItem(event){
      console.log('handleItem clicked');
      let contentId;
      contentId = event.currentTarget.dataset.content;
      console.log(contentId);
      console.log('Map Value ->' + JSON.stringify(this.itemMap.get(contentId)));
      
      this.richtext = '<h1>'+ this.itemMap.get(contentId).title +'</h1></br>' +'<img src=https:' + this.assetIdVsUrl.get(this.itemMap.get(contentId).images[0].sys.id) +'></br>' + '<p><span style="white-space: pre-line">' + this.itemMap.get(contentId).body +'</span></p>'

        this[NavigationMixin.Navigate]({
            "type": "standard__component",
            "attributes": {
                //Here customLabelExampleAura is name of lightning aura component
                //This aura component should implement lightning:isUrlAddressable
                "componentName": "c__NavigateToLWC"
            },
            state: {
              c__richtext:this.richtext
            }
        });
    
    }
}