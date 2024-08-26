import { createContext, useState } from "react";
import _mock from "../mock";

export const MockContext = createContext(null);

const MockContextProvider = ({ children }) => {
  const [mock, setMock] = useState(_mock);
  const [selected, setSelected] = useState([]);

  const editMock = (newCard) => {
    setMock((prev) => {
      const newMock = [...prev];
      newMock[newCard.id - 1] = newCard;
      return newMock;
    });
  };

  const handleSelected = (card) => {
    let { korean_name, id, isSelected } = card;

    // console.log(korean_name);

    if (!isSelected) {
      if (selected.length === 6) {
        alert("최대 6장까지 선택할 수 있습니다.");
        return;
      }

      if (selected.filter((ele) => ele.id === id).length === 0) {
        // console.log("new selection");
        const newSelected = [...selected];
        const newCard = { ...card };
        newCard.isSelected = true;
        newSelected.push(newCard);
        setSelected(newSelected);

        editMock(newCard);
        return;
      } else {
        alert("이미 선택된 포켓몬입니다.");
        return;
      }
    } else {
      setSelected((prev) => prev.filter((ele) => ele.id !== id));
      const newCard = { ...card };
      newCard.isSelected = false;

      editMock(newCard);
      return;
    }
  };

  return (
    <MockContext.Provider value={{ mock, selected, handleSelected }}>
      {children}
    </MockContext.Provider>
  );
};

export default MockContextProvider;
