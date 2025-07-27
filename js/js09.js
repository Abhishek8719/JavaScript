// function check (){

//     const username = "hitesh"


//          console.log(this.username)
// }
// check();
 
// const obj ={
//     username :"hitesh",
//     age :23,
//     greet : function (){
//         console.log(this.age)
//     }
// }
// obj.greet()
// console.log(this)

const obj ={
    name :"hitesh",
    
   chai : function ()
    {
        console.log(name)
    }

}
obj.chai();