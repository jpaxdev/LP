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

const messages = [
    "I wanna show you up!", 
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
    "Amo tanto do seu beijo, seu toque, tudo que vem de você",
    "Te ver e não te querer é impossível",
    "Se você pudesse enxergar como eu te enxergo, você se apaixonaria toda vez que olhasse no espelho",
    "Tudo começou quando você sorriu para mim, meu mundo acabou e começou naquele instante",
    "Quero te fazer feliz enquanto eu respirar",
    "Você me faz tão bem",
    "Estou com saudade",
    "VOCÊ PARECE ESCULPIDA POR ANJOS DE TÃO PERFEITA",
    "Queria estar abraçado em você agora!",
]

function showMessage () {
    let msg = Math.floor(Math.random() * messages.length);
    for (let i = 0; i <= messages.length; i++) {
        if (i = msg) {
            return messages[i];
        } else {
            return "I love you";
        }
    } 
}

window.addEventListener('load', function () {
    document.getElementById("message-text").innerHTML = showMessage()
})
