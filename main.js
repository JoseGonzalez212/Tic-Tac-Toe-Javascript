const board = document.getElementById('plane');
var counter = 0;
var result = document.getElementById('result');

var row1col1 = document.getElementById('row1col1');
var row1col2 = document.getElementById('row1col2');
var row1col3 = document.getElementById('row1col3');

var row2col1 = document.getElementById('row2col1');
var row2col2 = document.getElementById('row2col2');
var row2col3 = document.getElementById('row2col3');

var row3col1 = document.getElementById('row3col1');
var row3col2 = document.getElementById('row3col2');
var row3col3 = document.getElementById('row3col3');

var Opic = '<img src="Opic.PNG">';
var Xpic = '<img src="Xpic.PNG">';
var Bpic = '<img src="blank.PNG">';

board.addEventListener('click', (event) => {
    const name = event.target;
    if (counter < 9){
        if (counter % 2 != 0){
            name.src = "Xpic.PNG";
        } else {
            name.src = "Opic.PNG";
        } 
    
    } else {
        //Game is over

        if (row1col1.innerHTML == row1col2.innerHTML  && row1col2.innerHTML  == row1col3.innerHTML){            
            // if(row1col1 === "")
            // console.log(row1col1.innerHTML);
            // console.log(Opic);
            // console.log(Xpic);
            if (row1col1.innerHTML == Bpic){
                result.innerHTML = 'No Winner';
            } else if(row1col1.innerHTML == Opic){
                result.innerHTML = 'Player O is the Winner!';
            } else if (row1col1.innerHTML == Xpic) {
                result.innerHTML = 'Player X is the Winner!';
            } else {
                console.log("Error")
            }

        } else  if (row2col1.innerHTML === row2col2.innerHTML  && row2col2.innerHTML  === row2col3.innerHTML){

            if (row2col1.innerHTML == Bpic){
                result.innerHTML = 'No Winner';
            } else if(row2col1.innerHTML == Opic){
                result.innerHTML = 'Player O is the Winner!';
            } else if (row2col1.innerHTML == Xpic) {
                result.innerHTML = 'Player X is the Winner!';
            } else {
                console.log("Error")
            }

        } else if (row3col1.innerHTML === row3col2.innerHTML  && row3col2.innerHTML  === row3col3.innerHTML){
            result.innerHTML = 'Winner!';

            if (row3col1.innerHTML == Bpic){
                result.innerHTML = 'No Winner';
            } else if (row3col1.innerHTML == Opic){
                result.innerHTML = 'Player O is the Winner!';
            } else if (row3col1.innerHTML == Xpic) {
                result.innerHTML = 'Player X is the Winner!';
            } else {
                console.log("Error")
            }

        } else if (row1col1.innerHTML === row2col1.innerHTML  && row2col1.innerHTML  === row3col1.innerHTML){

            if (row1col1.innerHTML == Bpic){
                result.innerHTML = 'No Winner';
            } else if(row1col1.innerHTML == Opic){
                result.innerHTML = 'Player O is the Winner!';
            } else if (row1col1.innerHTML == Xpic) {
                result.innerHTML = 'Player X is the Winner!';
            } else {
                console.log("Error")
            }

        } else if (row1col2.innerHTML === row2col2.innerHTML  && row3col2.innerHTML  === row3col2.innerHTML){
            result.innerHTML = 'Winner!';

            if (row1col2.innerHTML == Bpic){
                result.innerHTML = 'No Winner';
            } else if(row1col2.innerHTML == Opic){
                result.innerHTML = 'Player O is the Winner!';
            } else if (row2col1.innerHTML == Xpic) {
                result.innerHTML = 'Player X is the Winner!';
            } else {
                console.log("Error")
            }

        } else if (row1col3.innerHTML === row2col3.innerHTML  && row2col3.innerHTML  === row3col3.innerHTML){
            result.innerHTML = 'Winner!';

            if (row1col3.innerHTML == Bpic){
                result.innerHTML = 'No Winner';
            } else if(row1col3.innerHTML == Opic){
                result.innerHTML = 'Player O is the Winner!';
            } else if (row1col31.innerHTML == Xpic) {
                result.innerHTML = 'Player X is the Winner!';
            } else {
                console.log("Error")
            }

        } else if (row1col1.innerHTML === row2col2.innerHTML  && row2col2.innerHTML  === row3col3.innerHTML){

            if (row1col1.innerHTML == Bpic){
                result.innerHTML = 'No Winner';
            } else if(row1col1.innerHTML == Opic){
                result.innerHTML = 'Player O is the Winner!';
            } else if (row1col1.innerHTML == Xpic) {
                result.innerHTML = 'Player X is the Winner!';
            } else {
                console.log("Error")
            }

        } else if (row1col3.innerHTML === row2col2.innerHTML  && row1col3.innerHTML  === row3col1.innerHTML){

            if (row1col3.innerHTML == Bpic){
                result.innerHTML = 'No Winner';
            } else if(row1col3.innerHTML == Opic){
                result.innerHTML = 'Player O is the Winner!';
            } else if (row1col3.innerHTML == Xpic) {
                result.innerHTML = 'Player X is the Winner!';
            } else {
                console.log("Error")
            }

        } else {
            result.innerHTML = 'No winner!'
        }
    }
    
    counter++;
});