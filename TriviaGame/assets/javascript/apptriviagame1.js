var answerkey = [
{name: '0', val: 'Halfium'},
{name: '1', val: 'Microsoft'},
{name: '2', val: 'Nibble'},
{name: '3', val: 'Graphical User Interface'},
{name: '4', val: 'Modulation and Demodulation'},
{name: '5', val: '90,000,000'},
{name: '6', val: 'Hibernate'},
{name: '7', val: 'Rattlesnake'},
{name: '8', val: 'b'},
{name: '9', val: 'Aardvark'}
];
var correctans =0 , wrongans =0;

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
$(document).on('click', 'input[type="radio"]', function(event) {
	var name = $(this).attr('name');
	var val = $(this).val();
	useranswers[name].val = val;
	//console.log(useranswers);
});
$(".btnsubmit").on('click', function(){
	debugger
	for (var i=0; i < answerkey.length; i++){
		if (answerkey[i].val == useranswers[i].val){
			correctans++;
		} else {
			wrongans++;
		}
	}
	console.log(correctans);
console.log(wrongans);
})
