$(document).ready(function() {

    function buildUserInput() {
        var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var times = ["Morning", "Afternoon", "Evening"];
        var skills = ["Fundraising", "Event Planning", "Organization", "Bookkeeping", "Leadership", "Crafts", "Electrical", "Carpentry", "Cooking", "Clean Up"];
        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        var genders = ["M", "F"];
        var updating = false;

        var j = 1;
        for (var i = 1; i < 8; i++) {
            var userDays1 = $("<div>").add("<input>");
            userDays1.addClass("form-check-input days");
            userDays1.attr("type", "checkbox");
            userDays1.attr("id", "day" + i);
            userDays1.attr("value", "option " + i);
            var userDays2 = $("<label>");
            userDays2.addClass("form-check-label");
            userDays2.attr("for", "inlineCheckbox" + i);
            userDays2.text(days[i - 1]);
            appendDays();

            function appendDays() {
                var daysClass = "#days" + j;
                $(daysClass).append(userDays1);
                $(daysClass).append(userDays2);
                if (j === 3) {
                    j = 1;
                } else {
                    j++;
                }
            }
        }

        var k = 1;
        for (var i = 0; i < times.length; i++) {
            var times1 = $("<div>").add("<input>");
            times1.addClass("form-check-input times");
            times1.attr("type", "checkbox");
            times1.attr("id", "time" + (i + 1));
            times1.attr("value", "option " + (i + 1));
            var times2 = $("<label>");
            times2.addClass("form-check-label");
            times2.attr("for", "inlineCheckbox" + (i + 1));
            times2.text(times[i]);
            appendTimes();

            function appendTimes() {
                var timesClass = "#times" + k;
                $(timesClass).append(times1);
                $(timesClass).append(times2);
                if (k === 3) {
                    k = 1;
                } else {
                    k++;
                }
            }
        }

        var l = 1;
        for (var i = 0; i < skills.length; i++) {
            var skills1 = $("<div>").add("<input>");
            skills1.addClass("form-check-input skills");
            skills1.attr("type", "checkbox");
            skills1.attr("id", "skill" + (i + 1));
            skills1.attr("value", "option " + (i + 1));
            var skills2 = $("<label>");
            skills2.addClass("form-check-label");
            skills2.attr("for", "inlineCheckbox" + (i + 1));
            skills2.text(skills[i]);
            appendSkills();

            function appendSkills() {
                var skillsClass = "#skills" + l;
                $(skillsClass).append(skills1);
                $(skillsClass).append(skills2);
                if (l === 3) {
                    l = 1;
                } else {
                    l++;
                }
            }
        }

        for (var i = 0; i < states.length; i++) {
            var state = $("<option>");
            state.attr("id", states[i]);
            state.text(states[i]);
            $("#inputState").append(state);
        }

        for (var i = 0; i < genders.length; i++) {
            var gender = $("<option>");
            gender.attr("id", genders[i]);
            gender.text(genders[i]);
            $("#inputGender").append(gender);
        }

    }

    buildUserInput();

    

    //    $("#userSubmit").on("click", handleUserSubmit);

    $("#userSignupForm").on("submit",  function (event) {

        
   
        event.preventDefault();
        $("#pic_url").upload("/api/upload","pic",function(sucess){
            console.log("done");
        })

        // This grabs all the data from all the input forms


      var form = $(this);
      var formdata = false;
      if(window.FormData) {
        formdata = new FormData(form[0]) 
      }
      
         var form = $("input")
      // aws base_url
      var pic_url = 'https://s3.amazon.com/volunteernowapp/users/';
      pic_url += form[28].files[0].name;

        console.log(pic_url);

        

        var newUser = {
            first_name: $("#firstName").val(),
            last_name: $("#lastName").val(),
            address: $("#inputAddress").val(),
            city: $("#inputCity").val(),
            state: $("#inputState").val(),
            zip_code: $("#inputZip").val(),
            dob: $("#DOB").val(),
            gender: $("#inputGender").val(),
            email: $("#inputEmail").val(),
            phone: $("#inputPhone").val(),
            days: $("#inputDays").val(),
            times: $("#inputTimes").val(),
            skills: $("#inputSkills").val(),
            experience: $("#inputExperience").val(),
            pic_url: pic_url
        };
       
      
    
       
       console.log(form[28].files[0]);


        submitUser(newUser);
    })
    


    function submitUser(user) {
        console.log(user);

        $.post("/api/users", user, function() {
            //   window.location.href = "/users";
        });
    }

// Ajax File upload with jQuery and XHR2
// Sean Clark http://square-bracket.com
// xhr2 file upload
$.fn.upload = function(remote, data, successFn, progressFn) {
    // if we dont have post data, move it along
    if (typeof data != "object") {
        progressFn = successFn;
        successFn = data;
    }

    var formData = new FormData();

    var numFiles = 0;
    this.each(function() {
        var i, length = this.files.length;
        var name = 'pic';
        numFiles += length;
        for (i = 0; i < length; i++) {
            formData.append(name, this.files[i]);
        }
    });

    // if we have post data too
    if (typeof data == "object") {
        for (var i in data) {
            formData.append(i, data[i]);
        }
    }

    var def = new $.Deferred();
    if (numFiles > 0) {
        // do the ajax request
        $.ajax({
            url: remote,
            type: "POST",
            xhr: function() {
                myXhr = $.ajaxSettings.xhr();
                if(myXhr.upload && progressFn){
                    myXhr.upload.addEventListener("progress", function(prog) {
                        var value = ~~((prog.loaded / prog.total) * 100);

                        // if we passed a progress function
                        if (typeof progressFn === "function") {
                            progressFn(prog, value);

                        // if we passed a progress element
                        } else if (progressFn) {
                            $(progressFn).val(value);
                        }
                    }, false);
                }
                return myXhr;
            },
            data: formData,
            dataType: "json",
            cache: false,
            contentType: false,
            processData: false,
            complete: function(res) {
                var json;
                try {
                    json = JSON.parse(res.responseText);
                } catch(e) {
                    json = res.responseText;
                }
                if (typeof successFn === "function") successFn(json);
                def.resolve(json);
            }
        });
    } else {
        def.reject();
    }

    return def.promise();
};  


})