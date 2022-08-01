import { ReactComponent as PlusIcon } from '../assets/svg/plus.svg';
import { ChangeEvent, FormEvent } from 'react';

export type AddTodoProps = {
  task: string;
  handleSubmitTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};

export const AddTodo = ({
  task,
  handleSubmitTodo,
  handleChange,
}: AddTodoProps) => {
  return (
    <form
      className='flex justify-between items-center w-full mb-2'
      onSubmit={handleSubmitTodo}
    >
      <input
        className='flex-1 pl-5 rounded py-2 outline-none drop-shadow text-gray-900 mr-2'
        type='text'
        name='task'
        value={task}
        onChange={handleChange}
      />
      <button type='submit' aria-label='Add todo'>
        <PlusIcon className='' />
      </button>
    </form>
  );
};
