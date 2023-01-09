/*
for(var i = 0; i < 3; i++) {
    console.log(i);
}
console.log("i在函数外的值为：" + i);
//console.log(i);
*/

/*
function hello(myname) {
    console.log(`我的名字为 ${myname} `);
}

hello("xiaoqin");
console.log(`尝试函数外获得姓名：${myname}`);
*/

/*
const functionValue = function(value: number) {
    return ++value;
}

let result = functionValue(3);
console.log(result);
*/

/*
let result2 = Object.is(-0, 0);
console.log(result2);

let result3 = Object.is(NaN, NaN);
console.log(result3);
*/

/*
//测试类
class animal {
    name: string; //快速修复
    weight: number;
    constructor(name: string, weight: number) {
        this.name = name;
        this.weight = weight;
    }

    run() {
        console.log("跑得很快");
    }

    speak() {
        console.log(`名字叫 ${this.name}，体重 ${this.weight} 千克`)
    }
}

class dog extends animal {
    color: string;
    constructor(animal: animal, color: string) {
        super(
            animal.name,
            animal.weight
        )
        this.color = color;
    }

    speak() {
        console.log(`名字叫 ${this.name}, 体重 ${this.weight} 千克, 颜色为${this.color} `)
    }
}


let oneAnimal = new animal("哈士奇", 5);

let keji = new animal( //注意定义方式
    "柯基",
    6
);

let cleverDog = new dog(oneAnimal, "white");
cleverDog.run();
cleverDog.speak();
*/

/*
//测试classic modules
function Publication(title, author, pubDate) {
    var publicAPI = { //publicAPI是一个对象吗，在这个对象里面定义了一个print（）函数
        print() {
            console.log(`
                Title: ${ title }
                By: ${ author }
                ${ pubDate }
            `);
        }
    };
    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.pubDate
    )

    var publicAPI = {
        print() {
            pub.print();
            console.log(`
                Publisher: ${ bookDetails.publisher }
                ISBN: ${ bookDetails.ISBN }
            `);
        }
    };

    return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
    var pub = Publication(title, author, pubDate);

    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        }
    };

    return publicAPI;
}

//let onePublication = Publication("数学", "汤老师", "1月1日");
//onePublication.print();


let oneBookDetails = ({
    title: "语文",
    author: "语文老师",
    pubDate: "1月2日",
    publisher: "ISBN",
    ISBN: "768998923"
});
let oneBook = Book(oneBookDetails);
//console.log(oneBook.ISBN); //不能直接获取传入book()函数的的参数
//console.log(oneBook.title)

oneBook.print();
*/

let it = [1,2,3];
let vals = [...it];
console.log(it);
console.log(vals);

