import axios from 'axios';
// export function ApiFunction(method, userDetails) {
//   if (method == 'addUser') {
//     axios
//       .post('https://jsonplaceholder.typicode.com/users', { userDetails })
//       .then((response) => {
//         console.log(response.data);
//         return response.data;
//       });
//   } else if (method == 'displayUser') {
//     axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
//       console.log('showdettta', response.data);
//       return response.data;
//     });
//   }
// }

export function ApiFunction(method, userDetails) {
  if (method == 'addUser') {
    return axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        userId: 101,
        id: 101,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsu',
      })
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  } else if (method == 'displayUser') {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
}
