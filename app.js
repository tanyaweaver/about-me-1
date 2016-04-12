alert('Good day!  It is time to get to know Sean Champagne better.');

var userName = prompt('Before you get to know Sean Champagne better, what is your name?');
alert('Cool.  Nice to meet you ' + userName + '.  Let us begin!');

var answer1 = prompt('Does Sean have 2 dachshunds?').toUpperCase();

if (answer1 === 'Y' || answer1 === 'YES') {
  alert('BOOM!  They\'re freaking adorable.');
} else alert('WRONG!  They\'re freaking adorable.');
console.log('Sean has 2 dachshunds named Hansel and Wimbledon.');

var answer2 = prompt('Is Sean married?').toUpperCase();

if (answer2 === 'Y' || answer2 === 'YES')
{
  alert('Correct, ' + userName + '!  He is!');
} else alert('WRONG AGAIN, ' + userName + '.  You know nothing,' + userName + '.');
console.log('Sean is married to Bode.');

var answer3 = prompt('Is Sean on his way to becoming a master coder?').toUpperCase();

if (answer3 === 'Y' || answer3 === 'YES')
{
  alert('That is the right attitude!');
} else alert('That is the WRONG attitude.');
console.log('Sean is a future master coder.');

var answer4 = prompt('Does Sean live in Seattle?').toUpperCase();

if (answer4 === 'Y' || answer4 === 'YES')
{
  alert('Correct, ' + userName + '.  He lives on Queen Anne.');
} else alert('Incorrect, ' + userName + '.  He lives on Queen Anne.');
console.log('Sean lives in Seattle, Washington.');

var answer5 = prompt('Is \'Champagne\' really his last name?').toUpperCase();

if (answer5 === 'Y' || answer5 === 'YES')
{
  alert('Hahahah yes.  People ask him all the time.');
} else ('Incorrect.  It is true.  Champagne is his family name.');
console.log('Sean Champagne is the real Sean Champagne.');
