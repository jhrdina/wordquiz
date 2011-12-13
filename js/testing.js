
function testing(structure) {
	this.structure = structure;
	this.current_question = -1;
	
	this.get_question = function() {
		do {
			this.current_question++;
		} while(this.current_question < this.structure.length &&
		        this.structure[this.current_question].known);
		return this.structure[this.current_question]
	}
	
	this.set_known = function() {
		this.structure[this.current_question].known = true;
	}
}
