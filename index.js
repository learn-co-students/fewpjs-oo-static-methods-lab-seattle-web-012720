class Formatter {
  //add static methods here
  static capitalize(str){
    return str[0].toUpperCase() + str.slice(1)
  }

  static sanitize( string ) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(str){
    let words = str.split(' ');
    let noCaps = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let results = []
    let x
    for (let i=0; i<words.length; i++){
      if (i===0){
        x = words[i][0].toUpperCase() + words[i].slice(1)
      }
      else if (noCaps.includes(words[i])){
        x = words[i]
      } else {
        x = words[i][0].toUpperCase() + words[i].slice(1)
      }
      results.push(x)
    }
    return results.join(' ')  
  }
  
  /*
  static titleize(str){
    this.sanitize(this.capitalize(str))
  */
}

