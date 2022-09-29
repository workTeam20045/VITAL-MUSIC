import  {getPromos} from './firebase.js';

// Song data



const songList = [
    {
        title: "Un Verano En Mallorca",
        file: "audio/Unveranoenmallorca.mp3",
        cover: "img/unVerano.jpeg",
        autor: "Rels B"
    },
    {
        title: "Devil Eyes",
        file: "audio/DevilEyes.mp3",
        cover: "img/devilEyes.jpeg",
        autor: "Hippie Sabotage"
    },
    {
        title: "Moonlight",
        file: "audio/moonlight.mp3",
        cover: "img/moonlight.jpeg",
        autor: "XXXTENTATION"
    },
    {
        title: "Ferxxo 100",
        file: "audio/ferxoo100.mp3",
        cover: "img/FERXXO.jpeg",
        autor: "Feid"
    },
    {
        title: "Mañana Sin Ti",
        file: "audio/Mañana sin ti.mpeg",
        cover: "img/mañanasinti.jpeg",
        autor: "Baby Rasta & Gringo"
    },
    {
        title: "Dekko 1 2x3",
        file: "audio/1.2X3.mpeg",
        cover: "img/dekko1.2x3.jpg",
        autor: "Dekko"
    },
    {
        title: "120",
        file: "audio/120.mpeg",
        cover: "img/bb120.jpg",
        autor: "Bad Bunny"
    },
    {
        title: "A Mi",
        file: "audio/A MI.mpeg",
        cover: "img/relsbAmi.jpg",
        autor: "Rels B"
    },
    {
        title: "Agosto",
        file: "audio/AGOSTO.mpeg",
        cover: "img/unveranosinti.jpg",
        autor: "Bad Bunny"
    },
    {
        title: "Amor De Pobre",
        file: "audio/AMOR DE POBRE.mpeg",
        cover: "img/zionAmorPobre.jpg",
        autor: "Zion Y Eddee"
    },
    {
        title: "Un Coco",
        file: "audio/COCO.mpeg",
        cover: "img/unveranosinti.jpg",
        autor: "Bad Bunny"
    },
    {
        title: "Colocao",
        file: "audio/COLOCAO.mpeg",
        cover: "img/colocaoNickki.jpg",
        autor: "Nickki Nicole"
    },
    {
        title: "🖤",
        file: "audio/CORAZON.mpeg",
        cover: "img/bbcorazon.jpg",
        autor: "Bad Bunny"
    },
    {
        title: "Cuando Quieras",
        file: "audio/CUANDO QUIERAS.mpeg",
        cover: "img/cuandoquierasRelsb.jpg",
        autor: "Rels B"
    },
    {
        title: "Cuuuuux",
        file: "audio/CUUUUUX.mpeg",
        cover: "img/cuuuuxFerxxo.jpg",
        autor: "Feid"
    },
    {
        title: "Efecto",
        file: "audio/EFECTO.mpeg",
        cover: "img/unveranosinti.jpg",
        autor: "Bad Bunny"
    },
    {
        title: "Enseñame A Bailar",
        file: "audio/ENSEÑAME A BAILAR.mpeg",
        cover: "img/unveranosinti.jpg",
        autor: "Bad Bunny"
    },
    {
        title: "La Droga",
        file: "audio/LA DROGA.mpeg",
        cover: "img/bbLadroga.jpg",
        autor: "Bad Bunny"
    },
    {
        title: "Lista De Espera",
        file: "audio/LISTA DE ESPERA.mpeg",
        cover: "img/listaesperaDekko.jpg",
        autor: "Dekko"
    },
    {
        title: "Me Fui De Vacaciones",
        file: "audio/ME FUI DE VACACIONES.mpeg",
        cover: "img/unveranosinti.jpg",
        autor: "Bad Bunny"
    },
    {
        title: "Morxx",
        file: "audio/MORXX.mpeg",
        cover: "img/cuuuuxFerxxo.jpg",
        autor: "Feid"
    },
    {
        title: "Otra Noche En Miami",
        file: "audio/OTRA NOCHE EN MIAMI.mpeg",
        cover: "img/otranochaenmiami.jpg",
        autor: "Bad Bunny"
    },
    {
        title: "Party",
        file: "audio/PARTY.mpeg",
        cover: "img/unveranosinti.jpg",
        autor: "Bad Bunny Y Rauw Alejandro"
    },
    {
        title: "Que Va",
        file: "audio/QUE VA.mpeg",
        cover: "img/quevaDekko.jpg",
        autor: "Dekko"
    },
    {
        title: "Querida",
        file: "audio/QUERIDA.mpeg",
        cover: "img/queridaFerxxo.jpg",
        autor: "Piso 21 Y Feid"
    },
    {
        title: "Tu Te Imaginas",
        file: "audio/TU TE IMAGINAS.mpeg",
        cover: "img/tteimaginasDelagetto.jpg",
        autor: "De La Ghetto"
    },
    {
        title: "Victoria",
        file: "audio/VICTORIA.mpeg",
        cover: "img/victoriaLunay.jpg",
        autor: "Lunay Y Beele"
    },
    {
        title: "Zun da da",
        file: "audio/ZUNDADA.mpeg",
        cover: "img/zundada.jpg",
        autor: "Zion Y Feid"
    },
    {
        title: "Besame Sin Sentir",
        file: "audio/BESAME SIN SENTIR.mpeg",
        cover: "img/besameMicro.jpg",
        autor: "Micro Tdh"
    },
    {
        title: "Lonely",
        file: "audio/LONELY.mpeg",
        cover: "img/lonely.jpg",
        autor: "Akon"
    },
    
]


