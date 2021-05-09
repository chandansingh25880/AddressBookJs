/* @Description -To create contact class inside class we have create properties and create constructor.
 * Inside the constructor as a parameter passing the instance variable
 *for the initializing the instances set value with the possition */

class Contact {

    // properties
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    emaiId;

     // Constructor
    construtor(...params) {
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.emailId = params[7];
    }
}

    