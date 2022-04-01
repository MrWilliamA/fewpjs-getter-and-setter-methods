// Add your Circle class here

class Circle {

    constructor(radius){
        this.radius = radius;
        
    }

    
    get diameter() {
        return this.radius = this.radius * 2;
    }

    get circumference() {
        const pie = Math.PI;
        const diameter = this.diameter
        const circumference = pie * diameter
        console.log(pie * diameter);
        return circumference;
    }

    get area() {
        circle.area = area
    }

    set diameter(diameter) {
        circle.diameter = diameter
    }

    set circumference(circumference) {
        circle.circumference = circumference
    }

    set area(area) {
        circle.area = area
    }
}