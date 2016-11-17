var skills = ' <div class="col-md-3"><img src="./img/%data%.png" alt="my skills" class="img-responsive img-circle"></div>';

var skillsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

var skillsNew = '';

for(var i = 0; i < skillsArray.length; i++) {
  skillsNew = skills.replace('%data%', skillsArray[i]);
  $('.skills-section-images').append(skillsNew);
}
