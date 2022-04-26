// Write your classes here

class Tree{
  constructor(species){
    this.species = species
  }

  static defination(){
    return `A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.`
  }
}

class Deciduous extends Tree{
  constructor(species, name){
    super(species)
    this.name = name
  }

  static defination(){
    return super.defination() + ` Deciduous trees shed their leaves annually.`
  }
}

class Evergreen extends Tree{
  constructor(species, name){
    super(species)
    this.name = name
  }

  static defination(){
    return super.defination() + ` Evergreens keep their leaves all year round.`
  }
}

let tree = new Deciduous("rosewood", "coco")
console.log(Deciduous.defination())
console.log(tree.name)