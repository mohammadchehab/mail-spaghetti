jQuery.noConflict();
jQuery(document).ready(function () {

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

    //Tooltip
    jQuery('[data-toggle="tooltip"]').tooltip();

    //Tab

    jQuery("#tabs").tabs();

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
        jQuery('.EditSectionWrapper .StackedList').css("background", jQuery(this).val());
    });

    jQuery('#hexcolor').on('change', function () {
        jQuery('#colorpicker').val(this.value);
    });

    jQuery('#fontcolorpicker').on('change', function () {
        jQuery('#fonthexcolor').val(this.value);
        jQuery('.EditSectionWrapper .StackedList').css("color", jQuery(this).val());
    });

    jQuery('#fonthexcolor').on('change', function () {
        jQuery('#colorpicker').val(this.value);
    });

    //Font Family

    jQuery("#FontFamily").change(function () {
        jQuery('.EditSectionWrapper .StackedList').css("font-family", jQuery(this).val());

    });

    //Font Size

    jQuery("#fontSize").change(function () {
        jQuery('.EditSectionWrapper .StackedList').css("font-size", jQuery(this).val() + "px");
    });

    //Padding Page

    jQuery("#paddingRight").change(function () {
        jQuery('.EditSectionWrapper .StackedList').css("padding-right", jQuery(this).val() + "px");
    });

    jQuery("#paddingLeft").change(function () {
        jQuery('.EditSectionWrapper .StackedList').css("padding-left", jQuery(this).val() + "px");
    });

    jQuery("#paddingTop").change(function () {
        jQuery('.EditSectionWrapper .StackedList').css("padding-top", jQuery(this).val() + "px");
    });

    jQuery("#paddingBottom").change(function () {
        jQuery('.EditSectionWrapper .StackedList').css("padding-bottom", jQuery(this).val() + "px");
    });

    jQuery("#deleteDragme").click(function () {
        jQuery(this).siblings(".dragme").hide();
    });


    //TEMPLATE CHOOSE
    jQuery(".paragraphTemp1").click(function () {
        jQuery('.EditSectionWrapper').append('<table cellpadding="0" cellspacing="0" width="600"><thead><tr><td class="sortable" id="bt-head"></td></tr></thead><tbody><tr><td class="sortable" id="bt-body"></td></tr></tbody><tfoot><tr><td class="sortable" id="bt-footer"></td></tr></tfoot></table>');
        jQuery('.dashboard').fadeOut();
        jQuery('.editTemplate .PageTitle h2').text("Paragraph Template-1");
        jQuery('.basic.Components').hide();
        jQuery('.bacsicComTitle').hide();
        jQuery('.templateGallery').fadeOut();
        jQuery('.editTemplate').delay(500).fadeIn();
    });

    jQuery(".paragraphTemp2").click(function () {
        jQuery('.EditSectionWrapper').append('<table cellpadding="0" cellspacing="0" width="600"><thead><tr><td colspan="3" class="sortable" id="bt-head"></td></tr></thead><tbody><tr><td width="33.33%" class="sortable" id="bt-3col-side-left"></td><td  width="33.33%"class="sortable" id="bt-3col-side-center"></td><td width="33.33%" class="sortable" id="bt-3col-side-right"></td></tr><tr><td colspan="3" class="sortable" id="bt-body"></td></tr></tbody><tfoot><tr><td colspan="3" class="sortable" id="bt-footer"></td></tr></tfoot></table>');
        jQuery('.editTemplate .PageTitle h2').text("Paragraph Template-2");
        jQuery('.dashboard').fadeOut();
        jQuery('.basic.Components').hide();
        jQuery('.bacsicComTitle').hide();
        jQuery('.templateGallery').fadeOut();
        jQuery('.editTemplate').delay(500).fadeIn();
    });

    jQuery('.delete').prepend('<div class="removeBtn"><button>X</button></div>');

});
