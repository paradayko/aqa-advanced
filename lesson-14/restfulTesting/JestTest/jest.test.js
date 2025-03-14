import { objectConfig } from "../requestConfig";

const object = new objectConfig("https://api.restful-api.dev");
let objectID;
describe("Restful-api.dev testing", () => {
  test("GET: list of all object", async () => {
    const resp = await object.getObjList();
    // console.log(resp.data);
    expect(resp.status).toBe(200);
  });
  test("GET: object by valid ID", async () => {
    const listObj = await object.getObjList();
    const firstObjId = listObj.data[0].id;
    const resp = await object.getObj(firstObjId);
    expect(resp.status).toBe(200);
  });

  test("GET: object item using invalid ID", async () => {
    const resp = await object.getObj("invalid");
    expect(resp.status).toBe(404);
  });

  test("POST: add a new object item using a valid format", async () => {
    const resp = await object.addObj({
      name: "Test Name",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    });
    expect(resp.status).toBe(200);
    expect(resp.data.name).toBe("Test Name");
  });
  test("POST: add a new object without body", async () => {
    const resp = await object.addObj();
    expect(resp.status).toBe(415);
  });

  test("PUT: update object by id", async () => {
    const getObjectId = await object.addObj({
      name: "Test Name",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    });
    const resp = await object.putUpdateObj(getObjectId.data.id, {
      name: "Test Andrii",
      data: {
        year: 2019,
        price: 2049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        color: "silver",
      },
    });
    expect(resp.status).toBe(200);
    expect(resp.data.name).toBe("Test Andrii");
  });

  test("PUT: update object by id using invalid data", async () => {
    const getObjectId = await object.addObj({
      name: "Test Name",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    });
    const resp = await object.putUpdateObj(getObjectId.data.id);
    expect(resp.status).toBe(415);
  });
  test("PATCH: Update object by ID", async () => {
    const getObjectId = await object.addObj({
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    });
    const resp = await object.patchUpdateObj(getObjectId.data.id, {
      name: "Apple MacBook Pro 16 (Updated Name)",
    });
    expect(resp.status).toBe(200);
    expect(resp.data.name).toBe("Apple MacBook Pro 16 (Updated Name)");
  });
  test("PATCH: Update object by ID using invalid data", async () => {
    const getObjectId = await object.addObj({
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    });
    const resp = await object.patchUpdateObj(getObjectId.data.id);
    expect(resp.status).toBe(400);
    console.log(resp.data);
  });

  test("DELETE: object by ID", async () => {
    const getObjectId = await object.addObj({
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
      },
    });
    const resp = await object.deleteObj(getObjectId.data.id);
    expect(resp.data).toBe(200);
    expect(resp.data.message).toBe(
      `Object with id = ${getObjectId.data.id}, has been deleted.`
    );
  });
});
