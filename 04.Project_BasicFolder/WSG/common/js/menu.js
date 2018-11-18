/*  Menu Tree - Example
	{name : 'menu1', url : '#none', display : true, menu : null]},
	{name : 'menu2', url : '#none', display : true, menu : [
		{title : this.name, name : 'menu2-1', url : '#none', display : true, menu : null},
	]},
	{name : 'menu3', url : '#none', display : true, menu : [
		{title : this.name, name : 'menu3-1', url : '#none', display : true, menu : [
			{title : this.name, name : 'menu3-1-1', url : '#none', display : true, menu : []},
		]},
	]},
*/

var gMenu = [
	{name : '메뉴1', url : '#none', display : true, menu : null},
	{name : '메뉴2', url : '#none', display : true, menu : [
		{title : this.name, name : 'menu2-1', url : '#none', display : true, menu : null},
	]},
	{name : '메뉴3', url : '#none', display : true, menu : [
		{title : this.name, name : 'menu3-1', url : '#none', display : true, menu : [
			{title : this.name, name : 'menu3-1-1', url : '#none', display : true, menu : []},
		]},
	]},
];

var gNav = {
	navHTML : '',
	init : function(){
		this.setHTML();
	},
	setHTML : function(){
		//Depth1
		if (gMenu.length){
			this.navHTML += '<ul>';
			for (var i=0;i<gMenu.length;i++){
				this.navHTML += '<li><a href="'+gMenu[i].url+'">'+gMenu[i].name+'</a>';

				//Depth2
				if (gMenu[i].menu != null){
					this.navHTML += '<ul>';
					for (var j=0;j<gMenu[i].menu.length;j++){
						this.navHTML += '<li><a href="'+gMenu[i].menu[j].url+'">'+gMenu[i].menu[j].name+'</a>';

						//Depth3
						if (gMenu[i].menu[j].menu != null){
							this.navHTML += '<ul>';
							for (var k=0;k<gMenu[i].menu[j].menu.length;k++){
								this.navHTML += '<li><a href="'+gMenu[i].menu[j].menu[k].url+'">'+gMenu[i].menu[j].menu[k].name+'</a>';
								this.navHTML += '</li>';
							}
							this.navHTML += '</ul>';
						}
						this.navHTML += '</li>';
					}
					this.navHTML += '</ul>';
				}
				this.navHTML += '</li>';
			}
			this.navHTML += '</ul>';
		}

		this.anb(this.navHTML);
		this.lnb(this.navHTML);
		this.snb(this.navHTML);
		this.mnb(this.navHTML);
	},
	anb : function(nav){
		var anbEl = '.g-anb';
	},
	lnb : function(nav){
		var lnbEl = '.g-lnb';
	},
	snb : function(nav){
		var snbEl = '.g-snb';
	},
	mnb : function(nav){
		var mnbEl = '.m-snb';
	},
}

$(document).ready(function(){
	gNav.init();
})
