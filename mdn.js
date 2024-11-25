
// intro to classes and instances and methods and properties. 

class Rectangle { 
    // factory for makiking the instance 
    constructor(height, width){
        // me, myself, and i
        // the instance is called by the keyword "this"
        // properties: 
        this.height = height;
        this.width = width;
    }



    //method - a function inside a class 
    getArea(){
        return this.height * this.width;
    }
}

let r = new Rectangle(12,12);
console.log(r.width, r.height, r.getArea());
