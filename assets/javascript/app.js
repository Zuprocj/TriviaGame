$("#start").on("click", function(){
   game.start();
})

$(document).on("click", "#end", function(){
    game.done();
})
var questions = [{
    question:"When you begin the game, where are you?",
    answers: ["In a grass patch", "In a Pokecenter", "In Professor Oak's lab", "In your room"],
    correctAnswer: "In you room"
}, {
    question:"What are your choices for starting Pokemon in Professor Oak's lab?",
    answers: ["Squirtle, Rattata and Pidgey", "Squirtle, Bulbasaur, and Charmander", "ISquirtle, Weedle and Caterpie", "Squirtle, Seel and Caterpie"],
    correctAnswer: "Squirtle, Bulbasaur, and Charmander"
}, {
    question:"If you choose Squirtle, who will your rival choose?",
    answers: ["Bulbasaur", "Squirtle", "Weedle", "Charmander"],
    correctAnswer: "Bulbasaur"
}, {
    question:"Which of these Pokemon can be found in Viridian Forest?",
    answers: ["Pinsir", "Pikachu", "Butterfree", "Geodude"],
    correctAnswer: "Pikachu"
}, {
    question:"What cave must you go through in order to reach Cerulean City?",
    answers: ["Mt. Morter", "Mt. Moon", "Mt. Silver", "Rock Tunnel"],
    correctAnswer: "Mt. Moon"
}, {
    question:"After you pass through Rock Tunnel, you get to what city?",
    answers: ["Lavender Town", "Brassgold City", "Fuschia City", "Indigo Town"],
    correctAnswer: "Lavender Town"
}, {
    question:"Where is the Team Rocket Hideout in Celadon City?",
    answers: ["Poke Mart", "Pokemon Gym", "Poke Center", "Game Corner"],
    correctAnswer: "Game Corner"
}, {
    question:"After you beat the Elite Four, you have to face another trainer who already beat the Elite Four. Until you beat him, this trainer is the Pokemon League Champion. Who is he?",
    answers: ["Your Rival", "Team Rocket Member", "Professor Oak", "Your Father"],
    correctAnswer: "Your Rival"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter : 45,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend("<br><h2>Time Remaing: <span id='counter'>45</span> Seconds</h2><br><br>");
        $("#start").remove();
        for (var i=0;i<questions.length;i++){
            $("#subwrapper").append("<br><h2>" + questions[i].question+ "</h2>");
            for (var j=0;j<questions[i].answers.length;j++){
            $("#subwrapper").append("<br><input type='radio' name='question-" +i+ "' value='"+questions[i].answers[j]+"'>"+ questions[i].answers[j])
            }
        }
        $("#subwrapper").append("<br><br><button id='end'>DONE!</button>");
    },
  done: function(){
    $.each($("input[name='question-0']:checked"), function(){
        if($(this).val()==questions[0].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-1']:checked"), function(){
        if($(this).val()==questions[1].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-2']:checked"), function(){
        if($(this).val()==questions[2].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-3']:checked"), function(){
        if($(this).val()==questions[3].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-4']:checked"), function(){
        if($(this).val()==questions[4].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-5']:checked"), function(){
        if($(this).val()==questions[5].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-6']:checked"), function(){
        if($(this).val()==questions[6].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
    });
    $.each($("input[name='question-7']:checked"), function(){
        if($(this).val()==questions[7].correctAnswer){
            game.correct++;
        }else {
            game.incorrect++;
        }
    });

    this.result();
},
    result: function() {
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>All done!</h2>");
        $("#subwrapper").append("<h3>Correct answers: "+this.correct+"</h3>");
        $("#subwrapper").append("<h3>Incorrect answers: "+this.incorrect+"</h3>");
        $("#subwrapper").append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
}