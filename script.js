/********variables ******/
const quote = document.querySelector(".quote-txt");
const name = document.querySelector(".name");
const job = document.querySelector(".job-title");
const img = document.getElementById("person_img");
const next_btn = document.getElementById("next_btn");
const prev_btn = document.getElementById("prev_btn");

let info = [
    {
        name:'Tanya Sinclair',
        job: 'UX Engineer',
        img: 'image-tanya.jpg',
        quote: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
     },
     {
        name: 'John Tarkpor',
        job: 'Junior Front-end Developer',
        img: 'image-john.jpg',
        quote: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
     }
];

let presentInfo = 0;


/*******functions****/
function changeInfo(index){
    name.innerHTML = info[index].name;
    job.innerHTML = info[index].job;
    quote.innerHTML = info[index].quote;
    img.src = `images/${info[index].img}`;
}

function prev(){
    if(presentInfo <= 0){
        return;
    }
    presentInfo--;
    changeInfo(presentInfo);
}

function next(){
    if(presentInfo >= info.length-1){
        return;
    }
    presentInfo++;
    changeInfo(presentInfo);
}

/******event listeners******/
next_btn.addEventListener('click', next);
prev_btn.addEventListener('click', prev);