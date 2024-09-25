package com.example.customerinvoiceapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.customerinvoiceapi.model.Invoice;
import com.example.customerinvoiceapi.service.InvoiceService;

@RestController
@CrossOrigin

public class InvoiceController {
    @Autowired
    private InvoiceService invoiceService;

    @GetMapping("/invoices/{invoiceId}")
    public Invoice getInvoice(@PathVariable int invoiceId) {
        return invoiceService.getInvoiceByIndex(invoiceId);
    }

}
