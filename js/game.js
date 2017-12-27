var MyCraft = {};

MyCraft.tiles = [];
MyCraft.grid = [];


function generateGrid() {
	let rows = 13;
	let cols = 20;

	MyCraft.grid = new Array(rows);

	for (var i = 0; i < rows; i++) {
		MyCraft.grid[i] = new Array(cols);
	}

	for (var i = 0; i < rows; i++) {
		for (var j = 0; j < cols; j++) {
			let newDiv = $('<div/>').addClass('gridTile');

			//MyCraft.grid[i][j] = TILE;
			$('#grid').append(newDiv);
		}
	}

	
}





$(document).ready(function() {
	generateGrid();
});