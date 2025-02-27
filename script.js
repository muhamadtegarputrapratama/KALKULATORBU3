document.getElementById('calculate').addEventListener('click', function() {
    const firstTerm = parseFloat(document.getElementById('firstTerm').value);
    const commonDifference = parseFloat(document.getElementById('commonDifference').value);
    const numberOfTerms = parseInt(document.getElementById('numberOfTerms').value);
    let sum = 0;

    for (let i = 0; i < numberOfTerms; i++) {
        sum += firstTerm + i * commonDifference;
    }

    document.getElementById('result').innerHTML = 
        `Jumlah: ${sum}`;
});

document.getElementById('calculateGeo').addEventListener('click', function() {
    const firstTerm = parseFloat(document.getElementById('firstTermGeo').value);
    const commonRatio = parseFloat(document.getElementById('commonRatio').value);
    const numberOfTerms = parseInt(document.getElementById('numberOfTermsGeo').value);
    let sum = 0;

    for (let i = 0; i < numberOfTerms; i++) {
        sum += firstTerm * Math.pow(commonRatio, i);
    }
    document.getElementById('resultGeo').innerHTML = 
        `Jumlah: ${sum}`;
});

document.getElementById('calculateInfGeo').addEventListener('click', function() {
    const firstTerm = parseFloat(document.getElementById('firstTermInfGeo').value);
    const commonRatio = parseFloat(document.getElementById('commonRatioInfGeo').value);
    let result;

    if (Math.abs(commonRatio) < 1) {
        result = firstTerm / (1 - commonRatio);
        document.getElementById('resultInfGeo').innerHTML = 
            `Jumlah: ${result}`;
    } else {
        document.getElementById('resultInfGeo').innerHTML = 
            `Rasio harus kurang dari 1 dalam nilai absolut untuk konvergensi.`;
    }
});

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 5 + 5; 
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`; 
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, 5000);
}

console.log("Creating star...");
setInterval(createStar, 300);