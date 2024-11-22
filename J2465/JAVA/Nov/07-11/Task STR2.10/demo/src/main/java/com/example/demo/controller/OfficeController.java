package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Office;
import com.example.demo.repository.IOfficeRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/")
public class OfficeController {
	@Autowired
	IOfficeRepository gOfficeRepository;

	@GetMapping("/offices")
	public ResponseEntity<List<Office>> getAllOffice() {
		try {
			List<Office> vOffices = new ArrayList<Office>();
			gOfficeRepository.findAll().forEach(vOffices::add);
			return new ResponseEntity<>(vOffices, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/office/details/{id}")
	public ResponseEntity<Object> getOfficeById(@PathVariable Integer id) {
		Optional<Office> vOfficeData = gOfficeRepository.findById(id);
		if (vOfficeData.isPresent()) {
			try {
				Office vOffice = vOfficeData.get();
				return new ResponseEntity<>(vOffice, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} else {
			Office vOfficeNull = new Office();
			return new ResponseEntity<>(vOfficeNull, HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/office/create")
	public ResponseEntity<Object> createOffice(@Valid @RequestBody Office paramOffice) {
		try {
			Office vOffice = new Office();
			vOffice.setCity(paramOffice.getCity());
			vOffice.setPhone(paramOffice.getPhone());
			vOffice.setAddressLine(paramOffice.getAddressLine());
			vOffice.setState(paramOffice.getState());
			vOffice.setCountry(paramOffice.getCountry());
			vOffice.setTerritory(paramOffice.getTerritory());
			Office vOfficeSave = gOfficeRepository.save(vOffice);
			return new ResponseEntity<>(vOfficeSave, HttpStatus.CREATED);
		} catch (Exception e) {
			return ResponseEntity.unprocessableEntity()
					.body("Failed to Create specified Office: " + e.getCause().getCause().getMessage());
		}
	}

	@PutMapping("/office/update/{id}")
	public ResponseEntity<Object> updateOffice(@PathVariable Integer id, @Valid @RequestBody Office paramOffice) {
		Optional<Office> vOfficeData = gOfficeRepository.findById(id);
		if (vOfficeData.isPresent()) {
			try {
				Office vOffice = vOfficeData.get();
				vOffice.setCity(paramOffice.getCity());
				vOffice.setPhone(paramOffice.getPhone());
				vOffice.setAddressLine(paramOffice.getAddressLine());
				vOffice.setState(paramOffice.getState());
				vOffice.setCountry(paramOffice.getCountry());
				vOffice.setTerritory(paramOffice.getTerritory());
				Office vOfficeSave = gOfficeRepository.save(vOffice);
				return new ResponseEntity<>(vOfficeSave, HttpStatus.OK);
			} catch (Exception e) {
				return ResponseEntity.unprocessableEntity()
						.body("Failed to Update specified Office: " + e.getCause().getCause().getMessage());
			}
		} else {
			Office vOfficeNull = new Office();
			return new ResponseEntity<>(vOfficeNull, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/office/delete/{id}")
	private ResponseEntity<Object> deleteOfficeById(@PathVariable Integer id) {
		Optional<Office> vOfficeData = gOfficeRepository.findById(id);
		if (vOfficeData.isPresent()) {
			try {
				gOfficeRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} else {
			Office vOfficeNull = new Office();
			return new ResponseEntity<>(vOfficeNull, HttpStatus.NOT_FOUND);
		}
	}
}
