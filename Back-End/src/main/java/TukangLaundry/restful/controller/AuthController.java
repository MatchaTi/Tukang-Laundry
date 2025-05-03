package TukangLaundry.restful.controller;

import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;

import TukangLaundry.restful.dto.auth.LoginRequest;
import TukangLaundry.restful.dto.auth.LoginResponse;
import TukangLaundry.restful.service.AuthService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("api/v1/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<Map<String, Object>> login(@RequestBody LoginRequest request) {
        LoginResponse loginResult = authService.login(request);

        Map<String, Object> response = new HashMap<>();
        response.put("data", loginResult);

        return ResponseEntity.ok(response);
    }

}
