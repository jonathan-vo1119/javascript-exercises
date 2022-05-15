const ftoc = function(temp) {
  let conversion = (temp - 32) * 5/9;
  return Math.round(conversion * 10) / 10;    // round result to 1dp if nec.
};

const ctof = function(temp) {
  let conversion = (temp * 9/5) + 32;
  return Math.round(conversion * 10) / 10;    // round result to 1dp if nec.
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
