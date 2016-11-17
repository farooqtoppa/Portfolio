// skills
var skills = ' <div class="col-md-3"><img src="./img/%data%.png" alt="my skills" class="img-responsive img-circle"></div>';

var skillsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

var skillsNew = '';

for(var i = 0; i < skillsArray.length; i++) {
  skillsNew = skills.replace('%data%', skillsArray[i]);
  $('.skills-section-images').append(skillsNew);
}

// Projects
var projects = '<li><h3>%data%</h3><div class="row"><div class="col-md-3"><img src="./img/%data1%.gif" alt="project-images" class="img-responsive"></div><div class="col-md-9"><h3>Languages(s): %data2% </h3><h5>%data3%</h5></div></div></li><br><hr>';

var projectsArray = [
  {
    name: 'Connect Four',
    img: 'a',
    language: 'HTML/CSS Javascript, and jQuery' ,
    info: 'A desktop application version of the original two player game. The object is for two players to compete by connecting four chips either vertically, horizontally or diagonally first. This app was designed using HTML. JavaScript was used for mathematical calculations in order to find the accurate winner and jQuery was used to manipulate DOM elements.'
  },
  {
    name: 'Movie Collection' ,
    img: 'a',
    language: 'Python',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    name: 'The Store Front',
    img: 'a',
    language: 'PHP',
    info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

var projectsNew = '';

for(var i = 0; i < projectsArray.length; i += 1) {
  projectsNew = projects.replace('%data%', projectsArray[i]['name']);
  projectsNew = projectsNew.replace('%data1%', projectsArray[i]['img']);
  projectsNew = projectsNew.replace('%data2%', projectsArray[i]['language']);
  projectsNew = projectsNew.replace('%data3%', projectsArray[i]['info']);
  $('.projects-section-info').append(projectsNew);
}
