var price = 45;  // 定义票价
var choosed = [];  // 定义选中的座位列表
for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 8; j++) {
        var one = document.createElement('div');
        document.getElementById('seat-row').appendChild(one);
        one.setAttribute('class', 'oneDiv');
        // 定义变量num，创建一个span标签
        var num = document.createElement('a');
        // 为变量num添加文本
        num.innerText = i + '-' + j;
        // 为每个div定义一个id
        one.setAttribute('id', 'seat' + i + j);
        // 为座位添加点击事件
        one.addEventListener('click', function () {
            // 定义变量select，通过获取当前点击div的id
            var nowSelect = this.id;
            console.log("我选中的是这个：",nowSelect);
            // 判断当前选中的座位是否在列表里
            // Array.includes()返回true/false
            if (choosed.includes(nowSelect)) {
                // 1.将红色已选中的样式改为未选中
                this.style.backgroundColor = 'rgba(185, 222, 160, 0.87)';
                var thisRow, thisCol;
                // 2.遍历并删除右边显示的已选中列表
                choosed.forEach((item, index, arr) => {
                    if (item == nowSelect) {
                        console.log("找到要删除的元素了：",item);
                        arr.splice(index, 1)
                        thisRow = item.slice(4, 5);
                        // 截取id的第6个字符赋值为col
                        thisCol = item.slice(5, 6);
                    }
                });
                var thisSeat = thisRow + '排' + thisCol + '座';
                var parent = document.getElementById('selected-seats')
                var thisLists = parent.getElementsByTagName('li');
                console.log(thisLists)
                for (let k = 0; k <= thisLists.length; k++) {
                    if (thisLists[k].innerText == thisSeat) {
                        parent.removeChild(thisLists[k])
                    }
                }
            } else {
                // 如果不在choosed列表中，表明当前要选中此座位并预定
                this.style.backgroundColor = '#de3239';
                choosed.push(nowSelect);
                var row = nowSelect.slice(4, 5);
                // 截取id的第6个字符赋值为col
                var col = nowSelect.slice(5, 6);
                // 定义变量newUL，通过id获取无序列表
                var newUL = document.getElementById('selected-seats');
                var lists = document.createElement('li');
                // 添加无序列表项目及文本节点
                newUL.appendChild(lists);
                lists.innerText = row + '排' + col + '座';

            }
            // 添加数量各总数
            var amout = choosed.length;
            var counter = document.getElementById('counter');
            var total = document.getElementById('total');
            counter.innerText = amout;
            total.innerText = amout * price;
        })
        one.appendChild(num);
    }
}