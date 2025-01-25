type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

type TodoProps = {
  todo: Todo;
  handleDeleteTodo: (id: string) => void;
  handleCheckTodo: (id: string) => void;
};

export const Row = ({
  todo: { task, isCompleted, id },
  handleDeleteTodo,
  handleCheckTodo,
}: TodoProps) => {
  return (
    <div
      className={`flex transition duration-200 mb-2 w-full rounded  p-4 justify-between items-center ${
        isCompleted ? 'bg-gray-200 ' : 'bg-purple-300/50'
      }`}
    >
      <p
        className={`ml-2  text-xl font-sans font-normal first-letter:capitalize
         ${isCompleted ? 'text-gray-600/50 line-through' : 'text-white'}
        `}
      >
        {task}
      </p>
      <div className='w-1/6 flex justify-between items-center mr-2'>
        <button
          className='h-7 w-7 bg-purple-900 flex item-center text-white font-semibold transition duration-75 rounded hover:bg-red-500/50 justify-center'
          aria-label='Delete a todo'
          onClick={() => handleDeleteTodo(id)}
        >
          x
        </button>
        <input
          className='h-7 w-7'
          type='checkbox'
          checked={isCompleted}
          onChange={() => handleCheckTodo(id)}
        />
      </div>
    </div>
  );
};
