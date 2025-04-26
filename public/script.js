document.addEventListener('DOMContentLoaded', function() {
    const potionDisplay = document.getElementById('potion-display');
    const btnRed = document.getElementById('btn-red');
    const btnGreen = document.getElementById('btn-green');
    const btnBlue = document.getElementById('btn-blue');
    const btnReset = document.getElementById('btn-reset');

    function changePotionColor(color) {
        potionDisplay.style.backgroundColor = color;
    }

    function resetPotion() {
        potionDisplay.style.backgroundColor = 'lightgray';
    }

    btnRed.addEventListener('click', function() {
        changePotionColor('red');
    });

    btnGreen.addEventListener('click', function() {
        changePotionColor('green');
    });

    btnBlue.addEventListener('click', function() {
        changePotionColor('blue');
    });

    btnReset.addEventListener('click', function() {
        resetPotion();
    });
});
