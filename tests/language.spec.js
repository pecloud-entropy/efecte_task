import { test, expect } from '@playwright/test';
import { standardUser } from '../test_data/users.json';

test('default language check', async ({ page }) => {
  await page.goto("/itsm");

  await page.locator('#username').fill(standardUser.username);
  await page.locator('#password').fill(standardUser.password);
  await page.locator('#kc-efecte-login').click( { waitForNavigation: true})

  await expect(page).toHaveTitle('Efecte | Start page');

  await page.getByTestId('header-avatar-text').click();
  await expect(page.locator('#selectedLanguage [class^="ng-value-label"]')).toHaveText(standardUser.language)
  await page.locator('[name="Logout"]').click();
  await expect(page).toHaveTitle('Sign in to qaenv');
});
