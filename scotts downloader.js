var doc;
$.getScript("https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.debug.js", function() {

    console.log("Script loaded but not necessarily executed.");
    doc = new jsPDF();
});

var sauce = $("#DataGridArea")[0];
var specialElementHandlers = {
    // element with id of "bypass" - jQuery style selector
    '#bypassme': function(element, renderer) {
        // true = "handled elsewhere, bypass text extraction"
        return true
    }
};
margins = {
    top: 10,
    bottom: 10,
    left: 25,
    width: 250
};

doc.fromHTML(
    sauce, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
    },
    function(dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        doc.save('Test.pdf');
    }, margins);
