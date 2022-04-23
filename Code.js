// Starts and displays the countdown for launch
function countDown(){
    currTime = 50;
    document.getElementById("countDownRes").innerHTML = currTime;

    for(var i = 0; i <= 10; i++){
        setTimeout(function(){
            if (currTime == 0){document.getElementById("countDownRes").innerHTML = "blastoff!!";}
            else if (currTime < 25){document.getElementById("countDownRes").innerHTML = "Warning Less than ½ way to launch, time left = " + currTime;}
            else{document.getElementById("countDownRes").innerHTML = "time left = " + currTime}

            currTime = currTime - 5;
        }, i * 5000);
    }
}

// disables the Start button after it is pressed
function start(){
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;

}
// disables the Stop button after it is pressed
function stop(){
    console.log("stop() method started");
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
    clearInterval(timer);
}

// Generates the results for the Crapps game
function startCraps(){
    var die1 =Math.ceil(Math.random()*6);
    var die2 =Math.ceil(Math.random()*6);
    var sum = die1+die2;


    document.getElementById("die1Res").innerHTML = "Die 1 = " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 = " + die2;
    document.getElementById("sumRes").innerHTML = "Sum = " + sum;

    if (sum == 7 || sum == 11){ document.getElementById("crapsRes").innerHTML = "CRAPS - you lose";}
    else if (die1== die2 && die1%2 == 0){document.getElementById("crapsRes").innerHTML = "DOUBLES - you win";}
    else{
        document.getElementById("crapsRes").innerHTML = "TIE, please play again"
    }

    return 0;
}

// Checks if the login information is a valid input
function checkCreds(){
    //getting the data
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeID = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;
    console.log(fullName)

    //input validation

    var nameLength = fullName.length;

    if (nameLength > 20 || nameLength < 3){document.getElementById("loginStatus").innerHTML = "Invalid full name! Try again.";}
   
    else if(badgeID.length != 4){document.getElementById("loginStatus").innerHTML = "Invalid badgeID! Try again.";}
    
    else{
        document.getElementById("loginStatus").innerHTML = "Access granted, Welcome " + fullName;
        location.replace("UATSpacePage.html");
        alert("Access granted, Welcome " + fullName);
    }
}

// defines what is sound as a class
function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

//Plays the backgound sound
function playStation(){
    console.log("playStation() started")
    mySound = new sound("us-lab-background.mp3")
    mySound.play();
}