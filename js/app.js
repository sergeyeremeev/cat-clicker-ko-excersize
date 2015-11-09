/* global ko */
(function () {
	'use strict';
	
	var ViewModel = function () {
		this.clickCount = ko.observable(0);
		this.name = ko.observable('Tabby');
		this.level = ko.computed(function () {
			if (this.clickCount() < 10) {
				return 'Infant';
			} else if (this.clickCount() < 50) {
				return 'Kid';
			} else {
				return 'Teen';
			}
		}, this);
		this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
		this.imageAttribution = ko.observable('https://www.flickr.com/photos/big');
		
		this.incrementCounter = function () {
			this.clickCount(this.clickCount() + 1);
		};
	};
	
	ko.applyBindings(new ViewModel());
})();