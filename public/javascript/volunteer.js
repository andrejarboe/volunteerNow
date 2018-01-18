$(document).ready(function() {

    function buildUserInput() {
        var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var times = ["Morning", "Afternoon", "Evening"];
        var skills = ["Fundraising", "Event Planning", "Organization", "Bookkeeping", "Leadership", "Crafts", "Electrical", "Carpentry", "Cooking", "Clean Up"];
        var userHeader = $("<div class='page-header'><h1>Volunteer Information</h1>");
        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        var genders = ["M", "F"];
        var updating = false;
        $("#userInputHeader").append(userHeader);

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

    $("#userSubmit").on("submit", handleUserSubmit);

    function handleUserSubmit() {
        event.preventDefault();

        var newUser = {
            first_name: firstName.val(),
            last_name: lastName.val(),
            address: inputAddress.val(),
            city: inputCity.val(),
            state: inputState.val(),
            zip_code: inputZip.val(),
            dob: DOB.val(),
            gender: inputGender.val(),
            email: inputEmail.val(),
            phone: inputPhone.val(),
            days: inputDays.val(),
            times: inputTimes.val(),
            skills: inputSkills.val(),
            experience: inputExperience.val()
        };

        if (updating) {
            id = userId;
            updateUser(newUser);
        } else {
            submitUser(newUser);
        }
    }

    function submitUser(user) {
        $.post("/api/user", newUser, function() {
            console.log(newUser);
            window.location.href = "/users";
        });
    }

    function updateUser(user) {
        $.ajax({
                method: "PUT",
                url: "/api/user",
                data: newUser
            })
            .then(function() {
                window.location.href = "/needtofindout";
            });
    }

})