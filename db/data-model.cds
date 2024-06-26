namespace my.bookshop;

// entity Books {
//   key ID : Integer;
//   title  : String;
//   stock  : Integer;
// }

entity SearchOverview {
    name  : String;
    value : Integer;
}

entity MasterCompanyCode {
    id          : Integer;
    code        : String;
    master_name : String;
    description : String;
}

entity InvoiceObj {
        adjustment            : String;
        amount                : String;
        app_comment           : String;
        approver_comments     : String;
        approver_id           : String;
        approvers             : String;
        baseline_date         : String;
        business_area         : String;
        cgst_tot_amt          : String;
        company_code          : String;
        cost_center           : String;
        country               : String;
        currency              : String;
        department_id         : String;
        department_name       : String;
        discount_per          : String;
        doc_type_desc         : String;
        document_type         : String;
        from_supplier         : String;
        gl_account            : String;
        gstin                 : String;
        igst_tot_amt          : String;
        in_status             : String;
        internal_order        : String;
        invoice_date          : String;
    key invoice_no            : Integer;
        irn                   : String;
        is_igst               : String;
        modified_date         : String;
        npo                   : String;
        payment_method        : String;
        payment_terms         : String;
        posting_date          : String;
        ref_po_num            : String;
        sap_invoice_no        : String;
        sgst_tot_amt          : String;
        supplier_comments     : String;
        supplier_id           : String;
        supplier_name         : String;
        tax_per               : String;
        taxable_amount        : String;
        tcs                   : String;
        tds_per               : String;
        tds_tot_amt           : String;
        total_discount_amount : String;
        user_invoice_id       : String;
        file_link             : LargeString;
        parent                : Association to Invoice;

}


entity Invoice {
    key invoice_no          : Integer; // Assuming "invoice_no" is unique identifier
        amount              : String;
        amount_overdue      : String;
        company_code        : String;
        currency            : String;
        days_overdue        : String;
        days_to_due         : String;
        document_status     : String;
        document_type       : String;
        due_date            : String;
        end_date            : String;
        end_time            : String;
        entry_date          : String;
        entry_time          : String;
        invoice_date        : String;
        npo_flag            : String;
        number_of_approvers : String;
        overdue_flag        : String;
        payment_status      : String;
        payment_terms       : String;
        process_duration    : String;
        reason_text         : String;
        ref_po_num          : String;
        update_date         : String;
        update_time         : String;
        user_processing     : String;
        vendor_name         : String;
        vendor_no           : String;
        // adjustment            : String;
        // app_comment           : String;
        // approver_comments     : String;
        // approver_id           : String;
        // baseline_date         : String;
        // business_area         : String;
        // cgst_tot_amt          : String;
        // cost_center           : String;
        // country               : String;
        // department_id         : String;
        // department_name       : String;
        // discount_per          : String;
        // doc_type_desc         : String;
        // from_supplier         : String;
        // gl_account            : String;
        // gstin                 : String;
        // igst_tot_amt          : String;
        // in_status             : String;
        // internal_order        : String;
        // irn                   : String;
        // is_igst               : String;
        // modified_date         : String;
        // npo                   : String;
        // payment_method        : String;
        // posting_date          : String;
        // sap_invoice_no        : String;
        // sgst_tot_amt          : String;
        // supplier_comments     : String;
        // supplier_id           : String;
        // supplier_name         : String;
        // tax_per               : String;
        // taxable_amount        : String;
        // tcs                   : String;
        // tds_per               : String;
        // tds_tot_amt           : String;
        // total_discount_amount : String;
        // user_invoice_id       : String;
        // file_link             : LargeString;
        ovrdueflag          : Integer;
        invoice_obj         : Association to one InvoiceObj
                                  on invoice_obj.invoice_no = invoice_no;
        invoice_child_items : Composition of many Invoice_child_items
                                  on invoice_child_items.invoice_no = invoice_no;
        approvers           : Composition of many Approvers
                                  on approvers.invoice_no = invoice_no;
        inner_approvers     : Composition of many InvoiceApprover
                                  on inner_approvers.invoice_no = invoice_no;
}

entity Invoice_child_items {
    key invoice_no       : Integer;
        amount           : String;
        amt_per_unit     : String;
        cgst_amount      : String;
        cgst_per         : String;
        cost_center      : String;
        currency         : String;
        discount         : String;
        discount_amount  : String;
        ebelp            : String;
        gl_account       : String;
        gross_amount     : String;
        gst_per          : String;
        gst_amt          : String;
        hsn_code         : String;
        igst_amount      : String;
        igst_per         : String;
    key item_no          : String;
        material         : String;
        material_desc    : String;
        ocr_matched      : String;
        plant            : String;
        qc_check         : String;
        quantity         : String;
        ref_po_no        : String;
        sgst_amount      : String;
        sgst_per         : String;
        tax_code         : String;
        tax_value_amount : String;
        taxable_amount   : String;
        total_amt_item   : String;
        unit             : String;
        invoice          : Association to one Invoice
                               on invoice.invoice_no = invoice_no;

}

