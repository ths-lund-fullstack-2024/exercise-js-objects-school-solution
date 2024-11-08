import { ths } from "./school.js";
import { english, maths, swedish } from "./subjects.js";
import { erik, henrik, niklas, peter, sofia } from "./students.js";
import { benjamin, thomas } from "./teachers.js";

// ########## 1-4. Answered in the above import statements. The objects themself are created and exported from other files. I have done this because the structure of the code is more readable and maintainable. You can do this as weill if you just add the attribute 'type="module"' to the script tag in your html file. The only thing I did differently accordingt to the exercise is that at assign null to the teacher attribute on a subject isntead of an empty object. It's just a better convention do so but it doesn't affect the program in any way. One thing though! By using module on the script tag, every variable, function, method and so on, is no longer available in the inspector view! It has to do with that we converted the js-file to and ES-module (google if you would like to know more.. Outside of the scope of this course.). So all code needs to be here in the js-file instead, logs and suchs things.

// ########### 5.

// benjamin.subjects.push(english);
// console.log(benjamin);
// console.log(english);

/* Thoughts - By observing the variables in the console can see that it's clear that benjamin teaches english but that information is not reflected in the english subject. What is missing in this case is that we should also assign benjamin to the subjects' teacher attribute. */

/* ########### 6. */

// maths.students.push(erik);
// console.log(maths);
// console.log(erik);

/* Thoughts - Same thing here, we can cleary see in the maths log that erik is taking the maths subject, but we can not see this information in the erik object. */

/* ########### 7. */

// function addSubjectToTeacher(teacher, subject) {
//   teacher.subjects.push(subject);
//   subject.teacher = teacher;
//   return teacher;
// }

// console.log(addSubjectToTeacher(benjamin, english));

/* Thoughts - Now we can clearly see that benjamin is teching english and english is being taught by benjamin. /*

/* ########### 8. */

/* I added a method to each teacher object named "addSubject". Check it out in the files. */

// thomas.addSubject(swedish);
// console.log(thomas);
// console.log(swedish);

/* ########### 9. */

/* Methods are added to the objects in which the belong. See the files. 
- addTeacher is added to subjects and to the school object but with different logic
- enlistToSubject is added to students
- addStudent is added to subjects and to the school object but with different logic
- addSubject was already added to the teachers in the last exercise
 */

maths.addTeacher(thomas);
console.log("#9.", maths.teacher);

niklas.enlistToSubject(swedish);
console.log("#9.", niklas.subjects);

ths.addStudent(niklas);
ths.addTeacher(thomas);
console.log("#9.", ths.teachers);

/* ########### 10. */

/* Thoughts - No code needed. A admin program could very likely have this kind of logic. */

/* ########### 11. */

/* Methods are added to the objects in which the belong. See the files. 
- quitSubject is added to the student objects
- removeTeacher is added to the subject objects
- relegateStudent is added to the school
- fireTeacher is added to the school
 */

niklas.quitSubject(swedish);
console.log("#11.", niklas.subjects);

maths.removeTeacher(thomas);
console.log("#11.", maths.teacher);

ths.addStudent(henrik);
henrik.enlistToSubject(english);
console.log("#11.", ths.students);
console.log("#11.", henrik.subjects);

ths.relegateStudent(henrik);
console.log(ths);
console.log(english.students);

/* ########### 12. */

/* No code needed. */

/* ########### 13. */

/* No code needed. But for you, you added your dummy data here in order to not have to it in the console all every time. */

/* ########### 14. */

/* I think this question is incorrectly written. Students in the school object is an array which means a for..of loop works great! */

function displayAllStudents() {
  for (const student of ths.students) {
    console.log("#14.", student);
  }
}

ths.addStudent(henrik);
ths.addStudent(erik);

// displayAllStudents();

/* ########### 15. */

function displayAllSubjectsOfStudent(student) {
  const subjects = student.subjects.map((subject) => subject.name);
  return subjects;
}

henrik.enlistToSubject(maths);
henrik.enlistToSubject(swedish);

const henrikSubjects = displayAllSubjectsOfStudent(henrik);
console.log("#15a. subjects of Henrik", henrikSubjects);

function displayAllStudentsEnlistedToSubject(subject) {
  const studentsOfSubject = subject.students.map((student) => student.name);
  return studentsOfSubject;
}

maths.addStudent(niklas);
maths.addStudent(sofia);

const studentEnlistedInMaths = displayAllStudentsEnlistedToSubject(maths);
console.log("#15b. students enlisted in maths", studentEnlistedInMaths);

function displayAllTeachers() {
  ths.teachers.forEach((teacher) => {
    console.log("#16", teacher.name);
  });
}

ths.addTeacher(benjamin);

displayAllTeachers();

/* ########### 16. */

/* Skipping this one. Great exercise for you though! */
