// @ts-check
import { test, expect } from "@playwright/test";
import authConfig from "../user";

test("should authorize user successfully", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.screenshot({ path: "screenshots/saus-auth-form.png" });

    const email = authConfig.login;
    const pass = authConfig.pass;

    await page.getByRole("textbox", { name: "Email" }).click();
    await page.getByRole("textbox", { name: "Email" }).fill(email);
    await page.getByRole("textbox", { name: "Пароль" }).click();
    await page.getByRole("textbox", { name: "Пароль" }).fill(pass);
    await page.screenshot({ path: "screenshots/saus-auth-form-fill.png" });
    await page.getByTestId("login-submit-btn").click();

    await expect(page.locator("h2")).toHaveText("Моё обучение", {
        timeout: 300000,
    });
    await expect(page).toHaveURL(/^https:\/\/netology.ru\/profile\/.*$/, {
        timeout: 300000,
    });
    await page.screenshot({ path: "screenshots/saus-profile.png" });
});
