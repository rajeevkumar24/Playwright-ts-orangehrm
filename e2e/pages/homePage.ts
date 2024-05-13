import { LeftMenuComponent } from "./components/leftMenuComponent";
import  TopMenuComponent from "./components/topMenuComponent";
import{type Page} from "@playwright/test";

export class HomePage{
    private readonly leftMenuComponent:LeftMenuComponent;
    private readonly topMenuComponent:TopMenuComponent;
    constructor(private readonly page:Page){

        this.leftMenuComponent = new LeftMenuComponent(page);
        this.topMenuComponent = new TopMenuComponent(page);


    }

   getleftMenuComponent()
   {
    return this.leftMenuComponent; 
 }

 getTopMenuComponent()
 {
  return this.topMenuComponent; 
}
}