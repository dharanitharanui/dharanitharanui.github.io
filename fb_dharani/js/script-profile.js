
var localUserDetails;

$(document).ready(function () {
    var session = JSON.parse(sessionStorage.getItem("loggedUserdata"));
    if (!session) {
        location.href = "index.html";
    }
    setAllPlace();
});

function setAllPlace(){
    //alert("Set all value");
    var local = JSON.parse(localStorage.getItem("loggedUserdataLocal"));
    localUserDetails=local;
    $("#headerName").text(localUserDetails.first_name); 
    $(".profileSearch").val(localUserDetails.first_name+' '+localUserDetails.last_name);
    $("#coverName").text(localUserDetails.first_name+' '+localUserDetails.last_name);
    $("#introName").text(localUserDetails.first_name+' '+localUserDetails.last_name);
    $(".postHeaderName").text(localUserDetails.first_name+' '+localUserDetails.last_name);
    $("#role").text(localUserDetails.role);
    $("#organization").text(localUserDetails.Organization);
    $("#college").text(localUserDetails.College);
    $("#school").text(localUserDetails.School);
    $("#currentCity").text(localUserDetails.address[0].current_city);
    $("#currentState").text(localUserDetails.address[0].state);
    $("#country").text(localUserDetails.address[0].country);
    $("#birthCity").text(localUserDetails.address[0].birth_city);
}

function setValuesToOverview(){
    //alert("Set Value overview");
    $("#detailsFirstName").text(localUserDetails.first_name);
    $("#detailsLastName").text(localUserDetails.last_name); 
    $("#detailsContact").text(localUserDetails.phonenumber); 
    $("#detailsEmail").text(localUserDetails.email); 
    $("#detailsBirthDay").text(localUserDetails.dob); 
    $("#detailsBirthCity").text(localUserDetails.address[0].birth_city); 
    $("#detailsCurrentCty").text(localUserDetails.address[0].current_city); 
    $("#detailsState").text(localUserDetails.address[0].state); 
    $("#detailsCountry").text(localUserDetails.address[0].country); 
    $("#detailsOrganization").text(localUserDetails.Organization);
    $("#detailsRole").text(localUserDetails.role);
    $("#detailsCollege").text(localUserDetails.College);
    $("#detailsSchool").text(localUserDetails.School);
}

function setValuesToUserForm(){
    //alert("Set Value user Details");
    $("#firstName").val(localUserDetails.first_name);
    $("#lastName").val(localUserDetails.last_name); 
    $("#phoneNumber").val(localUserDetails.phonenumber); 
    $("#userDetailsEmail").val(localUserDetails.email); 
    $("#userDetailsDob").val(localUserDetails.dob); 
    $("#userBirthCity").val(localUserDetails.address[0].birth_city); 
    $("#userCurrentCity").val(localUserDetails.address[0].current_city); 
    $("#userState").val(localUserDetails.address[0].state); 
    $("#userCountry").val(localUserDetails.address[0].country); 
}

function setValuesToWorkEducationForm(){
    //alert("Set Value work and Education");
    $("#userEditOrganization").val(localUserDetails.Organization);
    $("#userEditRole").val(localUserDetails.role);
    $("#userEditCollege").val(localUserDetails.College);
    $("#userEditSchool").val(localUserDetails.School);
}


