package com.example.demo.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.InvoiceItem;

@RestController
public class InvoiceItemController {
    @GetMapping("/invoices")

    public ArrayList<InvoiceItem> getInvoiceItems() {
        InvoiceItem item1 = new InvoiceItem("1", "Laptop", 2, 999.99);
        InvoiceItem item2 = new InvoiceItem("2", "Mouse", 5, 25.50);
        InvoiceItem item3 = new InvoiceItem("3", "Keyboard", 3, 75.00);

        System.out.println(item1);
        System.out.println(item2);
        System.out.println(item3);

        ArrayList<InvoiceItem> invoiceItems = new ArrayList<>();
        invoiceItems.add(item1);
        invoiceItems.add(item2);
        invoiceItems.add(item3);

        return invoiceItems;
    }
}
