function pilKomputer(){
    const comp = Math.random();

    if(comp < 0.33) return 'batu'
    if(comp > 0.33 && comp < 0.69) return 'gunting'
    return 'kertas'

} 

function putar(){
    const image = ['batu', 'gunting', 'kertas'];
    const imgCom = document.querySelector('.area-computer img');
    let i = 0;
    const waktuAwal = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuAwal > 1000){
            clearInterval;
            return;
        }
        imgCom.setAttribute('src','image/' + image[i++] + '.png');
        if(i == image.length){
            i = 0;
        }
    }, 100)
}

function hasilGame(player, comp){
    if(player === comp) return "SERI!";
    if(player == 'batu') return (comp == 'kertas') ? "KALAH!" : "MENANG!";
    if(player == 'gunting') return (comp == 'batu') ? "KALAH!" : "MENANG!";
    if(player == 'kertas') return (comp == 'gunting') ? "KALAH!" : "MENANG!";
}

const gambar = document.querySelectorAll('.area-player  img');

let scoreCom = 0;
let scorePlayer = 0;

gambar.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanKomputer = pilKomputer();
        const play = pil.className;
        const hasil = hasilGame(play, pilihanKomputer);

        if(hasil == "MENANG!"){
            scorePlayer++;
        } else if(hasil == "KALAH!"){
            scoreCom++;
        }
        
        putar();

        setTimeout(() => {
            const sCom = document.querySelector('p .scoreCom');
            const sPlayer = document.querySelector('p .scorePlayer');
            const gambarCom = document.querySelector('.area-computer img');
            gambarCom.setAttribute('src', 'image/' + pilihanKomputer + '.png');
            sCom.innerHTML = scoreCom;
            sPlayer.innerHTML = scorePlayer;
            const info = document.querySelector('.hasil');
            info.innerHTML = hasil;
        }, 1000);

    })
})
