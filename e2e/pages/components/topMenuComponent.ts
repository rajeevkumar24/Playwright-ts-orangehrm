import { type Page } from "@playwright/test";

 class TopMenuComponent{
    constructor(private readonly page: Page)      {}

    private readonly menu = (menuitem:string) => this.page.getByRole("link", { name: menuitem })

    async selectTopMenuItem(menuItem:string)
    {

        await this.menu(menuItem).click()
    }
}

export default TopMenuComponent;

