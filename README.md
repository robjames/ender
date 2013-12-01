ender
=====

A node module that you call during loops, to report on end.

Essentially, when your loop is finished, you get a report at the end counting warnings and errors.

		There were 2 errors and 12 warnings while processing customers.	

##Install

Add as a dependency in your package.json file

    "ender": "git://github.com/robjames/ender.git"

Then `npm install`


##usage

ender returns a constructor;

	var ender = require('ender');

So you can create new instances like:

	var customerEnder = new ender();

The ender constructor can take 2 perameters: name and length; where length is the array length.
*Note, it is not requred to provide the length; you can increment it manually.*

	var customerEnder = new ender('cusstomers', customerArray.length);

There are some exposed methods that you can call.

	var customerEnder = new ender('customers', someArray.length);
	
	someArray.forEach(function(item, i, arr){
		
		//do something long like saving to DB
		item.save(function(err, item){
			if (err) {
				if (err.name === 'warning') {
					customerEnder.incWarning();
				} else {
					customerEnder.incError();
				}
			}
			
			//all ok
			customerEnder.end(); //call end ALWAYS.

		})
		
	})

When the loop has finished, you will get something like this in the console.log

	There were 2 errors and 12 warnings while processing customers.	

	
On occasions you might not know the length of the data before being looped - like when importing a csv using streams (the origninal use of this module) - in this case you can manually increment the count, just before processing the action.

	.on('data', function(chunk){
	
		customerEnder.inclength();
		//do something long like saving to DB
		chunk.save(function(err, item){
			if (err) {
				if (err.name === 'warning') {
					customerEnder.incWarning();
				} else {
					customerEnder.incError();
				}
			}
			
			//all ok
			customerEnder.end(); //call end ALWAYS.
	
		})
			
	})
