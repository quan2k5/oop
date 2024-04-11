// cac cach tao doi tuong trong js 
// class
// tao class
// class Person{
//     constructor(name,age,address){
//         this.name=name;
//         this.age=age;
//         this.address=address;
//     }
// }
// let std1=new Person('hoa',18,'nghe an');
//OOP gom 4 tinh chat
//1 tinh dong goi
//+che giau thong tin doi tuong==>nham giup cho cach trug cap den doi tuong dc bao matj hon
//2 tinh truu tuong
//3 tinh ke thua
//4 tinh da hinh
class Person{
    private name1:string;// mac dinh pham vi truy cap la public
    age1:number;
    private address:string;
    constructor (name:string,age:number,address:string){
        this.name1=name;
        this.age1=age;
        this.address=address;
    }
    // noi khai bao nhung method
    // vi du khai bao 1 phuong thu show thong tin usser
    showInfor():void{
        console.log('xin chaof'+this.name1+'toi nam nay'+this.age1);
        
    }
    showAge():void{
        console.log(this.age1);
    }
    getAge():number{
        return this.age1;
    }
    setAge(age:number){
        this.age1=age;
    }
    //getter
    get address1():string{
        return this.address;
    }
    set address1(address:string){
        this.address=address;
    }
}
let std1= new Person('minh thu',20,'vinh-nghe an');
// la 1intance cua class Person
std1.showInfor();
std1.age1=40;
console.log(std1.getAge());
std1.setAge(22);
console.log(std1.getAge());
// di set tuoi minh thu
// tnh dong goi:encapsulation
//access modifier:pham vi truy cap
//public
//private
//lay la get
// tao la set
//protected:khi class con ke thua class cha thi class con se co cac thuoc tinh cua class cha
//-khi pham vi truy cap laf protected thi class con ko truy cap dc thuoc tinh cua class ch
// di thay doi thong qua phuong thuc
std1.address1='Sai gon';
//hien thi dia chi
console.log(std1.address1);
