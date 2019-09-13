var price = 45;
for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= 8; j++) {
        var one = document.createElement('div');
        document.getElementById('seat-row').appendChild(one);
        one.setAttribute('class', 'oneDiv');
        var num = document.createElement('a');
        num.innerText = i + '-' + j;
        one.setAttribute('id', 'seat' + i + j);
        one.addEventListener('click', function () {
            this.style.backgroundColor = '#de3239';
            var select = this.id;
            var row = select.slice(4, 5);
            var col = select.slice(5, 6);
            var newUL = document.getElementById('selected-seats');
            var lists = document.createElement('li');
            newUL.appendChild(lists);
            lists.innerText = row + '排' + col + '座';
            var amout = document.getElementById('selected-seats').getElementsByTagName('li').length;
            var counter = document.getElementById('counter');
            var total = document.getElementById('total');
            counter.innerText = amout;
            total.innerText = amout * price;
        })
        one.appendChild(num);
    }
}