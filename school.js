import { english, maths, swedish } from "./subjects.js";

export const ths = {
  addStudent: function (student) {
    this.students.push(student);
  },
  addTeacher: function (teacher) {
    this.teachers.push(teacher);
  },
  address: "Kalkstensgata",
  city: "Lund",
  name: "Teknikhögskolan Lund",
  relegateStudent: relegateStudent,
  students: [],
  teachers: [],
  zipCode: 123456,
};

// I define this outside the object because it contains a little but more logic than the other methods, and defining it inline inside the object will not be very readable.
function relegateStudent(student) {
  // Just collect every subject in an array, remember, they are just references
  const subjects = [english, maths, swedish];

  // Remove student from the students array of the school
  this.students = this.students.filter((s) => s !== student);

  // Loop through all the course and remove the student if the student is enslisted in the subject. I am using a forEach here, it's a method that essently is just a for..of loop but in method form. It doesn't return anything, we can just use it to execute some sort of code for each subject.
  subjects.forEach((subject) => {
    const isStudentEnlisted = subject.students.includes(student);

    if (isStudentEnlisted) {
      subject.students = subject.students.filter((stu) => stu !== student);
    }
  });
}
