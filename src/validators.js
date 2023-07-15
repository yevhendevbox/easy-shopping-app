function isString(value) {
  return typeof value === 'string';
}
function isNumber(value) {
  return typeof value === 'number';
}
function isNotEmptyString(value) {
  return isString(value) && value.length > 0;
}
function isNavLabelValid(label) {
  const NAV_LABELES = ['Home', 'Favorite'];
  return isNotEmptyString(label) && NAV_LABELES.includes(label);
}

export function isProductValid({ id, name, price, image, description }) {
  return [isNumber(id), isNotEmptyString(name), isNumber(price), isNotEmptyString(image), isNotEmptyString(description)].every(Boolean);
}