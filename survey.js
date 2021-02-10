// IMPORT MODULES
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? ', (answ1) => {

  rl.question('What activity do you love doing? ', (answ2) => {

    rl.question('What do you listen to while doing that? ', (answ3) => {

      rl.question('Which meal is your favourite? (breakfast, brunch, dinner, etc.) ', (answ4) => {

        rl.question('What is your favorite thing to eat for that meal? ', (answ5) => {

          rl.question('What is your favorite sport? ', (answ6) => {
            
            rl.question('What is your superpower? In a few words, describe what you\'re superb at! ', (answ7) => {

              rl.question('Do you have a dog? ', (answ8) => {
                if (answ8.toLowerCase().includes('yes')) {
                  console.log("Hello " + answ1 +", saintly lover of dogs! Glad to see that you LOVE to\njam some " + answ3 + " while " + answ2 + ". I hope all of your dreams come true and\nyou get to have some " + answ5 + " for " + answ4 + ". So " + answ6 + " is your\nfavorite sport? Interesting... At least you're great at " + answ7 +"!");
                } else {
                  console.log("Hello " + answ1 +"! Why don't you get a dog? Glad to see that you LOVE to\njam some " + answ3 + " while " + answ2 + ". I hope all of your dreams come true and\nyou get to have some " + answ5 + " for " + answ4 + ". So " + answ6 + " is your\nfavorite sport? Interesting... At least you're great at " + answ7 +"!");
                }
          
                rl.close();
              });
            });
          });
        });
      });
    })
  });
});