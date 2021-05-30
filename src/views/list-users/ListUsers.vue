<template>
  <div class="wrapper-list-users">
    <input-filter action-type="filter" @input-value="e => setQueryFilter(e)" />
    <div class="list-users">
      <item-user
        v-for="user in users"
        :key="user.id"
        :infoUser="user"
        @click="$router.push({ path: 'Profile'})"
      />
      <div class="status-list">
        <loader v-if="loading"/>
        <view-more v-else-if="totalList > users.length" @click="viewMoreList()"/>
        <itens-loaded
          v-else
          :itensLoaded="users.length"
          listName="usuários"
        />
      </div>
    </div>
  </div>
</template>
<script>
import InputFilter from '@/components/input/Input.vue';
import ItemUser from '@/components/item-user/ItemUser.vue';
import ItensLoaded from '@/components/itens-loaded/ItensLoaded.vue';
import Loader from '@/components/loader/Loader.vue';
import ViewMore from '@/components/view-more/ViewMore.vue';
import { mapState } from 'vuex';

import searchApi from '@/service/routes/search';

export default {
  name: 'ListUsers',
  components: {
    InputFilter,
    ItemUser,
    Loader,
    ViewMore,
    ItensLoaded,
  },
  data() {
    return {
      users: [],
      loading: true,
      totalList: 0,
      filter: '',
      page: 1,
    };
  },
  computed: {
    ...mapState(['searchParams']),
  },
  methods: {
    searchUsers(query) {
      this.setSearchParams(query);
      this.$router.push({ path: '/list' });
    },
    viewMoreList() {
      const query = this.filter ? this.filter : this.searchParams;
      this.page += 1;
      this.fetchUsers(query);
    },
    setQueryFilter(query) {
      this.filter = query;
      this.page = 1;
      this.fetchUsers(query);
    },
    async fetchUsers(query) {
      this.loading = true;
      try {
        const { data } = await searchApi.search({
          q: query,
          per_page: 10 * this.page,
        });
        this.users = data.items;
        this.totalList = data.total_count;
      } catch (err) {
        console.log(err);
        this.users = [];
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchUsers(this.searchParams);
  },

};
</script>
<style lang="scss">
  .wrapper-list-users{
    padding: 0 16px;
    margin-top: 16px;

    .list-users {
      margin-top: 24px;
    }

    .status-list {
      margin: 24px;
    }
  }
</style>