// Canción actual
let actualSong = null
let imgSelected = ' ';
let songSelected = ' ';
let promoSelected = ' ';
let promos = [];
let totalList=[];


// Eliminar cancion
const modalDelete = document.querySelector('.modalDelete');
const btnConfirm= document.getElementById('delete');
const btnCancel = document.getElementById('cancel');


//dark mode
const btnTheme = document.getElementById('switch');
const sectionSong = document.querySelector('.listSongs');
const song_detail = document.querySelector('.song_detail');
const footer = document.querySelector('.main');
const contac = document.querySelector('.contac');
btnTheme.addEventListener('click', themeColor)
function themeColor() {
    document.body.classList.toggle('dark');
    btnTheme.classList.toggle('active');
    header.classList.toggle('dark');
    btnModal.classList.toggle('dark');
    btnPromo.classList.toggle('dark');
    sectionSong.classList.toggle('dark');
    listSongs.classList.toggle('dark');
    all.classList.toggle('dark');
    contac.classList.toggle('dark');
    footer.classList.toggle('dark');
    song_detail.classList.toggle('dark');
}

// Capturar elementos del DOM para trabajar con JS
const songs = document.getElementById("songs")
const audio = document.getElementById("audio")
const cover = document.getElementById("cover")
const title = document.getElementById("title")
const artist = document.getElementById("artist")
const play = document.getElementById("play")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
const volumeShow = document.getElementById("volume_show")
const recent_volume = document.getElementById("volume")
progressContainer.addEventListener("click", setProgress)
const volumeIcon = document.getElementById("volume_icon")
const all  = document.getElementById("list")

// crea canciones 
const screen = document.querySelector(".allScreen")
const header = document.getElementById("header")

const btnModal = document.getElementById("btnModal");
const modal = document.querySelector(".modal");
const btnAdd = document.getElementById("btnAdd");
const newName = document.getElementById("new-name");
const newImage = document.querySelector('#new-image');
const newSong = document.querySelector('#new-song');
const nameSing = document.getElementById("new-sing");
const btnClose = document.getElementById("close-modal")
const listSongs = document.querySelector('.songs');



// Crear Promo
const btnPromo = document.getElementById("btnPromo");
const modalPromo = document.querySelector(".modalPromo");
const containerPromo = document.querySelector(".container-promo");
const titleProm = document.getElementById("titlePromo");
const author = document.getElementById("AuthorName");
const imagePromo = document.getElementById('photoPromo');
const btnclosePromo = document.getElementById("closePromo")
const formPromo = document.getElementById('formPromo');
const section = document.getElementById('allContainer');




// Agregar cancion al arreglo 
window.addEventListener("load", loadSongs)
btnModal.addEventListener("click", showModal)
btnClose.addEventListener("click", close)
btnPromo.addEventListener("click", showPromo)
btnclosePromo.addEventListener("click", closePromo)
btnAdd.addEventListener("click", addSong)
newImage.addEventListener('change', importImage);
newSong.addEventListener('change', importSong);
imagePromo.addEventListener("change", importPromo)
volumeIcon.addEventListener("click", mute_sound)
recent_volume.addEventListener("change", volume_change)
progress.addEventListener("change", change_duration)



