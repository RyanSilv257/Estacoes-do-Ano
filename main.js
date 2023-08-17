let mes = new Date().getMonth()+1;
let dia = new Date().getDate();


if (mes == 1 || mes == 2|| mes == 3) {
    if (mes == 3 && dia >= 20){
    document.write("Outono")
    } else {
    document.write("Verão")
    }
} else if (mes == 4 || mes == 5|| mes == 6) {
    if (mes == 6 && dia >= 21){
    document.write("Inverno")
    } else {
    document.write("Outono")
    }
} else if (mes == 7 || mes == 8|| mes == 9) {
    if (mes == 9 && dia >= 23){
    document.write("Primavera")
    } else {
    document.write("Inverno")
    }
} else if (mes == 10 || mes == 11 || mes == 12) {
    if (mes == 12 && dia >= 22){
    document.write("Verão")
    } else {
    document.write("Primavera")
    }
} 

