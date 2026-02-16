import { test } from "@fixtures/missions";

test("Update mission title: PATCH", async ({ request, prepareMissionId }) => {
  const missionId = await prepareMissionId; // Use the mission ID from the fixture
  const updatedMissionData = {
    title: "UPDATED MISSION TITLE",
  };

  const response = await request.patch(`/missions/${missionId}`, {
    data: updatedMissionData,
  });
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.id).toBe(missionId);
  test.expect(responseBody.title).toBe(updatedMissionData.title);
  console.log("Updated mission ID:", responseBody.id);
});

test("Update mission description: PATCH", async ({
  request,
  prepareMissionId,
}) => {
  const missionId = await prepareMissionId;
  const updatedMissionData = {
    description: "Updated description for the mission.",
  };

  const response = await request.patch(`/missions/${missionId}`, {
    data: updatedMissionData,
  });
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.id).toBe(missionId);
  test.expect(responseBody.description).toBe(updatedMissionData.description);
  console.log("Updated mission ID:", responseBody.id);
});

test("Update mission reward: PATCH", async ({ request, prepareMissionId }) => {
  const missionId = await prepareMissionId;
  const updatedMissionData = {
    reward: 1010101,
  };

  const response = await request.patch(`/missions/${missionId}`, {
    data: updatedMissionData,
  });
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.id).toBe(missionId);
  test.expect(responseBody.reward).toBe(updatedMissionData.reward);
  console.log("Updated mission ID:", responseBody.id);
});

test("Update mission status: PATCH", async ({ request, prepareMissionId }) => {
  const missionId = await prepareMissionId;
  const updatedMissionData = {
    status: "completed",
  };

  const response = await request.patch(`/missions/${missionId}`, {
    data: updatedMissionData,
  });
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.id).toBe(missionId);
  test.expect(responseBody.status).toBe(updatedMissionData.status);
  console.log("Updated mission ID:", responseBody.id);
});

test("Update mission location: PATCH", async ({
  request,
  prepareMissionId,
}) => {
  const missionId = await prepareMissionId;
  const updatedMissionData = {
    location: {
      name: "Arasaka Tower",
      city: "Night City 2.0",
      district: "Watson",
    },
  };

  const response = await request.patch(`/missions/${missionId}`, {
    data: updatedMissionData,
  });
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.id).toBe(missionId);
  test.expect(responseBody.location).toMatchObject(updatedMissionData.location);
  test
    .expect(responseBody.location.name)
    .toBe(updatedMissionData.location.name);
  test
    .expect(responseBody.location.city)
    .toBe(updatedMissionData.location.city);
  test
    .expect(responseBody.location.district)
    .toBe(updatedMissionData.location.district);
  console.log("Updated mission ID:", responseBody.id);
});

test("Update mission location name only: PATCH", async ({
  request,
  prepareMissionId,
}) => {
  const missionId = await prepareMissionId;
  const updatedMissionData = {
    location: {
      name: "Corpo Plaza",
    },
  };

  const response = await request.patch(`/missions/${missionId}`, {
    data: updatedMissionData,
  });
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.id).toBe(missionId);
  test
    .expect(responseBody.location.name)
    .toBe(updatedMissionData.location.name);
  console.log("Updated mission ID:", responseBody.id);
});

test("Update multiple mission fields: PATCH", async ({
  request,
  prepareMissionId,
}) => {
  const missionId = await prepareMissionId;
  const updatedMissionData = {
    title: "MULTI-UPDATE MISSION",
    reward: 500000,
    status: "in_progress",
  };

  const response = await request.patch(`/missions/${missionId}`, {
    data: updatedMissionData,
  });
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.id).toBe(missionId);
  test.expect(responseBody.title).toBe(updatedMissionData.title);
  test.expect(responseBody.reward).toBe(updatedMissionData.reward);
  test.expect(responseBody.status).toBe(updatedMissionData.status);
  console.log("Updated mission ID:", responseBody.id);
});
