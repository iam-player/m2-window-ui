const leftColumn = document.getElementById("iconLeft");
const rightColumn = document.getElementById("iconRight");

const iconsLeft = ['is', 'casino', 'magazyn', 'wyprawa', 'biolog', 'bs', 'top-gracze', 'poli', 'pet', 'dopalacze', 'kalendarz', 'sprawdzenie-postaci', 'kosz'];
const iconsRight = ['battlepass', 'dailyreward', 'sklep', 'polowanie', 'kolekcjoner', 'zmiana-eq', 'top-gildie', 'poli-usun', 'autobuff', 'bonusy24', 'patch-notes', 'wiki', 'snake'];
const iconsPath = './assets/images/sidebar/icons/';


//insert images into sidebar grid
for (let i = 0; i < iconsLeft.length; i++){

    leftColumn.innerHTML += `<img class="sidebarIcon" src="${iconsPath}${iconsLeft[i]}/${iconsLeft[i]}_norm.png" alt="${iconsLeft[i]}" title="${iconsLeft[i].charAt(0).toUpperCase() + iconsLeft[i].slice(1)}">`;
    rightColumn.innerHTML += `<img class="sidebarIcon" src="${iconsPath}${iconsRight[i]}/${iconsRight[i]}_norm.png" alt="${iconsRight[i]}" title="${iconsRight[i].charAt(0).toUpperCase() + iconsRight[i].slice(1) }">`;
}

//disable dragging
const imgs = document.getElementsByTagName('img');
for(let j = 0; j < imgs.length; j++ ) {
    imgs[j].setAttribute("draggable", "false")
}

//disable context menu
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});