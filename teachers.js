export const thomas = {
  addSubject: function (subject) {
    this.subjects.push(subject);
    subject.teacher = this;
  },
  name: "Thomas",
  subjects: [],
};

export const benjamin = {
  addSubject: function (subject) {
    this.subjects.push(subject);
    subject.teacher = this;
  },
  name: "Benjamin",
  subjects: [],
};
