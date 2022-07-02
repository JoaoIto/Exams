function imprimeMatrizTabular(matriz) {
    let string = "";
  
    for (let line = 0; line < matriz.length; line++) {
      for (let column = 0; column < matriz[line].length; column++) {
        const element = matriz[line][column];
        string += `${element}\t`;
      }
       string += `\n`;
    }
  
    console.log(string);
  }

  console.log(imprimeMatrizTabular())
  /////////////////////////////////////////////////////////////////////////
/*
  function somaMatrizes (matriz1, matriz2) {
    
    var list = [];
    
    for (var line = 0; line < matriz1.length; line++) {
        var temp = [];
        for (var column = 0; column < matriz1[line].length; column++) {
            temp[column]=(matriz1[line][column]+matriz2[line][column])
        }
        list[line]=temp
    }
    return list
}

*/