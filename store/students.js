export const state = () => ({
    candidateStudents : []    
});

export const mutations = {
    addCandidate(state, payload) {
        state.candidateStudents.push(payload);
    },
    removeCandidate(state, payload) {
        const index = state.candidateStudents.findIndex(v => v.id === payload.id);
        state.candidateStudents.splice(index, 1)
    }
};

export const actions = {
    add({ commit }, payload) {
        commit('addCandidate', payload);
    },
    remove({ commit }, payload) {
        commit('removeCandidate', payload);
    }
};