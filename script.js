// funciton to show date on page ----->

function showDate (data = new Date()) {
    var day = data.getDate();
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
        document.body.style.backgroundColor = "antiquewhite";
        return "Monday"
    }
    if(d === 2) {
        document.body.style.backgroundColor = "#fff0d4";
        return "Tuesday"
    }
    if(d === 3) {
        document.body.style.backgroundColor = "#f4dcfffd";
        return "Wednesday"
    }
    if(d === 4) {
        document.body.style.backgroundColor = "#eeffc5";
        return "Thursday"
    }
    if(d === 5) {
        document.body.style.backgroundColor = "##c5d0ff";
        return "Friday"
    }
    if(d === 6) {
        document.body.style.backgroundColor = "#ffd5e5";
        return "Sadurday"
    }
    if(d === 0) {
        document.body.style.backgroundColor = "#e0fffd";
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
    if (hr > 20 && hr <= 23) {
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
        "Eu estaria mentindo se dissesse qie você me deixa sem palavras, a verdade é que você deixa minha lingua tão fraca que ela esquece a linguagem que fala.",
        "Minha musa do verão, eu não posso dizer não, você me dá tesão e eu penso toda hora em você passando a mão",
        "Você já está na proteção de tela do meu celular",
        "Só queria te chamar de minha",
        "Baby, I think you were made for me",
        "Fecho meus olhos e você aparece para mim",
        "Amor, sem os seus beijos eu vou enloquecer",
        "I got it so wet easily, that is just like a pool let me swim in it and when we're all done fall asleep with me",
        "When I'm with you, I'm an addict",
        "Let me be the portable heater, that you'll get cold without",
        "Your love is more than what its weight in gold",
        "You know what I want and what I need",
        "I can't help myself when you get close to me",
        "Você me traz uma paz e não consigo parar de pensar em como você já se tornou algo tão importante na minha vida",
        "Falling for you wasn't falling at all. It was walking into a house and suddenly knowing I'm home",
        "O que será que você tem? Só sei que isso me faz tão bem, não canso de te admirar, reparar, sem parar, sei lá, será que é só um sonho bom?",
        "If life is a movie, then you're the best part",
        "I love to hold you close, tonight and always, I love to wake up next to you",
        "I wanna be yours",
        "I won't hesitate no more, it cannot wait, I'm yours",
        "I think I'm right for you, babe",
        "I'm gonna love you like I'm gonna lose you",
        "Ask me, 'What's my best side', I stand back and point at you!",
        "When I'm away from you, I miss your touch, you're the reason I believe in love",
        "I tried to be chill, but you're so hot that I melted",
        "I'm gonna love you in every kind of way, give you all, give you all of me",
        "I wanna please you, no matter how long it takes",
        "Me deixe te trazer num dengo pra num cafuné fazer os meus apelos",
        "Eu quero ser exorcizado pela água benta desse olhar infindo",
        "Que bom é ser fotografado mas pela retina desses olhos lindos",
        "O cheiro de amor que vem chegando, trazendo o seu corpo só para mim",
        "Te amo não é só falado, vou te provar que amar é um hábito",
        "Quem diria, eu feio um bobo assim, você despertou o amor em mim",
        "Queria só gostar, mas tô amando",
        "Você é meu tchan",
        "If the world was ending, I'd wanna be next to you",
        "if the party was over and our time on earth was through, I'd wanna hold you just for a while and die with a smile",
        "Wherever you go, that's where I'll follow",
        "I'ma love you every night like it's the last night",
        "Eu te quero só pra mim, como as ondas são do mar",
        "Não dá para viver assim, querer sem poder te tocar"
    ]

    if (bd == 24 && bd2 == 9) {
        return "teste";
    } else {
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
    
            }
        } 

    }

}

window.addEventListener('load', function () {
    showMessage()
})