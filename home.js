var values = [];
//numero de linhas de cores da paleta
var numLines = 2000;
var sortHist = [];
//A função setup() é executada uma vez, quando o programa é iniciado. Ele é usado para definir as propriedades iniciais do ambiente, como tamanho da tela, e para carregar mídia, como imagens e fontes, à medida que o programa é iniciado. 
function setup() {
  //define as dimensões dele em pixels.
  createCanvas(900, 600, P2D);
  //Altera a maneira como o Processing interpreta os dados de cores.
  colorMode(HSB, height);
  for (i = 0; i < numLines; i++) {
    values[i] =random(height);
  }
  sortHist = mergeSort(values);
  
  
  frameRate(1);
}
  
var historyIndex = 0;
// Chamada diretamente após setup() , a função draw() executa continuamente as linhas de código contidas em seu bloco até que o programa seja interrompido ou noLoop()
function draw() {
  //define a cor usada para o plano de fundo da janela Processing
  background(15);
  for (i = 0; i < sortHist[historyIndex].length; i++) {
    let col = color(sortHist[historyIndex][i], height, height);
    //Define a cor usada para desenhar linhas e bordas ao redor das formas
    stroke(col);
    //Define a cor usada para preencher as formas
    fill(col);
    var location = map(i, 0, sortHist[historyIndex].length, 0, width);
    rect(location, height - sortHist[historyIndex][i], width/numLines, height);
  } 
  historyIndex++;
  if (historyIndex > sortHist.length -1){
    //Interrompe o Processing de executar continuamente o código dentro do draw()
    noLoop();
  }
}
//função de ordenação recursiva que ordena as duas metades do vetor e usa a estratégia de divisão e conquista
function mergeSort(array) {
  var arrays = [array.slice()],
  n = array.length,
  array0 = array,
  array1 = new Array(n);

  for (var m = 1; m < n; m <<= 1) {
    for (var i = 0; i < n; i += (m << 1)) {
      merge(i, Math.min(i + m, n), Math.min(i + (m << 1), n));
    }
    arrays.push(array1.slice());
    array = array0, array0 = array1,array1 = array;
  }

function merge(left, right, end) {
  for (var i0 = left, i1 = right, j = left; j < end; ++j) {
    array1[j] = array0[i0 < right && (i1 >= end || array0[i0] <=    array0[i1]) ? i0++ : i1++];
   }
 }
 return arrays;
}