import React, { useEffect } from 'react';
import $ from 'jquery';

const ScriptTags = () => {
    useEffect(() => {
        // Bootstrap
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = 'bootstrap/js/bootstrap.min.js';
        document.body.appendChild(bootstrapScript);

        // Easy pie chart
        const easyPieChartScript = document.createElement('script');
        easyPieChartScript.src = 'vendors/easypiechart/jquery.easy-pie-chart.js';
        document.body.appendChild(easyPieChartScript);

        // Additional scripts
        const additionalScript = document.createElement('script');
        additionalScript.src = 'assets/scripts.js';
        document.body.appendChild(additionalScript);

        // Easy pie charts initialization
        $(function() {
            $('.chart').easyPieChart({ animate: 1000 });
        });

        // DataTables
        const dataTablesScript = document.createElement('script');
        dataTablesScript.src = 'vendors/datatables/js/jquery.dataTables.min.js';
        document.body.appendChild(dataTablesScript);

        const dtBootstrapScript = document.createElement('script');
        dtBootstrapScript.src = 'assets/DT_bootstrap.js';
        document.body.appendChild(dtBootstrapScript);

        // jGrowl notifications
        $(function() {
            $('.tooltip').tooltip();	
            $('.tooltip-left').tooltip({ placement: 'left' });	
            $('.tooltip-right').tooltip({ placement: 'right' });	
            $('.tooltip-top').tooltip({ placement: 'top' });	
            $('.tooltip-bottom').tooltip({ placement: 'bottom' });
            $('.popover-left').popover({placement: 'left', trigger: 'hover'});
            $('.popover-right').popover({placement: 'right', trigger: 'hover'});
            $('.popover-top').popover({placement: 'top', trigger: 'hover'});
            $('.popover-bottom').popover({placement: 'bottom', trigger: 'hover'});
            $('.notification').click(function() {
                var $id = $(this).attr('id');
                switch($id) {
                    case 'notification-sticky':
                        $.jGrowl("Stick this!", { sticky: true });
                        break;
                    case 'notification-header':
                        $.jGrowl("A message with a header", { header: 'Important' });
                        break;
                    default:
                        $.jGrowl("Hello world!");
                        break;
                }
            });
        });

        // Additional CSS files
        const datePickerLink = document.createElement('link');
        datePickerLink.rel = 'stylesheet';
        datePickerLink.href = 'vendors/datepicker.css';
        document.head.appendChild(datePickerLink);

        const uniformDefaultLink = document.createElement('link');
        uniformDefaultLink.rel = 'stylesheet';
        uniformDefaultLink.href = 'vendors/uniform.default.css';
        document.head.appendChild(uniformDefaultLink);

        const chosenMinLink = document.createElement('link');
        chosenMinLink.rel = 'stylesheet';
        chosenMinLink.href = 'vendors/chosen.min.css';
        document.head.appendChild(chosenMinLink);

        // Additional JavaScript files
        const jqueryUniformScript = document.createElement('script');
        jqueryUniformScript.src = 'vendors/jquery.uniform.min.js';
        document.body.appendChild(jqueryUniformScript);

        const chosenJqueryScript = document.createElement('script');
        chosenJqueryScript.src = 'vendors/chosen.jquery.min.js';
        document.body.appendChild(chosenJqueryScript);

        const bootstrapDatePickerScript = document.createElement('script');
        bootstrapDatePickerScript.src = 'vendors/bootstrap-datepicker.js';
        document.body.appendChild(bootstrapDatePickerScript);

        // Additional JavaScript initialization
        $(function() {
            $(".datepicker").datepicker();
            $(".uniform_on").uniform();
            $(".chzn-select").chosen();       
            $('#rootwizard .finish').click(function() {
                alert('Finished!, Starting over!');
                $('#rootwizard').find("a[href*='tab1']").trigger('click');
            });
        });
        
        return () => {
            // Cleanup code if needed
        };
    }, []);

    return null;
};

export default ScriptTags;
