function isString(value) {
  return typeof value === 'string';
}
function isDefined(value) {
  return typeof value !== 'undefined' && value !== null;
}
function isNumber(value) {
  return typeof value === 'number';
}
function isNotEmptyString(value) {
  return isString(value) && value.length > 0;
}

export function isProductValid({ id, title, price, description, category, image, rating }) {
  return [isNumber(id), isNotEmptyString(title), isNumber(price), isNotEmptyString(description), isNotEmptyString(category), isNotEmptyString(image), isDefined(rating)].every(Boolean);
}