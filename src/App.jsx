import { useState } from "react";
 import questions from "./data/questions";
 import QuestionCard from "./component/QuestionCard";
 import Result from "./component/Result";
 import Timer from "./component/Timer";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(15); // seconds per question

  const handleAnswer = (index) => {
    if (index === questions[current].answer) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setTime(15);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
   setShowResult(false);
    setTime(15);
   };

  return (
 


   <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div><strong>STUDENT DETAILS</strong>
    <p><strong>NAME:</strong>SUARA LATEEFAT ESTHER</p>
    <p><strong>DEPARTMENT:</strong>FRONTEND DEVELOPMENT</p>
    <p><strong>MATRIC N0:</strong>JAD/TA/25A/FD/001</p>
    <p><strong>FINAL PROJECT</strong></p>
</div> 

        <h1 className="text-3xl font-bold text-center mb-6">          Quiz App
        </h1>

        {showResult ? (
          <Result
            score={score}
           total={questions.length}
           onRestart={restartQuiz}
                    />
       ) : (
          <>
            <div className="flex justify-between mb-4">
              <p>
                Question {current + 1} / {questions.length}
              </p>
              <Timer
                time={time}
                setTime={setTime}
                onTimeUp={nextQuestion}
              />
            </div>
             <QuestionCard
               question={questions[current].question}
               options={questions[current].options}
               onAnswer={handleAnswer}
            />
          </>
        )}
      </div>
    </div>
  );
}

