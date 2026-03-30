function camelize(str) {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}
