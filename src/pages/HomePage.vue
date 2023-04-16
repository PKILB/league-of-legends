<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 m-auto d-flex justify-content-center">
        <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_7.jpg" class="bg-image" alt="">
      </div>
    </div>
    <div class="row pt-3">
      <div class="col-12 d-flex justify-content-center">
        <h1>
          {{ leagueAccount.name }}
        </h1>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-4 d-flex justify-content-center">
        <!-- <img class="img-height img-fluid" src="ranked-emblem/emblem-silver.png" alt=""> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { accountService } from '../services/AccountService.js';
import { logger } from '../utils/Logger.js';
import { leagueAccountsService } from '../services/LeagueAccountsService.js'
import Pop from '../utils/Pop.js';
import { onMounted } from 'vue';
import { computed } from '@vue/reactivity';
import { AppState } from '../AppState.js';

export default {
  setup() {
    async function getLeagueAccount() {
      try {
        await leagueAccountsService.getLeagueAccount()
      } catch (error) {
        logger.error(error)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getLeagueAccount()
    })

    return {
      leagueAccount: computed(() => AppState.leagueAccount)
    }
  }
}
</script>

<style scoped lang="scss">
// .home {
//   display: grid;
//   height: 80vh;
//   place-content: center;
//   text-align: center;
//   user-select: none;

//   .home-card {
//     width: 50vw;

//     >img {
//       height: 200px;
//       max-width: 200px;
//       width: 100%;
//       object-fit: contain;
//       object-position: center;
//     }
//   }
// }
.img-height {
  background-size: cover;
  // height: 60vh;
  // width: 80vh;
}

.bg-image {
  background-size: cover;
  width: 100vw;
  // background-position: absolute;
  // width: fit-content;
  // height: fit-content;
}
</style>
