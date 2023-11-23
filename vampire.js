class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let count = 0;
    let currentVampire = this;

    while (currentVampire.creator) {
      count++;
      currentVampire = currentVampire.creator;
    }

    return count;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    return this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal;
  }

  // Returns the closest common ancestor of two vampires
  closestCommonAncestor(vampire) {
    const ancestors1 = this.getAncestors();
    const ancestors2 = vampire.getAncestors();

    let commonAncestor = null;

    for (const ancestor of ancestors1) {
      if (ancestors2.includes(ancestor)) {
        commonAncestor = ancestor;
        break;
      }
    }

    return commonAncestor;
  }

  // Helper method to get all ancestors of the current vampire
  getAncestors() {
    const ancestors = [];
    let currentVampire = this;

    while (currentVampire.creator) {
      ancestors.push(currentVampire.creator);
      currentVampire = currentVampire.creator;
    }

    return ancestors;
  }
}

module.exports = Vampire;
