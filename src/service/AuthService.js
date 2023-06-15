import axios from "axios";
import { BASE_API_URL } from "../common/constants";

const BASE_URL = BASE_API_URL + '/api/auth';

class AuthService{

    login(user){
        return axios.post(BASE_URL + '/signin', user);
    }

    register(user){
        return axios.post(BASE_URL + '/signin', user);
    }

}

export default new AuthService();