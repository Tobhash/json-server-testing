import test, { expect } from "@playwright/test";

// Playwright Test runs tests in parallel. In order to achieve that, it runs several worker processes that run at the same time. By default, test files are run in parallel.

test("Delete a mission", async ({ request }) => {
  const missionData = {
    title: "ADD NEW MISSION",
    description: "Infiltrate Arasaka Tower and retrieve the data shard.",
    reward: 1337,
    status: "pending",
    location: {
      name: "Konpeki Plaza",
      city: "Night City",
      district: "Watson",
    },
  };

  const response = await request.post("/missions", {
    data: missionData,
  });
  const responseBody = await response.json();
  const missionId = responseBody.id;
  expect(response.status()).toBe(201);
  // First delete attempt should succeed
  const responseDeleteFirst = await request.delete(`/missions/${missionId}`);
  expect(responseDeleteFirst.status()).toBe(200);

  // Second delete attempt should fail
  const responseDeleteSecond = await request.delete(`/missions/${missionId}`);
  expect(responseDeleteSecond.status()).toBe(404);
});
