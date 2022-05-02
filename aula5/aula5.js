converter = () => {
    let real = document.getElementById('real').value;
    let valorReal = parseFloat(real);
    let euro = document.getElementById('euro').value;
    let valorEuro = parseFloat(euro)
    let dolar = document.getElementById('dol').value;
    let valorDolar = parseFloat(dolar)

    if (real.length == 0 && ! isNaN(real)){
        alert('Digite um valor!')
    }else {
        document.getElementById('euro').value = `${valorReal * 5.15}`
        document.getElementById('dol').value = `${valorReal * 4.50}`
    }
}

limpar = () => {
    let real = document.getElementById('real').value;
    let euro = document.getElementById('euro').value;
    let dolar = document.getElementById('dol').value;

    document.getElementById('real').value = ''
    document.getElementById('dol').value = '' 
    document.getElementById('euro').value = ''
}