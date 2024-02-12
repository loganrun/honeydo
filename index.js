import axios from 'axios'

function initialLoad() {
  
  fetch('http://jsonplaceholder.typicode.com/users/1/todos')
  .then((response) => response.json())
  .then(data =>{
    
    const todoList = document.getElementById('todo');
    for (let i = 0; i < 4; i++) {
      const item = data[i];
      //console.log(item.completed);
      if (item.completed === false) {
      const li = document.createElement('li');
      li.id = item.id;
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      li.innerHTML = `
        <span id= ${item.id}>${item.title}</span> <button type="button" class="btn btn-sm btn-outline-success remove-item" id= ${item.id} >Done</button>`;

      const removeButton = li.querySelector('.remove-item');
      removeButton.addEventListener('click', ()=>{
        const removedId = li.id
        li.remove()
        
        //console.log(removedId)
        //axios.delete(`http://jsonplaceholder.typicode.com/users/1/todos/${item.id}`)
      
      });
      //doneButton.remove()
    
      todoList.appendChild(li);
      }
      if(item.completed === true){
        const doneLi= document.getElementById('doneChore')
        const li= document.createElement('li')
        li.classList.add("list-group-item")
        li.innerHTML = `${item.title}`;
        doneLi.appendChild(li)
      }
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
};
initialLoad()

function handleDone() {
  console.log(target)

}
 
//('click', event =>{  const doneButton = document.getElementById(`${event.target.id}`)
  // return axios.get('http://jsonplaceholder.typicode.com/users/1/todos')
  //   .then(response => response.data) 
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //     throw error; // Re-throw error to propagate in promise chain
  //   });
//}


  // .then(chore => {
  //   console.log(chore); // Access the fetched data
  // })
  // .catch(error => {
  //   console.error('Error processing data:', error); // Handle errors here
  // });
// import axios from 'axios'


// function initialLoad(){
//     const response = axios.get('http://jsonplaceholder.typicode.com/users/1/todos')
// .then(
//   console.log(response.data)

// )


// }

// initialLoad()