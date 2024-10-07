package com.example.customerorder.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.customerorder.model.Customer;
import com.example.customerorder.model.Order;

@RestController
@CrossOrigin
@RequestMapping("/devcamp")
public class CustomerController {
    @Autowired
    CustomerService customerService;

    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomers() {
        try {
            return new ResponseEntity<>(customerService.getAllCustomers(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/orders")
    public ResponseEntity<List<Order>> getOrderByCustomerId(@RequestParam long customerId) {
        try {
            Customer customer = customerService.getCustomerById(customerId);

            if (customer == null)
                return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);

            return new ResponseEntity<>(customer.getOrders(), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);

        }
    }

}
