$(document).ready(function(){

    $('#button').click(function (){
        $.get("https://api.github.com/users/rabingora001", displayName)
    });
    function displayName(data){
        console.log(data)
        $('#display_name').append(data.login);
    }
});