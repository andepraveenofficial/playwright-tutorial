import { test, expect } from "@playwright/test";

const baseURL = "http://localhost:5173/";

test.describe("Home Page", () => {
	/*
test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
})
  */

	test("should have correct metadata and elements", async ({ page }) => {
		await page.goto(baseURL);
		await expect(page).toHaveTitle("Praveen Solutions");
		await expect(
			page.getByRole("heading", { name: "I am Home Page" })
		).toBeVisible();

		await expect(page.getByRole("link", { name: "Form" })).toBeVisible();
	});

	test("should redirect to form page on click", async ({ page }) => {
		await page.goto(baseURL);
		await page.getByRole("link", { name: "Form" }).click();
		await expect(
			page.getByRole("heading", { name: "I am Form" })
		).toBeVisible();
	});
});

test.describe("Form Page", () => {
	test("should have correct metadata and elements", async ({ page }) => {
		await page.goto(baseURL + "form");
		await expect(page).toHaveTitle("Praveen Solutions");
		await expect(
			page.getByRole("heading", { name: "I am Form" })
		).toBeVisible();
		await expect(page.getByPlaceholder("Enter Item")).toBeVisible();
		await expect(page.getByRole("button", { name: "Add" })).toBeVisible();
	});

	test("should have empty items list on start", async ({ page }) => {
		await page.goto(baseURL + "form");
		const itemsList = page.getByTestId("items-list");

		await expect(itemsList).toBeEmpty();
	});

	test("should add item to list", async ({ page }) => {
		await page.goto(baseURL + "form");
		const input = page.getByPlaceholder("Enter Item");

		await input.fill("Item 1");

		await page.getByRole("button", { name: "Add" }).click();

		const item = page.getByTestId("item").nth(0);

		await expect(item).toHaveText("Item 1");
		await expect(input).toBeEmpty();
	});
});
