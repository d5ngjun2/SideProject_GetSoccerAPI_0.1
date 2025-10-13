import { SiGnome } from "react-icons/si";
import Matches from "../pages/Matches";

const BASE_URL = `http://localhost:8080/`;

export const API_ENDPOINTS = {
    SOCCER: {
        STANDINGS_PL : `${BASE_URL}api/soccer/standings/pl`,
        STANDINGS_PD : `${BASE_URL}api/soccer/standings/pd`,
        MATCHES : `${BASE_URL}api/soccer/matches`
    },
    USER: {
        LOGIN : `${BASE_URL}api/user/login`,
        SIGNUP : `${BASE_URL}api/user/signup`,
        UPDATE : `${BASE_URL}api/user/update`
    }
};