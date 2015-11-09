/* global ko */
(function () {
	'use strict';
	
	var initialCats = [
		{
			clickCount: 0,
			name: 'Tabby',
			imgSrc: 'img/434164568_fea0ad4013_z.jpg',
			imgAttribution: 'http://www.flickr.com/photos/bigtallguy/434164568',
			nicknames: ['1', '2', '3', '4']
		},
		{
			clickCount: 0,
			name: 'Shnobby',
			imgSrc: 'img/1413379559_412a540d29_z.jpg',
			imgAttribution: 'http://www.flickr.com/photos/bigtallguy/434164568',
			nicknames: ['1', '2']
		},
		{
			clickCount: 0,
			name: 'Fuzzy',
			imgSrc: 'img/22252709_010df3379e_z.jpg',
			imgAttribution: 'http://www.flickr.com/photos/bigtallguy/434164568',
			nicknames: ['3', '4']
		},
		{
			clickCount: 0,
			name: 'Fluffy',
			imgSrc: 'img/4154543904_6e2428c421_z.jpg',
			imgAttribution: 'http://www.flickr.com/photos/bigtallguy/434164568',
			nicknames: ['1', '2', '3', '4', '5', '6']
		},
		{
			clickCount: 0,
			name: 'Vue',
			imgSrc: 'img/9648464288_2516b35537_z.jpg',
			imgAttribution: 'http://www.flickr.com/photos/bigtallguy/434164568',
			nicknames: ['6']
		},
	]
	
	var ViewModel = function () {	
		var self = this;
		
		this.catList = ko.observableArray();
		initialCats.forEach(function (catItem) {
			self.catList.push(new Cat(catItem));
		});
		
		this.currentCat = ko.observable(this.catList()[0]);
			
		this.incrementCounter = function () {
			self.currentCat().clickCount(self.currentCat().clickCount() + 1);
		};
		
		this.setCurrentCat = function (selectedCat) {
			self.currentCat(selectedCat);
		}
	};
	
	var Cat = function (data) {
		this.clickCount = ko.observable(data.clickCount);
		this.name = ko.observable(data.name);
		this.level = ko.computed(function () {
			if (this.clickCount() < 10) {
				return 'Infant';
			} else if (this.clickCount() < 50) {
				return 'Kid';
			} else {
				return 'Teen';
			}
		}, this);
		this.nicknames = ko.observableArray(data.nicknames);
		this.imgSrc = ko.observable(data.imgSrc);
		this.imageAttribution = ko.observable(data.imageAttribution);
	};
	
	ko.applyBindings(new ViewModel());
})();