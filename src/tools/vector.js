var MAX_VALUE = 1000000;

export const Vector = function (a, b) {
  var self = this;
  //initialize the vector based on parameters
  if (typeof a === "string" && typeof b == "undefined") {
    if (a.indexOf(" ") > 0) [self.x, self.y] = a.split(" ").map(Number);
    else
      [self.x, self.y] = a
        .replace("(", "")
        .replace(")", "")
        .split(",")
        .map(Number);
  } else if (typeof b == "undefined") {
    //if the b value is not passed in, assume a is the hash of a vector
    self.y = a % MAX_VALUE;
    self.x = (a - self.y) / MAX_VALUE;
  } else {
    //if b value is passed in, assume the x and the y coordinates are the constructors
    self.x = a;
    self.y = b;
  }

  //return a hash of the vector
  this.valueOf = function () {
    return self.x * MAX_VALUE + self.y;
  };
  this.toString = function () {
    return `(${self.x},${self.y})`;
  };
};

export const V = function (a, b) {
  return new Vector(a, b);
};


export function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }