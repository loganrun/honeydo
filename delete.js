import axios from 'axios'

export default async function deleteItem(data){
    const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    windows.alert("item removed")
}