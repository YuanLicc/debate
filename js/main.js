;
var debate = {
	title : "辩论赛",
	positive : "工作中遇到碧池要以牙还牙",
	negative : "工作中遇到碧池还是不跟TA一般计较",
	startback : "images/start.jpg",
	end : "完毕",
	endback : "images/start.jpg",
	animationTime : 1,
	startAnimation : {
		centerToLeft : "centerToLeft",
		leftToCenter : "leftToCenter"
	},
	endAnimation : {
		rightToCenter : "rightToCenter",
		centerToRight : "centerToRight"
	},
	pages : [
		{
			title : "开篇立论",
			desc : "双方陈诉己方的观点，由正方开始",
			back : "images/back.jpg",
			timers : [
				{
					time : 150
				},
				{
					time : 150
				}
			],
			animation : {
				leftToCenter : "leftToCenter", 
				centerToRight : "centerToRight",
				rightToCenter : "rightToCenter",
				centerToLeft : "centerToLeft"
			}
		},
		{
			title : "攻辩",
			desc : "正方二辩选择反方二辩或三辩进行一对一攻辩",
			back : "images/back.jpg",
			timers : [
				{
					time : 105,
				}
			],
			animation : {
				leftToCenter : "leftToCenter", 
				centerToRight : "centerToRight",
				rightToCenter : "rightToCenter",
				centerToLeft : "centerToLeft"
			}
		},
		{
			title : "攻辩",
			desc : "反方二辩选择正方二辩或三辩进行一对一攻辩",
			back : "images/back.jpg",
			timers : [
				{
					time : 105,
				}
			],
			animation : {
				leftToCenter : "leftToCenter", 
				centerToRight : "centerToRight",
				rightToCenter : "rightToCenter",
				centerToLeft : "centerToLeft"
			}
		},
		{
			title : "攻辩",
			desc : "正方三辩选择反方二辩或三辩进行一对一攻辩",
			back : "images/back.jpg",
			timers : [
				{
					time : 105,
				}
			],
			animation : {
				leftToCenter : "leftToCenter", 
				centerToRight : "centerToRight",
				rightToCenter : "rightToCenter",
				centerToLeft : "centerToLeft"
			}
		},
		{
			title : "攻辩",
			desc : "反方三辩选择正方二辩或三辩进行一对一攻辩",
			back : "images/back.jpg",
			timers : [
				{
					time : 105,
				}
			],
			animation : {
				leftToCenter : "leftToCenter", 
				centerToRight : "centerToRight",
				rightToCenter : "rightToCenter",
				centerToLeft : "centerToLeft"
			}
		},
		{
			title : "攻辩",
			desc : "正方一辩进行攻辩小结，反方一辩进行攻辩小结",
			back : "images/back.jpg",
			timers : [
				{
					time : 90,
				}
			],
			animation : {
				leftToCenter : "leftToCenter", 
				centerToRight : "centerToRight",
				rightToCenter : "rightToCenter",
				centerToLeft : "centerToLeft"
			}
		},
		{
			title : "自由辩论",
			desc : "由正方开始",
			back : "images/back.jpg",
			timers : [
				{
					time : 480,
				}
			],
			animation : {
				leftToCenter : "leftToCenter", 
				centerToRight : "centerToRight",
				rightToCenter : "rightToCenter",
				centerToLeft : "centerToLeft"
			}
		},
		{
			title : "总结陈词",
			desc : "反方四辩开始",
			back : "images/back.jpg",
			timers : [
				{
					time : 180,
				}
			],
			animation : {
				leftToCenter : "leftToCenter", 
				centerToRight : "centerToRight",
				rightToCenter : "rightToCenter",
				centerToLeft : "centerToLeft"
			}
		}
	]
}

var windowHeight = null;

var elements = {};
var timer = null;

