const { toCamelCase, toSnakeCase, toPascalCase, toUpperCase } = require('js-convert-case');

export default convertWord = (word) => {
  return [
    toCamelCase(word),
    toPascalCase(word),
    toSnakeCase(word),
    toUpperCase(toSnakeCase(word))
  ]
}
