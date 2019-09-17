function main ()
{
	var data =  [[0,0,0,0],[0,0,2,0],[0,0,0,0],[4,2,0,0]];
	tbl = document.getElementById('tablehere');
	var removeCheck = tbl.firstChild;
    tbl.removeChild(removeCheck);
	makeTable(tbl,4,4,data);
	
}

function makeTable(main, height, width,cellVal)
{
	var idx = 0;
	var TD;
	var TR;
	for (i = 0; i < width; i++){
		 TR = document.createElement('tr');
		for (j = 0; j < height; j++){
			TD = document.createElement('td');
			TD.innerHTML = cellVal[i][j]; 
			if (TD.innerHTML == 0)
				TD.innerHTML = "";
			TD.className = returnClass(TD,j+i);
			TR.appendChild(TD);	
			
		}
		main.appendChild(TR);
		
	}
}

function returnClass(el,num)
{
	 if (el.innerHTML == "2")
		 return "two";
	 if (el.innerHTML == "4")
		return "four";
	if (num % 2 == 0)
		return "blank1";
	else 
		return "blank2";
	
	
}