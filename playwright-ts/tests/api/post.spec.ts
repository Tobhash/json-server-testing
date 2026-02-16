import test from "@playwright/test";

test("Post new mission", async ({ request }) => {
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
  test.expect(response.status()).toBe(201);
  test.expect(responseBody.id).toBeDefined();
  test.expect(responseBody.title).toBe(missionData.title);
  test.expect(responseBody.description).toBe(missionData.description);
  test.expect(responseBody.reward).toBe(missionData.reward);
  test.expect(responseBody.status).toBe(missionData.status);
  test.expect(responseBody.location).toEqual(missionData.location);
  console.log("Created mission ID:", responseBody.id);
});
