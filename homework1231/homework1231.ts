//定义链表
function linkedList(value, next) { 
    this.value = (value === undefined ? 0 : value);
    this.next = (next === undefined ? null : next);
}

//头插元素
function insertInHead(list, value) {
    if (list === undefined) {
        list = new linkedList(value, undefined);
        return list;
    }
    else {
        var newNode = new linkedList(value, list);
        list = newNode;
        return list;
    }
}

//尾插元素
function insertInTail(list, value) {
    if (list === undefined) {
        list = new linkedList(value, undefined);
        return list;
    }
    else if(list.next === null) {
        list.next = new linkedList(value, undefined);
        return list;
    }
    else {
        list.next = insertInTail(list.next, value);
        return list;
    }
}

//在指定位置插入元素
function insertInPosition(list, value, position) {
    if (position === 0) {
        let newNode = new linkedList(value, list);
        return newNode;
    }
    else {
        list.next = insertInPosition(list.next, value, position-1);
        return list;
    }
}

//模拟队列出队
function dequeue(list) {
    let newHead = list.next;
    return newHead;
}

//模拟栈，出栈
function stackPop(list) {
    if (list.next === null) {
        return null;
    }
    else {
        list.next = stackPop(list.next);
        return list;
    }
}

//打印链表数据
function printList(list) {
    let temp = list;
    while (temp !== null) {
        console.log(temp.value);
        temp = temp.next;
    }
}

/*
//测试insertInHead函数
var list1;
var head1 = insertInHead(list1, 6);
head1 = insertInHead(head1, 5);
head1 = insertInHead(head1, 4);
head1 = insertInHead(head1, 3);
head1 = insertInHead(head1, 2);
head1 = insertInHead(head1, 1);
//console.log(head1); //为什么结点超过一定数量，显示不完整
printList(head1);
*/

/*
//测试insertInTail函数
var list2;
var head2 = insertInTail(list2, 1);
head2 = insertInTail(head2, 2);
head2 = insertInTail(head2, 3);
head2 = insertInTail(head2, 4);
head2 = insertInTail(head2, 5);
head2 = insertInTail(head2, 6);
printList(head2);
*/

/*
//测试insertInPosition函数
var list3;
var head3 = insertInPosition(list3, 1, 0);
head3 = insertInPosition(head3, 2, 1);
head3 = insertInPosition(head3, 3, 1);
head3 = insertInPosition(head3, 4, 2);
head3 = insertInPosition(head3, 5, 2);
printList(head3);
*/

/*
//测试dequeue函数
var list4;
var head4 = insertInTail(list4, 1);
head4 = insertInTail(head4, 2);
head4 = insertInTail(head4, 3);
head4 = insertInTail(head4, 4);
head4 = insertInTail(head4, 5);
head4 = dequeue(head4);
head4 = dequeue(head4);
//console.log(head4);
printList(head4);
*/

/*
//测试stackPop函数
var list5;
var head5 = insertInTail(list5, 1);
head5 = insertInTail(head5, 2);
head5 = insertInTail(head5, 3);
head5 = insertInTail(head5, 4);
head5 = insertInTail(head5, 5);
head5 = stackPop(head5);
head5 = stackPop(head5);
head5 = stackPop(head5);
//console.log(head5);
printList(head5);
*/


