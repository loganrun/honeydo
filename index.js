import axios from 'axios'

function initialLoad() {
  //const todoList = document.getElementById('todo');
  const form = document.getElementById('todoForm');
  //const newItemInput = document.getElementById('newItem');

  form.addEventListener('submit', handleAdd);

  
  fetch('http://jsonplaceholder.typicode.com/users/1/todos')
  .then((response) => response.json())
  .then(data =>{
    // const ad
    // form.addEventListener('submit',handleAdd)


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

function handleAdd(event) {
  const todoList = document.getElementById('todo');
  const form = document.getElementById('todoForm');
  const newItemInput = document.getElementById('newItem');

  event.preventDefault(); 

    const newItemValue = newItemInput.value.trim(); 

    if (!newItemValue) {
      
      return;
    }

    
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    li.innerHTML = `
      <span>${newItemValue}</span>
      <button type="button" class="btn btn-sm btn-outline-success remove-item">Done</button>
    `;
    const removeButton = li.querySelector('.remove-item');
      removeButton.addEventListener('click', ()=>{
        const removedId = li.id
        li.remove()
        
        //console.log(removedId)
        //axios.delete(`http://jsonplaceholder.typicode.com/users/1/todos/${item.id}`)
      
      });
    todoList.appendChild(li);

    // Make the API call with Axios
    axios.post('http://jsonplaceholder.typicode.com/users/1/todos', {
      title: newItemValue,
      completed: false, // Assuming new items are marked as incomplete
    })
      .then(response => {
        console.log('Item added successfully:', response.data);

        // Optionally update the local data structure with the response if needed
      })
      .catch(error => {
        console.error('Error adding item:', error);

        // Handle API call errors (e.g., show an error message, remove the visual item)
      });

    // Clear the input field for the next item
    newItemInput.value = '';
}
  


 



