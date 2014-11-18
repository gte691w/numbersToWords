describe('getNums', function() {
  it("returns the value of the number below twenty in words", function() {
    getNums("1").should.equal("one");
  });

  it("returns the value of the numbers twenty and above in words", function() {
    getNums("20").should.equal("twenty");
  });

});

describe('wordVals', function() {
  it("returns the value of the first number in words a single digit number", function() {
    wordVals("1").should.equal("one");
  });

  it("returns the value of the first two numbers in words for two digit numbers", function() {
    wordVals("52").should.equal("fifty two");
  });

  it("returns the value of a three digit number with the last number being a 0", function() {
    wordVals("120").should.equal("one hundred twenty");
  });
  it("returns the value of a three digit number with the last number being greater than 0", function() {
    wordVals("384").should.equal("three hundred eighty four");
  });
  it("returns the value of a three digit number with the second and third number being 0", function() {
    wordVals("100").should.equal("one hundred ");
  });
  it("returns the value of a three digit number with the second number being 1", function() {
    wordVals("310").should.equal("three hundred ten");
  });
  it("returns the value of a four digit number with the second number being greater than 0", function() {
    wordVals("1112").should.equal("one thousand one hundred twelve");
  });
  it("returns the value of a four digit number with the second number being 0", function() {
    wordVals("1012").should.equal("one thousand twelve");
  });
  it("returns the value of a four digit number with the second and third number being 0", function() {
    wordVals("1002").should.equal("one thousand two");
  });
  it("returns the value of a four digit number with the second,third, and fourth number being 0", function() {
    wordVals("1000").should.equal("one thousand ");
  });
  it("returns the value of a five digit number with the second,third, and fourth number being 0", function() {
    wordVals("50000").should.equal("fifty thousand ");
  });
  it("returns the value of a five digit number with the second,third, and fourth number being greater than 0", function() {
    wordVals("12551").should.equal("twelve thousand five hundred fifty one");
  });
  it("returns the value of a five digit number with a mixture of the digits being greater than or equal to 0", function() {
    wordVals("32050").should.equal("thirty two thousand fifty");
  });
  it("returns the value of a six digit number with a mixture of the digits being greater than or equal to 0", function() {
    wordVals("112120").should.equal("one hundred twelve thousand one hundred twenty");
  });
  it("returns the value of a six digit number with the first number greater than 0 and the rest equal to 0", function() {
    wordVals("500000").should.equal("five hundred  thousand ");
  });
  it("returns the value of a six digit number with a mixture of the digits being greater than or equal to 0", function() {
    wordVals("110120").should.equal("one hundred ten thousand one hundred twenty");
  });
  it("returns the value of a seven digit number with the second to last number being 0", function() {
    wordVals("1000000").should.equal("one million  ");
  });
  it("returns the value of a seven digit number with the second to fourth numbers being 0", function() {
    wordVals("1000324").should.equal("one million  three hundred twenty four");
  });
  it("returns the value of a seven digit number with the all numbers being greater than 0", function() {
    wordVals("1111324").should.equal("one million one hundred eleven thousand three hundred twenty four");
  });
  it("returns the value of a seven digit number with the a mixture of numbers being greater than or equal 0", function() {
    wordVals("1011304").should.equal("one million eleven thousand three hundred four");
  });
  it("returns the value of a eight digit number with the second to last number being 0", function() {
    wordVals("10000000").should.equal("ten million  ");
  });
  it("returns the value of a eight digit number with the second to fourth numbers being 0", function() {
    wordVals("10005324").should.equal("ten million five thousand three hundred twenty four");
  });
  it("returns the value of a eight digit number with the all numbers being greater than 0", function() {
    wordVals("11111324").should.equal("eleven million one hundred eleven thousand three hundred twenty four");
  });
  it("returns the value of a eight digit number with the a mixture of numbers being greater than or equal 0", function() {
    wordVals("45011304").should.equal("forty five million eleven thousand three hundred four");
  });
  it("returns the value of a nine digit number with the second to last number being 0", function() {
    wordVals("100000000").should.equal("one hundred  million  ");
  });
  it("returns the value of a nine digit number with the second to fourth numbers being 0", function() {
    wordVals("100005324").should.equal("one hundred  million five thousand three hundred twenty four");
  });
  it("returns the value of a nine digit number with the all numbers being greater than 0", function() {
    wordVals("311111324").should.equal("three hundred eleven million one hundred eleven thousand three hundred twenty four");
  });
  it("returns the value of a nine digit number with the a mixture of numbers being greater than or equal 0", function() {
    wordVals("411011304").should.equal("four hundred eleven million eleven thousand three hundred four");
  });
  it("returns the value of a ten digit number with the second to last number being 0", function() {
    wordVals("2000000000").should.equal("two billion   ");
  });
  it("returns the value of a ten digit number with the second to fourth numbers being 0", function() {
    wordVals("1000015324").should.equal("one billion  fifteen thousand three hundred twenty four");
  });
  it("returns the value of a ten digit number with the all numbers being greater than 0", function() {
    wordVals("4311111324").should.equal("four billion three hundred eleven million one hundred eleven thousand three hundred twenty four");
  });
  it("returns the value of a ten digit number with the a mixture of numbers being greater than or equal 0", function() {
    wordVals("8411011304").should.equal("eight billion four hundred eleven million eleven thousand three hundred four");
  });
  it("returns the value of a eleven digit number with the second to last number being 0", function() {
    wordVals("90000000000").should.equal("ninety billion   ");
  });
  it("returns the value of a eleven digit number with the second to fourth numbers being 0", function() {
    wordVals("20000015324").should.equal("twenty billion  fifteen thousand three hundred twenty four");
  });
  it("returns the value of a eleven digit number with the all numbers being greater than 0", function() {
    wordVals("45311111324").should.equal("forty five billion three hundred eleven million one hundred eleven thousand three hundred twenty four");
  });
  it("returns the value of a eleven digit number with the a mixture of numbers being greater than or equal 0", function() {
    wordVals("88411011304").should.equal("eighty eight billion four hundred eleven million eleven thousand three hundred four");
  });
  it("returns the value of a eleven digit number with the second to last number being 0", function() {
    wordVals("900000000000").should.equal("nine hundred  billion   ");
  });
  it("returns the value of a eleven digit number with the second to fourth numbers being 0", function() {
    wordVals("200000015324").should.equal("two hundred  billion  fifteen thousand three hundred twenty four");
  });
  it("returns the value of a eleven digit number with the all numbers being greater than 0", function() {
    wordVals("999999999999").should.equal("nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
  });
  it("returns the value of a eleven digit number with the a mixture of numbers being greater than or equal 0", function() {
    wordVals("888411011304").should.equal("eight hundred eighty eight billion four hundred eleven million eleven thousand three hundred four");
  });
  it("returns the maximum value of a twelve digit number", function() {
    wordVals("1000000000000").should.equal("one trillion");
  });
  it("returns the maximum value of a twelve digit number", function() {
    wordVals("1000000000001").should.equal("Number cannot exceed one trillion");
  });

});

describe('numCheck', function() {
  it("checks to see if the input is a valid number", function() {
    numCheck("123").should.equal(true);
  });
  it("checks to see if the input is a valid number", function() {
    numCheck("123F").should.equal(false);
  });
  it("checks to see if the input is a valid whole number", function() {
    numCheck("123.3").should.equal(false);
  });
 }); 