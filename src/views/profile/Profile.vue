<template>
  <div class="wrapper-profile">
    <div v-if="!loading">
      <div class="header-md-profile">
        <div class="header-profile">
          <avatar size="120px" class="avatar" :image="user.avatar_url" />
        </div>
        <div class="info-user">
          <h2>{{user.name}}</h2>
          <span>
            <img src="@/assets/icons/user.svg" alt="User" />
            {{user.login}}
          </span>
        </div>
        <div class="details-profile">
          <details-profile
            icon="people-standing.svg"
            title="Seguindo"
            :quantity="user.following"
          />
          <details-profile
            icon="path.svg"
            title="Projetos"
            :quantity="user.public_repos"
          />
          <details-profile
            icon="peoples.svg"
            title="Seguidores"
            :quantity="user.followers"
          />
        </div>
      </div>
      <tabs
        :tabs="[
          {title: 'Sobre', route: '/profile/about'},
          {title: 'Projetos', route: '/profile/projects'}
        ]"
      />
    </div>
    <loader v-else/>
  </div>
</template>
<script>
import Avatar from '@/components/avatar/Avatar.vue';
import DetailsProfile from '@/components/details/Details.vue';
import Loader from '@/components/loader/Loader.vue';
import Tabs from '@/components/tabs/Tabs.vue';
import usersApi from '@/service/routes/users';

import { mapState, mapActions } from 'vuex';

export default {
  name: 'Profile',
  components: {
    Avatar,
    DetailsProfile,
    Tabs,
    Loader,
  },
  data() {
    return {
      user: {},
      loading: true,
    };
  },
  computed: {
    ...mapState(['repoParams']),
  },
  methods: {
    ...mapActions(['setUser']),

    async fetchUsers(query) {
      this.loading = true;
      try {
        const { data } = await usersApi.getUsers({}, query);
        this.user = data;
        this.setUser(data);
      } catch (err) {
        this.user = {};
        this.setUser({});
      }
      this.loading = false;
    },
  },
  mounted() {
    this.fetchUsers(this.repoParams);
  },

};
</script>
<style lang="scss">
  .wrapper-profile {
    padding: 0 20px;

    .header-profile {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-image: url(../../assets/bg-profile.png);
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      padding-top: 42px;
      margin: 0 -20px;

      .avatar {
        margin-bottom: -24px;
      }
    }

    .info-user {
      padding-top: 32px;

      h2 {
        font-weight: 600;
        font-size: 24px;
        color: #162668;
        margin-bottom: 4px;
        margin-top: 0;
      }

      span {
        color: #90A4AE;
        font-size: 16px;
        line-height: 22px;

        img {
          display: inline-block;
          margin-right: 4px;
        }
      }
    }

    .details-profile {
      margin: 28px 0;
      display: flex;
      justify-content: space-between;
    }

    @media (min-width: 768px) {
      width: 100%;
      max-width: 860px;
      margin: 40px auto;
      background-color: #fff;
      box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

      .header-md-profile {
        background-image: url(../../assets/bg-profile.png);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        margin: 0 -20px;
        padding: 72px 16px 0;
        display: flex;
        align-items: flex-end;

        .header-profile {
          background: transparent;
          margin: 0;
          display: block;
          padding: 0;

          .avatar {
            width: 150px;
          }
        }

        .info-user {
          margin-left: 32px;
          padding: 0;
          text-align: right;
        }

        .details-profile {
          margin: 0 0 0 auto;
          display: flex;
          justify-content: end;
        }
      }
    }
  }
</style>
