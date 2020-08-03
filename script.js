//text in the middle, cannot take more than 4 digits

//generate button click
document.getElementById("generateBtn").addEventListener("click", function(){
    let randomNumber = Math.floor(1000+Math.random()*9000);
    document.getElementById("pinNumber").value = randomNumber;
})

//typing the code


let eachButton = document.getElementsByClassName('button');



for(let i = 0; i < eachButton.length; i++) {
    eachButton[i].addEventListener("click", function() {
    document.getElementById("dialScreen").value = document.getElementById("dialScreen").value + eachButton[i].innerText; 
    console.log(eachButton[i].innerText);
  })
}



    
