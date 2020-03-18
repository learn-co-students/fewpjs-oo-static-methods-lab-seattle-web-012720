class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9'-\s]/g, '');
  }

  static titleize(string) {
    const array = string.split(" ");
    const first = this.capitalize(array[0])
    const newArray = array.slice(1).map(word => {
      switch (word) {
        case "the":
        case "a":
        case "an":
        case "but":
        case "of":
        case "and":
        case "for":
        case "at":
        case "by":
        case "from":
          return word;
          break;
        default:
          return this.capitalize(word);
      } 
    });
    return first + " " + newArray.join(" ");
  }
}