export const state = () => ({
    candidateStudents : [],
    allvotes: [],
});

export const mutations = {
    addCandidate(state, payload) {
        state.candidateStudents.push(payload);
    },
    removeCandidate(state, payload) {
        const index = state.candidateStudents.findIndex(v => v.id === payload.id);
        state.candidateStudents.splice(index, 1);
        for( let i=0 ; i<state.candidateStudents.length ; i++ ) {
            state.candidateStudents[i].num = i+1;
        }        
    },
    recordVote(state, payload) {
        state.candidateStudents[payload.i-1].votes++; //각 후보학생 객체에 득표수 기록
        state.allvotes.push(payload.i); //투표 내용을 배열로 저장
        console.log(state.candidateStudents[payload.i-1].votes);
    }
};

export const actions = {
    add({ commit }, payload) {
        commit('addCandidate', payload);
    },
    remove({ commit }, payload) {
        commit('removeCandidate', payload);
    },
    record({ commit }, payload) {
        commit('recordVote', payload)
    }
};