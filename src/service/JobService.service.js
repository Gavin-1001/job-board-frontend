import {BASE_API_URL} from "../api/baseUrl";
import axios from "axios";
import {authHeaders} from "../common/models/AuthHeaders";


const BASE_URL = BASE_API_URL + '/api/jobs';

class JobService {

    postJob(job){
        return axios.post(BASE_URL + '/create', job, {headers: authHeaders()});
    }

    getAllJobs(){
        return axios.get(BASE_URL+'/getAllJobs', {headers: authHeaders()});
    }


    deleteJob(job){
        // eslint-disable-next-line no-template-curly-in-string
        return axios.delete(BASE_URL + '/delete/' + job.id, {headers: authHeaders()});
    }

    editJob(job){
        return axios.put(BASE_URL + "/update/" + job.id, {headers: authHeaders()});
    }


/// todo -> delete works correctly, need to add update modal, and only show jobs based on user logged in on backend///
}

export default new JobService();