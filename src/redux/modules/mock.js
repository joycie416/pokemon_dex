// **************** NOT USED **************** //

import MOCK_DATA from "../../mock";


// action value
const EDIT_MOCK = "EDIT_MOCK";

// action creator 만들어서 컴포넌트에서 사용할 수 있도록 export
export const editMock = (payload) => {
  return {
    type: EDIT_MOCK,
    payload,
  };
};

// state init
const initialState = MOCK_DATA;

// reducer
const editMock = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_MOCK:
      const newMock = [...state];
      newMock[action.payload.id - 1] = action.payload;
      return newMock;

    default:
      return state;
  }
};

export default editMock;
