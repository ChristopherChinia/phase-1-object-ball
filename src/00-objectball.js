const game = {
    home: {
        teamName:"Brooklyn Nets",
        colors:["Black", "White"],
        players:{
     "Alan Anderson":{
            Number:0,
            shoe:16,
            points:22,
            Rebounds:12,
            Assits:12,
            Steals:3,
            Blocks:1,
            SlamDunks:1,
     },

        "Reggie Evans":{
            Number:30,
            shoe:14,
            points:12,
            Rebounds:12,
            Assits:12,
            Steals:12,
            Blocks:12,
            SlamDunks:7,
        },

        "Brook Lopez":{
            Number:11,
            shoe:17,
            points:17,
            Rebounds:19,
            Assits:10,
            Steals:3,
            Blocks:1,
            SlamDunks:15,
        },

        "Mason Plumlee":{
            Number:1,
            shoe:19,
            points:26,
            Rebounds:12,
            Assits:6,
            Steals:3,
            Blocks:8,
            SlamDunks:5,
        },

        "Jason Terry":{
            Number:31,
            shoe:15,
            points:19,
            Rebounds:2,
            Assits:2,
            Steals:4,
            Blocks:11,
            SlamDunks:1,
        },
      },
        
    },
    away:{
        teamName:"Charlotte Hornets",
        colors:[ "Turquoise","Purple"],
        players:{
        "Jeff Adrien":{
            Number:4,
            shoe:18,
            points:10,
            Rebounds:1,
            Assits:1,
            Steals:2,
            Blocks:7,
            SlamDunks:2,
            },

        "Bismak Biyombo":{
            Number:0,
            shoe:16,
            points:12,
            Rebounds:4,
            Assits:7,
            Steals:7,
            Blocks:15,
            SlamDunks:10,
        },

        "DeSagna Diop":{
            Number:2,
            shoe:14,
            points:24,
            Rebounds:12,
            Assits:12,
            Steals:4,
            Blocks:5,
            SlamDunks:5,
        },

        "Ben Gordon":{
            Number:8,
            shoe:15,
            points:33,
            Rebounds:3,
            Assits:2,
            Steals:1,
            Blocks:1,
            SlamDunks:0,
        },

        "Brendan Haywood":{
            Number:33,
            shoe:15,
            points:6,
            Rebounds:12,
            Assits:12,
            Steals:22,
            Blocks:5,
            SlamDunks:12,
        },
     },
    },
};


// return the home team name and away team name
function gameObject() {
console.log(game.home.teamName);
console.log(game.away.teamName);
}  
// console.log(gameObject())

// returns both home and away team colors
function gameObject() {
    console.log(game.home.colors);
    console.log(game.away.colors);
    }  
// console.log(gameObject())

// returns the home player stastistics
function player(){
   console.log(game.home.players["Alan Anderson"])
   console.log(game.home.players["Brook Lopez"])
   console.log(game.home.players["Jason Terry"])
   console.log(game.home.players["Mason Plumlee"])
   console.log(game.home.players["Reggie Evans"])
};
// console.log(player());

// returns the away players stastistics
function player(){
console.log(game.away.players["Ben Gordon"])
console.log(game.away.players["Bismak Biyombo"])
console.log(game.away.players["Brendan Haywood"])
console.log(game.away.players["DeSagna Diop"])
console.log(game.away.players["Jeff Adrien"])
}
// console.log(player());