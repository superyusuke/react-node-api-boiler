import axios from 'axios';

const postUsingFetch = () => {
  return (dispatch) => {
    console.log('postUsingFetch')
    const url = '/test'
    const data = [{
      id: 1,
      title:'this is the book title',
      description: 'this is the book',
      price: 33.33
    }]

    axios.post(url, data)
      .then(response => console.log(response.data))
      .catch((error) => {console.log(error)})
  }
}

export default postUsingFetch