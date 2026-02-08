import { test } from "@fixtures/missions";

test("Update mission data: PUT", async ({ request, prepareMissionId }) => {
  const missionId = await prepareMissionId; // Use the mission ID from the fixture
  const updatedMissionData = {
    title: "PUT: UPDATED MISSION",
    description: "PUT: Updated description for the mission.",
    reward: 5050505,
    status: "completed",
    location: {
      name: "Arasaka Tower",
      city: "Night City 2.0",
      district: "Watson",
    },
  };

  const response = await request.put(`/missions/${missionId}`, {
    data: updatedMissionData,
  });
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.id).toBe(missionId);
  test.expect(responseBody.title).toBe(updatedMissionData.title);
  test.expect(responseBody.description).toBe(updatedMissionData.description);
  test.expect(responseBody.reward).toBe(updatedMissionData.reward);
  test.expect(responseBody.status).toBe(updatedMissionData.status);
  test.expect(responseBody.location).toEqual(updatedMissionData.location);
  console.log("Updated mission ID:", responseBody.id);
});
