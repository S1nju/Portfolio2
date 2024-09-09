

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
    let img = document.createElement('div');
    let link = document.createElement('a');


    let titles = document.createElement('p');
    let disc = document.createElement('p');

  let titlecontent= document.createTextNode(title);
  let disccontent= document.createTextNode(desc);
  link.setAttribute('href',href);
  img.style.backgroundImage=`url(${src})`;
  img.style.height=`150px`;
  img.style.width=`250px`;
  img.style.backgroundPosition=`center`;
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
project('React Projects','This is a login and sign up project with dashboard to edit users and products','images.jpeg','project1','');
project('Hangman game','Hangman game project with painting','images.jpeg','project2','');
project('react ecommerece shop','react ecommerece shop that has roles and product catgories and responsive design','images.jpeg','project3','');
project('ai image generator','java script project that uses open ai api to generate photos according to what you type','images.jpeg','project4','');

project('to do list','a simple to do list with javascript','images.jpeg','project1','');
project('crud project','project that let you save data and update them and delete them with searching inputs','images.jpeg','project2','');



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
