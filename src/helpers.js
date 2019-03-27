export const getGradient = value => {
  if (value < 0) {
    console.log(`Error: getGradient got negative value`);
    return '#000000';
  }
  const modVal = value % 768;
  let r, g, b;
  if (modVal < 256) {
    r = 255 - modVal;
    g = modVal;
    b = 0;
  } else if (modVal < 512) {
    r = 0;
    g = 256 - (modVal % 256);
    b = modVal % 256;
  } else {
    r = modVal % 256;
    g = 0;
    b = 256 - (modVal % 256);
  }
  return String.prototype.concat(
    '#',
    r.toString(16).padStart(2, '0'),
    g.toString(16).padStart(2, '0'),
    b.toString(16).padStart(2, '0'),
  );
};
