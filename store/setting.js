export const state = () => ({
    voteTitle: '',
    studentNums: 0,
    votingMethod: 0,
    votedNums: 0,

});

export const mutations = {
    setVote(state, payload) {
        state.voteTitle = payload.voteTitle; 
        state.studentNums = payload.studentNums;
        state.votingMethod = payload.votingMethod;
    },
    endVote(state, payload) {
        state.votedNums = payload.votedNums; 
    },
};

export const actions = {
    set({ commit }, payload) {
        commit('setVote', payload);
    },
    endVote({ commit }, payload) {
        commit('endVote', payload);
    }
}
