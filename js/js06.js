let ob = {
    name: 'Abhishek',
    age: 23,
    email: "cabhsihek@gmail.com",
    greet: function () {
        console.log("Hello from greet!");
    },
    innerObject: {
        name: "Aryaveer",
        age: 22,
        email: "aryaveer@gmail.com",
        greetInner: function () {
            console.log(this.age);
        }
    }
};

ob.greet();                  
ob.innerObject.greetInner(); 

