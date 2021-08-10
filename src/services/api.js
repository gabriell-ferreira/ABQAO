import axios from 'axios';

export default () => axios.create({
  baseURL: 'https://abq-backend.herokuapp.com/api/v1'
})