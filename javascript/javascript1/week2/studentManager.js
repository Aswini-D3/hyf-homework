const class07Students = [];
function addStudentToClass(studentName) {
    if(class07Students.length>6){
        console.log("Cannot add more students to class 07");
    }
    else if(class07Students.includes(studentName)){
        console.log("Student is already in the class");
    }
    else if(studentName==='Queen'){
        class07Students.push(studentName);
    }
    else if(studentName===""){
        console.log("You cannot add an empty string to a class");
    }
    else{
        class07Students.push(studentName);
    }
}

function getNumberOfStudents() {
    let classSize=class07Students.length();
    return classSize;
}
//Adding students to the class
addStudentToClass('Aswini');
addStudentToClass('Deepthi');
addStudentToClass('Anna');
addStudentToClass('Benjamin');
addStudentToClass('Marie');
addStudentToClass('Fauzia');

//Trying to add 7th student

addStudentToClass('Christin');


//Adding student already in class

addStudentToClass('Aswini');

//Adding 'queen'

addStudentToClass('Queen');


console.log(class07Students);