var next = function(id) {
	var state = 0;
	for(var key in elements) {
		if(state !== 0) {
			if(key == "1000") {
				addAnimation(elements[key], debate.endAnimation.rightToCenter);
			}
			else{
				addAnimation(elements[key], debate.pages[key - 1].animation.rightToCenter);
			}
			//setCenter(elements[key]);
			return;
		}

		if (key === id) {
			state = 1;
			//setLeft(elements[key]);
			if(id == "0") {
				addAnimation(elements[key], debate.startAnimation.centerToLeft);
			}
			else{
				addAnimation(elements[key], debate.pages[key - 1].animation.centerToLeft);
			}
			
		}
	}
}

var up = function(id) {
	var up = null;
	var state = 0;
	var upId = null;

	for(var key in elements){
		if (key === id) {
			state = 1;
			//setRight(elements[key]);
			if(key == "1000") {
				addAnimation(elements[key], debate.endAnimation.centerToRight);
			}
			else{
				addAnimation(elements[key], debate.pages[key - 1].animation.centerToRight);
			}
			break;
		}
		else{
			upId = key;
			up = elements[key];
		}
	}
	if(state === 1) {
		if(upId == "0") {
			addAnimation(elements[upId], debate.startAnimation.leftToCenter);
		}
		else{
			addAnimation(elements[upId], debate.pages[upId - 1].animation.leftToCenter);
		}
		//setCenter(up);
	}
}

var addAnimation = function(ele, animation) {
	if(ele == null || animation == null) return;
	var animationValue = animation + " " + debate.animationTime + "s";
	addAttribute(ele, "animation", animationValue);
	addAttribute(ele, "-moz-animation", animationValue);
	addAttribute(ele, "-webkit-animation", animationValue);
	addAttribute(ele, "-o-animation", animationValue);
	addAttribute(ele, "animation-fill-mode", "forwards");
}

var getElementById = function(id) {
	return document.getElementById(id);
}

var setRight = function(element) {
	addAttribute(element, "left", "100%")
}

var setLeft = function(element) {
	addAttribute(element, "left", "-100%")
}

var setCenter = function(element) {
	addAttribute(element, "left", "0");
}

var setDisplayNone = function(element) {
	addAttribute(element, "display", "none");
}

var setDisplay = function(element) {
	addAttribute(element, "display", "block");
}

var addAttribute = function (element, style, value) {
	var styleOld = element.getAttribute("style");
	styleOld = deleteExitCss(styleOld, style);
	if (styleOld == null) {
		styleOld = "";
	}
	element.setAttribute("style", styleOld + style + ":"+ value +";");
}

var initHeight = function() {

	for(var key in elements) {
		addAttribute(elements[key], "height", windowHeight + "px");
	}
}

var innerHTML = function(ele, content) {
	ele.innerHTML = content;
}

var initMainPage = function() {
	var title = document.getElementById("title");
	var positive = document.getElementById("positive");
	var negative = document.getElementById("negative");
	var end = document.getElementById("end");
	innerHTML(title, debate.title);
	innerHTML(positive, debate.positive);
	innerHTML(negative, debate.negative);
	innerHTML(end, debate.end);
}

var parseTimerInnerHtml = function(id, timers) {
	var str = "";

	for(var i = 0 ; i < timers.length; i++) {
		str += "<div class=\"time-block-child\">"
		        + "<div id=\""+ (id + "" + i) +"\" class=\"time\" onclick=clickTime('"+ (id + "" + i) +"')>1 : 22</div>"
	    	+ "</div>";
	}
	return str;

}

var deleteExitCss = function(style, css) {
	if(style == null || style.trim == "") return "";
	var arr = style.split(";");
	var result = "";
	if(arr.length == 0) {
		return result;
	}
	else{
		for (var i = 0; i < arr.length; i++) {
			if(arr[i].indexOf(css + ":") === 0){
				//nothing to do
			}
			else if(arr[i].trim() === "") {
				// nothing to do
			}
			else{
				result += arr[i] + ";";
			}
		}
	}
	return result;
}

