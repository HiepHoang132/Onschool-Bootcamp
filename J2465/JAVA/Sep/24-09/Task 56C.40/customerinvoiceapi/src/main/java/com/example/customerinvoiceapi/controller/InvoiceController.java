package com.example.customerinvoiceapi.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.customerinvoiceapi.model.Invoice;
import com.example.customerinvoiceapi.service.InvoiceService;

@RestController
public class InvoiceController {

    @Autowired
    private InvoiceService invoiceService;

    @GetMapping("/invoices")
    public ArrayList<Invoice> getInvoices() {
        return invoiceService.getInvoices();
    }
}
