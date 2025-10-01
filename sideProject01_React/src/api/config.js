const BASE_URL = `http://localhost:8080/`;

export const API_ENDPOINTS = {
    SOCCER: {
        STANDINGS_PL : `${BASE_URL}api/soccer/standings/pl`,
        STANDINGS_PD : `${BASE_URL}api/soccer/standings/pd`
    },
    USER: {
        LOGIN : `${BASE_URL}api/user/login`
    }
};