import axios from "axios";
import { API_ENDPOINTS } from "./config";

export const soccerService = {
    getPlStandings: async () => {
        try {
            const response = await axios.get(API_ENDPOINTS.SOCCER.STANDINGS_PL);
            return response.data;
        } catch (error) {
            console.error("순위 불러오기 실패", error);
        }
    },
     getPdStandings: async () => {
        try {
            const response = await axios.get(API_ENDPOINTS.SOCCER.STANDINGS_PD);
            return response.data;
        } catch (error) {
            console.error("순위 불러오기 실패", error);
        }
    },
    getMatches: async () => {
        try {
        const response = await axios.get(API_ENDPOINTS.SOCCER.MATCHES);
    return response.data;
  } catch (error) {
    console.error("경기 정보 불러오기 실패", error);
    throw error;
  }
}


}