var posts = [];

var postObject = function (text, id) {
    let post = {
        text: text,
        id: id
    };
    posts.push(post);
};

$(".add-post").click(function () {
    postObject($(".form-control").val(), posts.length + 1);
    renderPost();
});

var renderPost = function () {
    $(".posts").find("p").remove();
    for (var i = 0; i < posts.length; i++) {
        $(".posts").append("<p class='post' id='post' data-id=" + i + "><button type='button' class='btn btn-primary remove' data-id=" + i + ">Remove post</button>" + posts[i].text + " " + "<form>Username:<input type='text' placeholder='user' id='user' data-id=" + i + ">Comment:<input type='text' placeholder='Add comment here' id='comment' data-id=" + i + "></form><button type='button' class='btn btn-danger comment' data-id=" + i + ">Post comment</button></p>")
    };
};

$(".posts").on("click", ".remove", function () {
    var position = $(this).attr("data-id");
    posts.splice(position, 1);
    renderPost();
})

$(".posts").on("click", ".comment", function(){
    var txt = document.getElementById("user").value;
    var txt2 = document.getElementById("comment").value;
   var txt3 = document.createTextNode('Username:' + txt + ' Comment:' + txt2);
   var par = document.createElement("p");
   par.appendChild(txt3);
   post.appendChild(par);
})



       


