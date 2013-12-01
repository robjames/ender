var ender = function(name, length){
	var that = this;
	this.name = name || 'No name';
	this.length = length || 0;
	this.count = 0;
	this.warningCount = 0;
	this.errorCount = 0;
	
	this.hasEnded = function(){
		if (that.count === that.length) {
			console.log("There were %d errors and %d warnings while processing %s.", that.errorCount, that.warningCount, that.name);	
		}
	}
}
ender.prototype.incLength = function(){
	this.length++
}
ender.prototype.incError = function(){
	this.errorCount++
}
ender.prototype.incWarning = function(){
	this.warningCount++
}
ender.prototype.end = function(){
	this.count++
	this.hasEnded();
}
module.exports = ender;