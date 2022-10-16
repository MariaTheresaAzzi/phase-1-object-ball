function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1
                },
                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7
                },
                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15
                },
                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },
                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19,
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },
                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5
                },
                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3,
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },
                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }
            }
        }
    }
    }

function gameObject() {
    return { ...gameObject }
}

console.log(gameObject());

function homeTeamName() {
    let object = gameObject()
    return object['home']['teamName']
}

console.log(homeTeamName())

// function homeTeamName() {
//     return gameObject()['home']['teamName']
// }

// console.log(homeTeamName())

let obj = { foo: 42, bar: 83, "key w/ spaces": true };
console.log(oo["foo"]);
console.log(oo["bar"]);
console.log(oo["key w/ spaces"]);

console.log(oo.foo);
console.log(oo.bar);

let object = { foo: 42, bar: 83, baz: 79 };
for (let key in oo) {
    let value = oo[key];
    console.log("key:", key, "value:", value);
}

let object1 = { foo: 42, bar: 83, baz: 79 };
console.log(" Object.keys(oo) =>", Object.keys(oo));
console.log(" Object.values(oo) =>", Object.values(oo));
console.log("Object.entries(oo) =>", Object.entries(oo));

//numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
// function numPointsScored(player) {
//     const res = gameObject.find((element) =>
//         element.players == player
//     );
//     return res ? res.points : undefined;
// }
// //shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
// function shoeSize(player) {
//     const res = gameObject.find((element) =>
//         element.players == player
//     );
//     return res ? res.shoe : undefined;
// }
// //Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
// function teamColors(player) {
//     const res = gameObject.filter((element) =>
//         element.players == player
//     );
//     return res ? res.colors : undefined;
// }

// //Build a function, teamNames, that operates on the game object to return an array of the team names.

// function teamNames(player) {
//     const res = gameObject.filter((element) =>
//         element.players == player
//     );
//     return res ? res.teamNames : undefined;
// }
// //Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.

// function playerNumbers(player) {
//     const res = gameObject.filter((element) =>
//         element.players == player
//     );
//     return res ? res.number : undefined;
// }

// //Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. 

// function playerStats(player) {
//     const res = gameObject.filter((element) =>
//         element.players == player
//     );
//     // return res ? res.number : undefined;
// }

// //Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. 
// function bigShoeRebounds(player) {
//     const res = gameObject.map((element) =>
//         element.players == player
//     );
//     // return res ? res.number : undefined;
// }

    // console.log(gameObject())
    
    // debugger;
    
    // function homeTeamName() {
    //     let object = gameObject();
    //     return object['home']['teamName']
    // }
    // console.log(homeTeamName());
    
    
    
    
    function numPointsScored(playerName){
        let Object = gameObject()
        let playerObj = {}
    
        for(let teamKey in Object){
            // console.log(teamKey)
            // console.log(Object[teamKey])
            // console.log(Object[teamKey]["players"])
    
            playerObj = Object[teamKey]["players"][playerName]
            // let playObj = gameObject[teamKey]
            // console.log(playerObj)
        }
        return playerObj["shoe"];
    };
    
        // console.log(numPointsScored("Brendan Haywood"));
    
        function teamColors(teamName) {
            let newObj = gameObject()
            for(let teamKey in newObj){
                if(teamName === newObj[teamKey]["teamName"])
                return newObj[teamKey]['colors']}
            }
    
        // console.log(teamColors('Brooklyn Nets'))
    
        function teamNames(){
            let Obj = gameObject()
            const newTeamNames = []
            for(let teamKey in Obj){
                newTeamNames.push(Obj[teamKey]["teamName"]);
            }
                return newTeamNames;
        }
        console.log(teamNames())
    
    
    
    
    
        function playerNumbers(teamName){
            let myGameObject = gameObject()
            const numbersArray = []
            for(let teamKey in myGameObject){
                if(teamName === myGameObject[teamKey]['teamName']){
                    let playersObj = myGameObject[teamKey]['players'];
                    for(let playerKey in playersObj){
                        numbersArray.push(playersObj[playerKey]['number'])
                    }
                }
    
            }
            return numbersArray
        }
        console.log(playerNumbers("Brooklyn Nets"));
        console.log(playerNumbers('Charlotte Hornets'));
     
