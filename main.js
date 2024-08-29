const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
        enunciado: "luana uma menina de 17 anos que foi abusada pelo padrasto e acabou engravidando se voce fosse luana o que voce faria? 
        alternativas: [
            {
                texto:"seguiria a gravidez endesejada tendo que cuidar de algo que voce no quis ",
                afirmacao: "luana seguiu sua gravidez"
            },
            {
                texto:"optaria por um aborto seguro",
                afirmacao: "luana conversou com sua mae sobre abortar "
            }   
        ]
    },
    {
        enunciado: "voce acha que luana e sua mae deviriam ir ate a clinica ?",
        alternativas: [
            {
                texto: "sim eu acho que deve ",
                afirmacao: "luana e sua mae vao ate a clinica no meio do caminho elas pensam em desistir  "
            },
            {
                texto: "nao elas nao devem ir ",
                afirmacao: "elas nao vao,"
            }
        ]
    },
    {
        enunciado: "ana deve mesmo abortar",
        alternativas: [
            {
                texto: "sim pois esa criança pode acabar com a vida dela ",
                afirmacao: ""
            },
            {
                texto: "alternativa 06",
                afirmacao: "resultado 06"
            }
        ]
    },
    {
        enunciado: "Enunciado 04",
        alternativas: [
            {
                texto: "alternativa 07",
                afirmacao: "resultado 07"
            },
            {
                texto: "alternativa 08",
                afirmacao: "resultado 08"
            }
        ]
    },
    {
        enunciado: "Enunciado 05",
        alternativas: [
            {
                texto: "alternativa 09",
                afirmacao: "resultado 09"
            },
            {
                texto: "alternativa 10",
                afirmacao: "resultado 10"
            }
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostrarPerguntas(){
    if(atual >= perguntas.length){
        mostraResultado();
        return
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = ""
    mostrarAlternativas();
}

function mostrarAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostrarPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = " Inicio do texto... "
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();