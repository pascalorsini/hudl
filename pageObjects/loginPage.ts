import { ERROR_DISPLAY, EMAIL_INPUT, PASSWORD_INPUT, LOGIN_BUTTON, 
  EMAIL_INPUT_LABEL, PASSWORD_INPUT_LABEL, 
  REMEMBER_ME_CHECKBOX_LABEL, NEED_HELP_LINK,
  LOG_IN_WITH_ORGANIZATION_BUTTON } from "../UI/testIds";
import WdioActions from "../utils/wdioActions";
import { FIFTEEN_SECONDS } from "../utils/timeout";

export default class loginPage {
  static emailInputText(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(EMAIL_INPUT_LABEL));
  }

  static emailInput(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(EMAIL_INPUT));
  }

  static passwordInputText(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(PASSWORD_INPUT_LABEL));
  }

  static passwordInput(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(PASSWORD_INPUT));
  }

  static logInButton(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(LOGIN_BUTTON));
  }

  static rememberMeCheckboxLabel(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(REMEMBER_ME_CHECKBOX_LABEL));
  }

  static needHelpLinkText(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(NEED_HELP_LINK));
  }

  static logInWithAnOrganizationButton(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(LOG_IN_WITH_ORGANIZATION_BUTTON));
  }

  static errorDisplay(): Promise<WebdriverIO.Element> {
    return $(WdioActions.createTestIdSelector(ERROR_DISPLAY));
  }

  public static async clickLoginButton() {
    const logInButton = await this.logInButton();
    await logInButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    await logInButton.click();
  }

  public static async setEmailValue(email: string) {
    const emailInput = await this.emailInput();
    await emailInput.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    await emailInput.setValue(email);
  }

  public static async setPasswordValue(password: string) {
    const passwordInput = await this.passwordInput();
    await passwordInput.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    await passwordInput.setValue(password);
  }

  public static async logIn(email: string, password: string) {
    await this.setEmailValue(email);
    await this.setPasswordValue(password);
    await this.clickLoginButton();
  }

  public static async getErrorDisplayText(): Promise<string> {
    const errorDisplay = await this.errorDisplay();
    await errorDisplay.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const errorDisplayText = await errorDisplay.getText();

    return errorDisplayText;
  }

  public static async getEmailInputText(): Promise<string> {
    const emailInputText = await this.emailInputText();
    await emailInputText.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const emailInputTextLabel = await emailInputText.getText();

    return emailInputTextLabel;
  }

  public static async getEmailInputType(): Promise<string> {
    const emailInput = await this.emailInput();
    await emailInput.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const emailInputType = await emailInput.getAttribute("type");

    return emailInputType;
  }

  public static async getPasswordInputText(): Promise<string> {
    const passwordInputLabel = await this.passwordInputText();
    await passwordInputLabel.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const passwordInputTextLabel = await passwordInputLabel.getText();

    return passwordInputTextLabel;
  }

  public static async getPasswordInputType(): Promise<string> {
    const passwordInput = await this.passwordInput();
    await passwordInput.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const passwordInputType = await passwordInput.getAttribute("type");

    return passwordInputType;
  }

  public static async rememberMeCheckboxText(): Promise<string> {
    const rememberMeCheckboxLabel = await this.rememberMeCheckboxLabel();
    await rememberMeCheckboxLabel.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const rememberMeCheckboxTextLabel = await rememberMeCheckboxLabel.getText();

    return rememberMeCheckboxTextLabel;
  }

  public static async getNeedHelpLinkText(): Promise<string> {
    const needHelpLink = await this.needHelpLinkText();
    await needHelpLink.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const needHelpLinkText = await needHelpLink.getText();

    return needHelpLinkText;
  }

  public static async getLogInButtonText(): Promise<string> {
    const logInButton = await this.logInButton();
    await logInButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const logInButtonText = await logInButton.getText();

    return logInButtonText;
  }

  public static async getLogInButtonType(): Promise<string> {
    const logInButton = await this.logInButton();
    await logInButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const logInButtonType = await logInButton.getAttribute("type");

    return logInButtonType;
  }

  public static async getLogInWithAnOrganizationButtonText(): Promise<string> {
    const logInWithAnOrganizationButton = await this.logInWithAnOrganizationButton();
    await logInWithAnOrganizationButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const logInWithAnOrganizationButtonText = await logInWithAnOrganizationButton.getText();

    return logInWithAnOrganizationButtonText;
  }

  public static async getLogInWithAnOrganizationButtonType(): Promise<string> {
    const logInWithAnOrganizationButton = await this.logInWithAnOrganizationButton();
    await logInWithAnOrganizationButton.waitForDisplayed({ timeout: FIFTEEN_SECONDS });
    const logInWithAnOrganizationButtonType = await logInWithAnOrganizationButton.getAttribute("type");

    return logInWithAnOrganizationButtonType;
  }
  
}
