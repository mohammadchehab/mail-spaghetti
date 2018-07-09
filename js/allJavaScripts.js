jQuery.noConflict();
jQuery(window).load(function () {

    jQuery(".userDropdown").click(function (event) {
        jQuery(".userDropdownListWrapper").slideDown("slow");
        event.stopPropagation();
    });

    jQuery(".userDropdownListWrapper").on("click", function (event) {
        event.stopPropagation();
    });

    jQuery(document).on("click", function (event) {
        jQuery(".userDropdownListWrapper").slideUp("slow");
    });

});

jQuery(document).ready(function () {
    
    //Tooltip
    jQuery('[data-toggle="tooltip"]').tooltip();

    //Tab

    jQuery(function () {
        jQuery("#tabs").tabs();
    });


    //Components Style

    jQuery(".ComponentsItem").mousedown(function () {
        jQuery(this).addClass("ComponentsItemActive");
        jQuery(".ComponentsItem").not(this).addClass("ComponentsItemNotActive");
    });
    jQuery(".ComponentsItem").mouseleave(function () {
        jQuery(this).removeClass("ComponentsItemActive");
        jQuery(".ComponentsItem").not(this).removeClass("ComponentsItemNotActive");
    });


    //Color Picker

    jQuery('#colorpicker').on('change', function () {
        jQuery('#hexcolor').val(this.value);
        jQuery('.EditSectionWrapper').css("background", jQuery(this).val());
    });
    jQuery('#hexcolor').on('change', function () {
        jQuery('#colorpicker').val(this.value);
    });

    jQuery('#fontcolorpicker').on('change', function () {
        jQuery('#fonthexcolor').val(this.value);
        jQuery('.EditSectionWrapper').css("color", jQuery(this).val());
    });
    jQuery('#fonthexcolor').on('change', function () {
        jQuery('#colorpicker').val(this.value);
    });


    //Font Family

    jQuery("#FontFamily").change(function () {
        jQuery('.EditSectionWrapper').css("font-family", jQuery(this).val());

    });

    //Font Size

    jQuery("#fontSize").change(function () {
        jQuery('.EditSectionWrapper').css("font-size", jQuery(this).val() + "px");
    });

    //Padding Page

    jQuery("#paddingRight").change(function () {
        jQuery('.EditSectionWrapper').css("padding-right", jQuery(this).val() + "px");
    });

    jQuery("#paddingLeft").change(function () {
        jQuery('.EditSectionWrapper').css("padding-left", jQuery(this).val() + "px");
    });
    jQuery("#paddingTop").change(function () {
        jQuery('.EditSectionWrapper').css("padding-top", jQuery(this).val() + "px");
    });
    jQuery("#paddingBottom").change(function () {
        jQuery('.EditSectionWrapper').css("padding-bottom", jQuery(this).val() + "px");
    });

    jQuery("#deleteDragme").click(function() {
        jQuery(this).siblings(".dragme").hide();
    });
    
});