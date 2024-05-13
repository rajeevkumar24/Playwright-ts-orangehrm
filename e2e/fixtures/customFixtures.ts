import { AddEmployeePage } from "@e2e/pages/addEmployee";
import { HomePage } from "@e2e/pages/homePage";
import { LoginPage } from "@e2e/pages/loginPage"
import {test as base} from "@playwright/test"

interface PageFixtures{
    loginPage:LoginPage;
    homePage:HomePage;
    addEmployeePage:AddEmployeePage
}

export const test = base.extend<PageFixtures>(
    {
        loginPage:async({page},use)=>{
            await use(new LoginPage(page));
        },
        homePage:async({page},use)=>{
            await use(new HomePage(page))
        },
        addEmployeePage:async({page},use)=>{
            await use(new AddEmployeePage(page))
        }
    }
)