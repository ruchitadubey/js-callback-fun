// function defination
function saYName(name , callback)
{

    console.log('hello' +"  "+ name); // {name is formal argument}
    //callback(name);
}

function sayHow(name){

    console.log(`how r uh ${name}`);
}
 
// call the function

 saYName ('kartik' ,sayHow('ruchi') ); // actual argument // callback function

 function greet()
 {

    console.log("hello world");

 }

 function sayName2(name){ //  name is formal arguments

    console.log('hello' +' '+ name);
 }

 // calling the function 
 setTimeout(greet , 2000); //2 sec ( actual arguments)
 sayName2('rutvik');
