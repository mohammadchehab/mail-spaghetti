jQuery.noConflict();
jQuery(document).ready(function () {
    'use strict';
    jQuery("#bt-head, #bt-body, #bt-footer, bt-3col-side-left, bt-3col-side-center, bt-3col-side-right").sortable({
        connectWith: '#bt-head, #bt-body, #bt-footer, bt-3col-side-left, bt-3col-side-center, bt-3col-side-right'
    });

    jQuery("#bt-head, #bt-body, #bt-footer, bt-3col-side-left, bt-3col-side-center, bt-3col-side-right").disableSelection();

    jQuery(".ComponentsItem").draggable({
        connectToSortable: "#bt-head, #bt-body, #bt-footer, bt-3col-side-left, bt-3col-side-center, bt-3col-side-right",
        containment: 'document',
        helper: "clone",
        revert: "invalid",
        tolerance: "pointer",
        scroll: false,
        aspectRatio: true,
        zIndex: 10000,
        revertDuration: 0
    });

    //basicTempHeader
    jQuery(".EditSectionWrapper").droppable({
        accept: ".basicTempHeader",
        drop: function (event, ui) {
            jQuery(this).append('<table cellpadding="0" cellspacing="0" width="600"><thead><tr><td class="sortable" id="bt-head"></td></tr></thead></table>');
            if (jQuery(".EditSectionWrapper").length === 1) {
                jQuery('.basicTempHeader').draggable({
                    disabled: true,
                    revert: "valed"
                });
            }
        }
    });

    //basicTempCenter
    jQuery(".EditSectionWrapper").droppable({
        accept: ".basicTempCenter",
        sortable: 'true',
        drop: function (event, ui) {
            jQuery(this).append('<table cellpadding="0" cellspacing="0" width="600"><tbody><tr><td class="sortable" id="bt-body"></td></tr></tbody></table>');
        }
    });

    //basicTempFooter
    jQuery(".EditSectionWrapper").droppable({
        accept: ".basicTempFooter",
        drop: function (event, ui) {
            jQuery(this).append('<table cellpadding="0" cellspacing="0" width="600"><tfoot><tr><td class="sortable" id="bt-footer"></td></tr></tfoot></table>');
            if (jQuery(".EditSectionWrapper").length === 1) {
                jQuery('.basicTempFooter').draggable({
                    disabled: true,
                    revert: "valed"
                });
            }
        }
    });
    
    //basicTempHeader
    jQuery(".EditSectionWrapper").droppable({
        accept: ".basicTempHeader",
        drop: function (event, ui) {
            jQuery(this).append('<table cellpadding="0" cellspacing="0" width="600"><tfoot><tr><td class="sortable" id="bt-head"></td></tr></tfoot></table>');
            if (jQuery(".EditSectionWrapper").length === 1) {
                jQuery('.basicTempHeader').draggable({
                    disabled: true,
                    revert: "valed"
                });
            }
        }
    });
    
    //Link BTN
    jQuery(".sortable").droppable({
        accept: ".linkBtn",
        drop: function (event, ui) {
            jQuery(this).append('<table class="delete" width="100%"><tr><td><a href="#" style="background: #0381f8; color: #fff; padding: 10px 25px; display: inline-block; border-radius: 4px; margin-top: 10px; margin-bottom: 10px;">Bacsic Link</a></td></tr></table>');
        }
    });

    //Link BTN
    jQuery(".sortable").droppable({
        accept: ".socialBtn",
        drop: function (event, ui) {
            jQuery(this).append('<table class="delete" width="100%"><tr><td>Social</td></tr></table>');
        }
    });

});