
//Scopes of function

/*var x="something global";

function afunc(){
    console.log(x);
    var x="something local";
    console.log(x);


}
afunc();*/

var SharedPrivateClass = (function(){
    // our private data
    this.x='puskar';
    var private;

    // create the constructor
   function SharedPrivateClass () {}

    // add to the prototype
    SharedPrivateClass.prototype.getPrivate = function () {

        return private;
    }

    SharedPrivateClass.prototype.setPrivate = function (value) {
        private = value;
    }

    SharedPrivateClass.prototype.show=function(){

        console.log(private);


    }

    return SharedPrivateClass;



})();

var a = new SharedPrivateClass();

a.setPrivate(4); // a Sets private to 'foo'
console.log(x);
console.log("a:", a.getPrivate()); // "a: Default"
a.show();
console.log(a.hasOwnProperty("getPrivate")); // false. belongs to the prototype
console.log(a.private); // un