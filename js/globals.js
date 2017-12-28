var MyCraft = {};

MyCraft.rows = 18;
MyCraft.cols = 30;

MyCraft.grid = [];

MyCraft.tiles = {
	dirt: 'images/dirt.png',
	grass: 'images/grass.png',
	leaf: 'images/leaf.jpg',
	rock: 'images/rock.png',
	tree: 'images/tree.png',
	none: '',
};

MyCraft.tools = {
	pickaxe: 'pickaxe',
	shovel: 'shovel',
	axe: 'axe'
};

MyCraft.toolsAbility = {
	pickaxe: ['rock'],
	shovel: ['grass', 'dirt'],
	axe: ['leaf', 'tree']
};

MyCraft.selectedTile = '';
MyCraft.selectedTool = '';
MyCraft.lastSelected = '';

MyCraft.inventory = {
	dirt: 0,
	grass: 0,
	tree: 0,
	leaf: 0,
	rock: 0
};