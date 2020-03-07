class Accordion {
	constructor(element) {
		this.element = document.querySelector(element);
		this.groups = [];
		this.element.querySelectorAll(".accordion__group").forEach(value => {
			let group = new accordionGroup(value, this);
			this.groups.push(group);
		});
	}

	hideElse(e) {
		this.groups.forEach(value => {
			(value != e) ? value.hideGroup() : ""; 
		})
	}
}

class accordionGroup {
	constructor(element, parent) {
		this.element = element;
		this.parent = parent;
		this.status = false;
		this.body = element.querySelector(".accordion__body");
		this.header = element.querySelector(".accordion__header");
		this.header.addEventListener("click", () => {
			if (this.status) this.hideGroup(); 
			else {
				this.parent.hideElse(this);
				this.showGroup();
			}
		});
	}

	showGroup() {
		this.status = true;
		this.body.classList.replace("is-inactive", "is-active");
	}

	hideGroup() {
		this.status = false;
		this.body.classList.replace("is-active", "is-inactive");
	}
}

let a = new Accordion(".accordion");