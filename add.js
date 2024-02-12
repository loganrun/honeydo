import axios from 'axios'

export default async function addItem(data){
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts')
    windows.alert("item added")
}