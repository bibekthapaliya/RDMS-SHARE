
 function Employee()
{
    this.id;
    this.name;
    this.department;

    //private properties
    var salary;
    var age;





    //public properties



    this.setvalue=function(id,name,department,salary,age){
        this.id=id;
        this.name=name;
        this.department=department;

        //private properties
        var salary=salary;
        var age=age;


    }
    //public methods
    this.getSalary=function()
    {
        return salary;
    }
    this.getAge=function()
    {
        return age;
    }


    //public method
    this.iamPublicMethod = function()
    {
        console.log("I am a public method. I can be accessed from outside, and I can call any private mehtods or use any private properites within the parent function. Calling some private mehtod now...");
        iamPrivateMethod();
        anotherPrivateMethod();
    }


    //private methods
    var iamPrivateMethod = function()
    {
        console.log("I am a private method. If you see this text, then I must have been called within the parent function");
    }
    function anotherPrivateMethod()
    {
        console.log("I am also a private method. If you see this text, then I must have been called within the parent function");
    }
}

//Instantiating an employee object.
var e = new Employee();
e.setvalue(123,"Peng","Software Engineering", 99999,25);
//Directly access the the id, name and department because they are public properties.
console.log("ID: " + e.id);
console.log("Name: " + e.name);
console.log("Department: " + e.department);

//Calling public methods to get the value for salary and age becuase they are private properties.
console.log("Salary: " + e.getSalary());
console.log("Age: " + e.getAge());

//Calling a pulbic method
e.iamPublicMethod();

//Calling private mehtods and getting errors.
e.iamPrivateMethod();//will get error: Uncaught TypeError: Object [object Object] has no method 'iamPrivateMethod' since it is a private method
e.anotherPrivateMethod();//will get error: Uncaught TypeError: Object [object Object] has no method 'anotherPrivateMethod' since it is a private method
