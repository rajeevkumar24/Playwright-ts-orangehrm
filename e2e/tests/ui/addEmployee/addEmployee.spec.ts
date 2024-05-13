import { test, expect } from "@playwright/test";
import { ENV } from "@e2e/configs/env";
import { LoginPage } from "@e2e/pages/loginPage";
import { HomePage } from "@e2e/pages/homePage";
import {AddEmployeePage} from "@e2e/pages/addEmployee";
import{getRandomEmployeeDetails} from "@e2e/testdata/random";

test("Add Employee", async ({ page }): Promise<void> => {
  await page.goto(ENV.BASE_URL);
  const loginPage:LoginPage = new LoginPage(page);
  loginPage.login(ENV.USERNAME,ENV.PASSWORD);
  const homePage:HomePage = new HomePage(page);
  const addEmployeePage:AddEmployeePage = new AddEmployeePage(page)
  homePage.getleftMenuComponent().selectLeftMenuItem("PIM");
  homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");
   await addEmployeePage.addEmployee(getRandomEmployeeDetails());

  await expect(addEmployeePage.successMessage).toBeVisible();
 
});
