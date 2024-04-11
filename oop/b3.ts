class Employees{
    name:string;
    protected company:string;
    private phone:number;
    constructor(name:string,company:string,phone:number){
        this.name=name;
        this.company=company;
        this.phone=phone;
    }
    printInfor(){
        console.log(this.name,this.company,this.phone);
    }
}
let employee1=new Employees('le anh quan','google',12345433456545);
employee1.printInfor();