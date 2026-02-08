import { APIRequestContext, test as base } from "@playwright/test";

// Declare the types of your fixtures.
type MyFixtures = {
  preapreMission: string;
  request: APIRequestContext;
};

export const test = base.extend<MyFixtures>({
  preapreMission: async ({ request }, use) => {
    // Set up the fixture.
    const missionData = {
      title: "TEST MISSION FIXTURE",
      description: "TEST MISSION FIXTURE DESCRIPTION",
      reward: 404,
      status: "new",
      location: {
        name: "XXX",
        city: "XXX",
        district: "XXX",
      },
    };
    // const requestContext = await page.context().request;
    const response = await request.post("/missions", {
      data: missionData,
    });
    // Use the fixture value in the test.
    const responseBody = await response.json();
    await use(responseBody.id); // Pass the created mission ID to the test.
    // Clean up the fixture.
    await request.delete(`/missions/${responseBody.id}`);
  },
});
// export { test } from "@playwright/test";
