const reviews = [

    {

        name: "Szent Endre",
        job: "PHP fejlesztő",
        img: "https://images.pexels.com/photos/211050/pexels-photo-211050.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit pariatur dolore aliquam repellendus tempore sapiente consequuntur iure est porro, vitae molestiae. Ducimus, sequi, vitae perspiciatis fugit saepe sunt quos officiis dolor ab quasi ipsa blanditiis ratione cum nobis reprehenderit asperiores voluptatum, vel veritatis tempora explicabo doloremque temporibus consectetur magni! Pariatur corporis exercitationem possimus, atque iste, officiis earum accusamus minima quam necessitatibus et tempora adipisci distinctio? Tenetur et ad vero natus aut corporis assumenda inventore eligendi."
    },

    {

        name: "Nagy Zsanett",
        job: "Marketing Manager",
        img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit pariatur dolore aliquam repellendus tempore sapiente consequuntur iure est porro, vitae molestiae. Ducimus, sequi, vitae perspiciatis fugit saepe sunt quos officiis dolor ab quasi ipsa blanditiis ratione cum nobis reprehenderit asperiores voluptatum, vel veritatis tempora explicabo doloremque temporibus consectetur magni!Lorem ipsum dolor sit, amet consectetur adipisicing elit."

    },

    {

        name: "Török Bálint",
        job: "Automata tesztelő",
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit pariatur dolore aliquam repellendus tempore sapiente consequuntur iure est porro, vitae molestiae. Ducimus, sequi, vitae perspiciatis fugit saepe sunt quos officiis dolor ab quasi ipsa blanditiis ratione cum nobis reprehenderit asperiores voluptatum, vel veritatis tempora explicabo doloremque temporibus consectetur magni! Pariatur corporis exercitationem possimus, atque iste, officiis earum accusamus minima quam necessitatibus et tempora adipisci distinctio?"
    }
]

//Használni kívánt elemek eltárolása változókba

const img = document.getElementById("person-img");
const author= document.getElementById("author");
const job= document.getElementById("job");
const text= document.getElementById("text");

const prevBtn= document.querySelector(".prev-btn");
const nextBtn= document.querySelector(".next-btn");


//kiinduló érték megadása (ez fogja reprezentálni az aktuális elemet a tömbben)
let current = 0;

//Kiinduló személy betöltése
window.addEventListener("load", ()=>{

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
})


// Írunk egy függvényt, amellyel ki tudjuk választani a következő embert
function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;
}


//Gombnyomásra ugorjon a következő emberre
nextBtn.addEventListener("click", ()=>{

    current++;

    if(current > reviews.length -1){

        current = 0;
    }

    showPerson(current);
})


//Gombnyomásra ugorjon a előző emberre
prevBtn.addEventListener("click", ()=>{

    current--;

    if(current < 0){

        current = reviews.length -1;
    }

    showPerson(current);
})