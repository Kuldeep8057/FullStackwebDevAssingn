class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.enrolledCourses = [];
    }

    enroll(course) {
        if (!this.enrolledCourses.includes(course)) {
            this.enrolledCourses.push(course);
            console.log(`${this.name} has enrolled in the ${course} course.`);
        } else {
            console.log(`${this.name} is already enrolled in the ${course} course.`);
        }
    }

    showCourses() {
        console.log(`${this.name}'s Enrolled Courses: ${this.enrolledCourses}`);
    }
}

class Admission {
    constructor() {
        this.students = [];
    }

    enrollStudent(student) {
        if (!this.students.includes(student)) {
            this.students.push(student);
            console.log(`${student.name} with email ${student.email} has been enrolled.`);
        } else {
            console.log(`${student.name} is already enrolled.`);
        }
    }

    assignCourse(student, course) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students[index].enroll(course);
        } else {
            console.log(`Student ${student.name} not found.`);
        }
    }

    showEnrolledStudents() {
        console.log('Enrolled Students:');
        this.students.forEach(student => {
            console.log(`${student.name} (Email: ${student.email})`);
            student.showCourses();
            console.log('------------------------');
        });
    }
}

const AdmissionOffice = new Admission();

const student1 = new Student("Ram", "ram@live.com");
const student2 = new Student("Shayam", "shayam@live.com");

AdmissionOffice.enrollStudent(student1);
AdmissionOffice.enrollStudent(student2);

AdmissionOffice.assignCourse(student1, 'fullStack');
AdmissionOffice.assignCourse(student2, 'dataScience');

student1.showCourses();
student2.showCourses();

AdmissionOffice.showEnrolledStudents();
