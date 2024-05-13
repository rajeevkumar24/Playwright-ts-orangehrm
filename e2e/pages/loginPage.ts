import{Locator, type Page} from "@playwright/test";
export class LoginPage{
    constructor(private readonly page:Page){

    }

    private readonly usernameTextbox : Locator = this. page.getByPlaceholder("Username");
    private readonly passwordTextbox : Locator = this. page.getByPlaceholder("Password");
    private readonly loginButton : Locator =  this.page.getByRole("button", { name: "Login" });

    async Navigate(url:string)
    {
        await this.page.goto(url);
    }

    async login(username:string,password:string)
    {
        await this.usernameTextbox.fill(username);
        await this.passwordTextbox.fill(password);
        await this.loginButton.click();
    }
}