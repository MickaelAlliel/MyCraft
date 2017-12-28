function checkToolAbility(tile) {
	if (MyCraft.toolsAbility[MyCraft.selectedTool].includes(tile)) {
		return true;
	}

	return false;
}


function generateGrid() {
	MyCraft.grid = new Array(MyCraft.rows);

	for (var i = 0; i < MyCraft.rows; i++) {
		MyCraft.grid[i] = new Array(MyCraft.cols);
	}

	for (var i = 0; i < MyCraft.rows; i++) {
		for (var j = 0; j < MyCraft.cols; j++) {
			let newDiv = $('<div/>').addClass('gridTile').attr('id', 'tile-' + i + '-' + j);

			let tileCoords = newDiv.attr('id').split('-');
			let x = tileCoords[1];
			let y = tileCoords[2];
			let tile = new Tile(x, y, MyCraft.tiles.none, newDiv);
			MyCraft.grid[x][y] = tile;

			setTileClickEvent(newDiv);
			$('#grid').append(newDiv);
		}
	}

	
}

function setTileClickEvent(div) {
	div.on('click', function() {
		if (MyCraft.lastSelected == MyCraft.tools.pickaxe ||
			MyCraft.lastSelected == MyCraft.tools.axe ||
			MyCraft.lastSelected == MyCraft.tools.shovel) {

			let tileCoords = this.id.split('-');
			let x = tileCoords[1];
			let y = tileCoords[2];

			let gatheredTile = MyCraft.grid[x][y].tileType;

			if (checkToolAbility(gatheredTile)) {
				MyCraft.inventory[gatheredTile] = MyCraft.inventory[gatheredTile] + 1;
				MyCraft.grid[x][y].setTile('');
			} else {
				// TODO: Add effect
			}
			
		} else  {

			let tileCoords = this.id.split('-');
			let x = tileCoords[1];
			let y = tileCoords[2];

			if (MyCraft.grid[x][y].tileType=='') {
				MyCraft.grid[x][y].setTile(MyCraft.selectedTile);
			}
		}
		console.log(MyCraft.inventory);
	});
}


function setSelectTilesEvent() {
	let toolbarTiles = $('.tileImage');

	toolbarTiles.on('click', function() {
		MyCraft.selectedTile = this.id;
		MyCraft.lastSelected = this.id;
		console.log(this.id);
	});
}

function setSelectToolsEvent() {
	let toolbarTools = $('.toolImage');

	toolbarTools.on('click', function() {
		MyCraft.selectedTool = this.id;
		MyCraft.lastSelected = this.id;
		console.log(this.id);
	});
}

function saveGrid (name) {
	let grid = {};

	for (var i = 0; i < MyCraft.rows; i++) {
		for (var j = 0; j < MyCraft.cols; j++) {
			let id = MyCraft.grid[i][j].element.attr('id');
			grid[id] = MyCraft.grid[i][j].toObj();
		}
	}

	var a = document.createElement('a');
	var file = new Blob([JSON.stringify(grid)],{type: "application/json"} );
	console.log(file);
	a.href = URL.createObjectURL(file);
	console.log(URL.createObjectURL(file));
	a.download = name;
	a.click();
}


function loadGrid() {
	var grid = MyCraft.world;

	//$.getJSON(filename, function(jsonText){
		//grid = JSON.parse(jsonText);

		for (var i = 0; i < MyCraft.rows; i++) {
			for (var j = 0; j < MyCraft.cols; j++) {
				let id = MyCraft.grid[i][j].element.attr('id');
				MyCraft.grid[i][j].setTile(grid[id].tileType);
			}
		}
	//});
}


$(document).ready(function() {
	generateGrid();
	setSelectTilesEvent();
	setSelectToolsEvent();

	var mysave = $('#save');
	mysave.on('click',function() {
		saveGrid("world.json");
	});

	loadGrid();

	/*
	var myload = $('#load');
	var loadfile = 'http://cdn.mickaelalliel.com/mycraft/world.json';
	myload.on('click',function() {
		loadGrid(loadfile);
	});
	*/
});