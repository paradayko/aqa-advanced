import axios from "axios";

const callAxios1 = async () => {
  const getListAllObj = await axios.get("https://api.restful-api.dev/objects");
  console.log(getListAllObj.data);
  console.log("\n");

  const getFirstObj = await axios.get("https://api.restful-api.dev/objects", {
    params: {
      id: getListAllObj.data[0].id,
    },
  });
  console.log(getFirstObj.data);
  console.log("\n");

  const addObj = await axios.post("https://api.restful-api.dev/objects", {
    name: "Some phone",
    data: {
      year: 2025,
      price: 7777.77,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  });
  console.log(addObj.data);
  console.log("\n");

  const updateCreatedObj = await axios.put(
    `https://api.restful-api.dev/objects/${addObj.data.id}`,
    {
      name: "Tesla Phone",
      data: {
        year: 2019,
        price: 2049.99,
        "CPU model": "Intel Core i9",
        "Hard disk size": "1 TB",
        color: "silver",
      },
    }
  );
  console.log(updateCreatedObj.data);
  console.log("\n");

  const updatePartOfCreatedObj = await axios.patch(
    `https://api.restful-api.dev/objects/${addObj.data.id}`,
    {
      name: "updated name",
    }
  );
  console.log(updatePartOfCreatedObj.data);
  console.log("\n");

  const deleteCreatedItem = await axios.delete(
    `https://api.restful-api.dev/objects/${addObj.data.id}`
  );
  console.log(deleteCreatedItem.data);
};
callAxios1();
