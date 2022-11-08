for (let i=2; i<=1024; i*=2){
    console.log(i)
}

let i=1;
while(i<1024){
    i=i*2;
    console.log(i);
}
let userName="";

do{
    userName=prompt("What is your name?")
    console.log(Number(userName))
}while(!isNaN(Number(userName)));

alert(`Hello ${userName}`);

const person = {
    name:['Bob','Smith'],
    age:32,
    gender:'male',
    interests:['music','skiing']
}

for (let prop in person){
    console.log(`My ${prop} is ${person[prop]}`)
}

console.log(`My Name is ${person.name[0]} ${person.name[1]}.
I am interested in ${person.interests[0]} ${person.interests[1]}`);

let student1 = {
    ID:"A00022",
    GPA: 3.0,
    program:"CIT"
};

let student2 = {
    ID:"A01000",
    GPA: 3.1,
    program:"CST"
};

let student3 = {
    ID:"A00114",
    GPA: 3.2,
    program:"CIT"
};

let students = [student1,student2,student3];
counter = 0;
for (let i=0;i<students.length;i++){
    if ((students[i].program ==="CIT") && (students[i].GPA > 3)){
        counter+=1;
    }
};
console.log(`${counter} Student(s) with a GPA over 3 in CIT.`);