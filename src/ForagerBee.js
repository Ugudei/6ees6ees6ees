class ForagerBee extends Bee {
  // TODO..
  constructor(age,job){

    super(age,job);
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  // TODO..
  };
  forage(treasure) {
    return this.treasureChest.push(treasure)
  }
};
