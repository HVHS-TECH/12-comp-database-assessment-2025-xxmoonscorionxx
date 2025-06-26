console.log("hi")

const WINDOWWIDTH = 500;
const WINDOWHEIGHT = 500;
const MOVEMENTSPEED = 7;
const COINSIZE = 10;
const COINTIMEOUT = 4000;

var once = 0
var onceRedirect = 0;
var Score = 0;
var gameState = "play";
var UID;

/*******************************************************/
// setup()
/*******************************************************/
function setup() {
    
	console.log("setup: ");
	cnv = new Canvas(WINDOWWIDTH, WINDOWHEIGHT);
	player = new Sprite(400, 400, 50, 'd');
	player.color = 'red';
    
    coins = new Group();

    coins.add(createCoin());

    player.collides(coins, getPoint);

    function getPoint(collider1, collider2) {
		collider2.remove();
        Score++;
	}

}
/*******************************************************/
// draw()
/*******************************************************/
function draw() {
    

    if(gameState == "play") {
        UID = sessionStorage.getItem("UID");
		userName = sessionStorage.getItem("userName");
		if (UID == null) {
            if(onceRedirect == 0) {
			window.location.replace("registration/registration.html");
            console.log("hmmmm")
            onceRedirect=1
        }
		}
       
        runGame();
        
    }
    else if(gameState == "lose") {
        if (once == 0 ) {
            console.log("working again")
			sessionStorage.setItem("score", Score);
			fb_writeCoinGame()
			once = 1;
		}
        
    }
}

function runGame() {
    
    background('cyan');

    if (random(0,1000)<15){
		coins.add(createCoin());
	}

    displayScore();

    movePlayer();

    for (var i = 0; i < coins.length; i++){
		if(checkCoinTime(coins[i])){
			coins[i].remove();
			gameState = "lose";
		}
	}

}
function lose () {
    background('red');
    coins.remove();
    player.remove();
    fill(0,0,0);
    textSize(50);
    text("You missed a coin ");
    textSize(100);
    text("Score: " + Score, 10,200);
}
function home() {
	if (kb.pressing('t')) {
		window.location.replace("index.html");
	}
}
function removeCoin() {
}
function displayScore() {
    fill (0,0,0);
    textSize(20);
    text("Score: " + Score ,10,20);
}
function createCoin() {
    coin = new Sprite(random(0,WINDOWWIDTH),random(0,WINDOWHEIGHT),COINSIZE,'d');
    coin.color = ('yellow');
    coin.coinspawntime = millis();
    return(coin);
}
function checkCoinTime(_coin) {
    if (_coin.coinspawntime + COINTIMEOUT < millis()) {
        return(true);
    }
    return(false);
}
function movePlayer() {
    if (kb.pressing('left')) {
        player.vel.x = -1 * MOVEMENTSPEED;
   
   }
   
   else if (kb.pressing ('right')) {
   
       player.vel.x = MOVEMENTSPEED;  
   
   };
   
   if (kb.released('left')) {
   
       player.vel.x = 0;
   
   }

   else if (kb.released('right')) {
       player.vel.x = 0;
   }
   if (kb.pressing('up')) {
   
       player.vel.y = -1 * MOVEMENTSPEED;
   
   }
   else if(kb.pressing('down')) {
       player.vel.y = MOVEMENTSPEED;
   }
   if (kb.released('up')) {
   
       player.vel.y = 0;
   
   }

   else if (kb.released('down')) {
       player.vel.y = 0;
   }
}
