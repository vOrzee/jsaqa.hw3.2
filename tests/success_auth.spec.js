// @ts-check
import { test, expect } from "@playwright/test";
import authConfig from "../user";

test("should authorize user successfully", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");

    const email = authConfig.login;
    const pass = authConfig.pass;

    await page.getByRole("textbox", { name: "Email" }).click();
    await page.getByRole("textbox", { name: "Email" }).fill(email);
    await page.getByRole("textbox", { name: "Пароль" }).click();
    await page.getByRole("textbox", { name: "Пароль" }).fill(pass);
    await page.getByTestId("login-submit-btn").click();

    await expect(page).toHaveURL("https://netology.ru/profile/8009084", {
        timeout: 10000,
    });
});
