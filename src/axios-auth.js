import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://dragonfly-b227a.firebaseio.com'
});

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance