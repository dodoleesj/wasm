<template>
<div id="votepage">
    <div class="progress-bar-con">
        <div class="progress-bar" :style="{ width: votePer+'%'}"></div>
    </div>
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
            studentNums : this.$store.state.setting.studentNums,
            votedNums :  this.$store.state.setting.votedNums,
            candidateNums : this.$store.state.students.candidateStudents.length,
        }
    },
    beforeMount() {
        if(this.studentNums!=this.votedNums){
            alert('투표를 시작합니다.')
        }
    },
    mounted() {
        document.addEventListener('keypress',this.submitVote)
    },    
    computed: {
        candidateStudents() {
            return this.$store.state.students.candidateStudents;
        },
        votePer() {
            return this.votedNums/this.studentNums * 100;
        }
    },
    beforeDestroy() {
        document.removeEventListener('keypress', this.submitVote);
    },
    methods: {
        submitVote(e) {
            if( this.votedNums < this.studentNums ) {
                if ( e.key <= this.candidateNums ) { //숫자 0을 누르지 못하게 하는게 필요할까?
                    console.log("투표유효");
                    this.$store.dispatch('students/record', {
                        i: e.key,
                    });
                    this.votedNums++;
                    console.log(this.votedNums);
                    if( this.votedNums == this.studentNums ){
                        alert('투표가 종료되었습니다.')
                        this.$store.dispatch('setting/endVote', {
                            votedNums: this.votedNums
                        })
                    }
                } else {
                    alert("잘못 눌렀습니다.");
                }
            } else {
                alert('투표가 종료되었습니다.')
            }
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
.progress-bar-con{
    /* position: fixed; */
    left: 0;
    top: 0;
    width: 100vw;
    height: 10px;
    background: #555;
}
.progress-bar {
    width: 0;
    height: 100%;
    background: #00a8ff;
}

</style>