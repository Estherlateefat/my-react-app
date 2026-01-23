export default function Result({ score, total, onRestart }) {
  return (
    <div className="bg-white p-8 rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed 🎉</h2>
      <p className="text-lg mb-6">
        Your Score: <strong>{score}</strong> / {total}
      </p>

      <button
        onClick={onRestart}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Restart Quiz
      </button>
    </div>
  );
}