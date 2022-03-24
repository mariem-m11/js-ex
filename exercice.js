const tab = [
    'Tunis',
    'Djerba',
    'Sousse',
    'Nabeul',
    'Touzer',
    'Mahdia'
]

const ol = document.querySelector('ol');
let i = 0;
setInterval(
    () => {
        if (i < tab.length) {
            let li = ` <li> ${tab[i]} <li>`;
            i++;
            ol.innerHTML += li;
        }
        else {
            i = 0;
            ol.innerHTML = '';
        }
    }, 1500)

