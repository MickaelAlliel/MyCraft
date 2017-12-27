var tiles = {
	dirt: 'images/dirt.png',
	grass: 'images/grass.png',
	leaf: 'images/leaf.jpg',
	rock: 'images/rock.png',
	tree: 'images/tree.png',
	none: '',
};

class Tile {
	constructor(x, y, tileType) {
		this.x = x;
		this.y = y;
		this.tileType = tileType;
		this.size = 64;
		
		switch (tileType) {
			case 'dirt':
				this.tile = tiles.dirt;
				break;
			case 'grass':
				this.tile = tiles.grass;
				break;
			case 'leaf':
				this.tile = tiles.leaf;
				break;
			case 'rock':
				this.tile = tiles.rock;
				break;
			case 'tree':
				this.tile = tiles.tree;
				break;
			default:
				this.tile = tiles.none;
				break;
		}
	}
}