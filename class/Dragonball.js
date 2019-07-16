
const Figurine = require('./Figurine')

const DBHeroes = {
   SANGOKU: 'SANGOKU',
   BEJITA: 'BEJITA',
   BEERUS: 'BEERUS',
   KAMESENNIN: 'KAMESENNIN'
}

class DragonBall extends Figurine {
   constructor(_character) {
       var character = DBHeroes ;
    var _character = character
    this.setCharacter = function(character) { _character = character; }
    this.getCharacter = function() { return _character; }
    this.isMoved = function() {  console.log("Kamé Hamé Ha!!"); }
  
   }

   isMoved() {
     console.log("Kamé Hamé Ha!!")
   }
}


 module.exports = DragonBall;