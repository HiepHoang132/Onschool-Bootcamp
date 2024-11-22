package com.example.demo.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Random;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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

import com.example.demo.entity.Employee;
import com.example.demo.model.ExistsData;
import com.example.demo.repository.IEmployeeRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("")
public class EmployeeController {
	@Autowired
	IEmployeeRepository gEmployeeRepository;

	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> getAllEmployee() {
		try {
			List<Employee> vEmployees = new ArrayList<Employee>();
			gEmployeeRepository.findAll().forEach(vEmployees::add);
			return new ResponseEntity<>(vEmployees, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/employee/details/{id}")
	public ResponseEntity<Object> getEmployeeById(@PathVariable Integer id) {
		Optional<Employee> vEmployeeData = gEmployeeRepository.findById(id);
		if (vEmployeeData.isPresent()) {
			try {
				Employee vEmployee = vEmployeeData.get();
				return new ResponseEntity<>(vEmployee, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} else {
			Employee vEmployeeNull = new Employee();
			return new ResponseEntity<>(vEmployeeNull, HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/employee/exists/{email}")
	public ResponseEntity<Object> isExistsEmail(@PathVariable String email) {
		try {
			boolean vEmployee = gEmployeeRepository.existsByEmail(email);
			ExistsData vExistsData = new ExistsData();
			if (vEmployee) {
				vExistsData.setName(email);
				vExistsData.setExists(true);
			} else {
				vExistsData.setName(email);
				vExistsData.setExists(false);
			}
			return new ResponseEntity<>(vExistsData, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/employees/list")
	public List<Employee> getEmployeeList() {
		return gEmployeeRepository.findAll()
				.stream()
				.collect(Collectors.toList());
	}

	@GetMapping("/employees/set")
	public Set<Employee> getEmployeeSet() {
		List<Employee> employees = gEmployeeRepository.findAll();
		Set<Employee> employeeSet = new HashSet<>(employees);
		return employeeSet.stream().collect(Collectors.toSet());
	}

	@GetMapping("/employees/map")
	public Map<Integer, Employee> getEmployeeMap() {
		List<Employee> employees = gEmployeeRepository.findAll();
		Map<Integer, Employee> employeeMap = employees.stream()
				.collect(Collectors.toMap(Employee::getId, emp -> emp));

		return employeeMap.entrySet().stream()
				.filter(emp -> emp.getValue().getJobTitle().equals("Sales Rep"))
				.collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
	}

	@GetMapping("/array")
	public List<Employee> getEmployeesFromArray() {
		Integer[] employeeIds = { 1002, 1056 }; // Mảng chứa các ID của nhân viên cần lấy
		return Arrays.stream(employeeIds) // Tạo Stream từ mảng
				.map(gEmployeeRepository::findById)
				.filter(Optional::isPresent)
				.map(Optional::get)
				.collect(Collectors.toList());
	}

	@GetMapping("/job-title/stream")
	public List<String> getDepartmentsFromStream() {
		return Stream
				.of("President", "VP Sales", "VP Marketing", "Sales Manager (APAC)", "Sales Manager (EMEA)",
						"Sales Manager (NA)",
						"Sales Rep")
				.filter(title -> title.contains("VP"))
				.collect(Collectors.toList());
	}

	@GetMapping("/file")
	public List<String> getEmployeesFromFile() {
		List<String> result = new ArrayList<>();
		try (Stream<String> lines = Files.lines(Paths.get("employees.txt"))) {
			result = lines.filter(line -> line.startsWith("J")) // Lọc các dòng bắt đầu bằng "J"
					.collect(Collectors.toList());
		} catch (IOException e) {
			e.printStackTrace();
		}
		return result;
	}

	// Tạo dãy số ngẫu nhiên
	@GetMapping("/numbers/random")
	public List<Integer> getRandomNumbers() {
		return Stream.generate(() -> new Random().nextInt(100)) // Tạo Stream vô hạn các số ngẫu nhiên
				.limit(10) // Giới hạn 10 số
				.collect(Collectors.toList());
	}

	// Tạo dãy số tuần tự
	@GetMapping("/numbers/sequential")
	public List<Integer> getSequentialNumbers() {
		return Stream.iterate(1, n -> n + 1) // Tạo Stream vô hạn bắt đầu từ 1
				.limit(10) // Giới hạn 10 số
				.collect(Collectors.toList());
	}

	@PostMapping("/employee/create")
	public ResponseEntity<Object> createEmployee(@Valid @RequestBody Employee paramEmployee) {
		try {
			Employee vEmployee = new Employee();
			vEmployee.setLastName(paramEmployee.getLastName());
			vEmployee.setFirstName(paramEmployee.getFirstName());
			vEmployee.setExtension(paramEmployee.getExtension());
			vEmployee.setEmail(paramEmployee.getEmail());
			vEmployee.setOfficeCode(paramEmployee.getOfficeCode());
			vEmployee.setReportTo(paramEmployee.getReportTo());
			vEmployee.setJobTitle(paramEmployee.getJobTitle());
			Employee vEmployeeSave = gEmployeeRepository.save(vEmployee);
			return new ResponseEntity<>(vEmployeeSave, HttpStatus.CREATED);
		} catch (Exception e) {
			return ResponseEntity.unprocessableEntity()
					.body("Failed to Create specified Employee: " + e.getCause().getCause().getMessage());
		}
	}

	@PutMapping("/employee/update/{id}")
	public ResponseEntity<Object> updateEmployee(@PathVariable Integer id, @Valid @RequestBody Employee paramEmployee) {
		Optional<Employee> vEmployeeData = gEmployeeRepository.findById(id);
		if (vEmployeeData.isPresent()) {
			try {
				Employee vEmployee = vEmployeeData.get();
				vEmployee.setLastName(paramEmployee.getLastName());
				vEmployee.setFirstName(paramEmployee.getFirstName());
				vEmployee.setExtension(paramEmployee.getExtension());
				vEmployee.setEmail(paramEmployee.getEmail());
				vEmployee.setOfficeCode(paramEmployee.getOfficeCode());
				vEmployee.setReportTo(paramEmployee.getReportTo());
				vEmployee.setJobTitle(paramEmployee.getJobTitle());
				Employee vEmployeeSave = gEmployeeRepository.save(vEmployee);
				return new ResponseEntity<>(vEmployeeSave, HttpStatus.OK);
			} catch (Exception e) {
				return ResponseEntity.unprocessableEntity()
						.body("Failed to Update specified Employee: " + e.getCause().getCause().getMessage());
			}

		} else {
			Employee vEmployeeNull = new Employee();
			return new ResponseEntity<>(vEmployeeNull, HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/employee/delete/{id}")
	private ResponseEntity<Object> deleteProductById(@PathVariable Integer id) {
		Optional<Employee> vEmployeeData = gEmployeeRepository.findById(id);
		if (vEmployeeData.isPresent()) {
			try {
				gEmployeeRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		} else {
			Employee vEmployeeNull = new Employee();
			return new ResponseEntity<>(vEmployeeNull, HttpStatus.NOT_FOUND);
		}
	}
}
