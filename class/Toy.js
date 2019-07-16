class Toy {
 
    constructor(type,) {
      this.type = type;
      this.setName = function(nb) { _nb = nb; } 
      this.getType = function() { return type; }
      this.isMoved = function() {console.log("im a toy");}
    }

}
module.exports = Toy;