/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
class Tops{
  constructor(// Defines parameters:
    color,
    size,
    design,
    yearOfPurchase,
    status,// true= keep, false = let go


  ){// defind properties
    this.color = color;
    this.size = size;
    this.design = design;
    this.yearOfPurchase = yearOfPurchase;
    this.status = status;
   
  }

  calcYearsOfOwn(thisYear){
      return thisYear - this.yearOfPurchase;
  }

  statusOfKeeping(statusLike){
    if(!statusLike){
    this.status = false;
}
  }

    
}
export default Tops;