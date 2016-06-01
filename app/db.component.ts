import sqlite = require('../node_modules/sqlite-sync/sqlite.js');

exports class DB{
	private db;
	constructor(){
		console.log('sd')
		this.db = sqlite.connect("model/database.db");
	}

}