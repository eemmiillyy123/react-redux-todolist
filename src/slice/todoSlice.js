import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice({
    name:'todos',
    initialState:[
        {
          id:1,
          text:'這是一段話(副本)'
        }
    ],
    reducers:{//狀態管理器 所有的方法會寫在這
        createTodo(state,action){//state表示當前這個slice裡面的state action:傳入方法時的相關參數
            console.log(state,action);
            console.log(state[0].text,action);
            state.push(action.payload)
        }
    }
})

//定義的reducers可以使用actions來匯出(具名匯出) {}裡帶入reducers所定義的名稱 reducers會自動轉名成actions
export const {createTodo}=todoSlice.actions;

export default todoSlice.reducer;