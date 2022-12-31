
//one
// let parent={
//      alot(){
//         console.log(`${this.fname} ${this.lname}`);
//     },
//     assign(fname,lname,id,dept){
//         this.fname=fname;
//         this.lname=lname;
//         this.id=id;
//         this.dept=dept;
//     }
// }
// let child=Object.create(parent);
// child.assign("shahul","sk",102,"mba");
// console.log(parent);
// console.log(child)

// console.log(...child);

//two

// let arr=[1,2,'s','d','r',4];
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);
// //three

let array=[1,2,3,4,5,6,7];
let sum=0;
let arrayPrototype={
arrays(a){
    sum+=a;
    console.log(sum);
}
}
 
arrayPrototype.arrays.apply(null,array);


let a=[1,2,3,4,5]

const AddSum = {
    name: "EA16",
    add : function(a){
        let sum = 0;
        for(let i = 0 ; i < a.length ; i++){
            sum += a[i];
        }console.log(sum);
    }
}
AddSum.add(a);


class Employee {
  
    constructor(name, empId){
        this.name = name;
        this.empId = empId;
    }
}
class Manager extends Employee {
        manages(){
            console.log(`${this.name} with Employee Id ${this.empId} manages the operation`);
        }
       
 }
    
const rathore = new Manager("rathore",101);
console.log(rathore);