import { useState } from "react";
import questions from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import Result from "./components/Result";
import Timer from "./components/Timer";
import Intro from "./components/Intro"; // NEW

export default function App() {
  const [started, setStarted] = useState(false); // NEW
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [time, setTime] = useState(10);

  const handleAnswer = (selected) => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setTime(10);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setStarted(false); // back to intro
    setCurrent(0);
    setScore(0);
    setShowResult(false);
    setTime(10);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">
          Quiz App
        </h1>

        {/* INTRO SCREEN */}
        {!started && (
          <Intro onStart={() => setStarted(true)} />
        )}

        {/* QUIZ QUESTIONS */}
        {started && !showResult && (
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

        {/* RESULT SCREEN */}
        {showResult && (
          <Result
            score={score}
            total={questions.length}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  );
}