// Mostrar desde firebase y agregar las promo
window.addEventListener('DOMContentLoaded', async() => { 
    const querySnapshot = await getPromos()
    
    
    querySnapshot.forEach(doc => {
     createPromos(doc.data());
     promos.push(doc.data());
    })
 })
 
 function createPromos(promo) {
     const {titlePromo, imgPromo, author} = promo;
   
       const card = document.createElement('div');
       card.classList.add('promo-card');
   
 
       const imgProm = document.createElement('img');
       imgProm.setAttribute('src', imgPromo);  
       imgProm.classList.add('img-promo');
 
       const titleProm = document.createElement('h4');
       titleProm.textContent = titlePromo;
       titleProm.classList.add('title');
       
       const nameProm = document.createElement('p');
       nameProm.textContent = author;
       nameProm.classList.add('nameProm');
   
     
       card.appendChild(imgProm);
       card.appendChild(titleProm);
       card.appendChild(nameProm);
 
       containerPromo.appendChild(card);
       section.appendChild(containerPromo);
   }

   function importPromo(event) {
    const currentPromo = event.target.files[0];
    const promoURL = URL.createObjectURL(currentPromo);
    promoSelected = promoURL
}
 
 formPromo.addEventListener('submit',(e) => {
     e.preventDefault();
 
      const titlePromo = titleProm.value;
      const authorName = author.value;
 
      const newPromo = {titlePromo:titlePromo, imgPromo:promoSelected, author:authorName};
     
     promos.push(newPromo);
     modalPromo.style.display = 'none';
     formPromo.reset();
     screen.style.filter = 'none';
     header.style.filter = 'none';

     renderPromos();
     console.log(promos);
     //  const photoPromo = formPromo['photoPromo']
 });
 
 
 function renderPromos() {
     containerPromo.innerHTML = '';
     promos.map(promo => {
         const {titlePromo, imgPromo, author} = promo;
 
         const card = document.createElement('div');
         card.classList.add('promo-card');
     
   
         const imgProm = document.createElement('img');
         imgProm.setAttribute('src', imgPromo);  
         imgProm.classList.add('img-promo');
   
         const titleProm = document.createElement('h4');
         titleProm.textContent = titlePromo;
         titleProm.classList.add('title');
         
         const nameProm = document.createElement('p');
         nameProm.textContent = author;
         nameProm.classList.add('nameProm');
     
       
         card.appendChild(imgProm);
         card.appendChild(titleProm);
         card.appendChild(nameProm);
   
         containerPromo.appendChild(card);
         section.appendChild(containerPromo);
 
         })
 }

function showPromo() {
    modalPromo.style.display = 'flex';
    screen.style.filter = 'blur(3px)';
    header.style.filter = 'blur(3px)';
}

