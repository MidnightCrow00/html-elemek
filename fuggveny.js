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
    let txt = ""
    for (let index = 0; index < LISTA.length; index++) {
        txt += `<div class='szemely'>`
        txt += ` <h3> név: ${LISTA[index].nev}</h3>
        <p>  kor: ${LISTA[index].kor} tel: ${LISTA[index].tel} barát: ${LISTA[index].barat}</p>`
        txt += "</div>"
    }
    console.log(txt)
    return txt
}
export function tablazatbaHelyezes(LISTA){
    let txt = ""
    for (let index = 0; index < LISTA.length; index++) {
        txt += `<table>`
        txt += ` <h3> név: ${LISTA[index].nev}</h3>
        <p>  kor: ${LISTA[index].kor} tel: ${LISTA[index].tel} barát: ${LISTA[index].barat}</p>`
        txt += "</table>"
    }
    console.log(txt)
    return txt
}

