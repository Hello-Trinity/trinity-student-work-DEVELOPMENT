let step = document.querySelector(".dynamic-number");
let message = document.getElementById('number-game-result');
let cnt = 0;
let original_number =parseInt(Math.random() * 100);
console.log(original_number);
function clickHandler(){
    cnt++;
    step.innerHTML = cnt;
    let number_user = document.getElementById("num").value;
    console.log(number_user);

    if(number_user < original_number){
        message.innerHTML = "Try entering greater number.";
    }

    else if(number_user > original_number){
        message.innerHTML = "Try entering smaller number";
    }
    else{
        message.innerHTML = "Correct guess. You win...";
    }
}
// var output_one = document.getElementById("msg_one");
// var output_two = document.getElementById("msg_two");
// var correct_num = Math.floor(Math.random()*101);
// var count = 0;



// function decider(){
//     var inum = document.getElementById("input_number").value
//     count = count + 1;
//     output_one.textContent = "Number of guesses you done " + count;

//     if(inum < correct_num){
//         output_two.textContent = "Try again with a Larger Number";
//     }
//     else if(inum > correct_num){
//         output_two.textContent = "Try again with a Smaller Number";
//     }
//     else if(inum == correct_num){
       
//         output_two.textContent = "Congratulations!!! You guessed it Right";
//         output_one.textContent = "You guessed it Rightly after " + count + " guesses";
//         alert("CONGRATULATIONS! You Guessed it Right");
//     }
    
//     else{
//         output_two.textContent = "Unexpected error occured";
//     }
// }