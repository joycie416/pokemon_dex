import { createSlice } from "@reduxjs/toolkit";
import { Toaster, toast } from 'sonner'
// import { editMock } from "./mockSlice";

const initialState = [];

const selectedSlice = createSlice({
  name: "selected",
  initialState,
  reducers: {
    handleSelected: (state, action) => {
      let { id, isSelected } = action.payload;

      // console.log(korean_name);

      if (!isSelected) {
        if (state.length === 6) {
          // alert("최대 6장까지 선택할 수 있습니다.");
          toast.error('최대 6장까지 선택할 수 있습니다.');
          return;
        }

        if (state.filter((ele) => ele.id === id).length === 0) {
          // console.log("new selection");
          const newSelected = [...state];
          const newCard = { ...action.payload };
          newCard.isSelected = true;
          newSelected.push(newCard);
          // setSelected(newSelected);

          // dispatch(editMock(newCard));
          return newSelected;
        } else {
          alert("이미 선택된 포켓몬입니다.");
          return;
        }
      } else {
        // setSelected((prev) => prev.filter((ele) => ele.id !== id));
        const newCard = { ...action.payload };
        newCard.isSelected = false;

        // dispatch(editMock(newCard));
        return state.filter((ele) => ele.id !== id);
      }
    },
  },
});

// 액션크리에이터는 컴포넌트에서 사용하기 위해 export 하고
export const { handleSelected } = selectedSlice.actions;
// reducer 는 configStore에 등록하기 위해 export default 합니다.
export default selectedSlice.reducer;
