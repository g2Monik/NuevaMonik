window.onload = function(){
var board = createBoard(document.getElementsByTagName('main')[0],11,11);
var player = createPlayer(2,3,"blue",board);
var wall = createwall(1,1,"black",board);

//player.draw;

//player.move(1,4);


window.player= player;
window.wall= wall;
//window.board = board;
window.addEventListener('keypress', function(e){
  console.log(e);
  switch(e.key){
    case "w":
    player.move(0,-1);
    break;
    case "s":
    player.move(0,1);
    break;
    case "a":
    player.move(-1,0);
    break;
    case "d":
    player.move(1,0);
    break;
  }
});
};
