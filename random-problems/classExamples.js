class Student {
  constructor(firstName, lastName, grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = grade;
  }

  // instance method
  fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  // class or static method
  static totalStudents(students) {
    return students.length;
  }
}

const student1 = new Student('Abu', 'Zafar', 1);

console.log(student1);
console.log(student1.fullName());

console.log(Student.totalStudents([student1]));
