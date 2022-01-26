import { LightningElement,wire } from 'lwc';
import LWCMC from '@salesforce/messageChannel/LwcToLwc__c';
import { subscribe,MessageContext, APPLICATION_SCOPE } from 'lightning/messageService';
export default class ComponentB extends LightningElement {

    recievedmessage;
    @wire(MessageContext)
    context
     connectedCallback(){
        this.subscribeMessage();
    }
     

    subscribeMessage(){
      subscribe(this.context,LWCMC,(m)=>{this.handleMessage(m)},{scope:APPLICATION_SCOPE});  
    }

    handleMessage(message){
        this.recievedmessage=message.lmsData?message.lmsData:'No Published Message';
    }

}