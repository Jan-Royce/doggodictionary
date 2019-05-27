console.log("parsing json");
let doggo_json = "assets/doggo.json";

function displayDoggoData(d)
{
  for(i=0;i<d.length;i++)
  {

  }
}

async function getDoggoData()
{
  const response = await fetch(doggo_json);
  const data = await response.json();

  console.log(data);
  console.log(data.length);
  console.log(data[0]);
}

getDoggoData();
