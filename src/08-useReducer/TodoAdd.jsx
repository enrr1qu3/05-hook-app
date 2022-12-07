import { useForm } from "../hook/useForm";


export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm, } = useForm({
    description: ''
  })
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    // onNewTodo && onNewTodo()
    onNewTodo(newTodo);
    onResetForm();
  }

  return (

    <form onSubmit={onFormSubmit} >
      <input type='text'
        placeholder='Que hay que hacer?'
        className='form-control'
        name='description'
        value={description}
        onChange={onInputChange}
      />
      <button type='Submit'
        className='btn btn-outline-primary mt-1'
      >
        Agregar
      </button>
    </form>
  );
}