var initPages = function() {
	var appendHTML = "";
	for(var i = 0; i < debate.pages.length; i++) {
		var id = i + 1;
		debate.pages[i].id = id;

		var timersHtml = parseTimerInnerHtml(id, debate.pages[i].timers);

		appendHTML += "<div id=\""+ id +"\" class=\"content\">"
					+ "<div class=\"general-title-block\">"
						+ "<div class=\"general-title\">"+ debate.pages[i].title +"</div>"
						+ "<div class=\"general-desc\">"+ debate.pages[i].desc +"</div>"
					+ "</div>"
					+ "<div class=\"time-block\">"
					+ timersHtml
					+ "</div>"
					+ "<div class=\"button-block\">"
						+ "<div class=\"next-button\" onclick=\"up('"+ id +"')\">上一页</div>"
						+ "<div class=\"next-button\" onclick=\"next('"+ id +"')\">下一页</div>"
					+ "</div>"
				+ "</div>";
	}
	document.body.innerHTML = document.body.innerHTML + appendHTML;
}

var setBackground = function(ele, imageUrl) {
	addAttribute(ele, "background", "url("+ imageUrl +") fixed center center no-repeat;background-size:cover;");
}

var initTimer = function() {
	for(var i = 0; i < debate.pages.length; i++) {
		if(debate.pages[i].timers != null) {
			for(var j = 0; j < debate.pages[i].timers.length; j++) {
				debate.pages[i].timers[j].id = debate.pages[i].id + "" + j;
				debate.pages[i].ele = document.getElementById(debate.pages[i].timers[j].id);
				debate.pages[i].timers[j].timer = new Timer(debate.pages[i].timers[j].time, debate.pages[i].ele, function(ele, minute, second) {
					ele.innerHTML = minute + " :" + second;
				});
				debate.pages[i].ele.innerHTML = debate.pages[i].timers[j].timer.minute + " :" + debate.pages[i].timers[j].timer.second;
			}
		}
	}
}

var clickTime = function(id) {
	for(var i = 0; i < debate.pages.length; i++) {
		if(debate.pages[i].timers != null) {
			for(var j = 0; j < debate.pages[i].timers.length; j++) {
				if(debate.pages[i].timers[j].id === id){
					if(debate.pages[i].timers[j].timer.state == 0) {
						debate.pages[i].timers[j].timer.start();
					}
					else{
						debate.pages[i].timers[j].timer.stop();
					}
				}
			}
		}
	}
}

var initPagesDisplay = function() {
	elements["0"] = getElementById("0");
	setCenter(elements["0"]);
	setBackground(elements["0"], debate.startback);

	for(var i = 0; i < debate.pages.length; i++) {
		var id = debate.pages[i].id;
		elements[id] = getElementById(id);
		setRight(elements[id]);
		setBackground(elements[id], debate.pages[i].back);
	}
	elements["1000"] = getElementById("1000");
	setRight(elements["1000"]);
	setBackground(elements["1000"], debate.endback);
}

var init = function() {
	windowHeight = window.innerHeight;
	initMainPage();
	initPages();
	initPagesDisplay();
	initTimer();
	initHeight();
}

window.onload = function() {
	init();
}

var Timer = function(time, ele, show){
	var object = new Object();
	object.timer = null;
	object.time = time;
	object.ele = ele;
	object.state = 0;
	object.minute = 0;
	object.second = 0;

	object.minute = Math.floor(object.time / 60 % 60);
	object.minute < 10 && (object.minute = '0' + object.minute);
	object.second = Math.floor(object.time % 60);

	object.countDown = function(){
		object.second--;
		object.second < 10 && (object.second = '0' + object.second);
		if(object.second.length >= 3){
			object.second = 59;
			object.minute = "0" + (Number(object.minute) - 1);
		}
		if(object.minute.length >= 3){
			object.minute ='00';
			object.second = '00';
			clearInterval(object.timer);
		}
		show(ele, object.minute, object.second);
	}

	object.start = function() {
		object.timer = setInterval(object.countDown, 1000);
		object.state = 1;
	}

	object.stop = function() {
		clearInterval(object.timer);
		object.state = 0;
	}

	return object;

}