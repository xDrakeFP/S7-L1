class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }
  active = true;
  compareAge = function (x) {
    if (this.age > x.age) {
      return `${this.firstName} è più vecchio di ${x.firstName}`;
    } else if (this.age < x.age) {
      return `${this.firstName} è più giovane di ${x.firstName}`;
    } else {
      return `${this.firstName} e ${x.firstName} hanno la stessa età`;
    }
  };
}

const paolo = new User("Paolo", "Rossi", 30, "Milano");
const luca = new User("Luca", "Bianchi", 28, "Genova");

console.log(paolo.compareAge(luca));
