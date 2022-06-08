import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: { topics: {} },
    reducers: {
        addTopic: (state, action) => {
            const newTopic = action.payload;
            state.topics = {
                ...state.topics,
                [newTopic.id]: {
                    id: newTopic.id,
                    name: newTopic.name,
                    icon: newTopic.icon,
                    quizIds: []
                }
            }
        },
        addQuizId: (state, action) => {
            const quizId = action.payload.quizId;
            const quizTopicId = action.payload.topicId;
            state.topics[quizTopicId].quizIds.push(quizId);
        }
    }
})

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizId } = topicsSlice.actions;

export default topicsSlice.reducer;