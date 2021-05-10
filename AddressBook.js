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

    /* @Description - To validate first name should start with captital character
     * To validate the name should have atleast 3 char
     * if name is not start with capital letter and if its not atleast 3 character its throw error
     * To used throw keyword for the invalid firstName */
      
    get firstName() { 
        return this.firstName;
     }
    set firstName(firstName) {
        let firstNameRegex = RegExp("^[A-Z]{1}{a-z}{3,}$");
        if (firstNameRegex.test(firstname))
        this.firstname = firstName;
        else throw 'Name is Incorrect';
    }
     /* @Description - To validate last name should start with captital character
     * To validate the name should have atleast 3 char
     * if name is not start with capital letter and if its not atleast 3 character its throw error
     * To used throw keyword for the invalid lastName */
    get lastName() {
        return this.lastName;
    }
    set lastName (lastName) {
        let lastNameRegex = RegExp('^[A-Z]{1}{a-z}{3,}$');
        if(lastNameRegex.test(lastName))
        this.lastName = lastname;
        else throw 'Name is Incorrect';
    }

     /* @Description - to validate address should start with captital letters or small letters
     * to used throw keyword for the invalid address */
    get address() { return this.address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this.address = address;
        else
            throw "Invalid address ";
    }

     /* @Description - to validate city should start with captital letters or small letters
     * to used throw keyword for the invalid city  */
    get city() { return this.city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this.city = city;
        else
            throw "Invalid city ";
    }

    /* @Description - to validate state should start with captital letters or small letters
     * to used throw keyword for the invalid state  */
    get state() { return this.state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this.state = state;
        else
            throw "Invalid state";
    }

    /* @Description - to validate zip  should start with numbers 
     * to used throw keyword for the invalid state  */
    get zip() { return this.zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip))
            this.zip = zip;
        else
            throw "Invalid zip ";
    }

    /* @Description - to validate phone number should start with numbers to allow max 10 digit
     * to used throw keyword for the invalid phone number  */
    get phoneNumber() { return this.phoneNumber; }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(phoneNumber))
            this.phoneNumber = phoneNumber;
        else
            throw "Invalid phoneNumber";
    }

    /* @Description - to validate email id  should start with small letter and have one numeric 
    * its should must have atleast one special character
     * to used throw keyword for the invalid emailId  */

    get email() { return this.email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this.email = email;
        else
            throw "Invalid email";
    }

    toString() {
        return " [firstName=" + this.firstName + ", lastName=" + this.lastName + ", address=" + this.address + ", state="
                + this.state + ", city=" + this.city + ", zipCode=" + this.zip + ", phoneNumber=" + this.phoneNumber + ", email=" + this.emailId + "]";
    }
}


    