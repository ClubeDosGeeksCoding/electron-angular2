// import sqlite = require('../node_modules/sqlite-sync/sqlite.js');
import sqlite = require('sqlite-sync');

exports class DB{
	private db;
	constructor(){
		console.log('sd')
		this.db = sqlite.connect("model/database.db");
	}

}