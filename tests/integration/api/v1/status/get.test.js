test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  expect(response.status).toBe(200);

  const responseBody = await response.json();

  new Date(responseBody.update_At).toISOString();

  const parsedUpadateAt = new Date(responseBody.update_At).toISOString();
  expect(responseBody.update_At).toEqual(parsedUpadateAt);

  expect(responseBody.dependencies.database.version).toEqual("16.0");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
