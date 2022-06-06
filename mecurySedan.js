//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle
//this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    // Logic for load Passengers was cut off in assignment and not legible so copied from solution
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " does not have enough space to take all passengers.");

            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }

    start() {
        if (this.fuel > 0) {
            console.log("Engine has started.");
            return this.startEngine == true;
        }
        else {
            console.log("No fuel")
            return this.startEngine == false
        }
    }
    Service(mileage) {
        if (this.mileage > 30000) {
            console.log('Service Required')
            return this.scheduleService == true
        }
        else {
            console.log('No Service Required')
            return this.scheduleSerice == false;
        }
    }

}


// Test
let myCar = new Car('mercury', 'sedan', '1965', 'red', 40000)
myCar.start()
myCar.loadPassenger(6)
myCar.Service()

console.log(myCar)