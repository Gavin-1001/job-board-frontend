export default class Users{
    constructor(id, firstName, lastName, emailAddress, dateOfBirth, phoneNumber, homeCity, homeCountry, homeAreaCode, homeAddress, collegeDegree, collegeName, collegeGrade) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.homeAddress = homeAddress;
        this.homeCity = homeCity;
        this.homeAreaCode = homeAreaCode;
        this.homeCountry = homeCountry;
        this.collegeDegree = collegeDegree
        this.collegeName = collegeName;
        this.collegeGrade = collegeGrade;
    }
}