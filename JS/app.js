//Alert to inform users how to start the game//




  
////////////////////////////////////////////////////////////
//Arrays holding question objects//
const htmlQuestions = [
  {
    question: 'What does HTML stand for?',
    correctAnswer: 'Hyper Text Markup Language',
    wrongAnswer1: 'Hyperlinks and Text Markup Language',
    wrongAnswer2: 'Home Tool Markup Language',
    wrongAnswer3: 'Hyper Text Marking Language',
    value: 200
  },
  {
    question: 'Choose the correct HTML element for the largest heading',
    correctAnswer: '< h1 >',
    wrongAnswer1: '< h6 >',
    wrongAnswer2: '< head >',
    wrongAnswer3: '< heading >',
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
    correctAnswer: '< a href="url" target="_blank" >',
    wrongAnswer1: '< a href="url" target="new" >',
    wrongAnswer2: '< a href="url" new >',
    wrongAnswer3: '< a href="url" src="_blank" >',
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
    wrongAnswer2: '< !--this is a comment-- >',
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
    correctAnswer: `Undefined`,
    wrongAnswer1: `NaN`,
    wrongAnswer2: `True`,
    wrongAnswer3: `Function`,
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

const jqueryQuestions = [
  {
    question: `Where can you place the link to the Jquery library of your choice so it will load with your document?`,
    correctAnswer: `In the head or right before the body closing tag`,
    wrongAnswer1: `In the head`,
    wrongAnswer2: `In the body`,
    wrongAnswer3: `In the trash`,
    value: 200
  }, 
  {
    question: `Which jQuery code is correct if you wanted to change the background color of all the paragraph elements to magenta?`,
    correctAnswer: `$('p').css('background-color', 'magenta')`,
    wrongAnswer1: `$("p").style("background-color","red")`,
    wrongAnswer2: `$("p").manipulate("background-color","red")`,
    wrongAnswer3: `$("p").layout("background-color","red")`,
    value: 400
  }, 
  {
    question: `Given this JQuery code, how would you add a 'title' Id to the h1 element?
    $h1 = $('< h1/ >')`,
    correctAnswer: `$h1.attr('id', 'title')`,
    wrongAnswer1: `$'(h1)'.attr('id', 'title')`,
    wrongAnswer2: `h1.attr('id', 'title')`,
    wrongAnswer3: `$h1.attr.Id.Title()`,
    value: 600
  },  
  {
    question: `Which jQuery method is used to remove selected elements front he DOM?`,
    correctAnswer: `Both .detach() and .remove()`,
    wrongAnswer1: `.detach()`,
    wrongAnswer2: `.remove()`,
    wrongAnswer3: `.expend()`,
    value: 800
  }, 
  {
    question: `Look at the following selector: $("div p"). What does it select?`,
    correctAnswer: `All p elements inside a div element`,
    wrongAnswer1: `The first p element inside a div element`,
    wrongAnswer2: `All div elements with a p element`,
    wrongAnswer3: `The first div element with a p element`,
    value: 1000
  }
]

const cliQuestions  = [
  {
    question: `What does the command 'pwd' stand for in the command line interface?`,
    correctAnswer: `Print Working Directory`,
    wrongAnswer1: `Print Work Data`,
    wrongAnswer2: `Peanuts With Daiquiris`,
    wrongAnswer3: `Print Working Directories`,
    value: 200
  },
  {
    question: `If you want to list 'ALL' the contents that reside in the current directory, what command do you input in the CLI?`,
    correctAnswer: `ls -a`,
    wrongAnswer1: `ls -A`,
    wrongAnswer2: `ls`,
    wrongAnswer3: `ls -m`,
    value: 400
  }, 
  {
   question: `What git command can you use to 'fetch' data from the remote branch and merge it with your local version?`,
   correctAnswer: `git pull`,
   wrongAnswer1: `git push`,
   wrongAnswer2: `git fetch`,
   wrongAnswer3: `git init`,
   value: 600
  }, 
  {
   question: `Entering pwd into the console returns this line: /Users/student/Desktop/worlddomination/plans/death-ray1000 
   What command would let me create a index.html file in the 'plans' directory without moving from the current directory?`,
   correctAnswer: `touch ../index.html`,
   wrongAnswer1: `touch /death-ray1000/index.html`,
   wrongAnswer2: `mkdir ../index.html`,
   wrongAnswer3: `touch cd ../index.html`,
   value: 800
  }, 
  {
   question: `Which option below is the correct way to commit your staged content to your current working directory?`,
   correctAnswer: `git commit -m 'Commit 1 - I am committing to this disastrous project'`,
   wrongAnswer1: `git commit m "Commit 1.5 - Holy Moly, what am I getting myself into?"`,
   wrongAnswer2: `git commit`,
   wrongAnswer3: `git commit -m Commit 1 - I dont think I'm making this deadline`,
   value: 1000
  }
]

const codeQualityQuestions = [
  {
    question: `What does DRY refer to in programming and software engineering?`,
    correctAnswer: `Don't Repeat Yourself`,
    wrongAnswer1: `Dont Ruin Yourself`,
    wrongAnswer2: `The code needs some water`,
    wrongAnswer3: `Your code is missing something it needs to keep running`,
    value: 200
  },
  {
    question: `Who is a developer's best friend with whom he/she can rely on and confide in when they need answers?`,
    correctAnswer: `Google`,
    wrongAnswer1: `Coding Dictionary`,
    wrongAnswer2: `Their mother`,
    wrongAnswer3: `Their mentor`,
    value: 400
  },
  {
    question: `Which is the best option to use to name an array containing breakfast foods in Javascript?`,
    correctAnswer: `breakfastFoods`,
    wrongAnswer1: `foodBreak`,
    wrongAnswer2: `Breakfastfoods`,
    wrongAnswer3: `fastFoodBreak`,
    value: 600
  },
  {
    question: `Why is it considered good practice to use comments in your code?`,
    correctAnswer: `Comments help explain what is going on in your code. They can also make it easier for any developers who may work after you to edit or debug the code.`,
    wrongAnswer1: `It makes your code look more professional.`,
    wrongAnswer2: `It will help your code get more followers and likes.`,
    wrongAnswer3: `It helps the DOM parse through your code and recognize the your functions and objects you are using while also adding some basic encryption.`,
    value: 800
  },
  {
    question: `What is local variable?`,
    correctAnswer: `A local variable has local scope and is only accessible by the code inside the function where the variable was defined.`,
    wrongAnswer1: `A local variable is a variable that has been defined with 'let' and whose value can change.`,
    wrongAnswer2: `A local variable has global scope and is accessible by any code as long as the variable was defined with 'var'.`,
    wrongAnswer3: `A local variable is a variable that is only used once in the DOM.`,
    value: 1000
  }
]

  ////////////////////////////////////////////////////////////  ////////////////////////////////////////////////////////////  ////////////////////////////////////////////////////////////

//Player objects//
const playerOne = {
  score: 0,
  order: 0,
  name: '',
  timer: 0,
  playerOneTurn: false
  

};
const playerTwo = {
  score: 0,
  order: 0,
  name: '',
  timer: 0,
  playerTwoTurn: false
};

  ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////


  ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////


//When this function is invoked the buttons on the game board are activated and can be clicked by the user to produce a bootbox prompt which displays the questions on the screen// 
const clickQuestions = () => {
  //ROW 1
  //html
  $('#row1col1').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: htmlQuestions[0].question,
      inputType: 'select',
      inputOptions: [
        {
          text: htmlQuestions[0].wrongAnswer2,
          value: 2,
        },
        {
          text: htmlQuestions[0].wrongAnswer1,
          value: 4,
        },
        {
          text: htmlQuestions[0].wrongAnswer3,
          value: 3,
        },
        {
          text: htmlQuestions[0].correctAnswer,
          value: 200,
        }
        
      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 200) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row1col1').hide() 
        }
      }
    });
   
  })
  //css
  $('#row1col2').click(function(){
    //bootbox.alert('this button works');
    bootbox.prompt({
      title: cssQuestions[0].question,
      inputType: 'select',
      inputOptions: [
        {
          text: cssQuestions[0].wrongAnswer2,
          value: 2,
        },
        {
          text: cssQuestions[0].correctAnswer,
          value: 200,
        },
        {
          text: cssQuestions[0].wrongAnswer3,
          value: 3,
        },
        {
          text: cssQuestions[0].wrongAnswer1,
          value: 4,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 200) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row1col2').hide() 

        }
      }
    });
    
  })
  //javascript
  $('#row1col3').click(function(){
  // bootbox.alert('this button works');
    bootbox.prompt({
      title: javascriptQuestions[0].question,
      inputType: 'select',
      inputOptions: [
        {
          text: javascriptQuestions[0].wrongAnswer2,
          value: 2,
        },
        {
          text: javascriptQuestions[0].wrongAnswer1,
          value: 4,
        },
        {
          text: javascriptQuestions[0].wrongAnswer3,
          value: 3,
        },
        {
          text: javascriptQuestions[0].correctAnswer,
          value: 200,
        }

      ],
      callback: function (result) {
        // console.log(result);
        result = parseInt(result)
        if (result === 200) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row1col3').hide() 

        }
      }
    });
  })
  //jquery
  $('#row1col4').click(function(){
    // bootbox.alert('this button works');

    bootbox.prompt({
      title: jqueryQuestions[0].question,
      inputType: 'select',
      inputOptions: [
        {
          text: jqueryQuestions[0].correctAnswer,
          value: 200,
        },
        {
          text: jqueryQuestions[0].wrongAnswer2,
          value: 2,
        },
        {
          text: jqueryQuestions[0].wrongAnswer3,
          value: 3,
        },
        {
          text: jqueryQuestions[0].wrongAnswer1,
          value: 4,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 200) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row1col4').hide() 

        }
      }
    });
  })
  //cli
  $('#row1col5').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: cliQuestions[0].question,
      inputType: 'select',
      inputOptions: [
        {
          text: cliQuestions[0].correctAnswer,
          value: 200,
        },
        {
          text: cliQuestions[0].wrongAnswer2,
          value: 2,
        },
        {
          text: cliQuestions[0].wrongAnswer3,
          value: 3,
        },
        {
          text: cliQuestions[0].wrongAnswer1,
          value: 4,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 200) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row1col5').hide() 

        }
      }
    });
  })
  //code quality
  $('#row1col6').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: codeQualityQuestions[0].question,
      inputType: 'select',
      inputOptions: [
        {
          text: codeQualityQuestions[0].wrongAnswer3,
          value: 3,
        },
        {
          text: codeQualityQuestions[0].wrongAnswer2,
          value: 2,
        },
        {
          text: codeQualityQuestions[0].correctAnswer,
          value: 200,
        },
        {
          text: codeQualityQuestions[0].wrongAnswer1,
          value: 4,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 200) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row1col6').hide() 

        }
      }
    });
  })

  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  //ROW 2
  //html
  $('#row2col1').click(function(){
    //bootbox.alert('this button works');
    bootbox.prompt({
      title: htmlQuestions[1].question,
      inputType: 'select',
      inputOptions: [
        {
          text: htmlQuestions[1].wrongAnswer2,
          value: 2,
        },
        {
          text: htmlQuestions[1].correctAnswer,
          value: 400,
        },
        {
          text: htmlQuestions[1].wrongAnswer3,
          value: 3,
        },
        {
          text: htmlQuestions[1].wrongAnswer1,
          value: 4,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 400) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row2col1').hide() 
        }
      }
    });

  })
  //css
  $('#row2col2').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: cssQuestions[1].question,
      inputType: 'select',
      inputOptions: [
        {
          text: cssQuestions[1].correctAnswer,
          value: 400,
        },
        {
          text: cssQuestions[1].wrongAnswer2,
          value: 2,
        },
        {
          text: cssQuestions[1].wrongAnswer3,
          value: 3,
        },
        {
          text: cssQuestions[1].wrongAnswer1,
          value: 4,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 400) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row2col2').hide() 
        }
      }
    });
  })
  //javascript
  $('#row2col3').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: javascriptQuestions[1].question,
      inputType: 'select',
      inputOptions: [
        {
          text: javascriptQuestions[1].wrongAnswer1,
          value: 4,
        },
        {
          text: javascriptQuestions[1].wrongAnswer2,
          value: 2,
        },
        {
          text: javascriptQuestions[1].wrongAnswer3,
          value: 3,
        },
        {
          text: javascriptQuestions[1].correctAnswer,
          value: 400,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 400) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row2col3').hide() 
        }
      }
    });
  })
  //jquery
  $('#row2col4').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: jqueryQuestions[1].question,
      inputType: 'select',
      inputOptions: [
        {
          text: jqueryQuestions[1].correctAnswer,
          value: 400,
        },
        {
          text: jqueryQuestions[1].wrongAnswer2,
          value: 2,
        },
        {
          text: jqueryQuestions[1].wrongAnswer3,
          value: 3,
        },
        {
          text: jqueryQuestions[1].wrongAnswer1,
          value: 4,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 400) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row2col4').hide() 
        }
      }
    });
  })
  //cli
  $('#row2col5').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: cliQuestions[1].question,
      inputType: 'select',
      inputOptions: [
        {
          text: cliQuestions[1].wrongAnswer2,
          value: 2,
        },
        {
          text: cliQuestions[1].correctAnswer,
          value: 400,
        },
        {
          text: cliQuestions[1].wrongAnswer3,
          value: 3,
        },
        {
          text: cliQuestions[1].wrongAnswer1,
          value: 4,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 400) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row2col5').hide() 
        }
      }
    });
  })
  //code quality
  $('#row2col6').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: codeQualityQuestions[1].question,
      inputType: 'select',
      inputOptions: [
        {
          text: codeQualityQuestions[1].wrongAnswer2,
          value: 2,
        },
        {
          text: codeQualityQuestions[1].wrongAnswer1,
          value: 4,
        },
        {
          text: codeQualityQuestions[1].wrongAnswer3,
          value: 3,
        },
        {
          text: codeQualityQuestions[1].correctAnswer,
          value: 400,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        // console.log(result);
        if (result === 400) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row2col6').hide() 
        }
      }
    });
  })

  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////

  //ROW 3
  //html
  $('#row3col1').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: htmlQuestions[2].question,
      inputType: 'select',
      inputOptions: [
        {
          text: htmlQuestions[2].correctAnswer,
          value: 600
        },
        {
          text: htmlQuestions[2].wrongAnswer1,
          value: 4,
        },
        {
          text: htmlQuestions[2].wrongAnswer3,
          value: 3,
        },
        {
          text: htmlQuestions[2].wrongAnswer2,
          value: 2,
        }

      ],
      callback: function (result) {      
        result = parseInt(result)
        if (result === 600) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row3col1').hide() 
        }
      }
    });
  })
  //css
  $('#row3col2').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: cssQuestions[2].question,
      inputType: 'select',
      inputOptions: [
        {
          text: cssQuestions[2].wrongAnswer2,
          value: 2,
        },
        {
          text: cssQuestions[2].wrongAnswer1,
          value: 4,
        },
        {
          text: cssQuestions[2].wrongAnswer3,
          value: 3,
        },
        {
          text: cssQuestions[2].correctAnswer,
          value: 1,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 600) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row3col2').hide() 
        }
      }
    });
  })
  //javascript
  $('#row3col3').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: javascriptQuestions[2].question,
      inputType: 'select',
      inputOptions: [
        {
          text: javascriptQuestions[2].correctAnswer,
          value: 600
        },
        {
          text: javascriptQuestions[2].wrongAnswer1,
          value: 4,
        },
        {
          text: javascriptQuestions[2].wrongAnswer3,
          value: 3,
        },
        {
          text: javascriptQuestions[2].wrongAnswer2,
          value: 2,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 600) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row3col3').hide() 
        }
      }
    });  
  })
  //jquery
  $('#row3col4').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: jqueryQuestions[2].question,
      inputType: 'select',
      inputOptions: [
        {
          text: jqueryQuestions[2].wrongAnswer3,
          value: 3, 
        },
        {
          text: jqueryQuestions[2].wrongAnswer1,
          value: 4,
        },
        {
          text: jqueryQuestions[2].correctAnswer,
          value: 600,
        },
        {
          text: jqueryQuestions[2].wrongAnswer2,
          value: 2,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 600) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row3col4').hide() 
        }
      }
    });  

  })
  //cli
  $('#row3col5').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: cliQuestions[2].question,
      inputType: 'select',
      inputOptions: [
        {
          text: cliQuestions[2].correctAnswer,
          value: 600
        },
        {
          text: cliQuestions[2].wrongAnswer1,
          value: 4,
        },
        {
          text: cliQuestions[2].wrongAnswer3,
          value: 3,
        },
        {
          text: cliQuestions[2].wrongAnswer2,
          value: 2,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 600) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row3col5').hide() 
        }
      }
    });  
  })
  //code quality
  $('#row3col6').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: codeQualityQuestions[2].question,
      inputType: 'select',
      inputOptions: [
        {
          text: codeQualityQuestions[2].wrongAnswer3,
          value: 3,
        },
        {
          text: codeQualityQuestions[2].wrongAnswer1,
          value: 4,
        },
        {
          text: codeQualityQuestions[2].correctAnswer,
          value: 600,
        },
        {
          text: codeQualityQuestions[2].wrongAnswer2,
          value: 2,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 600) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row3col6').hide() 
        }
      }
    });  
  })

  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////

  //ROW 4
  //html
  $('#row4col1').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: htmlQuestions[3].question,
      inputType: 'select',
      inputOptions: [
        {
          text: htmlQuestions[3].wrongAnswer2,
          value: 2,
        },
        {
          text: htmlQuestions[3].wrongAnswer1,
          value: 4,
        },
        {
          text: htmlQuestions[3].wrongAnswer3,
          value: 3,
        },
        {
          text: htmlQuestions[3].correctAnswer,
          value: 800,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 800) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row4col1').hide() 
        }
      }
    });
  })
  //css
  $('#row4col2').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: cssQuestions[3].question,
      inputType: 'select',
      inputOptions: [
        {
          text: cssQuestions[3].wrongAnswer2,
          value: 2,
        },
        {
          text: cssQuestions[3].correctAnswer,
          value: 800,
        },
        {
          text: cssQuestions[3].wrongAnswer3,
          value: 3,
        },
        {
          text: cssQuestions[3].wrongAnswer1,
          value: 4,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 800) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row4col2').hide() 
        }
      }
    });
  })
  //javascript
  $('#row4col3').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: javascriptQuestions[3].question,
      inputType: 'select',
      inputOptions: [
        {
          text: javascriptQuestions[3].wrongAnswer2,
          value: 2,
        },
        {
          text: javascriptQuestions[3].wrongAnswer1,
          value: 4,
        },
        {
          text: javascriptQuestions[3].wrongAnswer3,
          value: 3,
        },
        {
          text: javascriptQuestions[3].correctAnswer,
          value: 800,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 800) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row4col3').hide() 
        }
      }
    });
  })
  //jquery
  $('#row4col4').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: jqueryQuestions[3].question,
      inputType: 'select',
      inputOptions: [
        {
          text: jqueryQuestions[3].wrongAnswer2,
          value: 2,
        },
        {
          text: jqueryQuestions[3].correctAnswer,
          value: 800,
        },
        {
          text: jqueryQuestions[3].wrongAnswer3,
          value: 3,
        },
        {
          text: jqueryQuestions[3].wrongAnswer1,
          value: 4,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 800) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row4col4').hide() 
        }
      }
    });
  })
  //cli
  $('#row4col5').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: cliQuestions[3].question,
      inputType: 'select',
      inputOptions: [
        {
          text: cliQuestions[3].correctAnswer,
          value: 800,
        },
        {
          text: cliQuestions[3].wrongAnswer2,
          value: 1,
        },
        {
          text: cliQuestions[3].wrongAnswer3,
          value: 3,
        },
        {
          text: cliQuestions[3].wrongAnswer1,
          value: 4,
        },
        {
          text: 'None of the above',
          value: 5,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 800) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row4col5').hide() 
        }
      }
    });
  })
  //code quality
  $('#row4col6').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: codeQualityQuestions[3].question,
      inputType: 'select',
      inputOptions: [
        {
          text: codeQualityQuestions[3].wrongAnswer2,
          value: 2,
        },
        {
          text: codeQualityQuestions[3].wrongAnswer3,
          value: 3,
        },
        {
          text: codeQualityQuestions[3].correctAnswer,
          value: 800,
        },
        {
          text: codeQualityQuestions[3].wrongAnswer1,
          value: 4,
        },
        {
          text: 'None of the above',
          value: 5,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 800) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row4col6').hide() 
        }
      }
    });
  })

  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////

  //ROW 5
  //html
  $('#row5col1').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: htmlQuestions[4].question,
      inputType: 'select',
      inputOptions: [
        {
          text: htmlQuestions[4].wrongAnswer2,
          value: 2,
        },
        {
          text: htmlQuestions[4].correctAnswer,
          value: 1000,
        },
        {
          text: htmlQuestions[4].wrongAnswer3,
          value: 3,
        },
        {
          text: htmlQuestions[4].wrongAnswer1,
          value: 1,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 1000) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row5col1').hide()
        }
      }
    });
  })
  //css
  $('#row5col2').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: cssQuestions[4].question,
      inputType: 'select',
      inputOptions: [
        {
          text: cssQuestions[4].wrongAnswer2,
          value: 2,
        },
        {
          text: cssQuestions[4].wrongAnswer1,
          value: 4,
        },
        {
          text: cssQuestions[4].wrongAnswer3,
          value: 3,
        },
        {
          text: cssQuestions[4].correctAnswer,
          value: 1000,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 1000) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row5col2').hide()
        }
      }
    });
  })
  //javascript
  $('#row5col3').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: javascriptQuestions[4].question,
      inputType: 'select',
      inputOptions: [
        {
          text: javascriptQuestions[4].correctAnswer,
          value: 1000,
        },
        {
          text: javascriptQuestions[4].wrongAnswer2,
          value: 2,
        },
        {
          text: javascriptQuestions[4].wrongAnswer3,
          value: 3,
        },
        {
          text: javascriptQuestions[4].wrongAnswer1,
          value: 1,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 1000) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row5col3').hide()
        }
      }
    });
  })
  //jquery
  $('#row5col4').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: jqueryQuestions[4].question,
      inputType: 'select',
      inputOptions: [
        {
          text: jqueryQuestions[4].wrongAnswer2,
          value: 2,
        },
        {
          text: jqueryQuestions[4].wrongAnswer1,
          value: 4,
        },
        {
          text: jqueryQuestions[4].wrongAnswer3,
          value: 3,
        },
        {
          text: jqueryQuestions[4].correctAnswer,
          value: 1000,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 1000) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row5col4').hide()
        }
      }
    });
  })
  //cli
  $('#row5col5').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: cliQuestions[4].question,
      inputType: 'select',
      inputOptions: [
        {
          text: cliQuestions[4].wrongAnswer2,
          value: 2,
        },
        {
          text: cliQuestions[4].correctAnswer,
          value: 1000,
        },
        {
          text: cliQuestions[4].wrongAnswer3,
          value: 3,
        },
        {
          text: cliQuestions[4].wrongAnswer1,
          value: 1000,
        },
        {
          text: 'None of the above',
          value: 5,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 1000) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row5col5').hide()
        }
      }
    });
  })
  //code quality
  $('#row5col6').click(function(){
    // bootbox.alert('this button works');
    bootbox.prompt({
      title: codeQualityQuestions[4].question,
      inputType: 'select',
      inputOptions: [
        {
          text: codeQualityQuestions[4].wrongAnswer2,
          value: 2,
        },
        {
          text: codeQualityQuestions[4].wrongAnswer1,
          value: 4,
        },
        {
          text: codeQualityQuestions[4].wrongAnswer3,
          value: 3,
        },
        {
          text: codeQualityQuestions[4].correctAnswer,
          value: 1000,
        }

      ],
      callback: function (result) {
        result = parseInt(result)
        if (result === 1000) {
          playerOne.score += result
          $('#player1 > h3').text(playerOne.score)
          $('#row5col6').hide()
        }
      }
    });
  })

}


