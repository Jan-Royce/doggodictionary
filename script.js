console.log("parsing json");
let doggo_json = "assets/doggo.json";

async function getDoggoData()
{
  const response = await fetch(doggo_json);
  const data = await response.json();

  console.log(data);
  console.log(data.length);
}

getDoggoData();
