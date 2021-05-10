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

    /* @Description - To create a new address book array and add new contacts  
     * To added new details for contact person using their name and edit it 
     * slice method are used to delete contact by using person name  */

    try {
        let detailsContact = new Array();
        detailsContact.push(new Contact("Chandan", "Singh", "milling tonia road", "lucknow", "Up", "226001",
            "91 8887719063", "chandan.1sep@gmail.com"));
            detailsContact.push(new Contact("Siddhant", "Singh", "Indira nagar", "lucknow", "Up", "226001",
            "91 8052636931", "siddhant20sep@gmail.com"));
            detailsContact.push(new Contact("Amit", 'Sharma', 'GomtiNagar', 'Lucknow', 'Up', '226001',
            '91 8452696969', 'amit@gmail.com'));
        
        
            console.log('contacts before being updated \n');
            detailsContact.forEach((contact) => console.log(contact.toString()));
            
            detailsContact.filter(contact => contact.firstName = "Siddhant").map(contact => contact.firstName = "Sourya");
            console.log('contacts after being updated \n');
            detailsContact.forEach((contact) => console.log(contact.toString()));
        
            let index = detailsContact.findIndex(contact => contact.firstName = "Amit");
            detailsContact.slice(index, 1);
            console.log('address book after deleting contact ');
            detailsContact.forEach((contact) => console.log(contact.toString()));

   /* @Descreption - search  city by person name which is persent in  contact  */
   function searchByCity() {
    if (searchByCity == 0) console.log('Search not found by city name ' + searchCity);
    else console.log("\n" + searchByCity + ' Search found by city name ' + searchCity);
}
let searchCity = "Lucknow";
let searchByCity = detailsContact.filter(contact => contact.city == searchCity).map(contact => contact).reduce(countPersonByCity, 0);
searchByCity();

 /* @Descreption - search  state by  name which is persent in  contact  */
function countPersonByCity(countByState, contact) {
    if (contact != null)
        countByState++;
    return countByState;
}
function searchByState() {
    if (serchByState == 0) console.log('Search not found by state name ' + searchState);
    else console.log('\n '+ serchByState + ' Search found by state name ' + searchState);
}
let searchState = "up";
let serchByState = detailsContact.filter(contact => contact.state == searchState).map(contact => contact).reduce(countPersonByCity, 0);
searchByState();

/*@Description - view person by city or state */
let contactCity = "Noida";
let contactState = "uttar pradesh";
let contactByCityArray = detailsContact.filter(contact => contact.city == contactCity).map(contact => contact);
contactByCityArray.forEach(contact => console.log(contact.toString()))
let contactByStateArray = detailsContact.filter(contact => contact.state == contactState).map(contact => contact);
contactByStateArray.forEach(contact => console.log(contact.toString()));

 /* @Description -  get the number of contact person i.e count by city or state */
 function countContacts(count, contact) {
    if (contact !== null)
        count++;
    return count;
}

let countByCity = detailsContact.filter(contact => contact.city !== null).map(contact => contact).reduce(countContacts, 0);
console.log("Count by City " + countByCity);
let countByState = detailsContact.filter(contact => contact.state !== null).map(contact => contact).reduce(countContacts, 0);
console.log("Count by City " + countByState);

}

}

catch (e) {
console.log('Regex test is fail \n' + e);
}