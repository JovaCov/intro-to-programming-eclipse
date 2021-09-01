const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyRight = document.createElement('p');
const skillz = ['Basic knowledge of java', 'Basic knowledge of Python', 'Well versed in the Microsoft Suit', 'Fluent in Spanish' ];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');
const messageform = document.querySelector('form[name="leave_message"]');
copyRight.innerHTML = 'Jovany Cortes Marure ' + thisYear;
const messageSection = document.querySelector('#message');
const messageList = messageSection.querySelector('ul');

footer.appendChild(copyRight);

for (let i = 0; i < skillz.length; i++){
    
    let skill = document.createElement('li');
    skill.innerHTML = skillz[i];
    skillsList.appendChild(skill);
}; 

console.log(messageform);


messageform.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameinput = messageform.querySelector('input[name="name"]');
    const emilinput = messageform.querySelector('input[name="email"]');
    const messageinput = messageform.querySelector('textarea[name="message"]');
    console.log(nameinput.value);
    console.log(emilinput.value);
    console.log(messageinput.value);
    

    let newMessage = document.createElement('li');
    newMessage.className ="msg"; 
    let a = document.createElement('a');
    let linkText = document.createElement("span");
    a.appendChild(linkText);
    a.innerText = nameinput.value;
    a.href = "mailto:" + emilinput.value;
    newMessage.appendChild(a);
    const messageText=document.createElement("span")
    messageText.innerText=" wrote:" + messageinput.value + " "
    newMessage.appendChild(messageText)
    
    const removeButton = document.createElement('button');
    removeButton.innerText = "remove"
    removeButton.type = 'button';
    removeButton.addEventListener('click', (event) => {
    const entry = event.target.parentNode
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageform.reset();

});  


fetch('https://api.github.com/users/JovaCov/repos')
    .then(response => response.json())
    .then(data => generateList(data))

function generateList(data) {
    let projectSection = document.getElementById('projects');
    let projectlist = projectSection.querySelector('ul');
    
    for (let i = 0; i < data.length; i++) {
        const project = document.createElement('li');
        project.innerText = data[i].name;
        projectlist.appendChild(project)

    }
}
    