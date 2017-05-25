
function object(o){
    function F(){

    }
    F.prototype=o;
    return new F();

}

function  Person() {
    this.name="Bibek"

}
Person.prototype.getName=function(){
    return this.name;

};
var papa=new Person();

var kid =object(papa);

console.log(kid.getName())  ;


kid.age=5;
kid.name="asha";

kid.getAge=function(){
    return this.age;
}
var ekid=object(kid);
console.log(ekid.getName());
console.log(ekid.getAge());
