export default class AuthUser {
    constructor(username, password, isJobSeeker, role, token, id){
        this.username = username;
        this.password = password;
        this.isJobSeeker = isJobSeeker;
        this.role = role;
        this.token = token;
        this.id = id;
    }
}