//function to set and stop timer for game play// 
const timerFunction = () => {
  playerOne.timer += 1
  $('#timer > h2').text(playerOne.timer);
}
//Primary alert function when window  loads// 
bootbox.alert({
  message: "Welcome to Don't Jeopardize Me!! A fun way to find out how much you really don't know about programming. P.S. It's not too late to get that refund!!",
  callback: function () {
    namePlayers()
  }
})

//Function for buttons to change color when mouse moves over or moves away from them// 
const highlightButtons = () => {
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
}
//Function for invoking a prompt that lets the players put there names on the game board//
const namePlayers = () => {
  
  // bootbox.prompt('PLayer 2, please enter your name:', function(result){
  //   const $player2name = $('#player2 > h1');
  //   $player2name.remove()
  //   const $h1 = $('<h1/>')
  //   $('#player2').prepend($h1);
  //   $h1.append(result)
  //   playerTwo.name = result
  // })
  bootbox.prompt('Player 1, please enter our name:', function (result) {
    const $player1name = $('#player1 > h1');
    $player1name.remove()
    const $h1 = $('<h1/>');
    $('#player1').prepend($h1);
    $h1.append(result)
    playerOne.name = result
   
    bootbox.alert({
      message: `Hello ${playerOne.name}!! Let's test your programming knowledge!`,
      callback: function () {
        bootbox.alert("Once you start the game you will have 60 seconds to answer as many questions possible before your time is up. To start the game please click on our spaceship. Good luck!!!");
      }
    })
  })
}
//Function to decide player order//
// const playerOrder = () => { 
//   playerOne.order = Math.floor((Math.random() * 21))
//   playerTwo.order = Math.floor((Math.random() * 21))
//   if (playerOne.order > playerTwo.order) {
//     bootbox.alert('Player One!! Your turn is up!');
//     playerOneTurn = true
//   }
//   if (playerTwo.order > playerOne.order) {
//     bootbox.alert('PLayer Two!! Your turn is up!');
//     playerTwoTurn = true 
//   }
// }

