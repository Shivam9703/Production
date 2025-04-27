import { LightningElement } from 'lwc';
import getContentfulResource from '@salesforce/apex/ContentfulBlog2.makeCallout';

export default class ContentfulDetailCmp extends LightningElement {
    content;
    blogs = [];
    items =[];
    richtext ='';
    itemMap = new Map();
    assets = [];
    assetIdVsUrl = new Map();
    response;

    async connectedCallback(){

            const responseJSON = await getContentfulResource();
            if( responseJSON != null ){
                console.log('response ->>' + JSON.stringify(responseJSON));
                this.items = responseJSON.items;
                const blogs = [];
                responseJSON.items.forEach(item => 
                    {
                        this.itemMap.set(item.sys.id, item.fields);
                    }
                );

                responseJSON.includes.Asset.forEach(item => 
                  {
                      this.assetIdVsUrl.set(item.sys.id, item.fields.file.url);
                  }
                );
                this.blogs = blogs;
              this.content = JSON.stringify(responseJSON);
            }
    }

    handleItem(event){
        console.log('handleItem clicked');
        this.richtext = '';
        let contentId;
        contentId = event.currentTarget.dataset.content;
        
        if(this.itemMap.get(contentId).title!== undefined && this.itemMap.get(contentId).title !== null){
            this.richtext = this.richtext +'<h1 Style="font-size: xxx-large; font-weight: bolder; font-family: ui-monospace;">'+ this.itemMap.get(contentId).title +'</h1></br>';
        } 

        if(this.itemMap.get(contentId).body!== undefined && this.itemMap.get(contentId).body !== null){
            this.setBodyContent(this.itemMap.get(contentId).body.content);
        }
        console.log('this.richtext -> ' + JSON.stringify(this.richtext));
      }

    /*setBodyContent(content){

        if(content.title!== undefined && content.title !== null){
            this.richtext = this.richtext +'<h1>'+ content.title +'</h1></br>';
        } 

        if(content.body!== undefined && content.body !== null){
            content.body.content.forEach( item => {
                if(item.nodeType.includes('asset')){
                    console.log('in content assest Id ->' + item.data.target.sys.id);
                    if(item.data !== null && item.data !== undefined && Object.keys(item.data).length>0){
                        this.richtext = this.richtext +'<img src=https:' + this.assetIdVsUrl.get(item.data.target.sys.id) +'></br>';
                    }
                }
                if(item.nodeType.includes('paragraph')){
                    this.richtext = this.richtext + '<p>';
                    
                    if(item.content !== null && item.content !== undefined && Object.keys(item.content).length>0){

                    item.content.forEach( item =>{
                        item.marks.forEach( itemMark => {
                            if(itemMark.type.includes('bold')){
                                this.richtext = this.richtext + '<b>';
                            }
                        });
                        this.richtext = this.richtext + item.value;
                        item.marks.forEach( itemMark => {
                            if(itemMark.type.includes('bold')){
                                this.richtext = this.richtext + '</b>';
                            }
                        });
                    });
                    }

                    this.richtext = this.richtext + '</p>';
                }
            })
        } 

    }*/

    setBodyContent(content){
            content.forEach( item => {
                if(item.nodeType !== null && item.nodeType !== undefined && item.nodeType.includes('asset')){
                    console.log('in content assest Id ->' + item.data.target.sys.id);
                    if(item.data !== null && item.data !== undefined && Object.keys(item.data).length>0){
                        this.richtext = this.richtext +'<img src=https:' + this.assetIdVsUrl.get(item.data.target.sys.id) +'></br>';
                    }
                }
                if(item.nodeType !== null && item.nodeType !== undefined &&  item.nodeType.includes('ordered-list')){
                    this.richtext = this.richtext + '<ol>';
                    if(item.content !== null && item.content !== undefined && Object.keys(item.content).length>0){
                        this.setBodyContent(item.content);
                    }
                    this.richtext = this.richtext + '</ol>';
                }

                if(item.nodeType !== null && item.nodeType !== undefined &&  item.nodeType.includes('list-item')){
                    this.richtext = this.richtext + '<li>';
                    if(item.content !== null && item.content !== undefined && Object.keys(item.content).length>0){
                        this.setBodyContent(item.content);
                    }
                    this.richtext = this.richtext + '</li>';
                }
                if(item.nodeType !== null && item.nodeType !== undefined &&  item.nodeType.includes('paragraph')){
                    this.richtext = this.richtext + '<p style="font-size: medium;text-align: justify;">';
                    if(item.content !== null && item.content !== undefined && Object.keys(item.content).length>0){
                        this.setBodyContent(item.content);
                    }
                    this.richtext = this.richtext + '</p></br>';
                }

                if(item.nodeType !== null && item.nodeType !== undefined &&  item.nodeType.includes('text')){
                    if(item.marks !== null && item.marks !== undefined && Object.keys(item.marks).length>0){
                    item.marks.forEach( itemMark => {
                        if(itemMark.type.includes('bold')){
                            this.richtext = this.richtext + '<b>';
                        }
                    });
                    }
                    this.richtext = this.richtext + item.value;
                    if(item.marks !== null && item.marks !== undefined && Object.keys(item.marks).length>0){
                    item.marks.forEach( itemMark => {
                        if(itemMark.type.includes('bold')){
                            this.richtext = this.richtext + '</b>';
                        }
                    });
                    }
                }
            });
        } 

}