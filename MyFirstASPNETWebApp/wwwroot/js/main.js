// "Use jQuery selectors(i.e.the “$”) in your program"

$("#btnCal").click(function () {


    var score = $("#txtScore").val()

    if (!$("#txtScore").val()) {
        alert("Please Enter your score!");
        return false;
    }
    
    if (score >= 94 && score <= 100) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is A"
        );
    }
    else if (score >= 90 && score <= 94) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is A-"
        );
    }
    else if (score >= 87 && score <= 90) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is B+"
        );
    }
    else if (score >= 84 && score <= 87) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is B"
        );
    }
    else if (score >= 80 && score <= 84) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is B-"
        );
    }
    else if (score >= 77 && score <= 80) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is C+"
        );
    }
    else if (score >= 74 && score <= 77) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is C"
        );
    }
    else if (score >= 70 && score <= 74) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is C-"
        );
    }
    else if (score >= 67 && score <= 70) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is D+"
        );
    }
    else if (score >= 64 && score <= 67) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is D"
        );
    }
    else if (score >= 60 && score <= 64) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is D-"
        );
    }
    else if (score < 60 && score >= 0) {
        alert("Your Score Percentage is "
            + $("#txtScore").val() + "%. \n" +
            "Your Grade is E"
        );
    }
    else {
        alert("Your Score is out of (0-100). Please retype it again!")
    }
    $("#picShaun").fadeToggle();
    $("#picEnjoy").fadeToggle();
})