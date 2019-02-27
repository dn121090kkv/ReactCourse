
document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
	var colums = document.getElementById('colsAmount');
	var	rows = document.getElementById('rowsAmount');
	var createButton = document.getElementById('createNewTable');
	var tableBody = document.getElementById('dinamic-table-body');
	createButton.addEventListener('click', function(e) {
		e.preventDefault();
		tableBody.innerHTML = "";
		var colsAmount = colums.value;
		var rowsAmount = rows.value; 
		for (var i = 0; i < rowsAmount; i++) {
			var newTr = document.createElement("TR");
			for (var j = 0; j< colsAmount; j++){
				let newTd = document.createElement("TD");
				newTr.appendChild(newTd);
			}
			tableBody.appendChild(newTr);

		}

	});
});