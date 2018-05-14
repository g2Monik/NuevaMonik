window.createBoard = function(element,width,height) {
 var board = {
   width:width,
   height:height,
   element:element,
   grill:[],
  }
for (y=0; y< height; y++){
  var row = document.createElement('div');
  row.className='row';
  element.appendChild(row);
  board.grill[y] = [];

  for (x=0; x< width; x++){
    var cell = document.createElement('span');
    cell.className='cell';
    row.appendChild(cell);
    board.grill [y][x] = cell;
    }
  }
  return board;
}

window.createPlayer = function(x,y,color,board){
 var player ={
   x:x,
   y:y,
   color:color,
   board:board,
 }

 window.createwall = function(x,y,color,board){
  var wall ={
    x:x,
    y:y,
    color:color,
    board:board,
  }

 player.draw= function(){
   player.board.grill[player.y][player.x].className = player.color;
 }
 createwall.draw= function(){
   wall.board.grill[wall.y][wall.x].className = wall.color;
 }

player.erase = function(){
  player.board.grill[player.y][player.x].className="";
}

 player.move = function(x,y){
   var newX = player.x+x;
   var newY = player.y +y;
   if (newX >= player.board.width || newX < 0){
     return false;
   }
   if (newY >= player.board.height || newY < 0){
     return false;
   }
   player.erase();
   player.x +=x;
   player.y += y;
   player.draw();

   return true;
 }
 player.draw();
 return player;
 wall.draw();
}
