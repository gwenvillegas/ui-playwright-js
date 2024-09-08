const { test, expect } = require("@playwright/test");
const { describe, beforeEach } = test;

describe("Login", () => {
  beforeEach(async ({ page }) => {
    await page.goto("/");
  });
});

test("Test Login Page", () => {
  await;
});
