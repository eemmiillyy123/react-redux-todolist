import {useState} from 'react';
import { UseSelector, useSelector } from 'react-redux';

const initState={
  id:'',
  text:''
};

function TodoList() {
  const [todos,setTodos]=useState([
    {
      id:1,
      text:'這是一段話(副本)'
    }
  ]);
  //取得store裡的資料
  // const todos=useSelector((state)=>{
  //   // console.log(state);
  //   //store裡建立的todos會被取出(指的是todoSlice)
  //   // 來自initialState的文字內容
  //   return state.todos
  // })
  const [newTodoText,setNewTodoText]=useState('');
  const [editState,setEditState]=useState(initState);
  function addTodo(){
    const newTodo={
      id:todos.length+1,
      text:newTodoText,
    };
    setTodos([...todos,newTodo]);
    setNewTodoText('');
  }
  const updateEditTodoText = (e) => {
    setEditState({
      ...editState,
      text: e.target.value,
    });
  }
  
  // const editTodo=(e)=>{
  //   console.log('e:',e)
  //   setEditState({
  //     ...editState,
  //     text:e.target.value,
  //   });
  //   console.log(editState)
  // }
  const editTodo = (todo) => {
    setEditState({
      id: todo.id,
      text: todo.text,
    });
  };
  const saveEdit=(id)=>{
    const index=todos.findIndex((todo)=>todo.id===id);
    const newTodo=[...todos];
    newTodo[index]=editState;
    setTodos(newTodo);
    setEditState(initState);
  }
  const cancelEdit=()=>{
    setEditState(initState);
  }
  const deleteTodo=(id)=>{
    const index=todos.findIndex((todo)=>todo.id===id);
    const newTodo=[...todos];
    newTodo.splice(index,1);
    setTodos(newTodo);
  }
  // return(
  //   <div>
  //     <input type="text" value={newTodoText} onChange={(e)=>setNewTodoText(e.target.value)} />
  //     <button type='button' onClick={()=>addTodo()}>Add Todo</button>
  //     <ul>
  //       {todos.map(todo => 
  //         <li key={todo.id}>{todo.text}
  //           <button type='button' onClick={()=>editTodo()}>編輯</button>
  //           <button type='button' onClick={()=>deleteTodo()}>刪除</button>
  //         </li>
  //         )}
        
  //     </ul>
  //   </div>
  // )
  return (
    <div>
      <input type="text" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} />
      <button type='button' onClick={() => addTodo()}>Add Todo</button>
      <ul>
        {todos.map(todo =>
           <li key={todo.id}>
           {todo.id === editState.id ?
             <div>
              {/* <input type="text"></input> */}
               <input type="text" value={editState.text} onChange={updateEditTodoText} />
               <button type='button' onClick={() => saveEdit(todo.id)}>確認</button>
               <button type='button' onClick={() => cancelEdit()}>取消</button>
             </div> :
             <div>
               {todo.text}
               <button type='button' onClick={() =>editTodo(todo)}>編輯</button>
               <button type='button' onClick={() => deleteTodo(todo.id)}>刪除</button>
             </div>
           }
         </li>
        )}
      </ul>
    </div>
  )
}

export default TodoList;