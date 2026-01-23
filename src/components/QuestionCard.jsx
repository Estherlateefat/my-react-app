export default function QuestionCard({
  question,
  options,
  onAnswer,
}) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">
        {question}
      </h2>

      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            className="w-full border p-3 rounded hover:bg-blue-100 text-left"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
