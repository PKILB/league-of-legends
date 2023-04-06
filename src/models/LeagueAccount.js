

export class LeagueAccount {
    constructor(data) {
        this.id = data.puuid
        this.name = data.gameName
        this.summonerTag = data.tagLine

    }
}

// "puuid": "f9W9ituivGz5u_P_TbP4aHrkznlSdQuI1_MtwPucbl6rK6O8oQFUVS3nYa2Vkr4Iz3oHQ4-wXcmlRw",
//     "gameName": "Kilial",
//     "tagLine": "19991"