
let animalsList = [];

class Animal {
	constructor(name,areal,size,agression,image) {
		this.name = name;
		this.areal = areal;
		this.size = size;
		this.agression = agression;
		this.image = image;
		animalsList.push(this);
	}
}
Animal.fight = function (animal1, animal2) {
	if (arguments.length !== 2) {
		return 'Please choose 2 opponents'
	} else if (animal1.areal !== animal2.areal) {
		return 'These animals can not fight, because they are from different areals'
	} else if (animal1.power > animal2.power) {
		return `${animal1.name} wins`
	} else if (animal1.power < animal2.power) {
		return `${animal2.name} wins`
	} else if (animal1.power === animal2.power) {
		return `No winner, opponents have equal power`
	}
}
// console.log(Object.getOwnPropertyNames(Animal.prototype))


class Vegetarian extends Animal {
	constructor(name,areal,size,agression,image) {
		super(name,areal,size,agression,image)
		this.power = this.size * 3 * this.agression;
	}
}

class Omnivore extends Animal {
	constructor(name,areal,size,agression,image) {
		super(name,areal,size,agression,image)
		this.power = this.size * 2 * this.agression * 2;
	}
}

class Carnivore extends Animal {
	constructor(name,areal,size,agression,image) {
		super(name,areal,size,agression,image)
		this.power = this.size * 1.5 * this.agression * 3;
	}
}


let Elephant = new Vegetarian('Elephant','land', 30, 1.5, 'elephant.jpg');
let Giraffe = new Vegetarian('Giraffe','land', 12, 1.4, 'giraffe.jpg');
let Horse = new Vegetarian('Horse','land', 3.5, 1, 'horse.jpg');
let Deer = new Vegetarian('Deer','land', 1.3, 1, 'deer.jpg');

let Bear = new Omnivore('Bear','land', 4.6, 2, 'bear.jpg');
let Dog = new Omnivore('Dog','land', 1, 3, 'dog.jpg');
let Hog = new Omnivore('Hog','land', 1.5, 1.5, 'hog.jpg');

let Alligator = new Carnivore('Alligator','land', 4, 2.2, 'alligator.jpg');
let Tiger = new Carnivore('Tiger','land', 2.7, 3, 'tiger.jpg')
let Lion = new Carnivore('Lion','land', 2.3, 3, 'lion.jpg');
let Wolf = new Carnivore('Wolf','land', 1, 3, 'wolf.jpg');
let Mangoose = new Carnivore('Mangoose','land', 0.05, 20, 'mangoose.jpeg');
let Cobra = new Carnivore('Cobra','land', 0.1, 9, 'cobra.jpg');

let Whale = new Vegetarian('Whale','water', 35, 1.3, 'whale.jpg');
let Dolphin = new Vegetarian('Dolphin','water', 3, 1.5, 'dolphin.jpg');
let Shark = new Carnivore('Shark','water', 10, 2.5, 'shark.jpg');

let Albatross = new Omnivore('Albatross','air', 0.1, 1.2, 'albatross.jpg');
let Eagle = new Carnivore('Eagle','air', 0.05, 3, 'eagle.jpg');
let Falcon = new Carnivore('Falcon','air', 0.01, 3.5, 'falcon.jpg');
let Bat = new Carnivore('Bat','air', 0.003, 3, 'bat.jpg');


let leftWarriorCell = document.getElementById('warrior1');
let rightWarriorCell = document.getElementById('warrior2');
let warrior1 = undefined;
let warrior2 = undefined;

function chooseLeftWarrior (animal) {
	warrior1 = animal;
	let text = '';
	text += `<img src="images/${animal.image}">`;
	text += `<h4>${animal.name}</h4>`;
	leftWarriorCell.innerHTML = text;
}
function chooseRightWarrior (animal) {
	warrior2 = animal;
	let text = '';
	text += `<img src="images/${animal.image}">`;
	text += `<h4>${animal.name}</h4>`;
	rightWarriorCell.innerHTML = text;
}

let team1 = document.getElementById('team1');
let team2 = document.getElementById('team2');

function drawTeam1() {
	for (let i = 0; i < animalsList.length; i++) {
		let text = '';
		text += `<div class="cell" onclick=chooseLeftWarrior(${animalsList[i].name})>`;
		text += `<img src="images/${animalsList[i].image}">`;
		text += `<h4 id="animal-name">${animalsList[i].name}</h4>`;
		text += `</div>`;
		team1.innerHTML += text;
	}
}
function drawTeam2() {
	for (let i = 0; i < animalsList.length; i++) {
		let text = '';
		text += `<div class="cell" onclick=chooseRightWarrior(${animalsList[i].name})>`;
		text += `<img src="images/${animalsList[i].image}">`;
		text += `<h4 id="animal-name">${animalsList[i].name}</h4>`;
		text += `</div>`;
		team2.innerHTML += text;
	}
}
drawTeam1();
drawTeam2();

let battleResult = document.getElementById('battle-result');

function fight () {
	let result;
	if (warrior1 == undefined || warrior2 == undefined) {
		result = 'Please choose 2 opponents';
	} else {
		result = Animal.fight(warrior1,warrior2);
	}
	battleResult.innerHTML = `<h2>${result}</h2>`;
}
