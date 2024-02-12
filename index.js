
function initialLoad(){
    fetch(​"https://jsonplaceholder.typicode.com/users/1/todos")
.then(chore = response.json()

)
.then(darthVaderObj => {
  let name = document.createElement('h2');
  name.innerText = `Name: ${darthVaderObj['name']}`
  let birth = document.createElement('h3');
  birth.innerText = `Born ${darthVaderObj['birth_year']}`
  document.body.appendChild(name)
  document.body.appendChild(birth)
});

}

initialLoad()