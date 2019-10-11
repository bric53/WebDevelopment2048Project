var tbl;
var s;
var gridSize = [4,4];
function main ()
{
	
	tbl = document.getElementById('tablehere');
	btn = document.getElementById('buttonhere');
	var removeCheck = tbl.firstChild;
    tbl.removeChild(removeCheck);
	
	var b = document.createElement("button");
	b.innerHTML = "Restart";
	b.addEventListener("click", function() {restart()} );
	
	s = document.createElement("P");
	s.innerHTML = "Score: 0"
	s.className = "score";
	btn.appendChild(b);
	btn.appendChild(s);
	
	
	
	initialize(gridSize[0],gridSize[1]);
	makeTable(tbl,gridSize[0],gridSize[1]);
	addRandomTile();
	update(tbl,gridSize[0],gridSize[1]);
	
}

document.addEventListener('keydown',    keyPress,    false);

function restart()
{
	 newGame();
	 update(tbl,gridSize[0],gridSize[1]);
	 
	var t = document.getElementById("texthere");//resets bottom text
	 t.innerHTML = "";
}

function keyPress(event) {

  switch(event.keyCode)
  {
	
	case 37: left();event.preventDefault(); break;
	case 38: up(); event.preventDefault(); break;
	case 39: right();event.preventDefault();  break;
	case 40: down();event.preventDefault(); break;
	return;
  }
  update(tbl,gridSize[0],gridSize[1]);
  
}


function makeTable(main, height, width)
{
	
	var TD;
	var TR;
	for (i = 0; i < height; i++){
		idx++; //offsets each row by one to checker
		 TR = document.createElement('tr');
		for (j = 0; j < width; j++){
			TD = document.createElement('td');
			TD.innerHTML = getTile(i,j); 
			if (TD.innerHTML == 0) //makes empty tiles blank
				TD.innerHTML = "";
			TD.className = returnClass(TD); //adds style to the cell
			TR.appendChild(TD);	//adds the tile to the row
			
		}
		main.appendChild(TR); //adds a row to the table
		
	}
}

function update(main, height, width)
{
	idx = 0;
	s.innerHTML = "Score: " + getScore();
	for (i = 0; i < height; i++){
		if (gridSize[1] %2 == 0){idx++; }//offsets each row by one to checker
		for (j = 0; j < width; j++){
			TileNum = getTile(i,j); 
			if (TileNum == 0)
			main.children[i].children[j].innerHTML = "";
		else
			main.children[i].children[j].innerHTML = TileNum;
			
			main.children[i].children[j].className = returnClass(main.children[i].children[j]);
		}
		
		
	}
	if (checkLose())
  {
	  
	  
	  var w = isWin();
	  var t = document.getElementById("texthere");
	  
	  t.innerHTML = w?("Good Game, You Won!!!"):("Sorry, you Lost! \n \n I guess you just weren't good enough! \n\n to try again, press \"restart\"");
	  
	  
  }
}


//style code
var idx = 0; //how many tiles have been assigned a style, used to make a checkered pattern
function returnClass(el) //adds styles to cells with a given value. el is the Data element. Num is an identifier
{
	
	idx++;
	switch(el.innerHTML)
	{
	case "2": return "two";
	case "4": return "four";
	case "8": return "eight";
	case "16": return "sixteen";
	case "32": return "thirtytwo";
	case "64": return  "sixtyfour";
	case "128": return "onetwentyeight";
	case "256": return "twofiftysix";
	case "512": return "fivetwelve";
	case "1024": return "onetwentyfour";
	case "2048": return "twentyfourtyeight";
	case "4096": return "fourtyninetysix";
	}
	if (idx % 2 == 0)
		return "blank1";
	else 
		return "blank2";
	
	
}