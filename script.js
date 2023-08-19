let music = new Audio('audio/2.mp3')

const song = [{
    id: 1,
    songname: `Be With You`,
    poster: "Backphoto/1.jpg"
},
{
    id: 2,
    songname: `Chal Wahan Jaate Hain`,
    poster: "Backphoto/2.jpg"
},
{
    id: 3,
    songname: `Kabhi Jo Badal Barse`,
    poster: "Backphoto/3.jpg"
},
{
    id: 4,
    songname: `Kaho Na Kaho`,
    poster: "Backphoto/4.jpg"
},
{
    id: 5,
    songname: `Khali Salam Dua`,
    poster: "Backphoto/5.jpg"
},
{
    id: 6,
    songname: `Phir Mohababat`,
    poster: "Backphoto/6.jpg"
},
{
    id: 7,
    songname: `Teri Jhuki Nazar`,
    poster: "Backphoto/7.jpg"
},
{
    id: 8,
    songname: `Wo Lamhe Wo Baatien`,
    poster: "Backphoto/8.jpg"
},
{
    id: 9,
    songname: `Zindgi Aa Raha Hu`,
    poster: "Backphoto/9.jpg"
},
{
    id: 10,
    songname: `Hosanna`,
    poster: "Backphoto/10.jpg"
},
{
    id: 11,
    songname: `Be With You`,
    poster: "Backphoto/11.jpg"
},
{
    id: 12,
    songname: `Chal Wahan Jaate Hain`,
    poster: "Backphoto/12.jpg"
},
{
    id: 13,
    songname: `Kabhi Jo Badal Barse`,
    poster: "Backphoto/13.jpg"
},
{
    id: 14,
    songname: `Kaho Na Kaho`,
    poster: "Backphoto/14.jpg"
},
{
    id: 15,
    songname: `Khali Salam Dua`,
    poster: "Backphoto/15.jpg"
},
{
    id: 16,
    songname: `Phir Mohababat`,
    poster: "Backphoto/16.jpg"
},
{
    id: 17,
    songname: `Teri Jhuki Nazar`,
    poster: "Backphoto/17.jpg"
},
{
    id: 18,
    songname: `Wo Lamhe Wo Baatien`,
    poster: "Backphoto/18.jpg"
},
{
    id: 19,
    songname: `Zindgi Aa Raha Hu`,
    poster: "Backphoto/19.jpg"
},
{
    id: 20,
    songname: `Hosanna`,
    poster: "Backphoto/20.jpg"
},



]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = song[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = song[i].songname;
});

let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');
masterplay.addEventListener('click', () => {

    if (music.paused || music.currentTime <= 0) {
        music.play()
        wave.classList.add('active1')
        masterplay.classList.remove('bi-play-fill')
        masterplay.classList.add('bi-pause-fill')
    } else {
        music.pause()
        wave.classList.remove('active1')
        masterplay.classList.add('bi-play-fill')
        masterplay.classList.remove('bi-pause-fill')
    }

})



const allbackground = () => {
    Array.from(document.getElementsByClassName(('songItem')).forEach((el) => {
        el.style.background = 'rgb( 105,105,105,.0)'
    }))
}
const allmakeplays = () => {
    Array.from(document.getElementsByClassName(('playlistplay')).forEach((el) => {
        el.style.background = 'rgb( 105,105,105,.0)'
        el.classList.add('bi-play-circle-fill')
        el.classList.remove('bi-pause-circle-fill')
    }))
}

let searchresult=document.getElementsByClassName('searchresult')[0]
song.forEach(element=>{
    const {id,songname,poster}=element;
    let card=document.createElement('a')
    card.classList.add('card');
    card.href="#"+id;
    card.innerHTML=`
         <img src="${poster}" alt="img" />
                <div class="content">
                  ${songname}
                </div>
    `
    searchresult.appendChild(card)
})

let input =document.getElementsByTagName('input')[0]
input.addEventListener('click',()=>{
    let inputvalue=input.value.toUpperCase();
    let items=searchresult.getElementsByTagName('a')
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let textvalue=as.textContent || as.innerHTML;
        if (textvalue.toUpperCase().indexOf(inputvalue) > - 1) {
            items[index].style.display='flex';
        } else {
            items[index].style.display='none';
        }
        if (input.value==0) {
            searchresult.style.display=""
        } else {
            
        }
    }
})

