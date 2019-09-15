## 目录
1. [创建对象](#创建对象)
2. [添加/删除属性](#添加删除属性)
3. [浏览器对象模型BOM](#浏览器对象模型BOM)
4. [document对象](#document对象)
5. [window对象](#window对象)
6. [navigator对象](#navigator对象)

### 创建对象
创建对象的方法有：
1. 字面量语法
例如
```javascript
var hotel = {
    name: 'super8',
    rooms: 50,
    booked: 25,
    roomType: ['标间', '大床房', '双人床'],
    : function () {
        return this.rooms - this.booked;
    }
}
```
2. 构造函数法
对象构造函数可以使用函数作为模板来创建对象。首先创建带有对象属性和方法大的模板，构造函数的名称通常首字母大写，`this`关键字用于替代对象名指代属性或方法所checkAvailiability属的当前函数创建的对象，每个为当前对象创建新属性或新方法的语句都以一个';'结尾。
例如：
```javascript
function Hotel (name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailiability = function () {
        return this.rooms - this.booked;
    }
}

var super8 = new Hotel ('super8', 40, 25);
```

### 添加删除属性
添加属性： 使用`.`语法添加属性；

删除属性： 使用`delete`关键词删除属性；
例如：
```javascript
var student = {
    Math: 80,
    English: 75,
    Chinese: 90;
}
student.art = 88;  // 添加art属性
delete student.English;  // 删除English属性
```

### 浏览器内置对象
浏览器附带了一系列内置的对象，最主要的对象有：全局Javascript对象、浏览器对象模型（BOM）和文档对象模型（DOM）。

BOM包含一系列表示当前窗口或标签的对象，比如浏览器历史、设备屏幕、屏幕宽度等。

DOM为页面中每个元素以及每段独立的文本创建一个新对象。

#### 浏览器对象模型BOM
|对象|描述|
|:---:|:---|
|window|JS层级中的顶层对象。window对象表示浏览器窗口，每当`<body>`或`<frameset>`标签出现，window对象就会被自动创建|
|navigator|包含客户端浏览器的信息|
|screen|包含客户端显示屏的信息|
|history|包含浏览器窗口访问过的URL|
|location|包含了当前URL的信息|

#### document对象
文档对象模型（DOM）的最顶端对象是document对象，代表当前浏览器窗口或标签载入的页面。

|属性/方法|描述|
|:---:|:---|
|activeElemnt|返回当前获取焦点元素|
|addEventListener|向文档添加句柄|
|adoptNode(node)|从另外一个文档返回`adopt`节点到当前文档|
|all[]|提供对文档中所有HTML元素的访问|
|anchors[]|返回对文档中所有Anchor对象的引用|
|applets|返回对文档中所有Applet对象的引用|
|baseAPI|返回文档的绝对基础API|
|body|返回文档的body元素|
|close()|关闭用`document.open()`方法打开的输出流，并显示选定的数据|
|cookie|返回与当前文档有关的cookie|
|createAttribute()|创建一个属性节点|
|createComment()|创建一个注释节点|
|createDocumentFragment()|创建空的`DocumentFragment`对象，并返回此对象|
|createElement()|创建元素节点|
|createTextNode()|创建文本节点|
|doctype|返回与文档相关的文档类型说明（DTD）|
|documentElement|返回文档的根节点|
|documentMode|返回通过浏览器渲染文档的模式|
|documentURI|设置或返回文档的位置|
|domain|返回当前文档的域名|
|domConfig|返回`normalizeDocument()`被调用时所使用的配置|
|embeds[]|返回文档中所有嵌入的内容集合|
|forms[]|返回文档中所有Form对象的引用|
|getElementsByClassName()|返回文档中所有指定类名的元素集合，作为NodeList对象|
|getElementById()|返回对拥有指定id的第一个对象的引用|
|getElementsByName()|返回带有指定名称的对象集合|
|getElementsByTagName()|返回带有指定标签名的对象集合|
|images[]|返回对文档中Image对象的引用|
|implementation|返回处理该文档的DOMImplementation对象|
|importNode()|把一个节点从另一个文档复制到该文档以便应用|
|inputEncoding|返回用于文档的编码方式|
|lastModified|返回文档最后被修改的日期和时间|
|links[]|返回对文档中所有Area和Link对象的引用|
|normalize()|删除空文本节点，并连接相邻节点|
|normalizeDocument()|移除空文本节点，并连接相邻节点|
|open()|打开一个流，以收集来自任何document.write()或document.writeIn()方法的输出|
|querySelector()|返回文档中匹配制定的CSS选择器的第一元素|
|querySelectorAll()|返回文档中匹配制定的CSS选择器的所有节点元素列表|
|readyState|返回文档状态(加载中...)|
|referrer|返回载入当前文档的URL|
|removeEventListener()|移除文档中的事件|
|renameNode()|重命名元素或者属性节点|
|script[]|返回页面中所有脚本集合|
|strictErrorChecking|设置会折返回是否强制进行错误检查|
|title|返回当前文档的标题|
|URL|返回文档完整的URL|
|write()|向文档写HTML表达式或Javascript代码|
|writeIn()|等同于write()方法，不同的是在每个表达式后面写一个换行符。|

#### window对象
window对象时BOM的核心对象，它表示浏览器的一个实例。网页中定义的任何一个对象、变量和函数，都以window作为其Global对象。

全局变量不能通过delete操作符删除，而直接定义在window对象上，属性可以删除。访问未声明的变量会抛出错误，但通过查询window对象的该变量可以知道某个可能未声明的变量是否存在。

|属性/方法|描述|
|:---:|:---|
|frames[]|返回窗口中所有命名的框架|
|closed|返回该窗口是否已被关闭|
|defaultStatus|设置或返回窗口状态栏的默认文本|
|document|对document对象的只读引用。[请参考Document对象](#document对象)|
|history|对history对象的只读引用。[请参考history对象](#history对象)|
|innerheight|返回窗口的文档显示区高度|
|innerwidth|返回窗口文档显示区宽度|
|length|设置或者返回窗口中的框架数量|
|location|用于窗口或框架的Location对象。[请参考location对象](#location对象)|
|name|设置或返回窗口的名称|
|Navigator|对Navigator对象的只读应用。[请参考Navigator对象](#navigator对象)|
|opener|返回对创建此窗口的窗口的引用|
|outerheight|返回窗口的外部高度|
|outerwidth|返回窗口的外部宽度|
|pageXOffset|设置或返回当前页面相对于窗口显示区左上角的X位置|
|pageYOffset|设置或返回当前页面相对于窗口显示区左上角的Y位置|
|parent|返回父窗口|
|Screen|对Screen对象的只读引用。[请参考Screen对象](#Screen对象)|
|self|返回对当前窗口的引用。等价于window属性|
|status|返回窗口状态栏的文本|
|top|返回最顶层的先辈窗口|
|window|window属性等价于self属性，它包含了对窗口自身的引用|
|ScreenLeft、ScreenTop、screenX、screenY|只读整数。声明了窗口左上角在屏幕上的x坐标和y坐标。（IE、Safari和Opera支持ScreenLeft和ScreenTop；而Firefox和Safari支持screenX和screenY）|
|alert()|显示带有一段信息和一个确定按钮的警告框|
|blur()|把键盘焦点从顶层窗口移开|
|clearInterval()|取消由setInterval()设置的timeout|
|clearTimeout()|取消由setTimeout()方法设置的timeout|
|close()|关闭浏览器窗口|
|confirm()|显示带有一段消息以及“确定”按钮和“取消”按钮的对话框|
|createPopup()|创建一个pop-up窗口|
|focus()|把键盘焦点赋予一个窗口|
|moveBy()|可在相对窗口的当前坐标把它移动指定的像素|
|moveTo()|把窗口的左上角移动到下一个指定坐标|
|open()|打开一个新的浏览器窗口或者查找一个已命名的窗口|
|print()|打印当前窗口的内容|
|prompt()|显示可提示用户输入的对话框|
|resizeBy()|按照指定的像素调整窗口的大小|
|resizeTo()|把窗口的大小调整到制定的宽度和高度|
|scrollBy()|按照制定的像素值来滚动内容|
|scrollTo()|把内容滚动到指定的坐标|
|setInterval()|按照指定的周期(以毫秒计)来调用函数或者计算表达式|
|setTiomeout()|在指定的毫秒数后调用函数或者计算表达式|

IE、Safari、Opera和Chrome都提供了screenLeft和screenTop属性获取窗口相对于屏幕左边和上边的位置。跨浏览器取得窗口左边和上边的位置的代码如下:
```javascript
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
alert(leftPos + ":" + topPos);
```
#### navigator对象
|集合、属性与方法|描述|
|:---:|:---|

(未完，待续...)
