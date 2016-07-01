"use strict";

class FightPit{
	constructor(vikings){
		this.vikings=vikings;
		this.maxTurns=10;

	}
	
	
	fight(){
		var randomIntOne = Math.floor(Math.random() * this.vikings.length);
		var randomIntTwo= Math.floor(Math.random() * this.vikings.length);

		var vikingOne = this.vikings[randomIntOne];
		var vikingTwo = this.vikings[randomIntTwo];
		while (vikingONe===vikingTwo){
			var randomIntThree= Math.floor(Math.random() * this.vikings.length);
			vikingTwo=this.vikings[randomIntThree];
		}

		var turns=0;
		var a; // container for weakest viking
		while(turns<this.maxTurns){
			//vikingOne attacks vikingTwo
			vikingTwo.healthOfViking=vikingTwo.healthOfViking-vikingOne.strengthOfViking;

			//vikingTwo attacks vikingOne
			vikingOne.healthOfViking=vikingOne.healthOfViking-vikingTwo.strengthOfViking;

			//returning the viking that has the lowest health
			
			if(vikingOne.healthOfViking<=40 && vikingTwo.healthOfViking<=40){
				a=vikingOne.healthOfViking + vikingTwo.healthOfViking;
				console.log("viking one and two have " + a + " health so fight is over");
				return;
			}
			if else(vikingOne.healthOfViking<=40){
				a=vikingOne.healthOfViking;
				console.log("viking one has " + a + " health so fight is over");
				return;
			}
			if else(vikingTwo.healthOfViking){
				a=vikingTwo.healthOfViking;
				console.log("viking two has " + a + " health so fight is over");
				return;
			}
			turns ++;
		}

		}
	}
}