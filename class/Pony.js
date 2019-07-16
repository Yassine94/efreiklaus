const Toy = require('./Toy')

class Pony extends Toy{   
     _nb = 1;
    constructor(type,_nb,id) {
      super(type);
      this._nb++
      this.id = this._nb;

    this.isMoved = function() { r console.log("Kamé Hamé Ha!!"); }

  
    }
  
    isMoved() {
        console.log("Kamé Hamé Ha!!")
      }
   
}
module.exports = Pony;