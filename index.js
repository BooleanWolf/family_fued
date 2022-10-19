function random_index(){
    return Math.floor(Math.random()*11); 
}

function mark(){
    return Math.floor(Math.random()*100)
}

const form = document.getElementById("form");
const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");
const word3 = document.getElementById("word3");
const word4 = document.getElementById("word4");

const ques = document.getElementById("que")


const cards = [
    {
        q:"What husband do less after marriage",
        a:["love"],
        b:["sex"],
        c:["care"],
        d:["surprises", "shopping"]
    },
    {
        q:"What a man really want from her ex",
        a:["sex"],
        b:["patchup"],
        c:["love"],
        d:["makeout"]
    },
       {
        q:"What a man love most about a woman",
        a:["heart"],
        b:["boobs", "ass", "poshness"],
        c:["self-respect"],
        d:["caringness"]
    },
       {
        q:"You went on a blind date. but then you met your",
        a:["ex", "ex girlfriend", "ex boyfriend"],
        b:["stepsister"],
        c:["cousin"],
        d:["neighbour"]
    },
     {
        q:"Name Something Associated with Vampires ",
        a:["twilight", "blood"],
        b:["bat"],
        c:["garlic"],
        d:["cap"]
    },
    {
        q:"What is something you squeeze ",
        a:["lemon", "orange"],
        b:["boobs"],
        c:["ball"],
        d:["sponge"]
    },
     {
        q:"Name a Professional Sport Where the Players Make a Lot of Money",
        a:["football", "baseball"],
        b:["cricket"],
        c:["hockey"],
        d:["tennis"]
    },
    {
        q:"Name the most peaceful city of bangladesh",
        a:["rajshahi", "chittagong"],
        b:["khulna"],
        c:["cumilla"],
        d:["dhaka"]
    },
    {
        q:"Name an Occupation That Begins With the Letter -J",
        a:["judge", "janitor"],
        b:["journalist"],
        c:["juggler"],
        d:["jockey"]
    },
     {
        q:"Name Something That Has to Be Licked ",
        a:["lolipop", "vagina"],
        b:["ice-cream", "icecream", "ice cream"],
        c:["lips"],
        d:["envelope"]
    },
      {
        q:"Name a Word You Can Use Instead of - Woman ",
        a:["lady", "girl"],
        b:["female"],
        c:["chick"],
        d:["gal"]
    }

]



let words = [];

let lvl1 = [];
let lvl2 = [];
let lvl3 = [];
let lvl4 = [];


function word_process(w){
    w = w.toLowerCase();
    w = w.trim();
    return w;
}



window.addEventListener("load", e => {
    const ind = random_index();
    
    const qs = cards[ind].q;

    ques.textContent = qs; 

    lvl1 = [...cards[ind].a]
    lvl2 = [...cards[ind].b]
    lvl3 = [...cards[ind].c]
    lvl4 = [...cards[ind].d] 
    
});


form.addEventListener('submit', e => {
    e.preventDefault(); 
    
    let score = 0;

    let w1 = word1.value;
    let w2 = word2.value;
    let w3 = word3.value;
    let w4 = word4.value;

    w1 = word_process(w1);
    w2 = word_process(w2);
    w3 = word_process(w3);
    w4 = word_process(w4);

    let k = mark(); 
    
    if(lvl1.includes(w1)){
        score += (100 + k); 
    } else if (lvl2.includes(w1)) {
        score += 75;
    } else if(lvl3.includes(w1)) {
        score += 50;
    } else if(lvl4.includes(w1)) {
        score += 25;
    } else {
        score -= 35;
    }


    if(lvl1.includes(w2)){
        score += 85; 
    } else if (lvl2.includes(w2)) {
        score += 100;
    } else if(lvl3.includes(w2)) {
        score += (75 + k);
    } else if(lvl4.includes(w2)) {
        score += 50;
    } else {
        score -= 20;
    }
    
       if(lvl1.includes(w3)){
        score += 55; 
    } else if (lvl2.includes(w3)) {
        score += (87 + k);
    } else if(lvl3.includes(w3)) {
        score += 100;
    } else if(lvl4.includes(w3)) {
        score += 78;
    } else {
        score -= 60;
    }
    
        
       if(lvl1.includes(w4)){
        score += 35; 
    } else if (lvl2.includes(w4)) {
        score += 67;
    } else if(lvl3.includes(w4)) {
        score += (88 + k);
    } else if(lvl4.includes(w4)) {
        score += 100;
    } else {
        score -= 10;
    }
    

    const score_text = document.getElementById("score");
    const try_btn = document.getElementById("try");
    score_text.textContent = `You have scored ${score}`; 
    try_btn.className = "butt";
    
    try_btn.addEventListener('click', e => {
        location.reload();
    })
    
}
)