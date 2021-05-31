<template>
  <div class="wrapper-paginate">
    <loader v-if="loading"/>
    <view-more v-else-if="totalList > usersRender" @click="$emit('viewMore')"/>
    <itens-loaded
      v-else
      :itensLoaded="usersRender"
      listName="usuários"
    />
  </div>
</template>
<script>
import ItensLoaded from '@/components/itens-loaded/ItensLoaded.vue';
import Loader from '@/components/loader/Loader.vue';
import ViewMore from '@/components/view-more/ViewMore.vue';

export default {
  components: {
    ItensLoaded,
    Loader,
    ViewMore,
  },
  props: {
    loading: Boolean,
    totalList: Number,
    usersRender: Number,
  },
};
</script>

<style lang="scss" scoped>
  .wrapper-paginate {
    margin: 24px;
  }
</style>
