$(document).ready(function(){
    // event to select shape, bg-color and border-color
    $('div.options span').click(function(){
        $(this).closest('div.options').find('span').removeClass('active');
        $(this).addClass('active');
        $('div.left-half').find('.selected-shape').attr('class', 'selected-shape');
        $('div.options').each(function(){
            const className = $(this).find('span.active').data('classname');
            $('div.left-half').find('.selected-shape').addClass(className);
        });
    });

    // event to clone final shape
    $('button').click(function(){
        var clonedElement = $('div.left-half').find('.selected-shape').clone();
        $('.right-half').find('.cloned-elements').append(clonedElement);
    });

    // event to clear right half div
    $('.clear').click(function(){
        $('div.right-half').find('.cloned-elements').html('');
    });
})