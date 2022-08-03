class Vehicle {
    constructor(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
}

honk(){
    return `beep beep`;
}

toString(){
    return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
}

}


class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year); 
        this.numWheels = 4;
    }
 
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2; 
    }
    revEngine(){
        return `vroom vroom`;
    }
}


class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity; 
    }
    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return `Only vehicles allowed`;
        }
        if(this.vehicles.length > this.capacity){
            return `We are full`;
        }
        this.vehicles.push(newVehicle);
        return `Added vehicle to garage`;
    }

}

