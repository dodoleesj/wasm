export const state = () => ({
    voteTitle: '',
    studentNums: 0,
    votingMethod: 0,

});

export const mutations = {
    setVote(state, payload) {
        state.voteTitle = payload.voteTitle; 
        state.studentNums = payload.studentNums;
        state.votingMethod = payload.votingMethod;
    },

};

export const actions = {
    set({ commit }, payload) {
        commit('setVote', payload);
    }
}
