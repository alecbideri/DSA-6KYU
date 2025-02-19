Array.prototype.even = function () {
  return this.filter((num) => typeof num.Number.IsInteger === "number" && num % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((num) => typeof num === "number" && num % 2 !== 0);
};

Array.prototype.under = function (x) {
  return this.filter((num) => typeof num === "number" && num < x);
};

Array.prototype.over = function (x) {
  return this.filter((num) => typeof num === "number" && num > x);
};

Array.prototype.inRange = function (min, max) {
  return this.filter((num) => typeof num === "number" && num >= min && num <= max);
};

