
let preSearch = "https://www.google.com/search?q=";
let postSearch = "&sxsrf=ALeKk00WFEIkLZ6vI2gFyE20YWefCqXoQg%3A1617901196816&ei=jDZvYM2tMYe7wAP85YH4Aw&oq=tự+động+input+search+google+bằng+string+cho+trước&gs_lcp=Cgdnd3Mtd2l6EAM6BAgjECc6BAgAEEM6CggAELEDEIMBEEM6CAgAELEDEIMBOgYIIxAnEBM6AggAOgUILhCxAzoCCC46BQgAELEDOgUIABDLAToCCCY6CAgAEBYQChAeOgYIABAWEB46BQguEJMCUNkoWOWVAWDGlwFoE3ACeAKAAaUBiAG1P5IBBDYuNjSYAQCgAQGqAQdnd3Mtd2l6wAEB&sclient=gws-wiz&ved=0ahUKEwjNo_jQj-_vAhWHHXAKHfxyAD8Q4dUDCA0&uact=5";

$("input:text").change(function() {
    var value=$("input:text").val();
});
function searchKeywords(){
    let kwds = document.getElementById("input-search").value;
    if (kwds !==""){
        let searchWords = preSearch+kwds+postSearch;
        location.href=searchWords;
    }
}

function searchDoodle(){
    location.href="https://www.google.com/doodles";
}