<template>
<div class="sub-page">
    <v-card class="set-list">
        <v-card-title>설정</v-card-title>
        <v-form @submit.prevent="onsubmitForm">
            <v-text-field class="set-item" v-model="voteTitle" label="선거명" type="text" required></v-text-field>
            <v-text-field class="set-item" v-model="studentNums" label="학생수" type="number" required></v-text-field>
            <div class="set-item">
                <div>투표방식</div>
                <v-radio-group v-model="votingMethod">
                        <v-radio label="1인 1투표" value="1"/>
                        <v-radio label="1인 2투표" value="2"/>
                </v-radio-group>
            </div>
            <!-- <div class="set-item">
                <v-switch label="기권 가능"></v-switch>
            </div> -->
            <div class="set-item">
                <v-btn type="submit" >제출</v-btn>
            </div>
        </v-form>
    </v-card>
</div>
</template>

<script>
export default {
    data() {
        return {
            voteTitle: '',
            studentNums: 0,
            votingMethod: 0,
        }
    },
    methods: {
        onsubmitForm() {
            this.$store.dispatch('setting/set', {
                voteTitle: this.voteTitle,
                studentNums: this.studentNums,
                votingMethod: this.votingMethod
            });
            this.$router.push("registration")
        }
    }
}
</script>

<style>
.sub-page {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
}
.set-list {
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 30px 0;
}
.set-item {
    width: 80%;
    margin: 20px auto;
}


</style>