var data =  [[0,0,0,0],[0,0,2,0],[0,0,0,0],[4,2,0,0]]; // the final version will start with all 0's, and use begin() to initialize the state
function getTile(row,col)
{
	if ((row < 0) || (row >= TableSize[0]) || (col < 0) || (col >= TableSize[1]))
		throw error;
	
	return data[row][col];

}
var TableSize = [4,4];
var Win = 0;
var GameOver = 0;
var turn = 0;
var score = 0;
var Win_val = 2048;

function down(){fall(0,-1);} //these are the four dirctions you can move
function left(){fall(-1,0);}
function right(){fall(1,0);}
function up() {fall(0,1);}

function fall()
{
	//This function will move tiles in a specified direction,
	//merge == tiles,then calculate score and increment turn
}

begin ()
{
	//adds one two to the data in a random position.
}