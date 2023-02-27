class Student {
    constructor(firstName, lastName, yearBirth, marks = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearBirth = yearBirth;
        this.marks = marks;
        this.attendanceMarks = new Array(25);
        this.absenceIndex = 0;
    }

    get age() {
        return new Date().getFullYear() - this.yearBirth;
    }

    avaragePoint() {
        let sum = this.marks.reduce((pre, cur) => pre + cur);
        return this.avaragePoint = Math.floor(sum / this.marks.length);
    }

    avaragePresence() {
        let precenceCount = this.attendanceMarks.slice(0, this.absenceIndex).filter(x => x).length;
        return this.avaragePresence = precenceCount / this.attendanceMarks.length;
    }

    absent(number) {

        for(let i=0; i<number; i++) {
        	if (this.attendanceMarks.length > this.absenceIndex) {
            	this.attendanceMarks[this.absenceIndex] = false;
            	this.absenceIndex++;
        	}
	    }

    }

    present(number) {

        for(let i=0; i<number; i++) {
        	if (this.attendanceMarks.length > this.absenceIndex) {
            	this.attendanceMarks[this.absenceIndex] = true;
            	this.absenceIndex++;
        	}
	    }

    }
 
    summary() {

        if (this.avaragePoint > 90 && this.avaragePresence > 0.9) {
            console.log("Молодець!");
            
        } else if (this.avaragePoint > 90 || this.avaragePresence > 0.9) {
            console.log("Добре, але можна краще");
        }

        else {
            console.log("Редиска!");
        }
        
    }   

}

// Створюємо декілька екземплярів конкретних студентів

let studentOne = new Student("Олексій", "Алехнович", 1993, [94, 97, 100, 98, 95, 95, 100]);
let studentTwo = new Student("Вікторія", "Климентович", 1995, [91, 91, 92, 94, 91, 92, 91]);
let studentThree = new Student("Олександр", "Проценко", 1989, [70, 60, 70, 80, 60, 73]);

/* Використовуючи методи present і absent 
заповнюємо відвідуваність кожного зі студентів вводячи 
кількість відвіданих або пропущенних занять у відповідний метод */

// Студент 1:

studentOne.present(23);
studentOne.absent(2);

// Студент 2:

studentTwo.present(8);
studentTwo.absent(17);

// Студент 3:

studentThree.present(6);
studentThree.absent(19);

// Для кожного студента виведемо середню оцінку, середнє відвідування і його вік

// Студент 1:

studentOne.avaragePoint();
studentOne.age;
studentOne.avaragePresence();

// Студент 2:

studentTwo.avaragePoint();
studentTwo.age;
studentTwo.avaragePresence();

// Студент 3:

studentThree.avaragePoint();
studentThree.age;
studentThree.avaragePresence();

// Виведемо всю інформацію про кожного з студентів і демонстрація методу summary

console.log(studentOne);
studentOne.summary();

console.log(studentTwo);
studentTwo.summary();

console.log(studentThree);
studentThree.summary();