// @ts-check
import { test, expect } from "@playwright/test";
import authConfig from "../user";

test("should authorize user failure", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.screenshot({ path: "screenshots/sauf-auth-form.png" });
    const email = authConfig.login;
    const pass = "authConfig.pass";

    await page.getByRole("textbox", { name: "Email" }).click();
    await page.getByRole("textbox", { name: "Email" }).fill(email);
    await page.getByRole("textbox", { name: "Пароль" }).click();
    await page.getByRole("textbox", { name: "Пароль" }).fill(pass);
    await page.screenshot({ path: "screenshots/sauf-auth-form-fill.png" });
    await page.getByTestId("login-submit-btn").click();

    await expect(page.getByTestId("login-error-hint")).toHaveText(
        "Вы ввели неправильно логин или пароль.",
    );
    await page.screenshot({ path: "screenshots/sauf-login-error.png" });
});