entity InvoiceApprover {
    key member_id     : String;
    key invoice_no    : Integer;
        approved_date : String;
        member_name   : String;
        invoice       : Association to one Invoice
                            on invoice.invoice_no = invoice_no;
}

entity Approvers {
    key invoice_no : Integer;
    key approver   : String;
        isapproved : String;
        isgroup    : String;
        level      : String;
        name       : String;
        toInvoice  : Association to one Invoice;
}

entity Invoice_overviewchart_1 {
    chartDimension : String
    @Analytics.Dimension;
    chartMeasure   : Integer
    @Aggregation.default: #SUM
    @Analytics.Measure;
}

annotate Invoice_overviewchart_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

entity AccountPayable_1 {
    chartDimension : String
    @Analytics.Dimension;
    chartMeasure   : Decimal(15, 2)
    @Aggregation.default: #SUM
    @Analytics.Measure;
}

annotate AccountPayable_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};


//Liability
entity Liability {
    key id                              : String;
        vendor_no                       : String;
        company_code                    : String;
        currency                        : String;
        overdue_flag                    : String;
        total_amount                    : String;
        total_amt_paid                  : String;
        total_due_amount                : String;
        total_no_of_invoice             : String;
        total_no_of_invoice_due         : String;
        total_no_of_invoice_due_crossed : String;
        total_no_of_invoice_paid        : String;
        total_no_of_paid_invoice        : String;
        total_over_due_amount           : String;
        total_paid_amount               : String;
        vendor_name                     : String;
}

entity Tableyears {
    key year : String;
}


entity LiabilityBasedOnAmount_1 {
    key id             : String;
        chartDimension : String
                                @Analytics.Dimension;
        chartMeasure   : Decimal(15, 2)
                                @Analytics.Measure;
        years          : String @Common.FilterDefaultValue: '2023'
                                @Analytics.Dimension
                                @Search.defaultSearchElement;
// table : Association to one Tableyears;
}


annotate LiabilityBasedOnAmount_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

entity TotalAccountsPayable_1 {
    key id             : String;
        chartDimension : String
                                 @Analytics.Dimension;
        chartMeasure   : Decimal(15, 2) default 0.00
                                 @Analytics.Measure;
        years          : String  @Common.FilterDefaultValue: '2023'  @Search.defaultSearchElement;
}

annotate TotalAccountsPayable_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

entity VendorLiabilityReportforCompanyCode_1 {
    key id               : String;
        due_amount       : Decimal(15, 2) @Common.Label             : 'Due Amount'
                                          @Analytics.Measure;
        overdue_amount   : Decimal(15, 2) @Common.Label             : 'Overdue Amount'
                                          @Analytics.Measure;
        processed_amount : Decimal(15, 2) @Common.Label             : 'Amount Paid'
                                          @Analytics.Measure;
        total_amount     : Decimal(15, 2) @Common.Label             : 'Total Amount'
                                          @Analytics.Measure;
        vendor_name      : String
                                          @Analytics.Dimension;
        vendor_no        : String;
        years            : String         @Common.FilterDefaultValue: '2023'  @Search.defaultSearchElement;
}

annotate VendorLiabilityReportforCompanyCode_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};


//Aging
entity Aging {
        amount_due         : String;
        date               : String;
        days_outstanding   : String;
        flag               : String;
        invoice_0_to_30    : String;
        invoice_31_to_60   : String;
        invoice_61_to_90   : String;
        invoice_91_or_more : String;
    key invoice_no         : String;
    key vendor_name        : String;
        vendor_no          : String;
        aging_agg          : Association to many Aging_aggregate
                                 on aging_agg.vendor_name = vendor_name;
}

entity Aging_aggregate {
    key id                 : String;
        invoice_0_to_30    : Integer  @Analytics.Measure  @Common.Label: '0-30 days';
        invoice_31_to_60   : Integer  @Analytics.Measure  @Common.Label: '31-60 days';
        invoice_61_to_90   : String   @Analytics.Measure  @Common.Label: '61-90 days';
        invoice_91_or_more : String   @Analytics.Measure  @Common.Label: '91 or more days';
        _61_to_90_days     : Integer  @Analytics.Measure  @Common.Label: '61-90 days';
        d_gt_90            : Integer  @Analytics.Measure  @Common.Label: '91 or more days';
        invoice_no         : String;
        vendor_name        : String   @Analytics.Dimension;
        vendor_no          : String   @Analytics.Dimension;
        parent             : Association to many Aging;
}

annotate Aging_aggregate with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

