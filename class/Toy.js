class Toy {
 
    constructor(type,) {
      this.type = type;
 
      this.getType = function() { return this.type; }
      this.isMoved = function() {console.log("Huuuuuuhu!");}
    }

}
module.exports = Toy;