class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    let glyphs = string.split('')
    let acceptableString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-\' "
    let acceptableArray = acceptableString.split('')
    let filteredGlyphs = glyphs.filter(glyph => {
      return acceptableArray.find(validGlyph => {
        return validGlyph === glyph
      })
      })
    return filteredGlyphs.join('')
  }

  static titleize(string) {
    let words = string.split(' ')
    let firstWord = Formatter.capitalize(words[0])

    let smallWords = ["the","a", "an", "but", "of", "and", "for", "at", "by", "from"]

    let sentenceArray =  words.slice(1).map(word => {
      if (smallWords.find(invalidWord => {
        return word === invalidWord
      })) {
        return word
      } else {
        return Formatter.capitalize(word)
      }
    })
    sentenceArray.unshift(firstWord)

    return sentenceArray.join(' ')

  }
}