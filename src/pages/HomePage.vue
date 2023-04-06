<template>
  <div class="container-fluid">
    <div class="row pt-3">
      <div class="col-12 d-flex justify-content-center">
        <h1>
          Kilial
        </h1>
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-4 d-flex justify-content-center">
        <img class="img-height img-fluid" src="ranked-emblem/emblem-silver.png" alt="">
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

    return {}
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
</style>
