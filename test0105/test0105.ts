interface node<T> {
    value : T 
    next : node<T> | null
}

interface linkedList<X> {
    head : node<X> | null;
    tail : node<X> | null;
}

function newLinkedList<T>(): linkedList<T> {
    return {
        head : null,
        tail : null
    }
}

function insertAtHead<T>(linkedList:linkedList<T>, val: T) {
    let newNode : node<T> = { //这里不加: node<T>会报错
        value : val,
        next : null
    }
    
    if (linkedList.head === null) {
        linkedList.head = newNode;
        linkedList.tail = newNode;
    }
    else {
        newNode.next = linkedList.head;
        linkedList.head = newNode;
    }
}

function insertAtTail<T>(linkedList: linkedList<T>, val: T) {
    let newNode: node<T> = { //这里不加: node<T>不会报错，但else语句内的newNode是一个普通Object？
        value: val,
        next: null
    }
    if (linkedList.tail === null) {
        linkedList.head = newNode;
        linkedList.tail = newNode;
    }
    else {
        let lastNode = linkedList.tail;
        lastNode.next = newNode;
        linkedList.tail = newNode;
    }
}

//在指定位置插入。position为负数时怎么写
function insertAtPosition<T>(linkedList: linkedList<T>, val: T, position: number) { 
    
    function insertNode(node: node<T>, val: T, position: number) {
        if (position === 0) { //position = 0代表位于插入位置
            newNode.next = node;
            return newNode;
        }
        else if (node.next === null) { //尾插位置，或者position大于链表长度
            node.next = newNode;
            linkedList.tail = newNode; //linkedList尾指针指向newNode
            return node; //一开始返回成了newNode，应该返回node
        }
        else { 
            //如果前面没有node.next === null的情况，这里函数第一个参数有可能为null，不满足第一个参数为node<T>类型
            node.next = insertNode(node.next, val, position-1); //如果用了很多if而没有else if和else,则没有覆盖所有范围，函数会返回undefined
            return node; //不要忘记也要返回
        }
    }
    
    let newNode: node<T> = { //创建新结点
        value: val,
        next: null
    }
    if (linkedList.head === null) { //linkedList为空。当linkedList为空，无论positon为多少，都是这里的操作
        linkedList.head = newNode;
        linkedList.tail = newNode;
    }
    else if (position === 0) { //插入位置为0。用else if而不用if是因为可能函数参数linkedList.head === null且position === 0
        newNode.next = linkedList.head;
        linkedList.head = newNode;
    }
    else {
        insertNode(linkedList.head, val, position);
    }
}

//在头结点位置删除结点
function deleteHeadPosition<T>(linkedList: linkedList<T>) {
    if (linkedList.head === null) { //head和tail指针都为null
        return;
    }
    else if(linkedList.head === linkedList.tail) { //链表只有一个结点
        linkedList.head = null;
        linkedList.tail = null;
    }
    else {
        linkedList.head = linkedList.head.next;
    }
}

//在尾结点位置删除结点
function deleteTailPosition<T>(linkedList: linkedList<T>) {
    
    function deleteTailNode(node: node<T>) {
        if (node.next === null) { //node.next === null的情况已经在之前考虑过，实际不会出现
            return node;
        }
        else if (node.next.next === null) { //如果不加上一行node.next !== null，会报错node.next可能为null
            node.next = null;
            linkedList.tail = node; //一开始该行错写成linkedList.tail = node.next。考虑得不够仔细
            return node;
        }
        else {
            node.next = deleteTailNode(node.next);
            return node;
        }
        
    }
    
    if (linkedList.head === null) { //head和tail指针都为null
        return;
    }
    else if (linkedList.head === linkedList.tail) { //链表只有一个结点
        linkedList.head = null;
        linkedList.tail = null;
    }
    else { //链表至少有两个结点
        deleteTailNode(linkedList.head);
    }
}

//删除指定位置结点。感觉逻辑最复杂
function deleteAtPosition<T>(linkedList: linkedList<T>, position: number) {
    
    function deleteNode(node: node<T>, position: number) {
        if (position === 0) { 
            return node.next;
        }
        else if(node.next === null) { //应该不会进入这个语句内。此时positon一定>=1
            return node;
        }
        else if(node.next.next === null && position === 1) { //一开始没有考虑删除尾结点后，linkedList.tail的设置
            node.next = null;
            linkedList.tail = node;
            return node;
        }
        else if(node.next.next === null && position > 1) {
            return node;
        }
        else {
            node.next = deleteNode(node.next, position-1);
            return node;
        }
    }
    
    if (linkedList.head === null) {//链表本来就为空
        //什么也不做
    }
    else if (linkedList.head === linkedList.tail && position === 0) { //链表只有一个结点,且position为0
        linkedList.head = null;
        linkedList.tail = null;
    }
    else if(linkedList.head === linkedList.tail) { //链表只有一个结点，且position >= 1
        //什么也不做
    }
    else if (position === 0) { //链表>=两个结点，删除位置0的结点
        linkedList.head = linkedList.head.next;
    }
    else {
        deleteNode(linkedList.head, position);
    }
}

