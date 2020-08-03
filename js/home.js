function changeInputType()
{
    if($('#iconeOlho').is(':password')){
        $("#iconeOlho").prop("type", "text");
    }else{
        $("#iconeOlho").prop("type", "password");
    }
}