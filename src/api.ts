import axios from 'axios';

const api = axios.create({
  baseURL: 'https://xbi-dev.elastoo.com/api/datasource',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + process.env.VUE_APP_TOKEN,
  },
});

export default {
    getDataSource(id: string) {
        return api.get(`${id}/data/`);
    },
};