// Profile Page functions
$(document).ready(function () {

    $(".postMainBlock").show();

    $("#headerName").click(function(){
        $(".postMainBlock").show();
        $(".editBlock").hide();
        $(".activityLogBlock").hide();
        setAllPlace();
    });

    $("#activityLogLink").click(function(){
        $(".postMainBlock").hide();
        $(".editBlock").hide();
        $(".activityLogBlock").show();
        setAllPlace();
        var logDetailsActivity = JSON.parse(localStorage.getItem("logActivity"));
        for(log=0; log < logDetailsActivity.length; log++){
            console.log(logDetailsActivity[log].log_userName);
            var dynamicLog = `
            <div class="timeLineContent">
            <span class="timeLineImage">    
                <img src="/images/profile.jpg" width="30px" height="30px" alt="timeline" class="timeLineImageSrc">
            </span>
            <span class="timeLineName">${logDetailsActivity[log].log_userName}</span>
            <span class="timeLineActivity">${logDetailsActivity[log].log_activity}</span>
            <span class="timeLineImage">
                <img src="/images/timeline.png" alt="timelineTime" class="timeLineImageSrcTime">
            </span>
            <span class="timeLineActivityTime">${logDetailsActivity[log].log_time}</span>
            </div>
            `;
            $("#activityLogMainBlock").append(dynamicLog);
        }
    });

    $("#about").click(function(){
        $(".postMainBlock").hide();
        $(".editBlock").show();
        $(".activityLogBlock").hide();
        $(".Overview").show();
        $(".personalDetailsBlock").hide();
        $(".workAndEducationDetailsBlock").hide();
        setValuesToOverview();
        $("#overview").addClass("activeDetails");
    });

    $("#nameEdit").click(function(){
        $(".postMainBlock").hide();
        $(".editBlock").show();
        $(".activityLogBlock").hide();
        $(".Overview").hide();
        $(".personalDetailsBlock").show();
        $(".workAndEducationDetailsBlock").hide();
        setValuesToUserForm();
        $("#PersonalDetails").addClass("activeDetails");
        $("#workAndEducation").removeClass("activeDetails");
        $("#overview").removeClass("activeDetails");
    });

    /* Edit form Over view personal */
    $("#editPersonalDetails").click(function(){
        $(".Overview").hide();
        $(".personalDetailsBlock").show();
        $(".workAndEducationDetailsBlock").hide();
        setValuesToUserForm();
        $("#PersonalDetails").addClass("activeDetails");
        $("#workAndEducation").removeClass("activeDetails");
        $("#overview").removeClass("activeDetails");
    });
    /* Edit form Overview work and Education */
    $("#editEducationalDetails").click(function(){
        $(".Overview").hide();
        $(".personalDetailsBlock").hide();
        $(".workAndEducationDetailsBlock").show();
        setValuesToWorkEducationForm();
        $("#PersonalDetails").removeClass("activeDetails");
        $("#workAndEducation").addClass("activeDetails");
        $("#overview").removeClass("activeDetails");
    });

    $("#detailsEdit").click(function(){
        $(".postMainBlock").hide();
        $(".editBlock").show();
        $(".activityLogBlock").hide();
        $(".Overview").hide();
        $(".personalDetailsBlock").hide();
        $(".workAndEducationDetailsBlock").show();
        setValuesToWorkEducationForm();
        $("#PersonalDetails").removeClass("activeDetails");
        $("#workAndEducation").addClass("activeDetails");
        $("#overview").removeClass("activeDetails");
    });

    $("#submitButtonPersonal").click(function(){
        // Set Activy log
        var logoutLog = JSON.parse(localStorage.getItem("logActivity"));
        var currentUserData = JSON.parse(localStorage.getItem("loggedUserdataLocal"));
        var date = new Date();
        var logDetail = {
            "log_userId"     : currentUserData.userId,
            "log_userName"   : currentUserData.first_name +' '+currentUserData.last_name,
            "log_activity"   : "Updated his Perosnal details",
            "log_time"       : date
        }
        logoutLog.push(logDetail);
        localStorage.setItem("logActivity", JSON.stringify(logoutLog));
        var updateFirstName   = $("#firstName").val();
        var updateLastName    = $("#lastName").val(); 
        var updatePhoneNumber = $("#phoneNumber").val(); 
        var updateEmail       = $("#userDetailsEmail").val(); 
        var updateDob         = $("#userDetailsDob").val(); 
        var updateBirthCity   = $("#userBirthCity").val(); 
        var updateCurrentCity = $("#userCurrentCity").val(); 
        var updateState       = $("#userState").val(); 
        var updateCountry     = $("#userCountry").val(); 
        var updatedData = JSON.parse(localStorage.getItem("loggedUserdataLocal"));
        updatedData.first_name = updateFirstName;
        updatedData.last_name = updateLastName;
        updatedData.phonenumber = updatePhoneNumber;
        updatedData.email = updateEmail;
        updatedData.dob = updateDob;
        updatedData.address[0].birth_city = updateBirthCity;
        updatedData.address[0].current_city = updateCurrentCity;
        updatedData.address[0].state = updateState;
        updatedData.address[0].country = updateCountry;
        sessionStorage.setItem("loggedUserdata", JSON.stringify(updatedData));
        localStorage.setItem("loggedUserdataLocal", JSON.stringify(updatedData));
        $(".postMainBlock").show();
        $(".editBlock").hide();
        setAllPlace();
        location.reload();
    });

    $("#submitButtonWorkAndEducation").click(function(){
        // Set Activy log
        var logoutLog = JSON.parse(localStorage.getItem("logActivity"));
        var currentUserData = JSON.parse(localStorage.getItem("loggedUserdataLocal"));
        var date = new Date();
        var logDetail = {
            "log_userId"     : currentUserData.userId,
            "log_userName"   : currentUserData.first_name +' '+currentUserData.last_name,
            "log_activity"   : "Updated his Work and Educational details",
            "log_time"       : date
        }
        logoutLog.push(logDetail);
        localStorage.setItem("logActivity", JSON.stringify(logoutLog));
        var updateOrganization   = $("#userEditOrganization").val();
        var updateRole           = $("#userEditRole").val(); 
        var updateCollege        = $("#userEditCollege").val(); 
        var updateSchool         = $("#userEditSchool").val(); 
        var updatedData = JSON.parse(localStorage.getItem("loggedUserdataLocal"));
        updatedData.Organization = updateOrganization;
        updatedData.role = updateRole;
        updatedData.College = updateCollege;
        updatedData.School = updateSchool;
        sessionStorage.setItem("loggedUserdata", JSON.stringify(updatedData));
        localStorage.setItem("loggedUserdataLocal", JSON.stringify(updatedData));
        $(".postMainBlock").show();
        $(".editBlock").hide();
        setAllPlace();
        location.reload();
    });
    
    $("#logout").click(function(){
        // Set Activy log
        var logoutLog = JSON.parse(localStorage.getItem("logActivity"));
        var currentUserData = JSON.parse(localStorage.getItem("loggedUserdataLocal"));
        var date = new Date();
        var logDetail = {
            "log_userId"     : currentUserData.userId,
            "log_userName"   : currentUserData.first_name +' '+currentUserData.last_name,
            "log_activity"   : "User Logged Out",
            "log_time"       : date
        }
        logoutLog.push(logDetail);
        localStorage.setItem("logActivity", JSON.stringify(logoutLog));
        sessionStorage.clear();
        location.href = "index.html";
    });
    
});

$(document).ready(function () {
    $(".Overview").show();
    setValuesToOverview();
    $("#overview").click(function(){
        $(".Overview").show();
        $(".personalDetailsBlock").hide();
        $(".workAndEducationDetailsBlock").hide();
        setValuesToOverview();
        $("#overview").addClass("activeDetails");
        $("#workAndEducation").removeClass("activeDetails");
        $("#PersonalDetails").removeClass("activeDetails");
    });

    $("#PersonalDetails").click(function(){
        $(".Overview").hide();
        $(".personalDetailsBlock").show();
        $(".workAndEducationDetailsBlock").hide();
        setValuesToUserForm();
        $("#PersonalDetails").addClass("activeDetails");
        $("#workAndEducation").removeClass("activeDetails");
        $("#overview").removeClass("activeDetails");
    });

    $("#workAndEducation").click(function(){
        $(".Overview").hide();
        $(".personalDetailsBlock").hide();
        $(".workAndEducationDetailsBlock").show();
        setValuesToWorkEducationForm();
        $("#workAndEducation").addClass("activeDetails");
        $("#PersonalDetails").removeClass("activeDetails");
        $("#overview").removeClass("activeDetails");
    });

});

