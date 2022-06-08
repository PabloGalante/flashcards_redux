import { createSlice } from '@reduxjs/toolkit';

export const addNewCard = card => {
    return (dispatch) => {
        dispatch(cardsSlice.actions.addCard(card))
    }
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: { cards: {} },
    reducers: {
        addCard: (state, action) => {
            const newCard = action.payload;
            state.cards = {
                ...state.cards,
                [newCard.id]: {
                    id: newCard.id,
                    front: newCard.front,
                    back: newCard.back
                }
            }
        }
    }
})

export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardsSlice.actions;

export default cardsSlice.reducer;
