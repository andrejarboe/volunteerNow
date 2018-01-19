$(document).ready(function() {

    function buildOrgInput() {

        var causes = ["Advocacy", "Animals", "Arts", "Boards", "Children", "Community", "IT", "Crisis", "Disasters", "Education", "Emergency", "Employment", "Environment", "Health & Medicine","Homelessness & Housing","Hunger","Immigrants", "International","Justice & Legal", "Politics", "Seniors","Sports & Recreation"];
        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        var updating = false;

        var l = 1;
        for (var i = 0; i < causes.length; i++) {
            var causes1 = $("<div>").add("<input>");
            causes1.addClass("form-check-input causes");
            causes1.attr("type", "checkbox");
            causes1.attr("id", "cause" + (i + 1));
            causes1.attr("value", "option " + (i + 1));
            var causes2 = $("<label>");
            causes2.addClass("form-check-label");
            causes2.attr("for", "inlineCheckbox" + (i + 1));
            causes2.text(causes[i]);
            appendSkills();

            function appendSkills() {
                var causesClass = "#causes" + l;
                $(causesClass).append(causes1);
                $(causesClass).append(causes2);
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
            $("#state").append(state);
        }

    }

    buildOrganizationInput();

    $("#orgSignUp-submit").on("click", handleOrgSubmit);

    function handleOrgSubmit() {
        event.preventDefault();

        var newOrg = {
            org_name: $("#org_name").val(),
            mission: $("#mission").val(),
            org_description: $("#org_description").val(),
            org_logo: $("#org_logo").val(),                        
            address1: $("#address1").val(),
            address2: $("#address2").val(),            
            city: $("#city").val(),
            state: $("#state").val(),
            zip_code: $("#zip").val(),
            volunteerCoordinator: $("#volunteerCoordinator").val(),
            mission: $("#mission").val(),            
            email: $("#email").val(),
            phone: $("#phone").val(),
        };

        submitOrg(newOrg);

    }

    function submitOrg(org) {
        $.post("/api/org", org, function() {
            window.location.href = "/orgs";
        });
    }

    
})