console.log('woof');

doggo_json = "assets/doggo.json";

fetch(doggo_json)
.then(response =>{
  console.log(response);
});
