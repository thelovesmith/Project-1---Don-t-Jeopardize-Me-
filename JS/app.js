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
    value: 1000
  }
  
];

const cssQuestions = [
  {
    question: 'What does CSS stand for?',
    correctAnswer: 'Cascading Style Sheets',
    wrongAnswer1: 'Cascading Sheet Style',
    wrongAnswer2: 'Computer Style Sheets',
    wrongAnswer3: 'Cascading Styling Sheets',
    value: 200
  },
  {
    question: 'Which syntax is correct to select the food class?',
    correctAnswer: '.food',
    wrongAnswer1: '#food',
    wrongAnswer2: '$food',
    wrongAnswer3: 'food.',
    value: 400
  },
  {
    question: 'How do you insert a comment in a CSS file?',
    correctAnswer: '/* this is a comment */',
    wrongAnswer1: '// this is a comment //',
    wrongAnswer2: '<!--this is a comment-->',
    wrongAnswer3: '*/ this is a comment /*',
    value: 600
  },
  {
    question: 'Which one of these CSS properties can you use to give an element a linear-gradient background?',
    correctAnswer: 'background-image',
    wrongAnswer1: 'background-color',
    wrongAnswer2: 'color',
    wrongAnswer3: 'border-color',
    value: 800
  },
  {
    question: `Which of these lines of code will correctly style all elements with the ID 'menu'?`,
    correctAnswer: `#menu{
      color: black;
      font-size: 35px;
      display: flex;
      justify-content: center;
    }`,
    wrongAnswer1: `.menu{
      background-color: aqua;
      width: 1000px;
      display: flex;
      align-content: center;
    }`,
    wrongAnswer2: `#menu{
      color: black;
      font/size: 35px
      display: flex
      justify/content: center;
    }`,
    wrongAnswer3: `menu{
      color: black;
      font-size: 35px;
      display: flex;
      justify-content: center;
  }`,
    value: 1000
  }

]

const javascriptQuestions = [
  {
    question: `What is the result of the following code?  Number('9') === 9 `,
    correctAnswer: `True`,
    wrongAnswer1: `False`,
    wrongAnswer2: `TypeError`,
    wrongAnswer3: `Undefined`,
    value:200
  },
  {
    question: ` var myFood = ['apple', 'banana', 'pear'];
                myArr.length = 0;
                myArr.push('orange');
                console.log(myArr);
                Referencing the above code, what will be logged to the console?`,
    correctAnswer: `['orange']`,
    wrongAnswer1: `['apple', 'banana', 'pear']`,
    wrongAnswer2: `['apple', 'banana', 'pear', 'orange']`,
    wrongAnswer3: `['orange', 'apple', 'banana', 'pear']`,
    value: 400
  },
  {
    question: `Looking at the following code, what will be logged to the console?
                const shoo = () =>{
                  console.log('boohoo')
                }
                typeof (shoo)`,
    correctAnswer: `function`,
    wrongAnswer1: `NaN`,
    wrongAnswer2: `True`,
    wrongAnswer3: `Undefined`,
    value: 600
  },
  {
    question: `What is the result of this line of code?
                false == 0 `,
    correctAnswer:'True',
    wrongAnswer1: 'False',
    wrongAnswer2: 'Undefined',
    wrongAnswer3: 'TypeError',
    value: 800
  },
  {
    question: `Which of the following id correct to write 'I love to code!' to the webpage?`, 
    correctAnswer: ` document.write('I love to code!')`,
    wrongAnswer1: ` System.out.printIn('I love to code!')`,
    wrongAnswer2: ` print('I love to code!')`,
    wrongAnswer3: ` response.write('I love to code!')`,
    value: ``
  },
]



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

const foo = () => {
  console.log('some');
  return
}