entity Aging_bsd_comp_1 {
    key cocd1000       : String  @Common.Label       : 'Company code'
                                 @Analytics.Dimension;
        _0_to_30_days  : Integer @Common.Label       : '0-30 days'
                                 @Aggregation.default: #SUM
                                 @Analytics.Measure;
        _31_to_60_days : Integer @Common.Label       : '31-60 days'
                                 @Aggregation.default: #SUM
                                 @Analytics.Measure;
        _61_to_90_days : Integer @Common.Label       : '61-90 days'
                                 @Aggregation.default: #SUM
                                 @Analytics.Measure;
        d_gt_90        : Integer @Common.Label       : '91 or more days'
                                 @Aggregation.default: #SUM
                                 @Analytics.Measure;
        company_code   : String;
}

annotate Aging_bsd_comp_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

//key process analytics

entity Processed_InProcessing_1 {
    progress : String
    @Analytics.Dimension;
    po       : Integer
    @Aggregation.default: #MIN
    @Analytics.Measure;
    npo      : Integer
    @Aggregation.default: #MIN
    @Analytics.Measure;
    _all     : Integer
    @Aggregation.default: #SUM
    @Analytics.Measure;
}

annotate Processed_InProcessing_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

entity Total_liabilities_1 {
    liabilities         : String
    @Analytics.Dimension;
    po                  : Integer
    @Aggregation.default: #SUM
    @Analytics.Measure;
    po_1                : String;
    npo                 : Integer
    @Aggregation.default: #SUM
    @Analytics.Measure;
    npo_1               : String;
    total_liabilities   : Integer
    @Aggregation.default: #SUM
    @Analytics.Measure;
    total_liabilities_1 : String;
}

entity Total_liabilities_2 {
    chartDimension : String
    @Analytics.Dimension;
    chartMeasure   : Integer
    @Aggregation.default: #SUM
    @Analytics.Measure;
}


annotate Total_liabilities_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

entity key_TotalAccountsPayable_1 {
    chartDimension : String
    @Analytics.Dimension;
    chartMeasure   : Decimal(15, 2)
    @Aggregation.default: #SUM
    @Analytics.Measure;
}

annotate key_TotalAccountsPayable_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

entity Vendors {
    vendor_code : String;
    vendor_name : String;
    sos         : String;
    amount      : String;
    currency    : String;
}

entity Vendorbasedonamount {

    bquat_name : String
    @Analytics.Dimension;
    cvendors   : String
    @Analytics.Dimension;
    amounts    : Decimal(15, 2)
    @Aggregation.default: #SUM
    @Analytics.Measure;
}

annotate Vendorbasedonamount with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

entity Oct_Nov_Dec {
    chartDimension : String
    @Analytics.Dimension;
    chartMeasure   : Decimal(15, 2)
    @Aggregation.default: #SUM
    @Analytics.Measure;

}

entity Jan_Feb_Mar {
    chartDimension : String
    @Analytics.Dimension;
    chartMeasure   : Decimal(15, 2)
    @Aggregation.default: #SUM
    @Analytics.Measure;

}

//Productivity

entity Productivity {
        approval_time   : String;
        approved        : String;
        avg_time        : String;
        cycle_time      : String;
        delegated       : String;
        inprocessing    : String;
        processing_time : String;
        rejected        : String;
        role            : String;
        total_processed : String;
        total_timespent : String;
    key userid          : String;

}

entity ProductivityReportOverview_1 {
    groupid  : Integer
    @Analytics.Dimension;
    invoices : Integer
    @Analytics.Measure;
    months   : String
    @Analytics.Dimension;
    name     : String;
    count    : Integer;
}

entity ProductivityReportOverviewdemo {
    finance_head : Integer @Common.Label: 'Finance Head'
                           @Analytics.Measure;
    cfo          : Integer @Common.Label: 'CFO'
                           @Analytics.Measure;
    months       : String
                           @Analytics.Dimension;
}

annotate ProductivityReportOverview_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

entity ProductivityReportOverview_2 {
    name            : String  @Analytics.Dimension;
    process_value   : Integer @Analytics.Measure;
    inprocess_value : Integer @Analytics.Measure;
}

annotate ProductivityReportOverview_2 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

// Overview Page
entity Overview_page {
    chartDimension : String
    @Analytics.Dimension;
    chartMeasure   : String
    @Aggregation.default: #SUM
    @Analytics.Measure;

}

entity Overview_page_1 {
    current_payable      : String;
    over_due_amount      : String;
    payable_by_today     : String;
    payable_within_7days : String;
    total_payable        : String;
    demo                 : String default ' ';
}

annotate Overview_page_1 with @Aggregation.ApplySupported: {
    $Type               : 'Aggregation.ApplySupportedType',
    PropertyRestrictions: true
};

