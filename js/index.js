const date1 = new Date();
const thisYear = date1.getFullYear();
const footer = document.querySelector('footer');
const copyRight = document.createElement('p');
const skillz = ['Basic knowledge of java', 'Basic knowledge of Python', 'Well versed in the Microsoft Suit', 'Fluent in Spanish' ];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
copyRight.innerHTML = 'Jovany Cortes Marure ' + thisYear;

footer.appendChild(copyRight);

for (let i = 0; i < skillz.length; i++){
    
    let skill = document.createElement('li');
    skill.innerHTML = skillz[i];
    skillsList.appendChild(skill);
}; 

console.log(skillsList);
