console.log("callback...")





function sayHi() {
console.log("hi...")
}

function sayBye("Bye!") {
    console.log("Bye!")
}

//doSomething(sayBye)
//doSomething(sayHi)

function judge(grade) {
    switch(true) {
        case grade == 'A';
        console.log("Wow grade A!");
        break;

        case grade == 'B';
        console.log("Grade B is alright.");
        break;

        case grade == 'C';
        console.log("C is bad grade.");
        break;

        case grade == 'D';
        console.log("D is atrocious!!");

        break;

        default: 
        console.log("What is that?");
        break;

    }
}

judge("B")
function getGrade(score, callback) {
    let grade; 
    switch(true) {
        case score >=90;
            grade = "A";
            break;
        case score >=80;
            grade = "B";
            break;
        case score >=70;
            grade = "C";
            break;
        case score >=60;
            grade = "D";
            break;
        case score <=60;
            grade = "E";
            break;
    }
    callback(grade)
}