entity MyTask {
    invoice_no : String;
    sup_name   : String;
    date       : String;
    amount     : String;
}

//Assignment Rules


entity main {
    key ID                    : UUID;
        assighnment_rule_name : String;
        // assignment_criteria: String;
        // condition : String;
        // amount :Integer;
        // currency :Integer;
        // amount_from : Integer;
        // amount_to :Integer @asser.range:{$value: amount_from,};
        comment               : String;
        rell1                 : Composition of many child1
                                    on rell1.ID = ID;
        rel12                 : Composition of many members
                                    on rel12.ID = ID;
}

entity child1 {
    key ID                    : UUID;
    key UUID                  : UUID;
        assighnment_rule_name : String;
        assignment_criteria   : String;
        condition             : String;
        code                  : String;
        amount                : Integer;
        currency              : String;
        amount_from           : Integer;
        amount_to             : Integer;
        child                 : Association to many main;
}

entity members {
    key ID          : UUID;
    key UUID        : UUID;
        id1         : String;
        is_group    : String;
        member_name : String;
        position    : String;
        child2      : Association to many main;
}

entity assignment_criteria_help {
    value2 : String;
}

entity condition_help {
    value  : String;
    value2 : String;
    code   : String;
}

entity currency_help {
    description : String;
    code        : String;
}

entity member_help {
    id1      : String;
    is_group : String;
    name     : String;
    position : String;

}

entity vendor_help {
    code        : String;
    description : String;
};

entity chart {
    key ID             : UUID;
        YourDimension1 : String;
        YourMeasure1   : Integer;
// Define additional fields as needed
}


entity age {
    key ID        : UUID;
        dimension : String;
        measure   : Integer;
        measure1 : Integer;
        none : Integer;
}
entity age1 {
    key ID        : UUID;
        dimension : String;
        measure   : Integer;
        measure1 : Integer;
        none : Integer;
        dimension2 : String;
}
entity liability_bar {
    key ID        : UUID;
        dimension : String;
        measure   : Integer;
        measure1 : Integer;
        measure2 : Integer;
        measure3 : Integer;
        
}

entity key_process
{
   key ID : UUID;
    dimension : String;
    measure : Integer;
    measure1 : Integer;
}

entity vendor_based_amt 
{
     key ID : UUID;
    dimension : String;
    measure : Integer;
}
entity vendor_based_amt2
{
     key ID : UUID;
    dimension : String;
    measure : Integer;
}

entity linechart
{
    key id : String;
    dimension : String;
    measure : Integer;
    measure1 : Integer;
    measure2 : Integer;
    measure3 : Integer;
}

entity productivity_bar
{
    key id : String;
    dimension : String;
    measure : Integer;
    measure1 : Integer;
}


entity Invoice1 {
    Invoice_No : String;
    Vendor_name : String;
    Vendor_No : String;
    Document_Type : String;
    Overdue_Flag : String;
    Invoice_Status : String;
    Amount : String;
    Invoice_Date : String;
    Due_Date : String;
    Payment_Terms : String;
    Days_to_Due : String;
    Ref_Po_No : String;
    Comp_Code : String;
    Ap_Processor : String;
    Approvers : String;
    Start_Date : String;
    End_Date : String;
    Process_Duration : String;
}

entity Aging_Overview_Comp_Code
{
    key CoCd : String;
    Day1 : String;
    Day2 : String;
    Day3 : String;
    Day4 : String;
}

entity Aging_Overview_Vendor
{
    key Vendor_No : String;
    Day1 : String;
    Day2 : String;
    Day3 : String;
    Day4 : String;
}

entity vendor {
    key vendor : String;
    invoice_no : String;
    Date : String;
    Amt_Due : String;
    days_outstanding : String;
    Day1 : String;
    Day2 : String;
    Day3 : String;
    Day4 : String
}

entity Liability_list
{
    key Vendor_no : String;
    vendor_name : String;
    comp_code : String;
    Total_no_of_invoice : String;
    Total_Amount : String;
    Total_no_of_Invoice_Due : String;
    Total_Due_Amount : String;
    Total_no_of_Invoice_OverDue : String;
    Total_Overdue_Amount : String;
    Total_No_of_Invoice_Posted : String;
    Total_amt_Posted : String;
}

//Key Processed Analytics Report list

entity key_process_analytics_processed
{
    key id : String;
    Progress : String;
    PO : String;
    NPO : String;
    None : String;
    al : String;
}

entity Total_liabilities
{
    key id : String;
    Liabilities : String;
    PO : String;
    NPO : String;
    None : String;
    Tot_Liabilities : String;
}

//Top 5 Vendors By Amount section in Key Process Analytics Report
entity List 
{
    key id : String;
    Vendor_Code : String;
    Vendor_name : String;
    Source_of_Supply : String;
    Amount : String;
    currency : String;
}

