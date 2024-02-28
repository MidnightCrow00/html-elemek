export function listaKiir(LISTA){
    for (let index = 0; index < LISTA.length; index++) {
        console.log(`${LISTA[index].nev} tel: ${LISTA[index].tel}`)
    }
}

export function listaOsszeallit(LISTA){
    let txt = "<ul>"
    for (let index = 0; index < LISTA.length; index++) {
        txt += ` <li> ${LISTA[index].nev} tel: ${LISTA[index].tel}</li>`
    }
    txt += "</ul>"
    console.log(txt)
    return txt
}

export function kartyabaHelyezes(LISTA){
    let txt = "";
    for (let index = 0; index < LISTA.length; index++) {
        txt += `<div class='szemely'>`;
        txt += ` <h3>Név: ${LISTA[index].nev}</h3>`;
        txt += ` <p>Kor: ${LISTA[index].kor}</p>`;
        txt += ` <p>Tel: ${LISTA[index].tel}</p>`;
        txt += ` <p>Barát: ${LISTA[index].barat}</p>`;
        txt += "</div>";
    }
    return txt;
}

export function tablazatbaHelyezes(LISTA){
    let txt = "<table>";
    txt += "<tr>";
    txt += "<th>Név</th><th>Kor</th><th>Tel</th><th>Barát</th>";
    txt += "</tr>";
    for (let index = 0; index < LISTA.length; index++) {
        txt += "<tr>";
        txt += `<td>${LISTA[index].nev}</td>`;
        txt += `<td>${LISTA[index].kor}</td>`;
        txt += `<td>${LISTA[index].tel}</td>`;
        txt += `<td>${LISTA[index].barat}</td>`;
        txt += "</tr>";
    }
    txt += "</table>";
    return txt;
}


