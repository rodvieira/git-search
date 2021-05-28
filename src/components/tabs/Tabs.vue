<template>
  <div class="wrapper-tabs">
    <ul class="tabs-header">
      <li
        v-for="(tab, index) in tabs"
        :key="tab.title"
        @click="selectTab(index)"
        :class="{ 'selected': index === selectedIndex }"
      >
        <span>{{tab.title}}</span>
      </li>
    </ul>
    <tab v-for="(tab, index) in tabs" :key="tab.title">
      <template v-if="index === selectedIndex">
        {{tab.content}}
      </template>
    </tab>
  </div>
</template>
<script>
import Tab from './components/tab/Tab.vue';

export default {
  data() {
    return {
      selectedIndex: 0,
    };
  },
  components: {
    Tab,
  },
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    selectTab(tabIndex) {
      this.selectedIndex = tabIndex;
    },
  },
  mounted() {
    this.selectTab(0);
  },
};
</script>

<style lang="scss" scoped>
  .wrapper-tabs {
    margin: 0 -20px;

    .tabs-header {
      padding: 0;
      width: 100%;
      list-style: none;
      display: flex;

      li {
        height: 50px;
        background-color: #F7F9FA;
        flex-grow: 1;
        flex-basis: 0;
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          color: #000;
          font-weight: 500;
          font-size: 16px;
          line-height: 22px;
        }

        &.selected {
          border-bottom: 3px solid #5C97D2;
        }
      }
    }

  }
</style>
