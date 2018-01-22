$(document).ready(function() {

    function buildOpportunitySearch() {
        var skills = ["Fundraising", "Event Planning", "Organization", "Bookkeeping", "Leadership", "Crafts", "Electrical", "Carpentry", "Cooking", "Clean Up"];
        var causes = ["Advocacy", "Animals", "Arts", "Boards", "Children", "Community", "IT", "Crisis", "Disasters", "Education", "Emergency", "Employment", "Environment", "Health & Medicine","Homelessness & Housing","Hunger","Immigrants", "International","Justice & Legal", "Politics", "Seniors","Sports & Recreation"];
        var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
        var updating = false;



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
            appendCauses();

            function appendCauses() {
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

    buildOpportunitySearch();

    $("#opportunitySearch-submit").on("click", handleOpportunitySearchSubmit);

    function handleOpportunitySearchSubmit() {
        event.preventDefault();

        var opportunitySearch = {
            zip_code: $("#zip").val(),
            start_date_time: $('#inputStartDateTime').val(),          
            end_date_time: $('#inputEndDateTime').val(), 
            skills_needed: $("#inputSkills").val(), 
            org_type_id: $("#inputCauses").val()           
        };

console.log("Opportunity Search= " + opportunitySearch)
    }

    function submitOpportunitySearch(opportunitySearch) {
        $.get("/api/opportunitySearch", opportunitySearch, function(result) {
            window.location.href = "/opportunitySearch";
        });
    }
    
})