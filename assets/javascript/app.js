$("#start").on("click", function(){
   game.start();
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
    question:" What must you get at the PokeMart at Viridian City and deliver to Professor Oak in order to progess past Viridian City?",
    answers: ["Oak's Package", "Oak's Delivery", "Oak's Mail", "Oak's Parcel"],
    correctAnswer: "Oak's Parcel"
}, {
    question:"Which of these Pokemon can be found in Viridian Forest?",
    answers: ["Pinsir", "Pikachu", "Butterfree", "Geodude"],
    correctAnswer: "Pikachu"
}, {
    question:"What cave must you go through in order to reach Cerulean City?",
    answers: ["Mt. Morter", "Mt. Moon", "Mt. Silver", "Rock Tunnel"],
    correctAnswer: "Mt. Moon"
}, {
    question: "Who gives you HM01 on the SS Anne?",
    answers: ["Your Rival", "A Sailor", "A man who lost his grand-daughter", "The Captain"],
    correctAnswer: "The Captain"
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
    counter : 120,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter <=0){
            game.done();
        }
    },
    start: function(){
    timer = setInterval(game.countdown, 1000);
    $("#subwrapper").prepend("<h2>Time Remaing: <span id='counter'>120</span> Seconds</h2>");
    $("#start").remove();
    for (var i=0;i<questions.length;i++){
        $("#subwrapper").append("<h2>" + questions[i].question+ "</h2>");
        for (var j=0;j<questions[i].answers.length;j++){
            $("#subwrapper").append("<input type='radio' name='question-"+i+"'value='"+questions[i].answers[j]+"'>"+ questions[i].answers[j])
            }
        }
    }
    
}