<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          link
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-subheader class="mt-4 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-item
            v-for="item in items2"
            :key="item.text"
            link
          >
            <v-list-item-avatar>
              <img
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt=""
              >
            </v-list-item-avatar>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
        </v-list>
        <v-list-item
          class="mt-4"
          link
        >
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-plus-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Browse Channels</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="grey darken-1">mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-title class="grey--text text--darken-1">Manage Subscriptions</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
      color="red"
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-icon
        class="mx-4"
        large
      >
        mdi-youtube
      </v-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">Youtube</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-row
        align="center"
        style="max-width: 650px"
      >
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="mdi-magnify"
          color="white"
          hide-details
        ></v-text-field>
      </v-row>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height">
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="shrink">
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                      <div class="text-center">
      <v-row justify="center" align="center">
        <v-col cols="12">
          <v-radio-group row wrap>
            <v-switch v-model="circle" label="Toggle circle" class="mx-4"></v-switch>
            <v-switch v-model="disabled" label="Toggle disabled" class="mx-4"></v-switch>
          </v-radio-group>
        </v-col>
  
        <v-row>
          <v-col cols="12" md="3">
            <v-select
              v-model="prevIcon"
              class="mx-4"
              :items="prevIcons"
              label="prev-icon"
            ></v-select>
          </v-col>
  
          <v-col cols="12" md="3">
            <v-select
              v-model="nextIcon"
              class="mx-4"
              :items="nextIcons"
              label="next-icon"
            ></v-select>
          </v-col>
  
          <v-col cols="12" md="3">
            <v-text-field
              v-model="length"
              label="Pagination length"
              max="25"
              min="1"
              step="1"
              style="width: 125px"
              type="number"
              @keydown="false"
            ></v-text-field>
          </v-col>
  
          <v-col cols="12" md="3">
            <v-text-field
              v-model="totalVisible"
              label="Total visible"
              max="25"
              min="1"
              step="1"
              style="width: 125px"
              type="number"
              @keydown="false"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-row>
  
      <v-pagination
        v-model="page"
        :circle="circle"
        :disabled="disabled"
        :length="length"
        :next-icon="nextIcon"
        :prev-icon="prevIcon"
        :page="page"
        :total-visible="totalVisible"
      ></v-pagination>
    </div>

                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      circle: false,
      disabled: false,
      length: 10,
      nextIcon: 'navigate_next',
      nextIcons: ['mdi-chevron-right', 'mdi-arrow-right', 'mdi-menu-right'],
      prevIcon: 'navigate_before',
      prevIcons: ['mdi-chevron-left', 'mdi-arrow-left', 'mdi-menu-left'],
      page: 1,
      totalVisible: 10,


      drawer: null,
      items: [
        { icon: 'mdi-trending-up', text: 'Most Popular' },
        { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
        { icon: 'mdi-history', text: 'History' },
        { icon: 'mdi-playlist-play', text: 'Playlists' },
        { icon: 'mdi-clock', text: 'Watch Later' },
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>