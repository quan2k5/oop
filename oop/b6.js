"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    showSong() {
        console.log(this.id, this.name, this.length);
    }
    set updateName(name) {
        this.name = name;
    }
    set updatelength(length) {
        this.length = length;
    }
}
let song1 = new Song(12, 'phuc vu nuoc nga', 3.45);
song1.showSong();
song1.updateName = 'nuoc nga-to quoc toi';
song1.updatelength = 4.67;
song1.showSong();
