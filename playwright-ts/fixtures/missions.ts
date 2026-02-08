import { APIRequestContext, test as base } from "@playwright/test";

// Declare the types of your fixtures.
type MyFixtures = {
  preapreMission: APIRequestContext;
};

export const test = base.extend<MyFixtures>({
  preapreMission: async ({ page }, use) => {
    // Set up the fixture.

    // Use the fixture value in the test.
    await use();

    // Clean up the fixture.
  },
});
// export { test } from "@playwright/test";
