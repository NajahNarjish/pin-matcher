//text in the middle, cannot take more than 4 digits, problem why not randomNumber?

let clickCount = 0;
let typedPin = document.getElementById("dialScreen");

//generate button click
document.getElementById("generateBtn").addEventListener("click", function(){
    let randomNumber = Math.floor(1000+Math.random()*9000);
    document.getElementById("pinNumber").value = randomNumber;
    clickCount = 0;
    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "#495BC3";
    document.getElementById("actionLeft").innerHTML = (3-clickCount) + " try left";
    typedPin.value = "";
    document.getElementById("ifCorrect").style.display = "none";
    document.getElementById("ifNotCorrect").style.display = "none";

})


//typing the code
let eachButton = document.getElementsByClassName('button');
for(let i = 0; i < eachButton.length; i++) {
    eachButton[i].addEventListener("click", function() {
    typedPin.value = typedPin.value + eachButton[i].innerText; 
  })
}
//clear button
document.getElementById("clear").addEventListener("click", function(){
    let afterClear = typedPin.value.slice(0, -2);
    typedPin.value = afterClear;
})

//all-clear button
document.getElementById("allClear").addEventListener("click", function(){
    typedPin.value = "";
})


const submitBtn = document.getElementById("submitBtn");

//submit button
submitBtn.addEventListener("click", function(){
    if(document.getElementById("pinNumber").value == typedPin.value){
        document.getElementById("ifCorrect").style.display = "block";
        document.getElementById("ifNotCorrect").style.display = "none";
        clickCount = 0;
        document.getElementById("actionLeft").innerHTML = "YAY!!..No need to try more";
        submitBtn.style.backgroundColor = "gray";
        submitBtn.disabled = true;

    }else{
        document.getElementById("ifNotCorrect").style.display = "block";
        document.getElementById("ifCorrect").style.display = "none";

        clickCount++;

        document.getElementById("actionLeft").innerHTML = (3-clickCount) + " try left";

            if (clickCount >= 3){
            submitBtn.style.backgroundColor = "gray";
            submitBtn.disabled = true; 
            }
        }
    
})



//  function submitClick(){
//     if(document.getElementById("pinNumber").value == typedPin.value){
//         document.getElementById("ifCorrect").style.display = "block";
//         document.getElementById("ifNotCorrect").style.display = "none";
//     }else{
//         document.getElementById("ifNotCorrect").style.display = "block";
//         document.getElementById("ifCorrect").style.display = "none";
//     }
// }



    
