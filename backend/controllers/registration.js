const teacher = require("./../models/teacher_data");
const student = require("./../models/student_data");
const bcrypt = require("bcrypt");
const { customAlphabet } = require("nanoid");

exports.registration = async (req, res) => {
  try {
    const username = req.query.username;
    const email = req.query.email;
    const salt = await bcrypt.genSalt(12);
    const nanoid = customAlphabet("1234567890abcdef", 10);
    const hashedPassword = await bcrypt.hash(req.query.password, salt);
    const data = new teacher({
      username: username,
      email: email,
      teacher_id: nanoid(),
      password: hashedPassword,
    });
    const teacher_data = await data.save();
    res.status(201).json({
      status: "success",
      message: `teacher created with username ${req.query.username}`,
    });
  } catch (error) {
    res.send(error);
  }
};

exports.student_registration = async (req, res) => {
  try {
    const username = req.query.username;
    const email = req.query.email;
    const salt = await bcrypt.genSalt(12);
    const nanoid = customAlphabet("1234567890abcdef", 10);
    const hashedPassword = await bcrypt.hash(req.query.password, salt);
    const data = new student({
      username: username,
      email: email,
      student_id: nanoid(),
      password: hashedPassword,
    });
    const teacher_data = await data.save();
    res.status(201).json({
      status: "success",
      message: `teacher created with username ${req.query.username}`,
    });
  } catch (error) {
    res.send(error);
  }
};
