export default function Intro({ onStart }) {
  return (
    <div className="bg-white p-8 rounded shadow text-center">
      <h2 className="text-2xl font-bold mb-4">
        Welcome to the Quiz 🧠
      </h2>

      <p className="text-gray-600 mb-6">
        Test your knowledge and see how well you score.
      </p>

      <button
        onClick={onStart}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Start Quiz
      </button>
    </div>
  );
}