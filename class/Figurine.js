const Toy = require('./Toy')

class Figurine extends Toy{

    constructor(type,property,) {
        super(type);
      this.property = 'value';
 
    }
}
module.exports = Figurine;