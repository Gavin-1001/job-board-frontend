import {BASE_API_URL} from "../api/baseUrl";
import axios from "axios";
import {authHeaders} from "../common/models/AuthHeaders";

//todo -> TODO need to continue working on the service!!!!
const BASE_URL = BASE_API_URL + '/api/user/';

class UserService {

    postUserDetails(user){
        return axios.post(BASE_URL+'profile', user, {headers: authHeaders()});
    }

}

export default new UserService();
