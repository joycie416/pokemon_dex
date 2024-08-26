import { createSlice } from "@reduxjs/toolkit";
import MOCK_DATA from "../../mock";

const initialState = MOCK_DATA;

const mockSlice = createSlice({
  name: 'mock',
  initialState,
  reducers: {
    editMock: (state, action) => {
      const newMock = [...state];
      newMock[action.payload.id - 1] = action.payload;
      return newMock;
    }
  }
})


// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { editMock } = mockSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default mockSlice.reducer;