function Exam(){
    this.x='bibek';
    var y;



    this.setY=function(value){
        y=value;

    }

    this.getvalue=function(){
        return y;

    }
    Exam.prototype.show=function(){


        console.log(y);
    }


}
var a=new Exam();
a.setY(6);
a.show();
console.log(a.x);
console.log(a.y)//can't access the private variable
