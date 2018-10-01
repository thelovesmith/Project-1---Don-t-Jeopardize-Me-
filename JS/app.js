console.log('JS is active')

const htmlQuestions = [
  {
    question: 'What does HTML stand for?',
    correctAnswer: 'Hyper Text Markup Language',
    wrongAnswer1: 'Hyperlinks and Text Markup Language',
    wrongAnswer2: 'Home Tool Markup Language',
    wrongAnswer3: '',
    value: 200
  },
  {
    question: 'Choose the correct HTML element for the largest heading',
    correctAnswer: '<h1>',
    wrongAnswer1: '<h6>',
    wrongAnswer2: '<head>',
    wrongAnswer3: '<heading>',
    value: 400
  },
  {
    question: 'The aside HTML element is used mostly to define what type of content?',
    correctAnswer: 'Secondary content',
    wrongAnswer1: 'Comments',
    wrongAnswer2: 'A description of a text',
    wrongAnswer3: 'Main content',
    value: 600
  },
  {
    question: 'What is the correct syntax to open a link in a new tab/browser window?',
    correctAnswer: '<a href="url" target="_blank">',
    wrongAnswer1: '<a href="url" target="new">',
    wrongAnswer2: '<a href="url" new>',
    wrongAnswer3: '<a href="url" src="_blank">',
    value: 800
  },
  {
    question: 'In HTML, type of content are onblur and onfocus considered?',
    correctAnswer: 'Event attributes',
    wrongAnswer1: 'HTML elements',
    wrongAnswer2: 'Style attributes',
    wrongAnswer3: 'Event listeners',
    value: 100
  }
  
];






//Functions for highlighting buttons when mouse passes over them using Vanilla JS//
// function focusFunction() {
//   document.getElementById("myInput").style.background = "yellow";
// }
// function blurFunction() {
//   document.getElementById("myInput").style.background = "linear-gradient(#E02F63, rgba(224, 103, 87, .5), #E58960, rgba(225, 169, 157, .7),rgba(47, 77, 224, .4))";
// }
//Functions for highlighting buttons when mouse passes over them using JQuery//
// let $example = $('#example');
// $example.mouseout(function(){
//   $example.css('background', 'linear-gradient(#E02F63, rgba(224, 103, 87, .5), #E58960, rgba(225, 169, 157, .7),rgba(47, 77, 224, .4))');
// })
// $example.mouseover(function(){
//   $example.css('background', 'yellow');
// })
//For loops for buttons to highlight when mouse passes over them//
let $button = $('button');
for (let i = 0; i < $button.length; i++) {
  $($button[i]).mouseover(function () {
    $($button[i]).css('background', 'linear-gradient( #22107F, #856DFF, #4521FF, #371ACC, #42377F)');
  })
}
for (let i = 0; i < $button.length; i++) {
  $($button[i]).mouseout(function () {
    $($button[i]).css('background', 'linear-gradient(#E02F63, rgba(224, 103, 87, .5), #E58960, rgba(225, 169, 157, .7),rgba(47, 77, 224, .4))');
  })
}







bootbox.alert("Please click the spaceship to start the game.....");