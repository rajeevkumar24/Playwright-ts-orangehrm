import { type Page } from "@playwright/test";

export class LeftMenuComponent{
    constructor(private readonly page: Page)      {}

    private readonly menu = (menuitem:string) => this.page.getByRole("link", { name: menuitem });

    async selectLeftMenuItem(menuItem:string)
    {

        await this.menu(menuItem).click()
    }
}