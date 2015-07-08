var Bee = function() {
  Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
  //inherits Grub food property
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;
