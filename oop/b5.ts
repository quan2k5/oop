class Department{
    readonly id:number;
    private name:string;
    private employee:string[];
    constructor(id:number,name:string,employee:string[]){
        this.id=id;
        this.name=name;
        this.employee=employee;
    }
    describe(){
        console.log(this.id ,this.name);
    }
}
let department1=new Department(12,'quan tri nhan su',['quan','duc','manh']);
department1.describe();