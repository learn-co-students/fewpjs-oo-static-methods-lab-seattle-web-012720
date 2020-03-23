class Formatter {
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)

  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }

  static titleize(string) {
    const list = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let words = string.split(' ');
    let output = '';
    output = output.concat(words[0][0].toUpperCase(), words[0].slice(1));
     for (let i = 1; i < words.length; i++) {
      if (list.find(key => key === words[i])) {
        output = output.concat(' ', words[i]); 
       } else {
        output = output.concat(' ', words[i][0].toUpperCase(), words[i].slice(1)); 
      } 
    }
    return output
  }

}