const { faker } = require("@faker-js/faker");
const Student = require("../models/student");
const Teacher = require("../models/teacher");
const Admin = require("../models/admin");
const Exam = require("../models/exam");

const student_count = 100;
const teacher_count = 100;
const admin_count = 10;
const exam_count = 2000;

async function generateFakeStudents(count) {
  const totalCount = await Student.count();
  if (totalCount !== 0) return 0;

  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
      firstName,
      lastName,
    ]);

    await Student.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: "student1234",
    });
  }
}

async function generateFakeTeachers(count) {
  const totalCount = await Teacher.count();
  if (totalCount !== 0) return 0;

  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
      firstName,
      lastName,
    ]);

    await Teacher.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: "teacher1234",
    });
  }
}

async function generateFakeAdmins(count) {
  const totalCount = await Admin.count();
  if (totalCount !== 0) return 0;

  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.helpers.unique(faker.internet.email, [
      firstName,
      lastName,
    ]);

    await Admin.create({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: "admin1234",
    });
  }
}

async function generateFakeExams(count) {
  const totalCount = await Exam.count();
  const teacherCount = await Teacher.count();
  if (totalCount !== 0) return 0;

  for (let i = 0; i < count; i++) {
    const creator_id = faker.helpers.rangeToNumber({
      min: 1,
      max: teacherCount,
    });
    const start_time = faker.date.soon();
    const end_time = faker.date.soon({ refDate: start_time });
    const subject = faker.helpers.arrayElement([
      "physics",
      "chemistry",
      "biology",
      "computers",
      "maths",
    ]);
    const status = faker.helpers.arrayElement([
      "approved",
      "rejected",
      "pending",
    ]);

    await Exam.create({
      creator_id,
      start_time,
      end_time,
      subject,
      status,
    });
  }
}

const generateFakeData = async () => {
  try {
    await generateFakeStudents(student_count);
    await generateFakeTeachers(teacher_count);
    await generateFakeAdmins(admin_count);
    await generateFakeExams(exam_count);
  } catch (e) {
    console.log(e);
  }
};

generateFakeData()
  .then(() => {
    console.log("Dummy data generated");
  })
  .catch((e) => {
    console.log("ERROR creating dummy data\n", e);
  });
