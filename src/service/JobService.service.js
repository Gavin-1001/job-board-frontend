import {BASE_API_URL} from "../api/baseUrl";
import axios from "axios";
import {authHeaders} from "../common/models/AuthHeaders";


const BASE_URL = BASE_API_URL + '/api/jobs';

class JobServiceService {

    postJob(job){
        return axios.post(BASE_URL + '/create', job, {headers: authHeaders()});
    }

    getAllJobs(){
        return axios.get(BASE_URL+'/getAllJobs', {headers: authHeaders()});
    }



}

export default new JobServiceService();