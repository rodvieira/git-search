<template>
  <div class="wrapper-projects">
    <item-project
      v-for="repositorie in repositories"
      :key="repositorie.id"
      :project="repositorie"
    />
    <paginate
      :loading="loading"
      :totalList="totalList"
      @viewMore="viewMoreList()"
      :usersRender="repositories.length"
    />
  </div>
</template>
<script>
import ItemProject from '@/components/item-project/ItemProject.vue';
import Paginate from '@/components/paginate/Paginate.vue';
import usersApi from '@/service/routes/users';
import { mapState } from 'vuex';

export default {
  components: {
    ItemProject,
    Paginate,
  },
  data() {
    return {
      repositories: [],
      loading: true,
      page: 1,
      totalList: 0,
    };
  },
  computed: {
    ...mapState(['repoParams', 'user']),
  },
  methods: {
    viewMoreList() {
      this.page += 1;
      this.fetchUsers(this.repoParams);
    },
    async fetchUsers(query) {
      this.loading = true;
      try {
        const { data } = await usersApi.getRepositories({
          per_page: 8 * this.page,
        }, query);
        this.repositories = data;
      } catch (err) {
        this.repositories = [];
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchUsers(this.repoParams);
    this.totalList = this.user.public_repos;
  },
};
</script>
