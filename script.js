const excuseElements = {
    beginning: [
        "Ei voi pärjätä kun",
        "Ei vaa pärjää koska",
        "Ihan mahdoton matsi kun",
        "Miten tässä muka voittaa kun",
        "Kuka tahansa häviäis kun"
    ],
    middle: [
        "toi rotta Spiderman",
        "se typerä Wolverine",
        "se tuliäijä (Human Torch)",
        "toi Iron Fist",
        "toi meta-pelle",
        "toi tryhard pelaaja",
        "vastustajan broken hahmo",
        "toi spam-kunkku"
    ],
    end: [
        "on ihan järjettömän OP.",
        "spammaa samaa comboo.",
        "käyttää vaan broken movesetiä.",
        "pelaa noin tyhmästi.",
        "ei osaa pelata ku yhtä hahmoa.",
        "on niin helppo pelata.",
        "tarvii pikanerf patchin.",
        "on ihan skill issue."
    ]
};

function generateExcuse() {
    const beginning = excuseElements.beginning[Math.floor(Math.random() * excuseElements.beginning.length)];
    const middle = excuseElements.middle[Math.floor(Math.random() * excuseElements.middle.length)];
    const end = excuseElements.end[Math.floor(Math.random() * excuseElements.end.length)];
    
    return `${beginning} ${middle} ${end}`;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    const excuse = generateExcuse();
    document.getElementById('excuse').textContent = excuse;
});