//1
let student = {
    firstName: "Irina",
    lastName: "Umniakova",
    averageScore: 4.8,
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    },
    isGrantHolder() {
        if (this.averageScore >= 4) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
student.getFullName();
student.isGrantHolder();
function Aspirant() {
    this.__proto__.student = student;
    this.dissertationTopic = 'Our planet';
    this.isDissertationComplete = false;
    this.isGrantHolder = function () {
        return this.student.averageScore >= 4.5 && this.isDissertationComplete;
    }
}
let aspirant = new Aspirant();
console.log(aspirant.isGrantHolder()); // false
for (let key in aspirant) {
    console.log(key, aspirant.prototype=student);
}
//2
class Plane {
    constructor(name, isFlying = false) {
        this.name = name;
        this.isFlying = isFlying;
    }
    takeOff() {
        this.isFlying = true;
    }
    land() {
        this.isFlying = false;
    }
}
let airport = {
    planes: [],
    getFlyingPlanes() {
        return this.planes.filter(item => item.isFlying === true).length;
    }
}
let plane1 = new Plane("First");
let plane2 = new Plane("Killer");
let plane3 = new Plane("plane4");
let plane4 = new Plane("plane3");
plane2.takeOff();
airport.planes.push(plane1, plane2, plane3,plane4);
console.log(airport.getFlyingPlanes());