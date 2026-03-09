// object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: "INFO 1603",
      grades: [89, 34, 67],
    },
    {
      course: "INFO 1601",
      grades: [89, 34, 67],
    },
  ],
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: "INFO 1601",
      grades: [100, 89, 79],
    },
  ],
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript: [
    {
      course: "INFO 1600",
      grades: [89, 34, 67],
    },
  ],
};

const students = [bob, sally, paul];

function getAverateGrade(student, course) {
  const courseRecord = student.transcript.find((entry) => entry.course === course);

  if (!courseRecord) {
    return -1;
  }

  const total = courseRecord.grades.reduce((sum, grade) => sum + grade, 0);
  return total / courseRecord.grades.length;
}

function getAssignmentMark(student, course, num) {
  const courseRecord = student.transcript.find((entry) => entry.course === course);

  if (!courseRecord) {
    return -1;
  }

  return courseRecord.grades[num] ?? -1;
}

function averageAssessment(students, courseName, assignment) {
  const marks = students
    .map((student) => getAssignmentMark(student, courseName, assignment))
    .filter((mark) => mark !== -1);

  if (marks.length === 0) {
    return -1;
  }

  const total = marks.reduce((sum, mark) => sum + mark, 0);
  return total / marks.length;
}

console.log(getAverateGrade(bob, "INFO 1601")); // 63.333333333333336
console.log(getAverateGrade(paul, "INFO 1601")); // -1
console.log(getAssignmentMark(sally, "INFO 1601", 1)); // 89
console.log(getAssignmentMark(paul, "INFO 1601", 1)); // -1
console.log(averageAssessment(students, "INFO 1601", 0)); // 94.5

module.exports = {
  getAverateGrade,
  getAssignmentMark,
  averageAssessment,
  students,
};
