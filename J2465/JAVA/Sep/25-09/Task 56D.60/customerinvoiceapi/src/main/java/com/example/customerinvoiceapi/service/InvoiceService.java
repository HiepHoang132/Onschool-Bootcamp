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

        Customer customer1 = customerService.getCustomerById(101);
        Customer customer2 = customerService.getCustomerById(102);
        Customer customer3 = customerService.getCustomerById(103);

        Invoice invoice1 = new Invoice(201, customer1, 500.00);
        Invoice invoice2 = new Invoice(202, customer2, 750.00);
        Invoice invoice3 = new Invoice(203, customer3, 1200.00);

        invoices.addAll(Arrays.asList(invoice1, invoice2, invoice3));
    }

    public Invoice getInvoiceByIndex(int index) {
        if (index >= 0 && index < invoices.size()) {
            return invoices.get(index);
        }
        return null;
    }
}
