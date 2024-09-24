package com.example.customerinvoiceapi.service;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.customerinvoiceapi.model.Customer;
import com.example.customerinvoiceapi.model.Invoice;

@Service
public class InvoiceService {
    @Autowired
    private CustomerService customerService;

    private ArrayList<Invoice> invoices = new ArrayList<>();

    public InvoiceService(CustomerService _customerService) {
        this.customerService = _customerService;

        Customer customer1 = customerService.getCustomerById(1);
        Customer customer2 = customerService.getCustomerById(2);
        Customer customer3 = customerService.getCustomerById(3);

        Invoice invoice1 = new Invoice(101, customer1, 1000.00);
        Invoice invoice2 = new Invoice(102, customer2, 1500.00);
        Invoice invoice3 = new Invoice(103, customer3, 500.00);

        invoices.addAll(Arrays.asList(invoice1, invoice2, invoice3));
    }

    public ArrayList<Invoice> getInvoices() {
        return invoices;
    }
}
