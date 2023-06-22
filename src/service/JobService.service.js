import {BASE_API_URL} from "../api/baseUrl";
import axios from "axios";

const BASE_URL = BASE_API_URL + '/api/jobs';

class JobService{

    postJob(job){
        return axios.post(BASE_URL + '/create');
    }



}

export default new JobService();