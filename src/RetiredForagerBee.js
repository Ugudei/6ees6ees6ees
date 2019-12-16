class RetiredForagerBee extends ForagerBee {
  // TODO..
  constructor(age,job, color){

    super(age,job, color);
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
    this.treasureChest = [];
  // TODO..
  };
  forage(){
    return 'I am too old, let me play cards instead'
  }
  gamble(treasure) {
    return this.treasureChest.push(treasure)
  }
};
