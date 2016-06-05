var answerkey = [
{name: 'q1', val: 'Halfium'},
{name: 'q2', val: 'Microsoft'},
{name: 'q3', val: 'Nibble'},
{name: 'q4', val: 'Graphical User Interface'},
{name: 'q5', val: 'Modulation and Demodulation'},
{name: 'q6', val: '90,000,000'},
{name: 'q7', val: 'Hibernate'},
{name: 'q8', val: 'Rattlesnake'},
{name: 'q9', val: 'Alpaca'},
{name: 'q10', val: 'Aardvark'}
];
var useranswers=[];
$(document).on('click', 'input[type="radio"]', function(event) {
	var name = $(this).attr('name');
	var val = $(this).val();
	
	if (useranswers.length>0){
		debugger;
		for (key in useranswers){
			if (useranswers[key].name == "'"+name+"'") {
				useranswers[key].val =val;
			} else {
				useranswers.push({
				name: "'"+name+"'",
				val: "'" + val+"'"
				});
    		}
		} 
	} else {
		
		useranswers.push({
		name: "'"+name+"'",
		val: "'" + val+"'"
		});
	}
	
	//console.log("useranswers"+useranswers);
//} else {
//useranswers.push({
//		name: "'"+name+"'",
//		val: "'" + val+"'"
//		});
//}
});