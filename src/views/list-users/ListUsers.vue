<template>
  <div class="wrapper-list-users">
    <div class="head-list">
      <h2>Search Results</h2>
      <input-filter
        action-type="filter"
        @input-value="e => setQueryFilter(e)"
        class="filter-input"
      />
    </div>
    <div class="list-users">
      <item-user
        v-for="user in users"
        :key="user.id"
        :infoUser="user"
        @click="selectedUser(user)"
      />
    </div>
    <paginate
      :loading="loading"
      :totalList="totalList"
      @viewMore="viewMoreList()"
      :usersRender="users.length"
    />
  </div>
</template>
<script>
import InputFilter from '@/components/input/Input.vue';
import ItemUser from '@/components/item-user/ItemUser.vue';
import Paginate from '@/components/paginate/Paginate.vue';
import { mapState, mapActions } from 'vuex';
import searchApi from '@/service/routes/search';

export default {
  name: 'ListUsers',
  components: {
    InputFilter,
    ItemUser,
    Paginate,
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
    ...mapState(['userParams']),
  },
  methods: {
    ...mapActions(['setRepoParams']),

    selectedUser(user) {
      this.setRepoParams(user.login);
      this.$router.push({ path: '/profile/about' });
    },
    viewMoreList() {
      const query = this.filter ? this.filter : this.userParams;
      this.page += 1;
      this.fetchUsers(query);
    },
    setQueryFilter(query) {
      this.users = [];
      this.filter = query;
      this.page = 1;
      this.fetchUsers(query);
    },
    async fetchUsers(query) {
      this.loading = true;
      try {
        const { data } = await searchApi.search({
          q: query,
          page: 1,
          per_page: 10 * this.page,
        });
        this.users = data.items;
        this.totalList = data.total_count;
      } catch (err) {
        this.users = [];
        this.totalList = 0;
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchUsers(this.userParams);
  },

};
</script>
<style lang="scss">
  .wrapper-list-users{
    padding: 0 16px;
    margin-top: 16px;
    width: 100%;
    max-width: 860px;

    h2 {
      display: none;
    }

    .list-users {
      margin-top: 24px;
    }

    @media (min-width: 768px) {
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
      margin: 40px auto;

      .head-list {
        display: flex;
        padding: 30px 50px;
        border-bottom: 1px solid #EDEDED;

        h2 {
          display: block;
          font-weight: 600;
          font-size: 30px;
          line-height: 36px;
          margin: 0;
          color: #000;
          flex-grow: 1;
          flex-basis: 0;
          text-align: left;
        }

        .filter-input {
          flex-grow: 1;
          flex-basis: 0;
          text-align: right;
        }
      }

      .list-users {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 24px 80px 0;
      }
    }
  }
</style>
