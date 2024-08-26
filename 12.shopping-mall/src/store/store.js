import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice';


// 상품명 id랑 맞는 오브젝트 가져오기??


let stock = createSlice({
    name: 'stock',
    initialState : [10,11,12] 
})

let cart = createSlice({
    name : 'cart',
    initialState :[]
    , 
    reducers : {
        setObj (state,obj){
            console.log(obj.payload);
            // 기본값이 배열이기 때문에 
            state.push(obj.payload);
        },
        changeId(state, id){
            state.id = id
        },
        changeTitle(state, title){
            state.title = title
        },
        changeCount(state,Count){
            state.count += Count
        }

    }

})
export let { setObj, changeId ,changeTitle,  changeCount } = cart.actions
export default configureStore({
    reducer : {
        // 내보내기에 등록
        member : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})


