

// Prototype Refactor

// 1. Copy and paste your code or the solution from yesterday
// /*

//   === GameObject ===
//   * createdAt
//   * name
//   * dimensions (These represent the character's size in the video game)
//   * destroy() // prototype method that returns: `${this.name} was removed from the game.`
// */


// const GameObject = function(attrs) {
//     this.createdAt = attrs.createdAt
//     this.name = attrs.name
//     this.dimensions = attrs.dimensions
//     this.destroy = function() {
//       return `${this.name} was removed from the game`
//   }
//   }
//   /*
//     === CharacterStats ===
//     * healthPoints
//     * takeDamage() // prototype method -> returns the string '<object name> took damage.'
//     * should inherit destroy() from GameObject's prototype
//   */


//   const CharacterStats = function(characterObject) {
//     GameObject.call(this, characterObject)
//     this.healthPoints = characterObject.healthPoints
//     this.takeDamage = function() {
//    return `${this.name} took damages`
//   }
//   }
  
//   CharacterStats.prototype = Object.create(GameObject.prototype)
//   /*=== Humanoid (Having an appearance or character resembling that of a human.) ===
//     * team
//     * weapons
//     * language
//     * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
//     * should inherit destroy() from GameObject through CharacterStats
//     * should inherit takeDamage() from CharacterStats
//   */




// const Humanoid = function(humanoidObject) {
//     CharacterStats.call(this, humanoidObject)
//     this.team = humanoidObject.team
//     this.weapons = humanoidObject.weapons
//     this.language = humanoidObject.language
//     this.greet = function() {
//       return `${this.name} offers a greeting in ${this.language}`
//   }
//   }
//   Humanoid.prototype = Object.create(CharacterStats.prototype)
   
//   /*
//     * Inheritance chain: GameObject -> CharacterStats -> Humanoid
//     * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
//     * Instances of CharacterStats should have all of the same properties as GameObject.
// Test you work by un-commenting these 3 objects and the list of console logs below:
//2. Your goal is to refactor all of this code to use ES6 Classes. The //console.log() statements should still return what is expected of them.
class GameObject {
    constructor(attrs) {
    this.createdAt = attrs.createdAt
    this.name = attrs.name
    this.dimensions = attrs.dimensions
    this.destroy = function() {
      return `${this.name} was removed from the game`
    }
    }
  }
  class CharacterStats extends GameObject {
    constructor(attrs) {
      super(attrs)
      this.healthPoints = attrs.healthPoints
    }
    takeDamage () {
     return `${this.name} took damages`
    }
    greet(GameObject) {
      return `${GameObject.name} offers a greeting in ${GameObject.language}`
    }
  }
  
  
  
  class Humanoid extends CharacterStats {
    constructor(attrs) {
      super(attrs)
      this.team = attrs.team
      this.weapons = attrs.weapons
      this.language = attrs.language
    }
  }
  const mage = new CharacterStats({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 1,
          height: 1,
        },
        healthPoints: 5,
        name: 'Bruce',
        team: 'Mage Guild',
        weapons: [
          'Staff of Shamalama',
        ],
        language: 'Common Tongue',
      });
  
      const swordsman = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 2,
          width: 2,
          height: 2,
        },
        healthPoints: 15,
        name: 'Sir Mustachio',
        team: 'The Round Table',
        weapons: [
          'Giant Sword',
          'Shield',
        ],
        language: 'Common Tongue',
      });
    
  
  
      const archer = new Humanoid({
        createdAt: new Date(),
        dimensions: {
          length: 1,
          width: 2,
          height: 4,
        },
        healthPoints: 10,
        name: 'Lilith',
        team: 'Forest Kingdom',
        weapons: [
          'Bow',
          'Dagger',
        ],
        language: 'Elvish',
      });
    
  
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet(archer)); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  