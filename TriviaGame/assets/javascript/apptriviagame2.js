var trivia = [
	{"id":"0",
	"question":"What is the most commonly used element in computers today?",
	"radio1": "Halfium",
	"radio2": "Nuclear isomer",
	"radio3": "Zircon",
  	"answer": "Halfium",
  	"useranswer": ""},

	{"id":"1",
	"question":"What company is the largest producer of computer software for the personal computer?",
	"radio1": "Dell",
	"radio2": "Microsoft",
	"radio3": "Google",
  	"answer": "Microsoft",
  	"useranswer": ""},

	{"id":"2",
	"question":"What name is given to half of a Byte (4 bits)?",
	"radio1": "Bit",
	"radio2": "Byte",
	"radio3": "Nibble",
  	"answer": "Nibble",
  	"useranswer": ""},

	{"id":"3",
	"question":"What do the initials GUI stand for?",
	"radio1": "Graphical User Interaction",
	"radio2": "Graphical User Interface",
	"radio3": "Global User Interface",
  	"answer": "Graphical User Interface",
  	"useranswer": ""},
	
	{"id":"4",
	"question":"From the computer world: What does the word 'modem' abbreviate?",
	"radio1": "Modulation",
	"radio2": "Modulation and Demodulation",
	"radio3": "Demodulation",
  	"answer": "Modulation and Demodulation",
  	"useranswer": ""},
	
	{"id":"5",
	"question":"If the telephone company added one more digit to all the phone numbers in one area code, how many new phone numbers could potentially be added?",
	"radio1": "90,000,000",
	"radio2": "30,000",
	"radio3": "50,000",
  	"answer": "90,000,000",
  	"useranswer": ""},

	{"id":"6",
	"question":"Where do flies go in the winter? Do they die, fly to warmer climates, or hibernate?",
	"radio1": "Migrate",
	"radio2": "Hibernate",
	"radio3": "Die",
  	"answer": "Hibernate",
  	"useranswer": ""},

	{"id":"7",
	"question":"What slithering animal is named for the sound that it makes before striking?",
	"radio1": "Cobra",
	"radio2": "Rattlesnake",
	"radio3": "Vipers",
  	"answer": "Rattlesnake",
  	"useranswer": ""},
	
	{"id":"8",
	"question":"What type of wool comes from soft-haired llamas in Peru?",
	"radio1": "Camelidae",
	"radio2": "Alpaca",
	"radio3": "Vicugnas",
  	"answer": "Alpaca",
  	"useranswer": ""},

	{"id":"9",
	"question":"What is the first animal listed in the dictionary?",
	"radio1": "Anteater",
	"radio2": "Aardvark",
	"radio3": "Armadillo",
  	"answer": "Aardvark",
  	"useranswer": ""}
];
var count=30, displayAns=false;
function countdown(){
	var counter=setInterval(timer, 1000); //1000 will  run it every 1 second
	function timer()
	{
		count=count-1;
		if (count <= 0)
		{
		 clearInterval(counter);
		 count = 0;
		 //counter ended, do something here
		 answerTally();
		 return;
		}
		//Do code for showing the number of seconds here
		$(".startpara").html("Timer Remaining: <span id='timer'>"+count+"</span>");
	}
};
function answerTally(){
	if (displayAns == false){
		for (var i=0; i < answerkey.length; i++){
			displayAns = true;
			if (answerkey[i].val == useranswers[i].val){
				correctans++;
			} else {
				if (useranswers[i].val == ""){
					unanswered++;
				} else {	
					wrongans++;
				};
			};
		};
		$(".startpara").html("All Done! <br> Correct Answers: "+correctans +
			 "<br> Incorrect Answers: " + wrongans+ "<br> Unanswered: "+unanswered);
		$(".form-horizontal").css({"display":"none"});
	};
};
$(document).ready(function(){
	//debugger
	$(".form-horizontal").css("display", "none");
	// everytime you click on the button it pulls
	$('#start').on('click', function() {
		for (var i = 0; i <trivia.length; i++){
			countdown();
			$(".form-horizontal").css("display", "block");
		
			$('#question').html( trivia[i].question);
			$("input:radio").html(trivia[i].radio1);
			$('input:radio[data=radio1]').val(trivia[i].radio1);
			$("input:radio").html(trivia[i].radio2);
			$("input:radio").html(trivia[i].radio3);
		
		};
	});
});
