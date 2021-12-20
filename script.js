let sorteioCarro = {
    Pedro:0,
    Juca:0, 
    Edna:0
}
let velocidadeParticipantes ={
    Pedro: 0,
    Juca: 0,
    Edna: 0
}
let participantes = {
    Pedro: [0, 0, 0],
    Juca:[0, 0, 0], 
    Edna:[0, 0, 0]
}
let tipoDeCarro = {
    popular: [
        [180, 200], 
        [110, 130],     
        [300, 400]
            ],
    sport: [
        [195, 215], 
        [125, 145], 
        [200, 300]
            ],
    superSport: [
        [210, 320], 
        [140, 160], 
        [100, 175]
                ]
}
let lastPoint = [0, 0,0]

function sorteio(){
    sorteioCarro.Pedro =Math.floor(Math.random()*100)
    sorteioCarro.Juca = Math.floor(Math.random()*100)
    sorteioCarro.Edna = Math.floor(Math.random()*100)
}
// descobrir qual o tipo de carro de cada participante
function carroAleatorio() {
    sorteio();
    if (sorteioCarro.Pedro <= 5 ){
        participantes.Pedro[0] =  Math.floor(Math.random() * (tipoDeCarro.superSport[0][1] - tipoDeCarro.superSport[0][0] + 1) ) + tipoDeCarro.superSport[0][0];

        participantes.Pedro[1] = Math.floor(Math.random() * (tipoDeCarro.superSport[1][1] - tipoDeCarro.superSport[1][0] + 1) ) + tipoDeCarro.superSport[1][0];

        participantes.Pedro[2] = Math.floor(Math.random() * (tipoDeCarro.superSport[2][1] - tipoDeCarro.superSport[2][0] + 1) ) + tipoDeCarro.superSport[2][0];
    }
    else if (sorteioCarro.Pedro > 5 && sorteioCarro.Pedro <= 35) {
        participantes.Pedro[0] =  Math.floor(Math.random() * (tipoDeCarro.sport[0][1] - tipoDeCarro.sport[0][0] + 1) ) + tipoDeCarro.sport[0][0];

        participantes.Pedro[1] = Math.floor(Math.random() * (tipoDeCarro.sport[1][1] - tipoDeCarro.sport[1][0] + 1) ) + tipoDeCarro.sport[1][0];

        participantes.Pedro[2] = Math.floor(Math.random() * (tipoDeCarro.sport[2][1] - tipoDeCarro.sport[2][0] + 1) ) + tipoDeCarro.sport[2][0];
    }
    else {
        participantes.Pedro[0] =  Math.floor(Math.random() * (tipoDeCarro.popular[0][1] - tipoDeCarro.popular[0][0] + 1) ) + tipoDeCarro.popular[0][0];

        participantes.Pedro[1] = Math.floor(Math.random() * (tipoDeCarro.popular[1][1] - tipoDeCarro.popular[1][0] + 1) ) + tipoDeCarro.popular[1][0];

        participantes.Pedro[2] = Math.floor(Math.random() * (tipoDeCarro.popular[2][1] - tipoDeCarro.popular[2][0] + 1) ) + tipoDeCarro.popular[2][0];
    }
    console.log('O número que representa o carro de Pedro é: ',sorteioCarro.Pedro)
    console.log('As especificações do carro de Pedro é: ', participantes.Pedro)
    console.log('')


    if (sorteioCarro.Juca <= 5) {
        participantes.Juca[0] =  Math.floor(Math.random() * (tipoDeCarro.superSport[0][1] - tipoDeCarro.superSport[0][0] + 1) ) + tipoDeCarro.superSport[0][0];

        participantes.Juca[1] = Math.floor(Math.random() * (tipoDeCarro.superSport[1][1] - tipoDeCarro.superSport[1][0] + 1) ) + tipoDeCarro.superSport[1][0];

        participantes.Juca[2] = Math.floor(Math.random() * (tipoDeCarro.superSport[2][1] - tipoDeCarro.superSport[2][0] + 1) ) + tipoDeCarro.superSport[2][0];
    }
    else if (sorteioCarro.Juca > 5 && sorteioCarro.Juca <= 35) {
        participantes.Juca[0] =  Math.floor(Math.random() * (tipoDeCarro.sport[0][1] - tipoDeCarro.sport[0][0] + 1) ) + tipoDeCarro.sport[0][0];

        participantes.Juca[1] = Math.floor(Math.random() * (tipoDeCarro.sport[1][1] - tipoDeCarro.sport[1][0] + 1) ) + tipoDeCarro.sport[1][0];

        participantes.Juca[2] = Math.floor(Math.random() * (tipoDeCarro.sport[2][1] - tipoDeCarro.sport[2][0] + 1) ) + tipoDeCarro.sport[2][0];
    }
    else {
        participantes.Juca[0] =  Math.floor(Math.random() * (tipoDeCarro.popular[0][1] - tipoDeCarro.popular[0][0] + 1) ) + tipoDeCarro.popular[0][0];

        participantes.Juca[1] = Math.floor(Math.random() * (tipoDeCarro.popular[1][1] - tipoDeCarro.popular[1][0] + 1) ) + tipoDeCarro.popular[1][0];

        participantes.Juca[2] = Math.floor(Math.random() * (tipoDeCarro.popular[2][1] - tipoDeCarro.popular[2][0] + 1) ) + tipoDeCarro.popular[2][0];
    }
    console.log('O número que representa o carro de Juca é: ',sorteioCarro.Juca)
    console.log('As especificações do carro de Juca é: ', participantes.Juca)
    console.log('')

    if (sorteioCarro.Edna <= 5) {
        if (sorteioCarro.Edna[0] =  Math.floor(Math.random() * (tipoDeCarro.superSport[0][1] - tipoDeCarro.superSport[0][0] + 1) ) + tipoDeCarro.superSport[0][0]);

        participantes.Edna[1] = Math.floor(Math.random() * (tipoDeCarro.superSport[1][1] - tipoDeCarro.superSport[1][0] + 1) ) + tipoDeCarro.superSport[1][0];

        participantes.Edna[2] = Math.floor(Math.random() * (tipoDeCarro.superSport[2][1] - tipoDeCarro.superSport[2][0] + 1) ) + tipoDeCarro.superSport[2][0];
}
    else if (sorteioCarro.Edna > 5 && sorteioCarro.Edna <= 35) {
        participantes.Edna[0] =  Math.floor(Math.random() * (tipoDeCarro.sport[0][1] - tipoDeCarro.sport[0][0] + 1) ) + tipoDeCarro.sport[0][0];

        participantes.Edna[1] = Math.floor(Math.random() * (tipoDeCarro.sport[1][1] - tipoDeCarro.sport[1][0] + 1) ) + tipoDeCarro.sport[1][0];

        participantes.Edna[2] = Math.floor(Math.random() * (tipoDeCarro.sport[2][1] - tipoDeCarro.sport[2][0] + 1) ) + tipoDeCarro.sport[2][0];
    }
    else {
        participantes.Edna[0] =  Math.floor(Math.random() * (tipoDeCarro.popular[0][1] - tipoDeCarro.popular[0][0] + 1) ) + tipoDeCarro.popular[0][0];

        participantes.Edna[1] = Math.floor(Math.random() * (tipoDeCarro.popular[1][1] - tipoDeCarro.popular[1][0] + 1) ) + tipoDeCarro.popular[1][0];

        participantes.Edna[2] = Math.floor(Math.random() * (tipoDeCarro.popular[2][1] - tipoDeCarro.popular[2][0] + 1) ) + tipoDeCarro.popular[2][0];
    }

    console.log('O número que representa o carro de Edna é: ', sorteioCarro.Edna)
    console.log('As especificações do carro de Edna é: ', participantes.Edna)
    console.log('')
}