//打印链表
function printLinkedList<T>(linkedList: linkedList<T>) {

    function printNode(node: node<T> ) {
        console.log(node.value);
        if (node.next !== null) {
            printNode(node.next);
        }
    }

    if (linkedList.head === null) return;
    else {
        printNode(linkedList.head);
    }
}

//type F<T> = (X : T) => void;

function forEach<T>(linkedList: linkedList<T>, func : (X : T) => void) {

    function printNode(node: node<T>, func : (X : T) => void ) {
        //console.log(node.value);
        func(node.value);
        if (node.next !== null) {
            printNode(node.next, func);
        }
    }

    if (linkedList.head === null) return;
    else {
        printNode(linkedList.head, func);
    }
}


/*
let newList = newLinkedList<number | string>();

//上课内容
insertAtHead(newList, 1);
insertAtHead(newList, 2);
insertAtHead(newList, 3);
insertAtHead(newList, "hello");
//printLinkedList(newList);
forEach(newList, (X) => {
    if (typeof X === "string") console.log(true);
} );
*/

/*
//测试insertAtTail函数
let newList2 = newLinkedList<number | string>();
insertAtTail(newList2, 1);
insertAtTail(newList2, 2);
insertAtTail(newList2, 3);
insertAtTail(newList2, "hello");
printLinkedList(newList2);
*/

let newList3 = newLinkedList<number | string>();

/*
//空链表时位置2添加元素
insertAtPosition(newList3, 1, 2);
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/


/*
//1个元素时位置0添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 0, 0);
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//1个元素时位置1添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 1); 
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//1个元素时位置2添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 2); 
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//2个元素时位置0添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 1); 
insertAtPosition(newList3, 0, 0); 
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//2个元素时位置1添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 1); 
insertAtPosition(newList3, 1.5, 1); 
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//2个元素时位置2添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 1); 
insertAtPosition(newList3, 3, 2); 
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//2个元素时位置5添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 1); 
insertAtPosition(newList3, 3, 5); 
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//3个元素时位置0添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 1); 
insertAtPosition(newList3, 3, 2); 
insertAtPosition(newList3, 0, 0);
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//3个元素时位置1添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 1); 
insertAtPosition(newList3, 3, 2); 
insertAtPosition(newList3, 1.5, 1);
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/


/*
//3个元素时位置2添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 1); 
insertAtPosition(newList3, 3, 2); 
insertAtPosition(newList3, 2.5, 2);
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//3个元素时位置3添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 1); 
insertAtPosition(newList3, 3, 2); 
insertAtPosition(newList3, 4, 3);
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//3个元素时位置100添加元素
insertAtPosition(newList3, 1, 0);
insertAtPosition(newList3, 2, 1); 
insertAtPosition(newList3, 3, 2); 
insertAtPosition(newList3, 100, 100);
printLinkedList(newList3);
if (newList3.head !== null) {
    console.log("头结点值为:" + newList3.head.value);
}
if (newList3.tail !== null) {
    console.log("尾结点为:" + newList3.tail.value);
}
*/

/*
//测试deleteHeadPosition()函数
let newList4 = newLinkedList<number | string>();
insertAtTail(newList4, 1);
insertAtTail(newList4, 2);
insertAtTail(newList4, 3);

deleteHeadPosition(newList4);
printLinkedList(newList4);

if (newList4.head !== null) {
    console.log("头结点值为:" + newList4.head.value);
}
if (newList4.tail !== null) {
    console.log("尾结点为:" + newList4.tail.value);
}
*/

/*
//测试deleteTailPosition()函数
let newList5 = newLinkedList<number | string>();
insertAtTail(newList5, 1);
insertAtTail(newList5, 2);
insertAtTail(newList5, 3);
insertAtTail(newList5, 4);

deleteTailPosition(newList5);
printLinkedList(newList5);

if (newList5.head !== null) {
    console.log("头结点值为:" + newList5.head.value);
}
if (newList5.tail !== null) {
    console.log("尾结点为:" + newList5.tail.value);
}
*/

/*
//测试deleteAtPosition()函数
let newList6 = newLinkedList<number | string>();
insertAtTail(newList6, 1);
insertAtTail(newList6, 2);
insertAtTail(newList6, 3);
insertAtTail(newList6, 4);

deleteAtPosition(newList6, 5);
printLinkedList(newList6);

if (newList6.head !== null) {
    console.log("头结点值为:" + newList6.head.value);
}
if (newList6.tail !== null) {
    console.log("尾结点为:" + newList6.tail.value);
}
*/