
// Create Button
$(document).ready(function () {
    $("#create").click(function () {
        $("#blogShow").hide();
        $("#form").show();
        $("#btnUpdate").hide();
        $("#btnPost").show();
    });
});

// Document Load
$(document).ready(function () {
    $("#blogShow").show();
    var retrievedData = localStorage.getItem("blogAlldata");
    var allData = JSON.parse(retrievedData);
    if (retrievedData !== null) {
        $("#noBlogError").hide();
        $("#mainBlogPost").show();
        for (i = 0; i <= allData.length; i++) {
            var finalPostData = `<div class="blogPost">
            <div class="blogHeadingAndEdit">
                <div class="blogPostTitle">
                    <h5>${allData[i].titleOfContent}</h5>
                    <div class="blogEditButton">
                    <button type="button" class="btn btn-danger editPost" id="editPost${i}">
                        <i class="fa fa-edit"></i>
                    </button>
                </div>
                </div>
                
                </div>
                <div class="blogContent">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${allData[i].content}
                </div>
            </div>`;
            $("#mainBlogPost").append(finalPostData);
        }
    }
    else {
        $("#noBlogError").show();
        $("#mainBlogPost").hide();
    }
});

// Post Button
$(document).ready(function () {
    $("#btnPost").click(function () {
        var titles = $("#postTitle").val();
        var content = $("#postContent").val();
        if (titles === null || titles === undefined || titles === "") {
            alert("Post Title is Mandatoty");
        }
        else if (content === null || content === undefined || content === "") {
            alert("Post Content is Mandatoty");
        }
        else if (content.length < 50) {
            alert("Post Content should have minumum 50 characters");
        }
        else {
            var postData = JSON.parse(localStorage.getItem("blogAlldata"));
            var data = {
                "titleOfContent": titles,
                "content": content
            }
            if (postData === null) {
                var postData = [];
                postData.push(data);
                localStorage.setItem("blogAlldata", JSON.stringify(postData));
            }
            else {
                postData.push(data);
                localStorage.setItem("blogAlldata", JSON.stringify(postData));
            }
            window.location.href = "index.html";
        }
    });
});


// Edit Button
var globalId;
$(document).ready(function () {
    $(".editPost").click(function (event) {
        var editObject = event.target.id;
        var editObjectId = editObject.charAt('8');
        var editObjectIdNumber = Number(editObjectId);
        globalId = editObjectIdNumber;
        /// alert(editObjectIdNumber);
        $("#blogShow").hide();
        $("#form").show();
        $("#btnUpdate").show();
        $("#btnPost").hide();
        var specificRecordToUpdate = JSON.parse(localStorage.getItem("blogAlldata"));
        var editIdTitle = specificRecordToUpdate[editObjectIdNumber].titleOfContent;
        var editIdContent = specificRecordToUpdate[editObjectIdNumber].content;
        $("#postTitle").val(editIdTitle);
        $("#postContent").val(editIdContent);
    });
});

// Post Button
$(document).ready(function () {
    $("#btnUpdate").click(function () {
        var titles = $("#postTitle").val();
        var content = $("#postContent").val();
        if (titles === null || titles === undefined || titles === "") {
            alert("Post Title is Mandatoty");
        }
        else if (content === null || content === undefined || content === "") {
            alert("Post Content is Mandatoty");
        }
        else if (content.length < 50) {
            alert("Post Content should have minumum 50 characters");
        }
        else {
            var titles = $("#postTitle").val();
            var content = $("#postContent").val();
            var updateData = JSON.parse(localStorage.getItem("blogAlldata"));
            var updatedRecord = updateData;
            updatedRecord[globalId].titleOfContent = titles;
            updatedRecord[globalId].content = content;
            localStorage.setItem("blogAlldata", JSON.stringify(updatedRecord));
            window.location.href = "index.html";
        }

        //Type your code here
        function operations() {

            var arr = [];
            var prod1 = { "lblOne": "one" };
            var prod2 = { "lbltwo": "two" };
            arr.push(prod1);
            arr.push(prod2);
            frmCluster.segCluster.setData(arr);
        }

    });
});

// Cancel Button
$(document).ready(function () {
    $("#btnCancel").click(function () {
        $("#blogShow").show();
        $("#form").hide();
    });
});