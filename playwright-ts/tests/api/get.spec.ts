import test from "@playwright/test";

test("Get all characters", async ({ request }) => {
  const response = await request.get("/characters");
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.length).toBeGreaterThan(0);
  test.expect(Array.isArray(responseBody)).toBe(true);
});

test("Get character by ID", async ({ request }) => {
  const character = {
    id: "1",
    firstName: "V",
    lastName: "Unknown",
  };
  const response = await request.get(`/characters/${character.id}`);
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.id).toBe(character.id);
  test.expect(responseBody.firstName).toBe(character.firstName);
  test.expect(responseBody.lastName).toBe(character.lastName);
});

test("Get character by last name", async ({ request }) => {
  const character = {
    firstName: "Johnny",
    lastName: "Silverhand",
  };
  const response = await request.get(
    `/characters?lastName=${character.lastName}`,
  );
  const responseBody = await response.json();
  test.expect(response.status()).toBe(200);
  test.expect(responseBody.length).toBeGreaterThan(0);
  test.expect(responseBody[0].firstName).toBe(character.firstName);
  test.expect(responseBody[0].lastName).toBe(character.lastName);
});
