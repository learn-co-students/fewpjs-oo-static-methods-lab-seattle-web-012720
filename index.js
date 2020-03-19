class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]/g, "")
  }
  static titleize(string){
    const split = string.split(' ')
    const badArray = ['the','a','an','but','of','and','for','at','by','from']
    for(let i = 0; i < split.length; i++){
      if(!badArray.includes(split[i])){
        split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1)
      }
    }
    split[0] = split[0][0].toUpperCase() + split[0].slice(1)
    return split.join(' ')
  }
}