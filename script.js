/*2372057 Maria Adriellia C*/
document.getElementById('kelas').addEventListener('change', function() {
    let pilihkelas = this.value;
    let fotokelas = document.getElementById('fotoKelas');

    if (pilihkelas === 'A') {
        fotokelas.src = 'images/a.jpg';
    } else if (pilihkelas === 'B') {
        fotokelas.src = 'images/b.jpg';
    } else if (pilihkelas === 'C') {
        fotokelas.src = 'images/c.jpg';
    } else if (pilihkelas === '') {
        alert('Ayo pilih dulu kelas favouritenya donk!');
    }
});