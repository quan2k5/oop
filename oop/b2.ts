class Students{
    id:number;
    age:number;
    email:string;
    constructor(id:number,age:number,email:string){
        this.id=id;
        this.age=age;
        this.email=email;
    }
    showInfor(){
        console.log(this.id,this.age,this.email);
    }
}
let student1= new Students(15,24,'lasjahss');
let student2= new Students(16,7,'sxdcfvgh');
let student3=new Students(19,45,"asdfgh");
let arr =[student1,student2,student3];
arr.forEach(e=>{
    e.showInfor();
})

