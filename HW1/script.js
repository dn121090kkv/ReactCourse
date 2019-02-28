document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready
	var colums = document.getElementById('colsAmount'); //
	var	rows = document.getElementById('rowsAmount');
	var createButton = document.getElementById('createNewTable');
	var tableBody = document.getElementById('dinamic-table-body');
	var tooltip =document.getElementById('tooltip-elem');
	
	/**
	* Create Table with entered amount of rows and columns
	*/
	createButton.addEventListener('click', function(e) {
		e.preventDefault();
		tableBody.innerHTML = "";
		var colsAmount = (+colums.value > 100) ? 100 : colums.value;
		var rowsAmount = (+rows.value> 100) ? 100 : rows.value; 
		for (var i = 0; i < rowsAmount; i++) {
			var newTr = document.createElement("TR");
			for (var j = 0; j< colsAmount; j++){
				let newTd = document.createElement("TD");
				newTr.appendChild(newTd);
			}
			tableBody.appendChild(newTr);

		}
	});

	/**
	* Show indexes of derived <td>-element
	* param (tdElem) - devired td-element
	*/
	function getCellCoords(tdElem){
		if(tdElem.tagName == 'TD'){
			var rowIndex = tdElem.parentNode.rowIndex+1;
			var cellIndex = tdElem.cellIndex+1;
			tooltip.style.top = tdElem.getBoundingClientRect().bottom +'px';
			tooltip.style.left = tdElem.getBoundingClientRect().left +'px';
			tooltip.style.opacity = 1;
			tooltip.style.visibility = 'visible';
			tooltip.innerHTML = "<div><span>Cell`s coords in table is <b>"+ rowIndex +"</b>(row):<b>"+ cellIndex +"</b>(cell) </span></div>"
			setTimeout(function(){
				tooltip.style.opacity = 0;
				tooltip.style.visibility = 'hidden';	
			},2000)
		}
		return;
	}

	tableBody.addEventListener('click', function(e){
		console.log(e.target);
		var target = e.target;
	
		while (target != tableBody) {
			if (target.tagName == 'TD') {
				getCellCoords(target);
				return;
			}
			target = target.parentNode;
		}
	});
});