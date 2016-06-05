var answerkey = [
{name: '0', val: 'a'},
{name: '1', val: 'b'},
{name: '2', val: 'c'},
{name: '3', val: 'b'},
{name: '4', val: 'b'},
{name: '5', val: 'a'},
{name: '6', val: 'b'},
{name: '7', val: 'b'},
{name: '8', val: 'b'},
{name: '9', val: 'b'}
];
var correctans =0 , wrongans =0, unanswered =0;

var useranswers = [
{name: '0', val: ''},
{name: '1', val: ''},
{name: '2', val: ''},
{name: '3', val: ''},
{name: '4', val: ''},
{name: '5', val: ''},
{name: '6', val: ''},
{name: '7', val: ''},
{name: '8', val: ''},
{name: '9', val: ''}
];
var count=120, displayAns=false;
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
	$(".form-horizontal").css("display", "none");
	$(".btnstart").on('click', function(){
		$(".form-horizontal").css({"display":"block"});
		//console.log(this);
		$(this).css("display", "none");
		countdown();
		
	})
	$(document).on('click', 'input[type="radio"]', function(event) {
		var name = $(this).attr('name');
		var val = $(this).val();
		useranswers[name].val = val;
	});
	$(".btnsubmit").on('click', function(){
		count =0;
		answerTally();
	})
});
