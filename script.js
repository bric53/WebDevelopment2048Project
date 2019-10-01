function main ()
{
	tbl = document.getElementById('tablehere');
	var removeCheck = tbl.firstChild;
    tbl.removeChild(removeCheck);
	makeTable(tbl,4,4);
	
}

function makeTable(main, height, width)
{
	
	var TD;
	var TR;
	for (i = 0; i < width; i++){
		idx++; //offsets each row by one to checker
		 TR = document.createElement('tr');
		for (j = 0; j < height; j++){
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
var idx = 0; //how many tiles have been assigned a style, used to make a checkered pattern
function returnClass(el,num) //adds styles to cells with a given value. el is the Data element. Num is an identifier
{
	idx++;
	 if (el.innerHTML == "2")
		 return "two";
	 if (el.innerHTML == "4")
		return "four";
	if (idx % 2 == 0)
		return "blank1";
	else 
		return "blank2";
	
	
}