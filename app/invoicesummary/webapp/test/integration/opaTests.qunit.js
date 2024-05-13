sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'invoicesummary/test/integration/FirstJourney',
		'invoicesummary/test/integration/pages/InvoiceList',
		'invoicesummary/test/integration/pages/InvoiceObjectPage'
    ],
    function(JourneyRunner, opaJourney, InvoiceList, InvoiceObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('invoicesummary') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheInvoiceList: InvoiceList,
					onTheInvoiceObjectPage: InvoiceObjectPage
                }
            },
            opaJourney.run
        );
    }
);