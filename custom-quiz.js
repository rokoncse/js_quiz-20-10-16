	
	//First Statement
	var questions = [{
		question: "What is the population of Brazil?",
		choices: ["145 million", "199 million", "182 million", "205 million"],
		multiple: true,
		correctAnswer: 1 
	}, {
		question: "What is 27*14?",
		choices: ["485", "634", "408", "528"],
		multiple: false,
		correctAnswer: 2
	}, {
		question: "What is the busiest train station in the world?",
		choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
		multiple: false,
		correctAnswer: 1
	}, {
		question: "What is the longest river?",
		choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
		multiple: false,
		correctAnswer: 0
	}, {
		question: "What is the busiest tube station in the London?",
		choices: ["Select your thana","Nawab gonj", "shibgonj", "nochol", "volahat", "gomosta pur"],
		correctAnswer: 0,
		selectable:true
	}];
	

	var currentQuestion = 4;
	var correctAnswers = 0;
	var quizOver = false;
	//..........................................................



	$(document).ready( function() {

		//display the first question
		displayCurrentQuestion();


	});



	//this display the current question and the choices
	function displayCurrentQuestion() {

		var question = questions[currentQuestion].question;
		var questionClass = $(".quizContainer > .question");
		var choiceList = $(".quizContainer > .choiceList");
		var selectList = $(".quizContainer > .selectList");
		var numChoices = questions[currentQuestion].choices.length; //4

		//set the question class text to the current question
		$(questionClass).text(question);

		// remove all current <li> elements if any
		$(choiceList).find("li").remove();

		var choice;
		for(i = 0; i < questions[currentQuestion].choices.length; i++){
			choice = questions[currentQuestion].choices[i];			
			if(questions[currentQuestion].multiple){
				$('<li><input type="checkbox" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
			}
			else if(questions[currentQuestion].selectable){
				selectList.append($("<option></option>").attr("value",i).text(choice)); 
			}
			else{
					$('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
			}
			
			
		}
		$(".questionDisplaying").text("Question No " + (currentQuestion + 1) + "out of: " + questions.length);
	}	

	