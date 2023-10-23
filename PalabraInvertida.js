export default class PalabraInvertida 
{
    constructor() 
    {
        this.inputElement = document.getElementById('inputWord');
        this.outputElement = document.getElementById('output');
        this.reverseButton = document.getElementById('reverseButton');
        
        this.reverseButton.addEventListener('click', this.invertirPalabra.bind(this));
    }

    invertirPalabra() 
    {
        const palabra = this.inputElement.value;

        const palabraInvertida = palabra.split('').reverse().join('');

        this.outputElement.textContent = `Palabra Invertida: ${palabraInvertida}`;
    }
}
