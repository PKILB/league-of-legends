import { AppState } from "../AppState.js";
import { LeagueAccount } from "../models/LeagueAccount.js";
import { riotAPI } from "./AxiosService.js";


class LeagueAccountsService {
    async getLeagueAccount() {
        const res = await riotAPI.get('/riot/account/v1/accounts/by-puuid/f9W9ituivGz5u_P_TbP4aHrkznlSdQuI1_MtwPucbl6rK6O8oQFUVS3nYa2Vkr4Iz3oHQ4-wXcmlRw')
        AppState.leagueAccount = new LeagueAccount(res.data)
    }
} 

export const leagueAccountsService = new LeagueAccountsService();