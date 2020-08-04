let clickCount = 0;
const typedPin = document.getElementById("dialScreen");
const submitBtn = document.getElementById("submitBtn");

//generate button click
document.getElementById("generateBtn").addEventListener("click", function(){
    let randomNumber = Math.floor(1000 + Math.random()* 9000);
    document.getElementById("pinNumber").value = randomNumber;

    submitBtn.disabled = false;
    submitBtn.style.backgroundColor = "#495BC3";
    clickCount = 0;
    document.getElementById("actionLeft").innerHTML = (3-clickCount) + " try left";
    typedPin.value = "";
    document.getElementById("ifCorrect").style.display = "none";
    document.getElementById("ifNotCorrect").style.display = "none";
})
//typing the code
let eachButton = document.getElementsByClassName('button');
for(let i = 0; i < eachButton.length; i++) {
    eachButton[i].addEventListener("click", function() {
    if (typedPin.value.length < 4) {
        typedPin.value = typedPin.value + eachButton[i].innerText;
    }
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
//disabled submit button
function disableButton(){
    submitBtn.style.backgroundColor = "gray";
    submitBtn.disabled = true;
}
//submit button
submitBtn.addEventListener("click", function(){
    if(document.getElementById("pinNumber").value == ""){
        document.getElementById("actionLeft").innerHTML = "Please push the 'Generate Pin' button first";
    } else if (document.getElementById("pinNumber").value == typedPin.value){
        document.getElementById("ifCorrect").style.display = "block";
        document.getElementById("ifNotCorrect").style.display = "none";
        clickCount = 0;
        document.getElementById("actionLeft").innerHTML = "YAY!!..No need to try more";
        disableButton();
    } else {
        document.getElementById("ifNotCorrect").style.display = "block";
        document.getElementById("ifCorrect").style.display = "none";
        clickCount++;
        document.getElementById("actionLeft").innerHTML = (3-clickCount) + " try left";
        if (clickCount == 3) {
            disableButton(); 
        }
    }  
})
