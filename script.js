const excuseElements = {
    beginning: [
        "Bruh ei täs mitää ku",
        "Omg miten muka voittaa ku",
        "Ei vitsi tää on nii broken ku",
        "Iha ez matsi mut",
        "Nyt on kyl iha sus ku",
        "No cap mut",
        "Fr fr miten",
        "Ong bro miten",
        "Npc moment ku",
        "Iha skill issue mut"
    ],
    middle: [
        "toi wannabe pro spiderman",
        "toi noob wolverine",
        "toi 0 skill iron fist",
        "joku random human torch main",
        "toi äitin kellarista pelaava tryhard",
        "toi elämätön spammeri",
        "toi 24/7 pelaava hiki",
        "toi meta slave",
        "toi default skin andy",
        "toi 5€ gaming chair pelaaja",
        "toi mäkkärin wifi käyttäjä",
        "toi fortnite kid",
        "toi rage quittaaja",
        "toi aim assist abuser",
        "toi pay2win pelaaja"
    ],
    end: [
        "käyttää sitä samaa OP comboo fr fr.",
        "ei tee mitää muuta ku spammaa nappia smh.",
        "on nii cringe et ei jaksa ees.",
        "ei koske ruohoa ikinä irl.",
        "ei osaa pelaa mitää muuta hahmoo no cap.",
        "on nii carried tolla hahmolla.",
        "ei oo ikin kuullu koskettaneensa ruohoa.",
        "on varmaa ostanu accountin ebaystä.",
        "käyttää varmaa jotai chettei fr.",
        "on legit nii carried.",
        "pelaa iha pepega modella.",
        "on iha different breed fr fr.",
        "ei oo nähny päivänvaloa 5 vuoteen.",
        "grindaa rankkii 24/7 niiku joku npc.",
        "käyttää sitä samaa meta loadouttii.",
        "on varmaa joku 12v fortnite kid.",
        "ei oo mitää real skill fr fr.",
        "on iha maidenless behavior.",
        "käyttää sitä samaa one shot buildia.",
        "ei osaa pelaa ilman meta hahmoo smh."
    ]
};

let score = 0;
let currentExcuse = {};

function generateExcuse() {
    // Generoi kaikki osat, mutta tallenna ne objektiin
    currentExcuse = {
        beginning: excuseElements.beginning[Math.floor(Math.random() * excuseElements.beginning.length)],
        middle: excuseElements.middle[Math.floor(Math.random() * excuseElements.middle.length)],
        end: excuseElements.end[Math.floor(Math.random() * excuseElements.end.length)]
    };
    
    return `${currentExcuse.beginning} ${currentExcuse.middle} ${currentExcuse.end}`;
}

function guessExcusePart(part, playerGuess) {
    if (currentExcuse[part] === playerGuess) {
        score += 1;
        document.getElementById('score').textContent = `Pisteet: ${score}`;
        return true;
    }
    return false;
}

document.getElementById('generate-btn').addEventListener('click', () => {
    const excuse = generateExcuse();
    document.getElementById('excuse').textContent = excuse;
});