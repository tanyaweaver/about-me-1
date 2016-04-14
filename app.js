var counter = 0;
var answerCorrect = 0;

alert('Good day!  It is time to get to know Sean Champagne better.');

var userName = prompt('Before you get to know Sean Champagne better, what is your name?');
alert('Cool.  Nice to meet you ' + userName + '.  Let us begin!');
console.log(userName);

//questions for the visitor
var questions = ['Does Sean have 2 dachshunds?', 'Is Sean married?', 'Is \
Sean on his way to becoming a master coder?', 'Does Sean live in Seattle?', '\
Is \'Champagne\' really his last name?'];

//right answers
var rightAnswers = ['BOOM!  They\'re freaking adorable.', 'Correct! He is!', '\
That is the right attitude!', 'Correct! He lives on Queen Anne.', '\
Hahahah yes.  People ask him all the time.'];

//wrong answers
var wrongAnswers = ['WRONG!  They\'re freaking adorable.', '\
WRONG AGAIN! You know nothing!', 'That is the WRONG attitude.', 'Incorrect! He lives on Queen Anne.', '\
Incorrect.  It is true.  Champagne is his family name.'];

//declaring the function for Y/N questions
var question = function(visitor_prompt, Answer_Y, Answer_N){
  'use strict';
  var answer = prompt(visitor_prompt).toUpperCase();
  counter += 1;
  if (answer[0] === 'Y') {
    alert(Answer_Y);
    answerCorrect += 1;
  } else {alert(Answer_N);
  }
  console.log('User Response: ' + answer + '. Correct Response:  YES.');
};

//calling the 'question' function for Y/N questions
for(var i = 0; i < questions.length; i++) {
  question(questions[i], rightAnswers[i], wrongAnswers[i]);
}

//question 6
var questionSix = function(){
  'use strict';
  var tries = 0;
  counter++;
  while (tries < 3)
  {
    var answer6 = prompt('How many states has Sean visited?');
    if (parseInt(answer6) === 49)
    {
      alert('Well done!');
      tries += 5;
      answerCorrect++;
    }
    else if (isNaN(parseInt(answer6)) < 49 || answer6 > 49)
    {
      alert('Try again.');
      tries++;
    }
    else
    {
      alert('Unrecognized response.  Try again.');
      tries++;
    }
    console.log('User Response: ' + answer6 + ' Correct Response:  49');
  }
};

questionSix();

//question 7
var questionSeven = function(){
  'use strict';
  var answer7Array = ['WSECU', 'SMCU', 'VERITY CREDIT UNION', 'GESA CREDIT UNION'];
  var attempts = 0;
  counter++;

  while (attempts < 5) {
    var answer7 = prompt('Where has Sean worked?').toUpperCase();
    for (var i = 0; i < answer7Array.length; i++) {
      console.log(i);
      if (answer7 === answer7Array[i]) {
        alert('You are correct!');
        i = answer7Array.length;
        attempts = 5;
        answerCorrect++;
      }
    }
    alert('Sorry, ' + userName + ' please try again.');
    attempts++;
  };
  console.log('User Response: ' + answer7 + ' Correct Response: WSECU, SMCU, Verity Credit Union, or Gesa Credit Union');
  alert('Possible correct answers:  WSECU, SMCU, VERITY CREDIT UNION, GESA CREDIT UNION.');
};
questionSeven();

alert('You got ' + answerCorrect + ' correct out of ' + counter + ', well done ' + userName + '!  Thanks for playing!');
