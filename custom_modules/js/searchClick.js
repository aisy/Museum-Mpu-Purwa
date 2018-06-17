$('#searchSubmit').click(function(){
    var search_val = $('#searchInput').val();
    window.location.href = '../../search.html?search='+search_val;
});