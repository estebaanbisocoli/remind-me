<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-list three-line>
        <template v-for="(item, index) in items">
          <v-subheader :key="item.header" v-if="item.header">{{item.header}}</v-subheader>
          <v-divider :key="index" v-else-if="item.divider"></v-divider>
          <v-list-tile @click v-else :key="item.title">
            <v-list-tile-action>
              <v-checkbox large color="pink">star</v-checkbox>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{item.title}}</v-list-tile-title>
              <v-list-tile-sub-title>{{item.message}}</v-list-tile-sub-title>
              <v-list-tile-sub-title class="align-right">{{formatDate(item.endDate)}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
import moment from "moment";

export default {
  props: ["items"],
  data() {
    return {};
  },
  methods: {
    formatDate(time) {
      return new Date(time).toDateString();
    }
  }
};
</script>

<style>
.align-right {
  display: inline-block;
  width: 100%;

  text-align: right;
}
</style>
