$(document).ready(function(){
    function runSearch(term) {
        if (!term) {
            window.open(
                `https://scite.ai/search/citations?utm_campaign=cs_landing_page&utm_medium=generic&utm_source=cs_landing_page`
            );
        } else {
            window.open(
                `https://scite.ai/search/citations?q=${term}&utm_campaign=cs_landing_page&utm_medium=generic&utm_source=cs_landing_page`
            );
        }
    }

    $('input').bind("enterKey",function(e){
        e.preventDefault()
        runSearch(e.target.value)
    });

    $('input').keyup(function(e) {
        if(e.keyCode == 13) {
            $(this).trigger("enterKey");
        }
    });

    $('#top-search-icon').click(function(e) {
        runSearch($('#top-search-input').val())
    });

    $('#bottom-search-icon').click(function(e) {
        runSearch($('#bottom-search-input').val())
    });
});
