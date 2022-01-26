import { LightningElement,wire} from 'lwc';
import LWCMC from '@salesforce/messageChannel/LwcToLwc__c';
import { publish,MessageContext } from 'lightning/messageService';
export default class ComponentA extends LightningElement {

@wire(MessageContext)
context;

inputvalue;

handleinput(event){
    this.inputvalue=event.target.value;
}
handlePublish(){

    const message={
        lmsData:this.inputvalue
    }
   publish(this.context,LWCMC,message) 
}
}