const Test = () => {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Tailwind Test</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded">Blue</div>
        <div className="bg-green-500 text-white p-4 rounded">Green</div>
        <div className="bg-yellow-500 text-white p-4 rounded">Yellow</div>
      </div>
      <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
        Test Button
      </button>
      <p className="mt-4 text-lg">
        If colors show, Tailwind is working. If not, there's a configuration issue.
      </p>
    </div>
  )
}

export default Test
