let modal = document.querySelector('#modal');
let openModal = document.querySelector('#add-button');
let closeModal = document.querySelector('#close-student');

openModal.addEventListener('click', function(){
    modal.style.right = '0';
});

closeModal.addEventListener('click', function(){
    modal.style.right = '-40%';
});

function Student(name,facnumber,year,averageScore) {
    this.name = name;
    this.facultyNumber = facnumber;
    this.startYear = year;
    this.averageScore = averageScore;
}

let arrayStudents = [];
let addStudent = document.querySelector('#add-student');

addStudent.addEventListener('click', function(){

    let name = document.querySelector('#name').value;
    let facNumber = document.querySelector('#faculty-number').value;
    let year = document.querySelector('#year').value;
    let avScore = document.querySelector('#average-score').value;

    let student = new Student(name , facNumber , year ,avScore);
    arrayStudents.push(student);
});

let filterButton = document.querySelector('#filter-button');

filterButton.addEventListener('click', function(){

    //Display all students 
    let allStudentsList = document.querySelector('#all-students');
    arrayStudents.forEach(item => {
        let li = document.createElement('li');
        let text = document.createTextNode(item.name + " -  " + item.facultyNumber + " - " + item.averageScore);
        li.appendChild(text);
        allStudentsList.appendChild(li);
    });

    //Display students with score more than 4.50
    let studentsFilteredScore = document.querySelector('#students-score');
    let filteredScore = arrayStudents.filter(item => parseFloat(item.averageScore) > 4.5)
    .forEach(item => {
        let li = document.createElement('li');
        let text = document.createTextNode(item.name + " -  " + item.facultyNumber + " - " + item.averageScore);
        li.appendChild(text);
        studentsFilteredScore.appendChild(li);
    });

    //Display average score for students with av-score more than 5
    let filteredAverage = document.querySelector('#filtered-score');
    let score = 0;
    let avScore =  arrayStudents.filter(item => {
        if(parseFloat(item.averageScore) > 5) {
            score++;
            return item;
        }
    }).reduce((a,b) => parseFloat(a.averageScore) + parseFloat(b.averageScore));
    let li = document.createElement('li');
    let text = document.createTextNode(parseFloat(avScore/score));
    li.appendChild(text);
    filteredAverage.appendChild(li);
});