//Function for deciding the winner of the game//
// const gameWinner = () => {
//   if (playerOne.score > playerTwo.score) {
//     bootbox.alert(`Congrats ${playerOne.name}!!! You are the winner!!`) 
//   }
//   if (playerTwo.score > playerOne.score) {
//     bootbox.alert(`Congrats ${playerTwo.name}!!! You are the winner!!`)
//   }
// }

//Start game function that is invoked when the alien spaceship Image is clicked//
const startGame = () => {
  if (playerOne.timer === 0) {
    
    const playerOneInterval = setInterval(() => {
      playerOne.playerOneTurn = true 
      timerFunction()
      if (playerOne.timer === 60) {
       
        if (playerOne.score >= 3000 && playerOne.score < 5000) {
          bootbox.alert(`${playerOne.name}, you did so-so. How about reviewing some more and trying again!!`)
        }
        if (playerOne.score >= 5000) {
          bootbox.alert(`Damn ${playerOne.name} you got the juice!!! Good job! Sadly the high score is 6000 so you still have lots to learn grass hopper!`)
        }
        if (playerOne.score <= 2000) {
          bootbox.alert(`Okay ${playerOne.name}..... you can do better. How about you give it another try.`)
        }
        bootbox.alert(`Your score is ${playerOne.score}`)
        bootbox.alert('YOUR TIME IS UP!!!')
        playerOne.playerOneTurn = false
        
        clearInterval(playerOneInterval)
      }
    }, 1000)
  }
  
  //PLayer To time interval//
  // if (playerOne.timer === 60) {
  //   bootbox.alert(`${playerTwo.name}, it is now your turn!! Show them who is boss!`)
  //   const playerTwoInterval = setInterval(() => {
  //     playerTwo.playerTwoTurn = true 
  //     timerFunction()
  //     if (playerOne.timer === 120) {
  //       bootbox.alert('YOUR TIME IS UP!!!')
  //       playerTwo.playerTwoTurn = false
  //       clearInterval(playerTwoInterval)
  //     }
  //   }, 1000)
    
  // }
  
 
  highlightButtons();
 
}

//invoking player name function//


//Event handlers and functions for Spaceship game start button//
const $spaceship = $('#spaceship')
$spaceship.click(startGame);
//Function that activate button functionality 
clickQuestions();
$spaceship.mouseover(function(){
  //function to highlight spaceship when mouse is over the image
  $spaceship.css('background', 'linear-gradient(#E02F63, rgba(224, 103, 87, .2), #E58960, rgba(225, 169, 157, .1),rgba(47, 77, 224, .05))')
})
//function to reverse the above mouseover function
$spaceship.mouseout(function(){
  $spaceship.css('background', 'none');
})













