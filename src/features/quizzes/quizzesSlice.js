import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/topicsSlice';

export const createNewQuiz = quiz => {
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz));
        dispatch(addQuizId( { quizId: quiz.id, topicId: quiz.topicId } ));
    }
};

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {} },
    reducers: {
        addQuiz: (state, action) => {
            const newQuiz = action.payload;
            state.quizzes = {
                ...state.quizzes,
                [newQuiz.id]: {
                    id: newQuiz.id,
                    topicId: newQuiz.topicId,
                    name: newQuiz.name,
                    cardIds: newQuiz.cardIds
                }
            }
        }
    }
})

export const selectQuiz = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;