function Words() {}

Words.prototype.count = function(words) {
  eachWord = format(words.toLowerCase())
  theseWords = {}
  for (var i = 0; i < eachWord.length; i += 1) {
    if (theseWords.hasOwnProperty(eachWord[i])) {
      theseWords[eachWord[i]] += 1
    } else {
      theseWords[eachWord[i]] = 1
    }
  }
  return theseWords
}

function format(words) {
  return words.trim().replace(/\s+/, " ").split(" ")
}

module.exports = Words
