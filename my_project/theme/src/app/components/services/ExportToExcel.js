(function() {
    'use strict';

    angular
        .module('minotaur')
        .factory('ExportToExcel', function($window, $timeout) {
            var uri = 'data:application/vnd.ms-excel;base64,',
                template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                base64 = function(s) { return $window.btoa(unescape(encodeURIComponent(s))); },
                format = function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) };
            return {
                export: function(tableID, filename) {

                    var table = $("#" + tableID);
                    var ctx = { worksheet: "sheet_name", table: table.html() };
                    var link = document.createElement("a");
                    document.body.appendChild(link);
                    link.download = filename + ".xls";
                    link.href = uri + base64(format(template, ctx));
                    $timeout(function() {
                        link.click();
                        document.body.removeChild(link);
                    }, 100);
                },
                export_div: function(divID, filename) {
                    var data = new Blob([document.getElementById(divID).innerHTML], {
                        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                    });
                    var a = document.createElement("a");
                    document.body.appendChild(a);
                    a.href = URL.createObjectURL(data);
                    a.download = filename + ".xls";
                    $timeout(function() {
                        a.click();
                        document.body.removeChild(a);
                    }, 100);
                }
            };
        });
})();

