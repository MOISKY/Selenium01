function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
document.write('<input id = "ireferencia" name = "referencia" value ="'+random(1,5)+'"//>');