function resultado(){ 
    
    carroAleatorio();

    velocidadeParticipantes.Pedro =  (Math.floor(Math.random() * (participantes.Pedro[0] - participantes.Pedro[1] + 1)) + participantes.Pedro[1])
    velocidadeParticipantes.Pedro -= (velocidadeParticipantes.Pedro * (participantes.Pedro[2]/10000));
   
    velocidadeParticipantes.Juca =  (Math.floor(Math.random() * (participantes.Juca[0] - participantes.Juca[1] + 1)) + participantes.Juca[1]) 
    velocidadeParticipantes.Juca -= (velocidadeParticipantes.Juca * (participantes.Juca[2]/10000));
    
    velocidadeParticipantes.Edna =  (Math.floor(Math.random() * (participantes.Edna[0] - participantes.Edna[1] + 1)) + participantes.Edna[1]) 
    velocidadeParticipantes.Edna -= (velocidadeParticipantes.Edna * (participantes.Edna[2]/10000));

    console.log('a velocidade de Pedro é: ',velocidadeParticipantes.Pedro)
    console.log('a velocidade de Juca é: ',velocidadeParticipantes.Juca)
    console.log('a velocidade de Edna é: ',velocidadeParticipantes.Edna)

    if(velocidadeParticipantes.Pedro > velocidadeParticipantes.Juca && velocidadeParticipantes.Pedro > velocidadeParticipantes.Edna){
        console.log("Pedro ganhou!!!")
    } else if (velocidadeParticipantes.Juca > velocidadeParticipantes.Pedro && velocidadeParticipantes.Juca > velocidadeParticipantes.Edna){
        console.log("Juca ganhou!!!")
    }else {
        console.log("Edna ganhou!!!")
    }
}
resultado();