function closePromo() {
    modalPromo.style.display = 'none';
    screen.style.filter = 'none';
    header.style.filter = 'none';
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function importImage(event) {
    const currentImage = event.target.files[0];
    const objectURL = URL.createObjectURL(currentImage);
    imgSelected = objectURL
}
function importSong(event) {
    const currentSong = event.target.files[0];
    const songURL = URL.createObjectURL(currentSong);
    songSelected = songURL
}

function addSong() {
    const titleName = newName.value; 
    const nameSong = nameSing.value;

    const newelement = {title:titleName, file:songSelected, cover:imgSelected, autor:nameSong};
    
    songList.push(newelement);
    modal.style.display = 'none';
    screen.style.filter = 'none';
    header.style.filter = 'none';

    clear()
}

function showModal() {
    modal.style.display = 'flex';
    screen.style.filter = 'blur(3px)';
    header.style.filter = 'blur(3px)';
}
function close() {
    modal.style.display = 'none';
    screen.style.filter = 'none';
    header.style.filter = 'none';

}

function clear() {
    return loadSongs();
}




let timer;

// Escuchar el elemento AUDIO
audio.addEventListener("timeupdate", updateProgress)
next.addEventListener("click", () => nextSong())
prev.addEventListener("click", () => prevSong())

// Escuchar clicks en los controles
play.addEventListener("click", () => {
    if (audio.paused) {
        playSong()   
    } else {
        pauseSong()
    }
})


// Cargar canciones y mostrar el listado
function loadSongs() {
    const iconos = {icon:"img/musicalNote.png"}
    listSongs.innerHTML="";
    songList.forEach((song, index) => {
        
        // Crear li
        const li = document.createElement("li")
        li.classList.add("oneSong")

        const image = document.createElement("img")
        image.setAttribute("src",song.cover)
        image.classList.add("oneImage")

        const icon = document.createElement("img");
        icon.setAttribute("src", iconos.icon)
        icon.classList.add("oneSongP")

        const artist = document.createElement("p")
        artist.textContent = song.autor
        artist.classList.add("oneArtist")

    
        const link = document.createElement("a")
        link.textContent = song.title
        link.classList.add("oneSongTitle")
        link.href = "#"

        const btnDelete = document.createElement("button")
        btnDelete.textContent = "X";
        btnDelete.setAttribute("id", index);
        btnDelete.classList.add("btnDelete")

        link.addEventListener("click", () => loadSong(index))
        btnDelete.addEventListener("click", modalDeleteSong)
        btnCancel.addEventListener("click", cancelDelete)
        // btnDelete.addEventListener("click", deleteSong)

        let borrar = "";
        function cancelDelete() {
            modalDelete.style.display = 'none';
        }

        function modalDeleteSong() {
            modalDelete.style.display = 'flex';
            borrar=song.title
            console.log(index);
        }
        btnConfirm.addEventListener('click', deleteSong);


        function deleteSong() {
            if (borrar == song.title) {
                
                songs.removeChild(li);
                songList.pop(song);


                  
                modalDelete.style.display = 'none';
                loadSongs(todasCanciones);
            }
        }
        
        link.appendChild(artist)
        li.appendChild(icon)
        li.appendChild(link)
        li.appendChild(image)
        li.appendChild(btnDelete)
        songs.appendChild(li)
    })
}


// Cargar canción seleccionada
function loadSong(songIndex) {
    if (songIndex !== actualSong) {
        changeActiveClass(actualSong, songIndex)
        actualSong = songIndex
        audio.src = songList[songIndex].file
        playSong()
        changeSongtitle(songIndex)
        changeCover(songIndex)
        changeSongautor(songIndex)
        timer = setInterval(range_slider, 1000);
    }
}

// Actualizar barra de progreso de la canción
function updateProgress(event) {
    const {duration, currentTime} = event.srcElement
    const percent = (currentTime / duration) * 100
    progress.style.width = percent + "%" 
}

// Hacer la barra de progreso clicable
function setProgress(event) {
    const totalWidth = this.offsetWidth
    const progressWidth = event.offsetX
    const current = (progressWidth / totalWidth) * audio.duration
    audio.currentTime = current
}

// Actualiar controles
function updateControls() {
    if (audio.paused) {
        play.classList.remove("fa-pause")
        play.classList.add("fa-play")
    } else {
        play.classList.add("fa-pause")
        play.classList.remove("fa-play")
    }
}

// Reproducir canción
function playSong() {
    if (actualSong !== null) {
        audio.play()
        updateControls()
    }
}

// Pausar canción
function pauseSong() {
    audio.pause()
    updateControls()
}

// Cambiar clase activa
function changeActiveClass(lastIndex, newIndex) {
    const links = document.querySelectorAll("a")
    if (lastIndex !== null) {
        links[lastIndex].classList.remove("active")
    }
    links[newIndex].classList.add("active")
}

// Cambiar el cover de la canción
function changeCover(songIndex) {
    cover.src = songList[songIndex].cover
}

// Cambiar el título de la canción
function changeSongtitle(songIndex) {
    title.innerText = songList[songIndex].title
}

function changeSongautor(songIndex) {
    artist.innerText = songList[songIndex].autor
}

// Anterior canción
function prevSong() {
    if (actualSong > 0) {
        loadSong(actualSong - 1)
    } else {
        loadSong(songList.length - 1)
    }
}

// Siguiente canción
function nextSong() {
    if (actualSong < songList.length -1) {
        loadSong(actualSong + 1)
    } else {
        loadSong(0)
    }
}

// Lanzar siguiente canción cuando se acaba la actual
audio.addEventListener("ended", () => nextSong())

function mute_sound(){
	audio.volume = 0;
	volume.value = 0;
	volumeShow.innerHTML = 0;
}

function volume_change(){
	volumeShow.innerHTML = recent_volume.value;
	audio.volume = recent_volume.value / 100;
}

function change_duration(){
	progress_position = audio.duration * (progress.value / 100);
	audio.currentTime = progress_position;
}

function range_slider(){
	let position = 0;
        
    // update slider position
	if(!isNaN(audio.duration)){
		position = audio.currentTime * (100 / audio.duration);
		progress.value =  position;
	}
}