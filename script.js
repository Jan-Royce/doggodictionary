console.log("parsing json");
let doggo_json = "assets/doggo.json";

function displayDoggoData(d)
{
  let container = document.querySelector('#main-container');
  for(i=0;i<d.length;i++)
  {
    let entry = document.createElement('div');
    entry.className = "entry";
    let word = document.createElement('span');
    word.className = "entry-word";
    word.textContent = d[i].word;
    let pos = document.createElement('p');
    pos.className = "entry-pos";
    pos.textContent = d[i].pos;
    let def = document.createElement('p');
    def.className = "entry-definition";
    def.textContent = d[i].definition;
    let img = document.createElement('img');
    img.className = "entry-image";
    img.src = d[i].image;

    entry.appendChild(word);
    entry.appendChild(pos);
    entry.appendChild(def);
    entry.appendChild(img);
    container.appendChild(entry);
  }
}

async function getDoggoData()
{
  const response = await fetch(doggo_json);
  const data = await response.json();

  displayDoggoData(data);
}

getDoggoData();
