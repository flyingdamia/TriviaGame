var questions = [{
  q: "Who is Snoopy's owner?",
  o: ["Peppermint Patty", "Charlie Brown", "Linus van Pelt", "Schroeder"],
  a: "Charlie Brown"
}, {
  q: "Where was Snoopy Born?",
  o: ["Daisy Hill Puppy Farm", "Morton's Puppy Mill", "In his Doghouse", "Paws to Claws Pet Shop"],
  a: "Daisy Hill Puppy Farm"
}, {
  q: "What dog breed is Snoopy?",
  o: ["Welsh Corgi", "Dachshund", "Cocker Spaniel", "Beagle"],
  a: "Beagle"
}, {
  q: "Snoopy is forever trying to steal something from another character in Peanuts. What is the object?",
  o: ["Root Beer Mug", "Dinner Dish", "Blanket", "Baseball"],
  a: "Blanket"
}, {
  q: "In reference to the above question, who is Snoopy always trying to steal the object from?",
  o: ["Peppermint Patty", "Charlie Brown", "Linus van Pelt", "Schroeder"],
  a: "Linus van Pelt"
}, {
  q: "When Snoopy is 'Flying' in the war, who is he fighting?",
  o: ["Sopwith Camel", "Red Baron", "Hitier", "Pol Pot"],
  a: "Red Baron"
}, {
  q: "When Snoopy takes a break from flying, he stops by a cafe and usually orders what?",
  o: ["Soda", "Beer", "Milk Shake", "Root Beer"],
  a: "Root Beer"
}, {
  q: "Who is Snoopy's best friend?",
  o: ["The Cat Next Door", "Woodstock", "Charlie Brown", "Peppermint Patty"],
  a: "Skeeter"
}, {
  q: "Snoopy is often seen playing or interacting with musical bars and notes as though they were real things. In one comic strip, he's attempting to catch the notes as they fall off the bars. Who is the character that is playing the notes?",
  o: ["Peppermint Patty", "Charlie Brown", "Linus van Pelt", "Schroeder"],
  a: "Schroeder"
}];

  

var body = $("#trivia");
var timer;



$(document).on("click", "#start", function() {
  game.start();
});



$(document).on("click", "#submit", function() {
  game.submit();
});



var game = {
  counter: 120,
  correct: 0,
  incorrect: 0,



  countdown: function() {
    game.counter--;
    $("#counter").html(game.counter);
      if (game.counter === 0) {
        game.submit();
      }
  },



  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
    $("#start").remove();
      for (var i = 0; i < questions.length; i++) {
        body.append("<h2>" + questions[i].q + "</h2>");
      for (var j = 0; j < questions[i].o.length; j++) {
        body.append("<input type='radio' name='q" + i +
        "' value='" + questions[i].o[j] + "''>" + questions[i].o[j]);
        }
        }    

    body.append("<button id='submit'>Submit</button>");
  },



  submit: function() {

    $.each($("input[name='q0']:checked"), function() {
      if ($(this).val() === questions[0].a) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q1']:checked"), function() {
      if ($(this).val() === questions[1].a) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q2']:checked"), function() {
      if ($(this).val() === questions[2].a) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q3']:checked"), function() {
      if ($(this).val() === questions[3].a) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q4']:checked"), function() {
      if ($(this).val() === questions[4].a) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q5']:checked"), function() {
      if ($(this).val() === questions[5].a) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q6']:checked"), function() {
      if ($(this).val() === questions[6].a) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q7']:checked"), function() {
      if ($(this).val() === questions[7].a) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='q8']:checked"), function() {
      if ($(this).val() === questions[8].a) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });


    
    this.result();

  },

  result: function() {

    clearInterval(timer);

    $("#sub h2").remove();

    body.html("<h2>Here is your result!</h2>");
    body.append("<h3>Correct Answers: " + this.correct + "</h3>");
    body.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    body.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};