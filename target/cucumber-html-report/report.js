$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddOwner.feature");
formatter.feature({
  "line": 1,
  "name": "Adding a Pet Owner",
  "description": "",
  "id": "adding-a-pet-owner",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Adding a Pet Owner the Petclinic project.",
  "description": "",
  "id": "adding-a-pet-owner;adding-a-pet-owner-the-petclinic-project.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "a User wishes to add a Pet Owner to the Petclinic project.",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "the User enters the pet Owners details",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the Pet Owner \"John Smith\" should be added to the Petclinic Project.",
  "keyword": "Then "
});
formatter.match({
  "location": "AddOwner.a_User_wishes_to_add_a_Pet_Owner_to_the_Petclinic_project()"
});
formatter.result({
  "duration": 2022355603,
  "status": "passed"
});
formatter.match({
  "location": "AddOwner.the_User_enters_the_pet_Owners_details()"
});
formatter.result({
  "duration": 812609358,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "John Smith",
      "offset": 15
    }
  ],
  "location": "AddOwner.the_Pet_Owner_should_be_added_to_the_Petclinic_Project(String)"
});
formatter.result({
  "duration": 801603574,
  "status": "passed"
});
formatter.uri("browsing_around.feature");
formatter.feature({
  "line": 1,
  "name": "Browsing around",
  "description": "",
  "id": "browsing-around",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "The home page",
  "description": "",
  "id": "browsing-around;the-home-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I should see \"PetClinic\"",
  "keyword": "Then "
});
formatter.match({
  "location": "BrowsingAround.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 132098152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PetClinic",
      "offset": 14
    }
  ],
  "location": "BrowsingAround.i_should_see(String)"
});
formatter.result({
  "duration": 986941,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Vets",
  "description": "",
  "id": "browsing-around;vets",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I follow \"/vets.html\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I should be on the vets, \"Veterinarians\", page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I should see \"Veterinarians\" within h2",
  "keyword": "And "
});
formatter.match({
  "location": "BrowsingAround.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 109707243,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/vets.html",
      "offset": 10
    }
  ],
  "location": "BrowsingAround.i_follow(String)"
});
formatter.result({
  "duration": 169363785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Veterinarians",
      "offset": 26
    }
  ],
  "location": "BrowsingAround.i_should_be_on_the_vets_page(String)"
});
formatter.result({
  "duration": 601197548,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Veterinarians",
      "offset": 14
    }
  ],
  "location": "BrowsingAround.i_should_see_within(String)"
});
formatter.result({
  "duration": 6105156,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Owners",
  "description": "",
  "id": "browsing-around;owners",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I follow \"/owners/find.html\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I fill in \"lastName\" with \"Franklin\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I press \"Find Owners\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see \"George\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I should see \"Franklin\"",
  "keyword": "And "
});
formatter.match({
  "location": "BrowsingAround.i_am_on_the_home_page()"
});
formatter.result({
  "duration": 110551726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "/owners/find.html",
      "offset": 10
    }
  ],
  "location": "BrowsingAround.i_follow(String)"
});
formatter.result({
  "duration": 38706220,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lastName",
      "offset": 11
    },
    {
      "val": "Franklin",
      "offset": 27
    }
  ],
  "location": "BrowsingAround.i_fill_in_with(String,String)"
});
formatter.result({
  "duration": 2591745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Find Owners",
      "offset": 9
    }
  ],
  "location": "BrowsingAround.i_press(String)"
});
formatter.result({
  "duration": 179507844,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "George",
      "offset": 14
    }
  ],
  "location": "BrowsingAround.i_should_see(String)"
});
formatter.result({
  "duration": 1442231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Franklin",
      "offset": 14
    }
  ],
  "location": "BrowsingAround.i_should_see(String)"
});
formatter.result({
  "duration": 2540017,
  "status": "passed"
});
});