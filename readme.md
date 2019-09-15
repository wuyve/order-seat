## 目录
1. [创建对象](#创建对象)
2. [添加/删除属性](#添加/删除属性)
3. [浏览器内置对象](#浏览器内置对象)

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

### 添加/删除属性
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