let index = 0;
let postermasterplay = document.getElementById('postermasterplay')
let title = document.getElementById('title')
Array.from(document.getElementsByClassName('playlistplay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        postermasterplay.src = `Backphoto/${index}.jpg`;
        music.play()
        masterplay.classList.remove('bi-play-fill')
        masterplay.classList.add('bi-pause-fill')

        let songtitle = song.filter((el) => {
            return el.id == index;
        })
        songtitle.forEach(els => {
            let { songname } = els
            title.innerHTML = songname;
        })
        allbackground()
        Array.from(document.getElementsByClassName(('songItem'))[index - 1]).style.background = 'rgb( 105,105,105,.1)';
        allmakeplays();
        el.target.classList.remove('bi-pause-circle-fill');
        el.target.classList.add('bi-play-circle-fill');
        wave.classList.add('active1')

    });
})

// scroll popular song and popular artist code//

let pop_song_left = document.getElementById('pop_song_left')
let pop_song_right = document.getElementById('pop_song_right')
let popsong = document.getElementsByClassName('popsong')[0];

pop_song_right.addEventListener('click', () => {
    popsong.scrollLeft += 330;
})
pop_song_left.addEventListener('click', () => {
    popsong.scrollLeft -= 330;
})
let pop_art_left = document.getElementById('pop_art_left')
let pop_art_right = document.getElementById('pop_art_right')
let Artist_ax = document.getElementsByClassName('Artist_ax')[0];

pop_art_right.addEventListener('click', () => {
    Artist_ax.scrollLeft += 330;
})
pop_art_left.addEventListener('click', () => {
    Artist_ax.scrollLeft -= 330;
})


let currenttime = document.getElementById('currenttime')
let endtime = document.getElementById('endtime')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener("timeupdate", () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;


    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60)
    if (sec < 10) {
        sec = `0${sec}`
    }
    endtime.innerHTML = `0${min}:${sec}`;

    let min1 = Math.floor(music_curr / 60)
    let sec1 = Math.floor(music_curr % 60)
    if (sec1 < 10) {
        sec1 = `0${sec1}`
    }
    currenttime.innerHTML = `0${min1}:${sec1}`;

    let progressbar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`
});

seek.addEventListener('change', () => {
    music.currentTime = seek.value * music.duration / 100
})

let volicon = document.getElementById('volicon')
let vol = document.getElementById('vol')
let volbar = document.getElementsByClassName('volbar')[0]
let voldot = document.getElementById('voldot')

vol.addEventListener('change', () => {
    if (vol.value == 0) {
        volicon.classList.remove('bi-volume-up-fill')
        volicon.classList.remove('bi-volume-down-fill')
        volicon.classList.add('bi-volume-off-fill')
    }
    if (vol.value > 0) {
        volicon.classList.remove('bi-volume-up-fill')
        volicon.classList.add('bi-volume-down-fill')
        volicon.classList.remove('bi-volume-off-fill')
    }
    if (vol.value > 50) {
        volicon.classList.add('bi-volume-up-fill')
        volicon.classList.remove('bi-volume-down-fill')
        volicon.classList.remove('bi-volume-off-fill')
    }
    let vol_a = vol.value;
    volbar.style.width = `${vol_a}%`
    voldot.style.left = `${vol_a}%`
    music.volume = vol_a / 100;

})
let back = document.getElementById('back')
let next = document.getElementById('next')

back.addEventListener('click', () => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    postermasterplay.src = `Backphoto/${index}.jpg`;
    music.play()
    masterplay.classList.remove('bi-play-fill')
    masterplay.classList.add('bi-pause-fill')

    let songtitle = song.filter((el) => {
        return el.id == index;
    })
    songtitle.forEach(els => {
        let { songname } = els
        title.innerHTML = songname;
    })
    allbackground()
    Array.from(document.getElementsByClassName(('songItem'))[index - 1]).style.background = 'rgb( 105,105,105,.1)';
    allmakeplays();
    el.target.classList.remove('bi-pause-circle-fill');
    el.target.classList.add('bi-play-circle-fill');
    wave.classList.add('active1')

});
next.addEventListener('click', () => {
    index++;
    if (index > (document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    postermasterplay.src = `Backphoto/${index}.jpg`;
    music.play();
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');

    let songtitle = song.filter((el) => {
        return el.id == index;
    })
    songtitle.forEach(els => {
        let { songname } = els
        title.innerHTML = songname;
    })
    allbackground();
    Array.from(document.getElementsByClassName(('songItem'))[index - 1]).style.background = 'rgb( 105,105,105,.1)';
    allmakeplays();
    el.target.classList.remove('bi-pause-circle-fill');
    el.target.classList.add('bi-play-circle-fill');
    wave.classList.add('active1');

});














