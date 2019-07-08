// $(document).ready(function () {
//     var session = JSON.parse(sessionStorage.getItem("loggedUserdata"));
//     if (!session) {
//         location.href = "index.html";
//     }
//     else{
//         location.href = "profile.html";
//     }
// });

$(document).ready(function () {
    // Get user details from server
    
    $("#loginSubmit").click(function(){
        var userName = $("#mail").val();
        var password = $("#password").val();
        var date = new Date();
        var activityData = JSON.parse(localStorage.getItem("logActivity"));
        var loggedOption = JSON.parse(localStorage.getItem("loggedUserdataLocal"));
        if(!loggedOption)
        {
            alert("Logged with github source");
            $.getJSON("https://dharanitharanui.github.io/fb-user-data/data.json", function (json) {
                for (let k = 0; k <= json.length; k++) {
                    if(userName === "" || userName === null){
                        $("#mail").addClass("errorBox");
                    }
                    else if(password === "" || password === null){
                        $("#mail").removeClass("errorBox");
                        $("#password").addClass("errorBox");
                    }
                    else if(userName === "" || userName === null && password === "" || password === null)
                    {
                        $("#mail").addClass("errorBox");
                        $("#password").addClass("errorBox");
                    }
                    else if(userName == json[k].email || userName == json[k].phonenumber && password == json[k].password)
                    {
                        // Set Activy log
                        var logDetail = {
                            "log_userId"     : json[k].userId,
                            "log_userName"   : json[k].first_name +' '+json[k].last_name,
                            "log_activity"   : "User Logged In",
                            "log_time"       : date
                        }
                        console.log(activityData);
                        if(activityData === null || activityData === undefined){
                            var activityData = [];
                            activityData.push(logDetail);
                            console.log(activityData);  
                            localStorage.setItem("logActivity", JSON.stringify(activityData));
                        }
                        else
                        {
                            activityData.push(logDetail);
                            console.log(activityData);  
                            localStorage.setItem("logActivity", JSON.stringify(activityData));
                        }
                        console.log(json[k]);
                        sessionStorage.setItem("loggedUserdata", JSON.stringify(json[k]));
                        localStorage.setItem("loggedUserdataLocal", JSON.stringify(json[k]));
                        location.href = "profile.html";
                        
                    }
                }
            });

        }
        else
        {      
                alert("Logged with Local storage");
                if(userName === "" || userName === null){
                    $("#mail").addClass("errorBox");
                }
                else if(password === "" || password === null){
                    $("#mail").removeClass("errorBox");
                    $("#password").addClass("errorBox");
                }
                else if(userName === "" || userName === null && password === "" || password === null)
                {
                    $("#mail").addClass("errorBox");
                    $("#password").addClass("errorBox");
                }
                else if(userName == loggedOption.email || userName == loggedOption.phonenumber && password == loggedOption.password)
                {
                     // Set Activy log
                     var logDetail = {
                        "log_userId"     : loggedOption.userId,
                        "log_userName"   : loggedOption.first_name +' '+loggedOption.last_name,
                        "log_activity"   : "User Logged In",
                        "log_time"       : date
                    }
                    console.log(activityData);
                    if(activityData === null || activityData === undefined){
                        var activityData = [];
                        activityData.push(logDetail);
                        console.log(activityData);  
                        localStorage.setItem("logActivity", JSON.stringify(activityData));
                    }
                    else
                    {
                        activityData.push(logDetail);
                        console.log(activityData);  
                        localStorage.setItem("logActivity", JSON.stringify(activityData));
                    }
                    sessionStorage.setItem("loggedUserdata", JSON.stringify(loggedOption));
                    localStorage.setItem("loggedUserdataLocal", JSON.stringify(loggedOption));
                    location.href = "profile.html";
                }
        }  
    });
});

