export default class Job{
    constructor(id, jobTitle, jobDescription, jobSalary, jobLocation, jobStartDate, jobQualifications, jobCategory){
        this.jobTitle = jobTitle;
        this.jobDescription = jobDescription
        this.jobSalary = jobSalary;
        this.jobLocation = jobLocation;
        this.jobStartDate = jobStartDate;
        this.jobQualifications = jobQualifications;
        this.jobCategory = jobCategory;
        this.id = id;
    }
}