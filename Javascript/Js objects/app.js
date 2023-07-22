//  var person = {
//  fullName:"joy jay",
//     age: 14,
//     hobbies:["coding", "playing games"],
//     issingle:true
//    }

//     console.log(person);

// document.getElementById('demo').innerHTML = person.fullName + "<br>" + person. hobbies[1];

//the this keyword  
// var person = {
//     fullName:"joy jay",
//        age: 14,
//        showDetails: function(){
//         alert(this. fullName + " is " + this.age);
//        }
//     }



//an object in an object 
var fruits ={
    mango: {
        color:"yellow"
        taste: "sweet"  
    }
}
document.write(fruits.mango.color);