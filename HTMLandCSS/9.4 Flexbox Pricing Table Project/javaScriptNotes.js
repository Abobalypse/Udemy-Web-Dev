function beerSong() {
    var bottles;
    var bottlesLeft;

    for(i = 99; i >= 1; i--) {
        if (i == 1) {
            bottles = "bottle";
            bottlesLeft = "No more bottles of beer on the wall";
        } else {
            bottles = "bottles";
            bottlesLeft = i - 1 + " bottles of beer on the wall";
        } 
        console.log(i + " " + bottles + " of beer on the wall");
        console.log("Take one down, pass it around,");
        console.log(bottlesLeft);
    }
}

console.log(beerSong());

//Love Calculator  2

prompt("What is your name?");
prompt("What is your crushes name?");

function loveScore() {
    var loveCalc = Math.random() * 100;
    loveCalc = Math.floor(loveCalc) + 1;

    if (loveCalc > 70) {
        alert("Your love score is " + loveCalc + "%." + " You love each other like Kanye loves Kanye");
    } 
    if (loveCalc > 30 && loveCalc <= 70) {
        alert("Your love score is " + loveCalc + "%." + " You two go together like peanut butter and jelly");
    }
    if (loveCalc <= 30) {
        alert("Your love score is " + loveCalc + "%." + " You go together like oil and water");
    }
    else {
        alert("Your love score is " + loveCalc + "%");
    }
}

loveScore();

//BMI Calculator 2

function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2));
    var interpretation;

    if(bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight"
    }

    if(bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight"
    }

    if(bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight"
    }

    return interpretation;
}