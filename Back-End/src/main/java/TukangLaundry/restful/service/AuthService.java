package TukangLaundry.restful.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TukangLaundry.restful.dto.auth.LoginRequest;
import TukangLaundry.restful.dto.auth.LoginResponse;
import TukangLaundry.restful.model.Admin;
import TukangLaundry.restful.model.Kasir;
import TukangLaundry.restful.repository.AdminRepository;
import TukangLaundry.restful.repository.KasirRepository;

@Service
public class AuthService implements AuthServiceInterface {
    @Autowired
    private AdminRepository adminRepo;

    @Autowired
    private KasirRepository kasirRepo;

    @Override
    public LoginResponse login(LoginRequest request) {
        Optional<Admin> adminOpt = adminRepo.findByEmail(request.getEmail());
        if (adminOpt.isPresent()) {
            Admin admin = adminOpt.get();
            if (admin.getPassword().equals(request.getPassword())) {
                LoginResponse response = new LoginResponse();
                response.setStatus(true);
                response.setId(admin.getId());
                response.setNama(admin.getName());
                response.setRole("Admin");
                response.setPesan("Login Berhasil");
                return response;
            }
        }

        Optional<Kasir> kasirOpt = kasirRepo.findByEmail(request.getEmail());
        if (kasirOpt.isPresent()) {
            Kasir kasir = kasirOpt.get();
            if (kasir.getPassword().equals(request.getPassword())) {
                LoginResponse response = new LoginResponse();
                response.setStatus(true);
                response.setId(kasir.getId());
                response.setNama(kasir.getName());
                response.setRole("Kasir");
                response.setPesan("Login Berhasil");
                return response;
            }
        }

        LoginResponse response = new LoginResponse();
        response.setStatus(false);
        response.setPesan("Email atau Password Salah");
        return response;
    }
}

interface AuthServiceInterface {
    LoginResponse login(LoginRequest request);
}