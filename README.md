# brant-calendar

```
function random(dayseed, indexseed) {
	var n = dayseed % 11117;
	for (var i = 0; i < 100 + indexseed; i++) {
		n = n * n;
		n = n % 11117;   // 11117 是个质数
	}
	return n;
}

var today = new Date();
var iday = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

var weeks = ["日","一","二","三","四","五","六"];
var directions = ["北方","东北方","东方","东南方","南方","西南方","西方","西北方"];
var activities = [
	{name:"考试", good:"你将有如神助,而众学霸发挥失常",bad:"今天学霸超常发挥"},
	{name:"抢食物", good:"得手！得手！得手！",bad:"非但没拿到吃的还被老湿请家长play"},
	{name:"玩%f", good:"适当的娱乐有利于更好地前进",bad:"玩你妹啊!好好学习",weekend: true},
	{name:"推到%a", good:"搞♂搞♂搞♂搞♂搞♂比♂利♂",bad:"被逆推",weekend: true},
	{name:"思考人♂生", good:"突然顿悟得道成♂仙",bad:"孩子,别发呆了",weekend: true},
	{name:"抄别人的作业", good:"今天不会被人发现",bad:"老湿就在后门口慈祥的看着你"},
	{name:"[数据删除]", good:"[数据删除]",bad:"[数据删除]",weekend:true},
	{name:"当你看到这个条目的时候", good:"你还活着",bad:"你已经死了",weekend:true},
	{name:"上贴吧签到", good:"这不需要理由",bad:"被权限汪封号杯具断签",weekend: true},
	{name:"熬夜", good:"今晚的月光有助于提神醒脑",bad:"明天起不来",weekend: true},
	{name:"上课睡觉", good:"老湿们觉得你可以原谅",bad:"历史大礼包play"},
	{name:"充饭卡", good:"食堂大妈很累,给你多刷了200",bad:"食堂大妈心情不好,把你的钱刷到了别人的卡上"},
	{name:"做%v%t", good:"这回巩固你的基础姿势",bad:"会发现你其实学的一塌糊涂",weekend: true},
	{name:"洗澡", good:"尼玛身上都发霉了啊!",bad:"新学的姿势会被洗掉",weekend: true},
	
	{name:"上晚课发呆", good:"悟到了哲♂学的真谛",bad:"停晚课play"},
		{name:"上AB站", good:"还需要理由吗？",bad:"满屏的兄贵我会说出来？", weekend: true}
	
];

var specials = [
	{date:20140628, type:'good', name:'中考快乐OvO', description:''}
];

var tools = ["五年中考三年模拟", "启东作业本", "北大绿卡", "天利38套", "卷子", "作业", "龙门专题"];

var ass = ["王大毛",""];

var fan = ["Minecraft", "LOL", "CF(小学生)", "SD敢达OL", "植物大战僵尸2", "神庙逃亡", "搞基/百合","高达模型"];

var varNames = ["数学", "语文", "英语", "物理", "政治", "历史", "化学", ];

var drinks = ["水","茶","红茶","绿茶","咖啡","奶茶","可乐","牛奶","豆奶","果汁","果味汽水","苏打水","运动饮料","酸奶"];

function getTodayString() {
	return "今天是" + today.getFullYear() + "年" + (today.getMonth() + 1) + "月" + today.getDate() + "日 星期" + weeks[today.getDay()];
}

function star(num) {
	var result = "";
	var i = 0;
	while (i < num) {
		result += "★";
		i++;
	}
	while(i < 5) {
		result += "☆";
		i++;
	}
	return result;
} 

// 生成今日运势
function pickTodaysLuck() {
  var _activities = filter(activities);
    
	var numGood = random(iday, 87) % 4 + 1;
	var numBad = random(iday, 87) % 1 + 4;
	var eventArr = pickRandomActivity(_activities, numGood + numBad);
	
	var specialSize = pickSpecials();
	
	for (var i = 0; i < numGood; i++) {
		addToGood(eventArr[i]);
	}
	
	for (var i = 0; i < numBad; i++) {
		addToBad(eventArr[numGood + i]);
	}
}

// 去掉一些不合今日的事件
function filter(activities) {
    var result = [];
    
    // 周末的话，只留下 weekend = true 的事件
    if (isWeekend()) {
        
        for (var i = 0; i < activities.length; i++) {
            if (activities[i].weekend) {
                result.push(activities[i]);
            }
        }
        
        return result;
    }
    
    return activities;
}

function isWeekend() {
    return today.getDay() == 0 || today.getDay() == 7;
}

// 添加预定义事件
function pickSpecials() {
	var specialSize = [0,0];
	
	for (var i = 0; i < specials.length; i++) {
		var special = specials[i];
		
		if (iday == special.date) {
			if (special.type == 'good') {
				specialSize[0]++;
				addToGood({name: special.name, good: special.description});
			} else {
				specialSize[1]++;
				addToBad({name: special.name, bad: special.description});
			}
		}
	}
	
	return specialSize;
}

// 从 activities 中随机挑选 size 个
function pickRandomActivity(activities, size) {
	var picked_events = pickRandom(activities, size);
	
	for (var i = 0; i < picked_events.length; i++) {
		picked_events[i] = parse(picked_events[i]);
	}
	
	return picked_events;
}

// 从数组中随机挑选 size 个
function pickRandom(array, size) {
	var result = [];
	
	for (var i = 0; i < array.length; i++) {
		result.push(array[i]);
	}
	
	for (var j = 0; j < array.length - size; j++) {
		var index = random(iday, j) % result.length;
		result.splice(index, 1);
	}
	
	return result;
}

// 解析占位符并替换成随机内容
function parse(event) {
	var result = {name: event.name, good: event.good, bad: event.bad};  // clone
	
	if (result.name.indexOf('%v') != -1) {
		result.name = result.name.replace('%v', varNames[random(iday, 12) % varNames.length]);
	}
	
	if (result.name.indexOf('%t') != -1) {
		result.name = result.name.replace('%t', tools[random(iday, 11) % tools.length]);
	}
	if (result.name.indexOf('%a') != -1) {
		result.name = result.name.replace('%a', tools[random(iday, 11) % ass.length]);
	}
	if (result.name.indexOf('%f') != -1) {
		result.name = result.name.replace('%f', fan[random(iday, 11) % fan.length]);
	}
	
	if (result.name.indexOf('%l') != -1) {
		result.name = result.name.replace('%l', (random(iday, 12) % 247 + 30).toString());
	}
	
	
	return result;
}

// 添加到“宜”
function addToGood(event) {
	$('.good .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.good + '</div></li>');
}

// 添加到“不宜”
function addToBad(event) {
	$('.bad .content ul').append('<li><div class="name">' + event.name + '</div><div class="description">' + event.bad + '</div></li>');
}

$(function(){
	$('.date').html(getTodayString());
	$('.direction_value').html(directions[random(iday, 2) % directions.length]);
	$('.drink_value').html(pickRandom(drinks,2).join('，'));
	$('.goddes_value').html(star(random(iday, 6) % 5 + 1));
	pickTodaysLuck();
});
```
