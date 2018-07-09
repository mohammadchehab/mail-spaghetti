jQuery.noConflict();
jQuery(window).load(function () {

    jQuery("#sortable").sortable();
    jQuery("#sortable").disableSelection();

    jQuery(".basicTemp").draggable({
        containment: 'document',
        revert: "invalid",
        helper: "clone",
        cursor: "move"
    });

    jQuery(".EditSectionWrapper").droppable({
        accept: ".basicTemp",
        drop: function (event, ui) {
            var draggable = ui.draggable;
            var id = draggable.attr("id");
            jQuery(".EditSectionWrapper").append('<div><table><tr><td id="sortable"><div class="dragme"><div class="dragHoverEditWrapper"><div class="dragHoverEditBtnBox" id="deleteDragme"><img src="../images/bacsic_template/Delete.svg" alt=""></div><div class="dragHoverEditBtnBox" id="moveDragme"><img src="../images/bacsic_template/Move.svg" alt=""></div></div>Date</div><div class="dragme"><div class="dragHoverEditWrapper"><div class="dragHoverEditBtnBox" id="deleteDragme"><img src="../images/bacsic_template/Delete.svg" alt=""></div><div class="dragHoverEditBtnBox" id="moveDragme"><img src="../images/bacsic_template/Move.svg" alt=""></div></div>Dear Sir</div><div class="dragme"><div class="dragHoverEditWrapper"><div class="dragHoverEditBtnBox" id="deleteDragme"><img src="../images/bacsic_template/Delete.svg" alt=""></div><div class="dragHoverEditBtnBox" id="moveDragme"><img src="../images/bacsic_template/Move.svg" alt=""></div></div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ducimus, nobis? Dolorum vel, quod, consequatur nulla amet libero perferendis laborum culpa aliquam odio omnis ipsum eligendi neque qui sint cupiditate!</div><div class="dragme"><div class="dragHoverEditWrapper"><div class="dragHoverEditBtnBox" id="deleteDragme"><img src="../images/bacsic_template/Delete.svg" alt=""></div><div class="dragHoverEditBtnBox" id="moveDragme"><img src="../images/bacsic_template/Move.svg" alt=""></div></div>Thanks</div><div class="dragme"><div class="dragHoverEditWrapper"><div class="dragHoverEditBtnBox" id="deleteDragme"><img src="../images/bacsic_template/Delete.svg" alt=""></div><div class="dragHoverEditBtnBox" id="moveDragme"><img src="../images/bacsic_template/Move.svg" alt=""></div></div>Sender Name</div></td></tr></table></div>');
        }
    });

//    jQuery("#Header").draggable({
//        containment: 'document',
//        revert: "invalid",
//        helper: "clone",
//        cursor: "move"
//    });
//    //
//    jQuery(".EditSectionWrapper").droppable({
//        accept: "#Header",
//        drop: function (event, ui) {
//            var draggable = ui.draggable;
//            var id = draggable.attr("id");
//            jQuery(".EditSectionWrapper").append('<div><table><tr><td><img src="../images/bacsic_template/Logo.png"s alt=""></td></tr></table></div>');
//        }
//    });
//    //
//    jQuery("#footer").draggable({
//        containment: 'document',
//        revert: "invalid",
//        helper: "clone",
//        cursor: "move"
//    });
//
//    jQuery(".EditSectionWrapper").droppable({
//        accept: "#footer",
//        drop: function (event, ui) {
//            var draggable = ui.draggable;
//            var id = draggable.attr("id");
//            jQuery(".EditSectionWrapper").append('<div><table><tr><td>Footer</td></tr></table></div>');
//        }
//    });




});


