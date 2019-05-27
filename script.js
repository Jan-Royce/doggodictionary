console.log("parsing json");
let doggo_json = "assets/doggo.json";

function displayDoggoData(d)
{
  let container = document.querySelector('#main-container');
  for(i=0;i<d.length;i++)
  {
    let entry = document.createElement('div');
    entry.className = "entry";
    let word = document.createElement('div');
    word.className = "entry-word";
    word.textContent = d[i].word;
    let pos = document.createElement('span');
    pos.className = "entry-pos";
    pos.textContent = `(${d[i].pos})`;
    let def = document.createElement('p');
    def.className = "entry-definition";
    def.textContent = d[i].definition;
    let img = document.createElement('img');
    img.src = d[i].image;
    let img_container = document.createElement('div');
    img_container.className = "entry-image";

    img_container.appendChild(img);
    word.appendChild(pos);

    entry.appendChild(img_container);
    entry.appendChild(word);
    entry.appendChild(def);

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
