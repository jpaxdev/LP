// funciton to show date on page ----->

function showDate (data = new Date()) {
    var day = data.getDay();
    var month = data.getMonth()+1;
    var year = data.getFullYear();

    if(day.toString().length == 1) day = '0'+day;
    if(month.toString().length == 1) month = '0'+month;
 
    return day+'/'+month+'/'+year;
}
showDate()

window.addEventListener('load', function () {
    document.getElementById("date").innerHTML = showDate();
})

function showDay (dia = new Date()) {
    var d = dia.getDay();

    if(d === 1) {
        return "Monday"
    }
    if(d === 2) {
        return "Tuesday"
    }
    if(d === 3) {
        return "Wednesday"
    }
    if(d === 4) {
        return "Thursday"
    }
    if(d === 5) {
        return "Friday"
    }
    if(d === 6) {
        return "Sadurday"
    }
    if(d === 7) {
        return "Sunday"
    }
}


window.addEventListener('load', function () {
    document.getElementById("dia").innerHTML = showDay();
})

// ------- end ----- >

// function to show the right message ------> 

function message (hour = new Date()) {
    var hr = hour.getHours();

    if (hr >= 6 && hr <= 12) {
        return "Good Morning!"
    }
    if (hr > 12 && hr <= 18) {
        return "Good Afternoon!"
    }  
    if (hr > 18 && hr <= 20) {
        return "Good Evening!"
    }  
    if (hr > 20 && hr <= 0) {
        return "Good Night!"
    } 
    if (hr > 0 && hr < 6) {
        return "Hey, you shouldn't be awake, go sleep!"
    }
}
window.addEventListener('load', function () {
    document.getElementById("cumpliment").innerHTML = message()

})

// ------ end ----->


// function to show my love messages ------>


function showMessage () {

    const messages = [
        "You got me stuck on the thought of you!", 
        "You're more than the sunshine in my eyes", 
        "You got those pretty eyes in your head, you know it", 
        "You are exactly what I want",
        "Sometimes, all I think about is you",
        "Every time you come around, you know I can't say no",
        "I never kissed a mouth that tastes like yours",
        "Antes da gente dizer tchau, tem tanta coisa que eu quero te falar, como num filme, o que é bom faz o final",
        "Se for por você, eu corro atrás dentro de um aeroporto",
        "Talvez eu goste ainda mais de nós num dia inteiro colados a sós com tempo pra se discorrer a dois, sentir sua pele, sem tua roupa, não ligo se faz frio ou faz calor, hoje quem me ligar digo que tô nas nuvens de um poeta ou algo assim",
        "Você é interestelar, nem a estrela mais linda tem a luz que cê tem",
        "Nosso primeiro beijo",
        "Eu só te achei a cara do pra sempre que eu sempre procurei",
        "Fala pro seu passado que seu futuro é comigo",
        "Eu, você e uma casinha, geladeira cheia, dormir de conchinha depois de umas brincadeiras",
        "I wanna show you off",
        "Nem o sol consegue me aquecer num dia ensolarado como você consegue aquecer meu coração só de sorrir para mim.",
        "I love you",
        "Você é incrível",
        "Você é Maravilhosa",
        "Quando você sorri eu me derreto",
        "Amo tanto o seu beijo, seu toque, tudo que vem de você",
        "Te ver e não te querer é impossível",
        "Se você pudesse se enxergar como eu te enxergo, você se apaixonaria toda vez que olhasse no espelho",
        "Tudo começou quando você sorriu para mim, meu mundo acabou e começou naquele instante",
        "Quero te fazer feliz enquanto eu respirar",
        "Você me faz tão bem",
        "Estou com saudade",
        "VOCÊ PARECE ESCULPIDA POR ANJOS DE TÃO PERFEITA",
        "Queria estar abraçado em você agora!",
        "Cansei, te quero todinha pra mim, talvez, ajoelhar pra ouvir seu sim",
        "Me apaixonei, mais uma vez, mais uma vez fui pelo cano",
        "Prefiro ter você assim, bem pertinho de mim, de manhã, de madrugada, te quero também de tarde, quando nóis fica junto somos inimigo do fim",
        "Give your all to me, I'ill give my all to you",
        "I see my future in your eyes",
        "When I see your face, thre's not a thing that I would change and when you smile the whole world stops and stares for a while",
        "You are my paradise",
        "Pensar em você, é pensar no meu futuro",
        "Queria te dar todas as palavras bonitas que existem no mundo, mas não acho que exista alguma que, sozinha, defina a sua beleza",
        "Quando estou perto de você, eu não preciso de mais nada",
        "Je t'aime",
        "Eu to perdido no seu sorriso e não quero me achar",
        "When there's madness, when there's poison in your head, when the sadness leaves you broken in your bed, I will hold you in the depths of your despair, and it's all in the name of love",
        "Whenever I'm alone with you, you make me feel like I am young again",
        "I just can't get you off of my mind",
        "Você chegou na minha vida e transformou tudo sem nem se esforçar, só encaixou no meu coração, na minha mente e eu não quero mais que saia",
        "Você rainh, o resto nadinha",
        "Não vejo a hora de ter minha lua de mel com você.",
        "Eu te admiro tanto, você é incrível, tem tantos sonhos e tem tanta energia para correr atrás deles e sempre mantendo um sorriso no rosto, você é daquelas pessoas que mesmo sendo durona, é sensível, eu te amo!",

    ]
    for (let i = 0; i <= messages.length; i++) {
        let msg = Math.floor(Math.random() * messages.length);
        if (messages[msg]) {
            // return messages[i];
            const text = document.getElementById("message-text");
            let write = str => {
                let arrFromStr = str.split('');
                let l = 0;
                let printStr = setInterval(function() {
                    
                    if(arrFromStr[l] === ' ') {
                        text.innerHTML += arrFromStr[l];
                        text.innerHTML += arrFromStr[l + 1];
                        l += 2;
                    } else {
                        text.innerHTML += arrFromStr[l];
                        l++;
                    }
                    if (l === arrFromStr.length) {
                        clearInterval(printStr);
                        text.style.transition = '0.3s ease';
                    }
            
                }, 50);
            };
            return write(messages[msg]);

        } else {
            return "I love you";
        }
    } 
}

window.addEventListener('load', function () {
    showMessage()
})