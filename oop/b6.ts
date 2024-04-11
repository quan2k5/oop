class Song{
    readonly id:number;
    private name :string;
    private length :number;
    constructor(id:number,name:string,length:number){
        this.id=id;
        this.name=name;
        this.length=length
    } 
    showSong(){
       console.log(this.id,this.name,this.length);
    }
    set updateName(name:string){
        this.name=name;
    }
    set updatelength(length:number){
        this.length=length;
    }
}
let song1= new Song(12,'phuc vu nuoc nga',3.45);
song1.showSong()
song1.updateName='nuoc nga-to quoc toi';
song1.updatelength=4.67;
song1.showSong()



