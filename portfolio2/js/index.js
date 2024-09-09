

var bigcontainer = document.createElement('div');
var head2 = document.createElement('h2');
bigcontainer.setAttribute('id','project');
head2.setAttribute('class','head2');
var titlee= document.createTextNode('Projects');
let btn = document.getElementById('btnscrl');

head2.appendChild(titlee);
bigcontainer.appendChild(head2);



let project =function (title,desc,src,classs,href){
    
    let container = document.createElement('div');
    document.body.appendChild(container);
    let img = document.createElement('img');
    let link = document.createElement('a');
    
   
    let titles = document.createElement('p');
    let disc = document.createElement('p');
   
  let titlecontent= document.createTextNode(title);
  let disccontent= document.createTextNode(desc);
  link.setAttribute('href',href);
  img.src=src;
  link.setAttribute('class','projectphoto');
  titles.setAttribute('class','ptitle');
  container.setAttribute('class',classs);
  bigcontainer.appendChild(container);
  container.appendChild(link);
  link.appendChild(img);
  titles.appendChild(titlecontent);
  disc.appendChild(disccontent);
  container.appendChild(titles);
  container.appendChild(disc);



 
 
}  
document.body.appendChild(bigcontainer);
bigcontainer.style.gap='50px'

project('React first Project','This is a login and sign up project with dashboard to edit users and products','./reactp.jpeg','project1','');
project('Hangman game','Hangman game project with painting','reactp.jpeg','project2','');
project('project title','Lorem ipsum dolor sit amet consectetur adipisicing elit. ','images.jpeg','project3','');
project('project title','Lorem ipsum dolor sit amet consectetur adipisicing elit. ','images.jpeg','project4','');

project('project title','Lorem ipsum dolor sit amet consectetur adipisicing elit.','images.jpeg','project1','');
project('project title','Lorem ipsum dolor sit amet consectetur adipisicing elit.','images.jpeg','project2','');


window.onscroll=function(){
  if(scrollY>300){
    

    btn.style.top='800px';
  
  }else{
    btn.style.top='1000px';
  }

}
  btn.onclick=function(){
scroll({
  top:0,
  left:0,
  behavior:"smooth"
})
  }
