// eslint-disable-next-line no-unused-vars
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CardSliceProps {
  value: boardProps[];
}

const initialState: CardSliceProps = {
  value: [],
};

export const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCard: (state, action: PayloadAction<boardProps[]>) => {
      return {
        ...state,
        value: action.payload,
      };
    },
    deleteCard: (state, action: PayloadAction<boardProps>) => {
      return {
        ...state,
        value: state.value.filter(card => card.id !== action.payload.id),
      };
    },
    addNewCard: (state, action: PayloadAction<boardProps>) => {
      state.value.push(action.payload);
    },
    updateCard: (state, action) => {
      return {
        ...state,
        value: state.value.map(card =>
          card.id === action.payload.id ? { ...card, ...action.payload } : card,
        ),
      };
    },
  },
});

export const { deleteCard, addNewCard, updateCard, setCard } =
  cardSlice.actions;

export default cardSlice.reducer;
