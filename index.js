import axios from 'axios'

function initialLoad() {
  
  fetch('http://jsonplaceholder.typicode.com/users/1/todos')
  .then((response) => response.json())
  .then(data =>{
    
    const todoList = document.getElementById('todo');
    for (let i = 0; i < 4; i++) {
      const item = data[i];
      console.log(item.id);
      const li = document.createElement('li');
      li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
      li.innerHTML = `
        <span>${item.title}</span> <button type="button" class="btn btn-sm btn-outline-success remove-item" id= "${item.id}">Done</button>
      `;
      todoList.appendChild(li);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
};
initialLoad()

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