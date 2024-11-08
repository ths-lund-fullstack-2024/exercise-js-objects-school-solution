export const maths = {
  addStudent: sharedAddStudent,
  addTeacher: sharedAddTeacher,
  name: "Maths",
  removeTeacher: sharedRemoveTeacher,
  students: [],
  teacher: null,
};

export const english = {
  addStudent: sharedAddStudent,
  addTeacher: sharedAddTeacher,
  name: "English",
  removeTeacher: sharedRemoveTeacher,
  students: [],
  teacher: null,
};

export const swedish = {
  addStudent: sharedAddStudent,
  addTeacher: sharedAddTeacher,
  name: "Swedish",
  removeTeacher: sharedRemoveTeacher,
  students: [],
  teacher: null,
};

// Shared functions below, instead of defining this function in each and every object, I can just define it here and then reference it in the different student obejcts. Keep it DRY. (Don't repeat yourself.) The "this" object refers to the context in which the function is invoked. If the function is invoked inside an object, which is our case here, the "this" object will represent the object itself.

function sharedAddStudent(student) {
  this.students.push(student);
  student.subjects.push(this);
}

function sharedAddTeacher(teacher) {
  this.teacher = teacher;
  teacher.subjects.push(this);
}

function sharedRemoveTeacher(teacher) {
  this.teacher = null;
  teacher.subjects = teacher.subjects.filter((s) => s !== this);
}
