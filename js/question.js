function question(first, second) {
	this.known = false;
	this.first = first;
	this.second = second;
	
	this.setKnown = function(known) {
		this.known = known;
	}
}
