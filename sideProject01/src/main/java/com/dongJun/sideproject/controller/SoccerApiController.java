package com.dongJun.sideproject.controller;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/soccer")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173", allowCredentials = "true")
public class SoccerApiController {

    /*
        api 링크
        https://www.football-data.org/documentation/quickstart
        토큰 키 : ccea26264fe842fb8f97e7940309faf3
     */

    // epl 리그 순위
    @GetMapping("/standings/pl")
    public ResponseEntity<String> getPlStandingsApi() {
        RestTemplate re = new RestTemplate();
        RequestEntity<Void> req = RequestEntity
                .get("http://api.football-data.org/v4/competitions/PL/standings")
                .header("X-Auth-Token", "ccea26264fe842fb8f97e7940309faf3")
                .build();

        ResponseEntity<String> res = re.exchange(req, String.class);

        return ResponseEntity.ok(res.getBody());
    }

    // Primera 리그 순위
    @GetMapping("/standings/pd")
    public ResponseEntity<String> getLaligaStandingsApi() {
        RestTemplate re = new RestTemplate();
        RequestEntity<Void> req = RequestEntity
                .get("http://api.football-data.org/v4/competitions/PD/standings")
                .header("X-Auth-Token", "ccea26264fe842fb8f97e7940309faf3")
                .build();

        ResponseEntity<String> res = re.exchange(req, String.class);

        return ResponseEntity.ok(res.getBody());
    }

    // 경기 기록
    @GetMapping("/matches")
    public ResponseEntity<String> getMatchesApi() {
        RestTemplate restTemplate = new RestTemplate();

        // ✅ 경기 API (예: 프리미어리그 경기 기록)
        // dateFrom, dateTo, status 등의 파라미터도 붙일 수 있음
        String url = "http://api.football-data.org/v4/competitions/PL/matches"
                + "?dateFrom=2025-09-01"
                + "&dateTo=2025-09-30"
                + "&status=FINISHED";

        RequestEntity<Void> request = RequestEntity
                .get(url)
                .header("X-Auth-Token", "ccea26264fe842fb8f97e7940309faf3")
                .build();

        ResponseEntity<String> response = restTemplate.exchange(request, String.class);
        System.out.println(response.getBody());

        return ResponseEntity.ok(response.getBody());
    }

}
