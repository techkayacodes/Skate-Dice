function rollDice() {
    const diceSides = [
        ['Kickflip', 'Heelflip', 'Ollie', 'Pop Shove-it'], // Add other flip tricks here
        ['FS', 'BS'],
        ['180', '360'],
        ['Regular', 'Switch', 'Fakie', 'Nollie']
    ];

    const diceElements = document.querySelectorAll('.dice');

    diceElements.forEach((dice, index) => {
        const randomIndex = Math.floor(Math.random() * diceSides[index].length);
        dice.textContent = diceSides[index][randomIndex];
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const diceElements = document.querySelectorAll('.dice');
    diceElements.forEach(dice => {
        dice.addEventListener('click', rollDice);
    });

    const rollButton = document.getElementById('rollButton');
    rollButton.addEventListener('click', () => {
        const diceElements = document.querySelectorAll('.dice');
        diceElements.forEach(dice => {
            dice.style.animation = 'rollAnimation 1s ease-out';
        });
        setTimeout(() => {
            diceElements.forEach(dice => {
                dice.style.animation = '';
            });
            rollDice();
        }, 1000); // Adjust this time (in milliseconds) for the duration of the animation
    });
});
