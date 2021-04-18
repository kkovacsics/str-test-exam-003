/* 
 * megkeres az oldalon minden `example` osztályba tartozó elemet és két stílust 
 * állít be rájuk JAVASCRIPT segítségével: háttérszín `red` és font stílus `italic`.
 */
function changeElements() {
    const elems = document.querySelectorAll('.example');
    elems.forEach(elem => {
        elem.style.backgroundColor = 'red';
        elem.style.fontStyle = 'italic';
    })
}


export { changeElements };