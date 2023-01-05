import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://unitedchauffeur.com',
});

export default axios;
