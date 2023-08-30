import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SolutionMCQ from "../../components/SolutionMCQ/SolutionMCQ";
import SolutionQuestion from "../../components/SolutionQuestion/SolutionQuestion";
import { getAccumulatedSolution } from "../../apis/teacher/teacher";

const Solution = () => {
  const { solutionId } = useParams();

  const [mcqs, setMcqs] = useState([]);
  const [questions, setQuestion] = useState([]);

  useEffect(() => {
    getAccumulatedSolution(solutionId)
      .then((response) => {
        console.log(response.data);
        setMcqs(response.data.mcqs);
        console.log(response.data.textQuestions);
        setQuestion(response.data.textQuestions);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      {mcqs.map((mcq, index) => (
        <SolutionMCQ mcq={mcq} key={index + 1} passedKey={index + 1} />
      ))}
      {questions.map((question, index) => (
        <SolutionQuestion
          key={index + 1}
          passedKey={mcqs.length + index + 1}
          question={question}
        />
      ))}
    </div>
  );
};

export default Solution;
