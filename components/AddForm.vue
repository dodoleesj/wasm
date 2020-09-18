<template>
<div class="add-container">
    <v-card class="add-card">
        <v-form ref="form" class="add-form" @submit.prevent='onSubmitForm'>
            <v-text-field 
            class="abc" 
            v-model="name"
            placeholder="후보자 이름을 입력하세요"/>
            <v-btn type="submit" icon><v-icon>mdi-plus</v-icon></v-btn>
        </v-form>
    </v-card>
    <v-btn nuxt to="vote">등록완료</v-btn>
</div>
</template>

<script>
// import { mapState } from 'vuex';

export default {
    data() {
        return {
            num: 1,
            name: ''
        }
    },
    methods : {
        onSubmitForm() {
            this.$store.dispatch('students/add', {
                name: this.name,
                num: this.num++,
                word: '',
                id: Date.now(),
            })
            this.name = ''
        },
    }

}
</script>

<style>
.add-container {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.add-card {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}

.add-form {
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    width: 80%;
}
</style>