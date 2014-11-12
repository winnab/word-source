var WordSource = require('./script.js')
describe("WordSource", function () {
  describe("when there are no words given", function () {
    it("throw a No Words error", function () {
      expect(function () {
        new WordSource("")
      }).toThrow(new Error('You did not provide any words.'));
    });
  });
  describe("nextWord()", function () {
    it("returns the next word in the stream", function () {
      var wordSource = new WordSource("lorem,ipsum,dolor");
      expect(wordSource.nextWord()).toBe("lorem");
      expect(wordSource.nextWord()).toBe("ipsum");
    });
    it("returns null when it reaches the end of the stream", function () {
      var wordSource = new WordSource("lorem");
      wordSource.nextWord();
      expect(wordSource.nextWord()).toBeNull();
    });
  });
  describe("count()", function () {
    it("return 0 when no words have been seen", function () {
      var wordSource = new WordSource("lorem,ipsum,dolor");
      expect(wordSource.count()).toBe(0);
    });
    it("returns the number of words that have been seen", function () {
      var wordSource = new WordSource("lorem,ipsum,dolor");
      wordSource.nextWord();
      expect(wordSource.count()).toBe(1);
    });
    it("is limited to the number of words provided", function () {
      var wordSource = new WordSource("lorem,ipsum,dolor");
      wordSource.nextWord();
      wordSource.nextWord();
      wordSource.nextWord();
      wordSource.nextWord();
      expect(wordSource.count()).toBe(3);
    });
  });
  describe("topWord()", function () {
    it("returns null when no words have been seen", function () {
      var wordSource = new WordSource("lorem,ipsum,dolor");
      expect(wordSource.topWord()).toBeNull();
    })
    it("returns the most seen word", function () {
      var wordSource = new WordSource("lorem,ipsum,dolor");
      wordSource.nextWord();
      expect(wordSource.topWord()).toBe("lorem");
    })
  })
});
