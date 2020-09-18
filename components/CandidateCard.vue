<template>
  <v-card
    class="max-auto"
    max-width="300px"
    style="margin: 10px">
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
    </v-img>
    <v-card-title> 기호 {{ candidate.num}}번 {{ candidate.name }}</v-card-title>
    <v-card-text class="text--primary">
      <v-text-field label="각오 한마디" hide-details="auto"></v-text-field>
    </v-card-text>

    <v-card-actions>
      <v-btn dark color="red" @click="giveUp">포기</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    candidate: {
      type: Object,
      required: true,
    }
  },
  methods: {
    giveUp() {
      this.$store.dispatch('students/remove', {
        id: this.candidate.id,
      })
    }
  }

}
</script>

<style>


</style>