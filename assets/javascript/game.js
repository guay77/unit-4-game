$(document).ready(function() {



    var compChoice = Math.floor(Math.random() * 102) + 19;
    console.log("compChoice: " + compChoice);
    $(".randomNumber").html(compChoice);

    var crystalOne = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal 1: " + crystalOne);
    $("#img1").html("<img src=" + "assets/images/image1.png" + " value=" + crystalOne + ">");

    var crystalTwo = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal 2: " + crystalTwo);
    $("#img2").html("<img src=" + "assets/images/image2.png" + " value=" + crystalTwo + ">");

    var crystalThree = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal 3: " + crystalThree);
    $("#img3").html("<img src=" + "assets/images/image3.png" + " value=" + crystalThree + ">");

    var crystalFour = Math.floor(Math.random() * 12) + 1;
    console.log("Crystal 4: " + crystalFour);
    $("#img4").html("<img src=" + "assets/images/image4.png" + " value=" + crystalFour + ">");

    var wins = 0;
    console.log("wins: " + wins);

    var losses = 0;
    console.log("losses: " + losses);

    var score = 0;
    console.log("score: " + score);

    function refresh() {
        compChoice = Math.floor(Math.random() * 102) + 19;
        console.log("compChoice: " + compChoice);
        $(".numberRandom").html(compChoice);

        score = 0;
        $(".displayScore").html(score);

        crystalOne = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 1: " + crystalOne);
        $("#image1").html("<img src=" + "assets/images/image1.png" + " value=" + crystalOne + ">");

        crystalTwo = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 2: " + crystalTwo);
        $("#image2").html("<img src=" + "assets/images/image2.png" + " value=" + crystalTwo + ">");

        crystalThree = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 3: " + crystalThree);
        $("#image3").html("<img src=" + "assets/images/image3.jpeg" + " value=" + crystalThree + ">");

        crystalFour = Math.floor(Math.random() * 12) + 1;
        console.log("Crystal 4: " + CrystalFour);
        $("#image4").html("<img src=" + "assets/images/image4.png" + " value=" + crystalFour + ">");

        $("image").on("click", function() {
            var score01 = score += parseInt($(this).attr("value"));
            console.log("New Score: " + score01);
            $(".scoreDisplay").html(score01);

            if (score01 === compChoice) {
                wins++;
                $(".wins").html("Wins: " + wins);
                console.log("Wins: " + wins);
                refresh();

            } else if (score01 > compChoice) {
                losses++;
                $(".losses").html("Losses: " + losses);
                console.log("Losses: " + losses);
                refresh();

            }

        });



    }

    $("image").on("click", function() {
        var newScore = score += parseInt($(this).attr("value"));
        console.log("New Score: " + newScore);
        $(".scoreDisplay").html(newScore);

        if (newScore === compPick) {
            wins++;
            $(".wins").html("Wins: " + wins);
            console.log("Wins: " + wins);
            refresh();
        } else if (newScore > compPick) {
            losses++;
            $(".losses").html("Losses: " + losses);
            console.log("Losses: " + losses);
            refresh();
        }

    });

});