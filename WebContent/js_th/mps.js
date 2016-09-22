var saved = false;
var savedmpsno = -1;

function showEditForm(vmpsno) {
    formurl = baseurl + '/editform.php';
    
    $.get(formurl, { mpsno: vmpsno, isajax: false },
        function(data){
            $('#editformcontainer').html(data);    
            
            var windowWidth = $(window).width() 
            var windowHeight = $(window).height()  
            var popupHeight = $("#editformpopup").height();  
            var popupWidth = $("#editformpopup").width();  
            //centering  
            /*$("#editformpopup").css({  
                "top": windowHeight/2-popupHeight/2+$(window).scrollTop(),  
                "left": windowWidth/2-popupWidth/2+$(window).scrollLeft()  
            });*/
            
            $("#editformpopup").css({  
                "top": 80+$(window).scrollTop(),  
                "left": windowWidth/2-popupWidth/2+$(window).scrollLeft()  
            }); 
             
            $('#editformpopup').fadeIn();
        });
   
    return false;
}

function closeEditForm() {
    $('#editformpopup').fadeOut();
    $('#editformcontainer').html('');
    
    if( saved == true ) {
        loadMPRow();
        saved = false;
    }
        
    return false;
}

function saveEditForm() {
    formurl = baseurl + '/savemp.php';
    saved = false;
    $.post(formurl, $('#editform').serialize(),
        function(data){
            if( data == 'Failed')
                alert("Save Failed!");
            else {
                saved = true;
                savedmpsno = $('input[name=mpsno]').val();
                closeEditForm();
            }
        });
    return false;
}

function saveEditFinForm() {
    formurl = baseurl + '/savemp.php';
    saved = false;
    $.post(formurl, $('#editfinform').serialize(),
        function(data){
            if( data == 'Failed')
                alert("Save Failed!");
            else {
                saved = true;
                savedmpsno = $('input[name=mpsno]').val();
                closeEditForm();
            }
        });
    return false;
}

function selectEditForm(formname) {
    if( formname == 'profile' ) {
        $("#showFinanceForm").removeClass('sel');
        $("#editfinform").hide();
        
        $("#showProfileForm").addClass('sel');
        $("#editform").show();
    } else {
        $("#showProfileForm").removeClass('sel');
        $("#editform").hide();
        
        $("#showFinanceForm").addClass('sel');
        $("#editfinform").show();
    }
    
    return false;
}

function showForm(vformtype, vmpsno, id) {
    formurl = baseurl + '/mpforms.php';
    
    $.get(formurl, { mpsno: vmpsno, formtype: vformtype },
        function(data){
            $(id).html(data);
        });
   
    return false;
}

function saveForm(id, cid) {
    formurl = baseurl + '/savemp.php';
    saved = false;
    $.post(formurl, $(id).serialize(),
        function(data){
            if( data == 'Failed')
                alert("Save Failed!");
            else {
                $(cid).html(data);
            }
        });
    return false;
}


function loadMPRow() {
    rowurl = baseurl + '/mprow.php';
    $.get(rowurl, {"mpsno":savedmpsno}, function(data) {
        rowindex = $('#mp' + savedmpsno + " .rowindex").html();
        $('#mp' + savedmpsno).html(data);
        $('#mp' + savedmpsno + " .rowindex").html(rowindex);
        
        $('#mp' + savedmpsno + ' .mpinfo .info').slideDown();    
        $('#mp' + savedmpsno).css('background', '#fff');
    });
}

function addMPFinanceRow() {
    rowurl = baseurl + '/mpfinrow.php';
    rows = parseInt($('input[name=rows]').val()) + 1;
    $.get(rowurl, {"rows":rows}, function(data) {
        $('#editfinform table tbody').append(data);
        $('input[name=rows]').val(rows);
    });
    
    return false;
}  

function toggleMPInfo(mpsno) {
    $('#mp' + mpsno + ' .mpinfo .info').slideToggle();
    return false;
}

function toggleAllMPInfo() {
    $('.mpinfo .info').slideToggle();
    
    if( $("#viewall").html() == 'View:' )
        $("#viewall").html('Hide:');
    else
        $("#viewall").html('View:');
        
    return false;
}

function initBubble() {
    $(".showBubble").bind('mouseover', function(){
        d = $(this).attr('data-title');
        $('<div class="infoBubble">' + d + '</div>').appendTo($(this));
        $('.infoBubble', $(this)).fadeIn();
    });
    
    $(".showBubble").bind('mouseout', function(){
        $('.infoBubble', $(this)).fadeOut(function(){
            $(this).remove();
        });
    });
}