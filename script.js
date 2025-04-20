let gruende = [
    'Egal,',
    'was du hier ',
    'eingibst,',
    'der einzige Grund,',
    'warum ich dich liebe',
    'Hasi,',
    'ist,',
    'dass du ein',
    'TOLLER MENSCH',
    'bist!',
    ':) ❤️'
];

function ausgabe() {
    let outputContainer = document.getElementById('outputContainer');
    outputContainer.innerHTML = '';

    for (let i = 0; i < gruende.length; i++) {
        let grund = gruende[i];
        setTimeout(() => {
            outputContainer.innerHTML += `<span>${grund} </span>`;
        }, i * 1500);
    }
}