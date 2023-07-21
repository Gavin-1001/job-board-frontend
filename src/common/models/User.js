export default class Users{
    constructor(id, firstName, lastName, emailAddress, userGender, dateOfBirth, phoneNumber, homeCity, homeCountry, homeAreaCode, streetAddress, collegeDegree, collegeName, collegeGrade) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.userGender = userGender
        this.emailAddress = emailAddress;
        this.dateOfBirth = dateOfBirth;
        this.phoneNumber = phoneNumber;
        this.streetAddress = streetAddress;
        this.homeCity = homeCity;
        this.homeAreaCode = homeAreaCode;
        this.homeCountry = homeCountry;
        this.collegeDegree = collegeDegree
        this.collegeName = collegeName;
        this.collegeGrade = collegeGrade;
    }
}