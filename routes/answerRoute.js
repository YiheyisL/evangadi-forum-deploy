const express = require("express");

const router = express.Router();

const { postAnswer, allAnswer } = require("../controller/answerController");

// setting route to post answers to each questions

router.post("/postanswers", postAnswer);

// router.post("/answer", postAnswer);

//  setting route to get all answers for each question
router.get("/all-answers", allAnswer);

module.exports = router;
