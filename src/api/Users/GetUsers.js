import axios from '../axios';
import BASE_URL from '../BASE_URL'

const GetUsers = fetch( BASE_URL + '/users')
    .then((res) => res.json())
    .then((result) => {
        return result;
    });

export default GetUsers