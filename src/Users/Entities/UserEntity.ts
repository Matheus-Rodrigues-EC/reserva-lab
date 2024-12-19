export class User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  isHeadmaster: boolean;
  isTeacher: boolean;
  school: string;

  constructor(
    username: string,
    password: string,
    firstName: string,
    lastName: string,
    email: string,
    isHeadmaster: boolean,
    isTeacher: boolean,
    school: string,
  ) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.isHeadmaster = isHeadmaster;
    this.isTeacher = isTeacher;
    this.school = school;
  }
}
