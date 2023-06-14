$('#submitButton').on('click', function(){
    let submittable = true;
    if(!$('#displayName').val()){
        $('#warningName').addClass('redColor');
        submittable = false;
    }else{$('#warningName').removeClass('redColor');}
    if(!$('#comment').val()){
        $('#warningText').addClass('redColor');
        submittable = false;
    }else{$('#warningText').removeClass('redColor');}
    if(submittable){
        $('#content').prepend(
            '<div id="message"><div id="messageData"><p>'+$('#displayName').val()+'</p><div id="edit">edit</div><div id="delete">delete</div></div><h2>'+$('#comment').val()+'</h2></div>'
            );
    }
})

$('#content').on('click', '#delete', function(){
    let parents = $(this).parents()[1];
    $(parents).remove();
})

$('#content').on('click', '#edit', function(){
    let parents = $(this).parents()[1];
    let children = $(parents).children();
    let text= $(parents).children()[1];
    if(children.length < 3){
        $(parents).append(
            '<div id="editBar"><input id="editText" type="text" name="editText" value="'+$(text).html()+'"><input id="editSubmit" type="submit" name="submit"></div>'
        );
    }
})

$('#content').on('click', '#editSubmit', function(){
    let newText = $(this).prev();
    let parent = $(this).parents()[0];
    let oldText = $(parent).prev();

    $(oldText).text($(newText).val());

    $(parent).remove();
    //alert($(newText).val());
    //alert($(oldText).text());
})