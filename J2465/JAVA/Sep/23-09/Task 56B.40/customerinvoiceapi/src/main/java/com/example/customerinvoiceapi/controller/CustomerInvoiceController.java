package com.example.customerinvoiceapi.controller;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.customerinvoiceapi.Customer;
import com.example.customerinvoiceapi.Invoice;

@RestController
public class CustomerInvoiceController {

    @CrossOrigin
    @GetMapping("/invoices")
    public ArrayList<Invoice> getInvoices() {
        Customer customer1 = new Customer(1, "John Doe", 10);
        Customer customer2 = new Customer(2, "Jane Smith", 15);
        Customer customer3 = new Customer(3, "Alice Brown", 20);

        System.out.println(customer1);
        System.out.println(customer2);
        System.out.println(customer3);

        Invoice invoice1 = new Invoice(101, customer1, 1000);
        Invoice invoice2 = new Invoice(102, customer2, 1500);
        Invoice invoice3 = new Invoice(103, customer3, 2000);

        System.out.println(invoice1);
        System.out.println(invoice2);
        System.out.println(invoice3);

        ArrayList<Invoice> invoiceList = new ArrayList<>();
        invoiceList.add(invoice1);
        invoiceList.add(invoice2);
        invoiceList.add(invoice3);

        return invoiceList;
    }

}
