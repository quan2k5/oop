class Vehicles{
    name :string;
   year :number;
   brand :string;
   constructor(name :string,year :number,brand :string){
    this.name=name;
    this.year=year;
    this.brand=brand;
   }
   showInfor(){
        console.log(this.name,this.year,this.brand);
    }
}
let vehicle1=new Vehicles('madxsd',2013,'toyota');
let vehicle2=new Vehicles('mdegrtf',2003,'yokohamka');
vehicle1.showInfor();
vehicle2.showInfor();