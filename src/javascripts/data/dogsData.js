import axios from 'axios';

const examplePromise = () => new Promise((resolve, reject) => {
  axios.get('http://localhost:3001/example')
    .done((data) => {
      resolve(data);
    })
    .fail((error) => {
      reject(error);
    });
});
export default { examplePromise };
