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
        $(".posts").append("<p class='post' data-id=" + i + "><button type='button' class='btn btn-primary remove' data-id=" + i + ">REMOVE</button>" + posts[i].text + " " + "</p>")
    };
};

$(".posts").on("click", ".remove", function () {
    var position = $(this).attr("data-id");
    posts.splice(position, 1);
    renderPost();
})






