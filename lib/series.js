'use strict';

function Series(numberString){
  var stringNumberArray = numberString.split("");
  var answerArray = []
  stringNumberArray.forEach(function(each){
    answerArray.push(parseInt(each));
  });
  this.digits = answerArray;
};


Series.prototype.slices = function slices(num){
if (num > this.digits.length) {
     throw new Error("Slice size is too big.");
  }
 var howMany = Math.floor(this.digits.length/num);
 var slicesAnswerArray = [];
 var i;

 for(i=0; i<(this.digits.length - num + 1); i++){
    slicesAnswerArray.push(this.digits.slice(i, num+i));
    };
 return slicesAnswerArray;
};
