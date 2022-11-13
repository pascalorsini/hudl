import WdioActions from "../utils/wdioActions";
import { FIFTEEN_SECONDS } from "../utils/timeout";
import { LOGIN } from "../UI/testIds";

export default class homePage {
  public static loadHomePage() {
    return browser.url(browser.options.baseUrl);    
  }

  static getLogInButton(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(LOGIN));
  }

  public static async clickLoginButton() {
    const logInButton = await this.getLogInButton();
    await logInButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    await logInButton.click();
  }

}
