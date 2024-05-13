import { expect } from "@playwright/test";
import{test} from "@e2e/fixtures/customFixtures";
import { ENV } from "@e2e/configs/env"
import{getRandomEmployeeDetails} from "@e2e/testdata/random";

test("Add Employee", async ({loginPage,homePage,addEmployeePage }): Promise<void> => {
  await loginPage.Navigate(ENV.BASE_URL);  
  loginPage.login(ENV.USERNAME,ENV.PASSWORD);
  homePage.getleftMenuComponent().selectLeftMenuItem("PIM");
  homePage.getTopMenuComponent().selectTopMenuItem("Add Employee");
   await addEmployeePage.addEmployee(getRandomEmployeeDetails());

  await expect(addEmployeePage.successMessage).toBeVisible();
 
});
