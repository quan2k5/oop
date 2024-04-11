class VehiclesVersion2{
    name:string;
    protected year:number;
    private company:string;
    readonly id:number;
    constructor(id:number,name:string,year:number,company:string){
        this.id=id;
        this.name=name;
        this.year=year;
        this.company=company;
    }
    showInfor(){
        console.log(this.id,this.name,this.year,this.company);
    }
}
let vehicle3 =new VehiclesVersion2(12,'kamaz-245',2019,'kamaz');
console.log(vehicle3.showInfor());
