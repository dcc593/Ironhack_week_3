"use strict";

class Viking{
	constructor(name){
		this.name=name;
		this.healthOfViking=getRandomInt(180,200);
		this.strengthOfViking=getRandomInt(30,40);
	}
}
module.exports=Viking;