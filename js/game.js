var MyCraft = {};

MyCraft.tiles = [];
MyCraft.grid = [];

MyCraft.selectedTile = '';
MyCraft.inventory = {
	dirt: 0,
	grass: 0,
	tree: 0,
	leaf: 0,
	rock: 0
};


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

function setSelectTilesEvent() {
	let toolbarTiles = $('.tileImage');

	toolbarTiles.on('click', function() {
		MyCraft.selectedTile = this.id;
		console.log(this.id);
	});
}





$(document).ready(function() {
	generateGrid();
	setSelectTilesEvent();
});