function encontrarMaiorElemento<T extends number | string>(array: T[]): T {
    if (array.length === 0) {
      throw new Error("O array não pode estar vazio.");
    }
  
    let maior = array[0];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maior) {
        maior = array[i];
      }
    }
  
    return maior;
  }
  

  const maiorNumero = encontrarMaiorElemento([15, 25, 40]); 
  const maiorPalavra = encontrarMaiorElemento(['hamster', 'Hipopótamo', 'lhama']);
  
  console.log(maiorNumero); 
  console.log(maiorPalavra); 
  