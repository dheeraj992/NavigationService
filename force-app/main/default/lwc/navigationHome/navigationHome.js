import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';
export default class NavigationHome extends NavigationMixin(LightningElement) {

    handleNavigation(){
        this[NavigationMixin.Navigate]({
           type:'standard__namedPage',
           attributes:{
               pageName:'home'
           } 
        })
    }

    handleNavigationForChatter(){
        this[NavigationMixin.Navigate]({
           type:'standard__namedPage',
           attributes:{
               pageName:'chatter'
           } 
        })
    }
    handleNavigationForNewRecord(){
        this[NavigationMixin.Navigate]({
           type:'standard__objectPage',
           attributes:{
             objectApiName:'Account',
             actionName:'new'  
           } 
        })
    }
    handleNavigationForDefaultRecord(){
        const defaultvalue=encodeDefaultFieldValues({
            FirstName:'Nishkarsh',
            LastName:'Mehra'

        })
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
              objectApiName:'Contact',
              actionName:'new'  
            },
            state:{
                defaultFieldValues:defaultvalue
            } 
         })
    }
}