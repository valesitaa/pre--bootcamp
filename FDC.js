function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
//muestra un arreglo frozen; brocoli, helado y croqueta de papa//

function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

//la funcion te muestra el arreglo completo//
var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

/*
muestra un arreglo movielibrary; bambi, beetlejuice, toy story, zoro

    ----Diagrama en T-----

Variable                  Valor 
frozen;                   brocoli,helado
frozen;                   brocoli, helado, croqueta de papa
auntContactInfo;          Paula, Smith, Calle principal 1234, St.Louis, Mo, 12334
movieLubrary;             Bambi, E.T., Toy Story
movieLibrary;             Bambi, E.T., Toy Story, Zoro
movieLibrary;             Bambi, beetlejuice, Toy Story, Zoro
*/