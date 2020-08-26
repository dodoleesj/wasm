<template>
<div>
    <div class="container">
        <candidate-card v-for="s in candidateStudents" :candidate="s" :key="s.id"></candidate-card>
    </div>
</div>
</template>

<script>
import AddForm from '../components/AddForm'
import CandidateCard from '../components/CandidateCard';
export default {
    components: {
        AddForm, CandidateCard,
    },
    data() {
        return {

        }
    },
    methods: {

    },
    beforeMount() {
        alert('투표를 시작합니다.')
    },
    computed: {
        candidateStudents() {
            return this.$store.state.students.candidateStudents;
        }
    }
}
</script>

<style>
.container {
    display: flex;
    /* justify-content: center; */
    flex-wrap:wrap
}
</style>