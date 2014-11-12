function WordSource(string) {
 if (!string) {
  throw new Error('You did not provide any words.');
 }
  this.words = string.split(',');
  this.seenCount = 0;
  this.seen = {};
}

WordSource.prototype.nextWord = function () {
  if ( !this.words.length ) {
    return null;
  }
  var currentWord = this.words.shift();
  if (this.seen[currentWord]) {
    this.seen[currentWord] += 1;
  } else {
    this.seen[currentWord] = 1;
  }
  this.seenCount += 1;
  return currentWord;

};

WordSource.prototype.count = function () {
  return this.seenCount;
};

WordSource.prototype.topWord = function () {
  var dictionary = this.seen;
  var topWord = Object.keys(dictionary).reduce(function (ret, key) {
    var count = dictionary[key];
    if (count > ret.count ) {
      return {
        word: key,
        count: count
      };
    }
    return ret;
  }, {
    word: null,
    count: 0
  });
  return topWord.word;
};

module.exports = WordSource;
