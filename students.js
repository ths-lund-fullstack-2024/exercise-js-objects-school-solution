export const niklas = {
  age: 33,
  enlistToSubject: sharedEnlistToSubject,
  name: "Niklas",
  subjects: [],
  quitSubject: sharedQuitSubject,
};

export const henrik = {
  age: 36,
  enlistToSubject: sharedEnlistToSubject,
  name: "Henrik",
  subjects: [],
  quitSubject: sharedQuitSubject,
};

export const erik = {
  age: 30,
  enlistToSubject: sharedEnlistToSubject,
  name: "Erik",
  subjects: [],
  quitSubject: sharedQuitSubject,
};

export const sofia = {
  age: 28,
  enlistToSubject: sharedEnlistToSubject,
  name: "Sofia",
  subjects: [],
  quitSubject: sharedQuitSubject,
};

export const peter = {
  age: 64,
  enlistToSubject: sharedEnlistToSubject,
  name: "Peter",
  subjects: [],
  quitSubject: sharedQuitSubject,
};

// Shared functions below, instead of defining this function in each and every object, I can just define it here and then reference it in the different student obejcts. Keep it DRY. (Don't repeat yourself.) The this object referse to the context in which the function is invoke. If the function is invoked inside an object, which is our case here, the this object will represent the object itself.

function sharedEnlistToSubject(subject) {
  this.subjects.push(subject);
  subject.students.push(this);
}

function sharedQuitSubject(subject) {
  this.subjects = this.subjects.filter((s) => s !== subject);
  subject.students = subject.students.filter((s) => s !== this);
}
