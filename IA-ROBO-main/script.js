const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Quis saber como usar IA no seu dia a dia."
            }
        ]
    },
    {
        enunciado: "Você acredita que a inteligência artificial terá um impacto positivo no mercado de trabalho, criando mais empregos do que eliminando?",
        alternativas: [
            {
                texto: "Sim, a IA trará mais oportunidades e impulsionará novas indústrias..",
                afirmacao: "A IA fará surgir novas oportunidades de trabalho."
            },
            {
                texto: "Não, a IA eliminará mais empregos tradicionais do que será capaz de criar.",
                afirmacao: "A IA não criará novas oportunidades de trabalho e substituirá os trabalhadores."
            }
        ]
    },
    {
        enunciado:"  É seguro que a IA tome decisões importantes, como diagnósticos médicos?  " ,
        alternativas: [
            {
                texto: "Sim, ela pode ser mais precisa do que humanos.",
                afirmacao: "A IA pode analisar grandes volumes de dados e apresentar diagnósticos rápidos."
            },
            {
                texto: "Não, há riscos de erros e falta de empatia.",

                afirmacao: "Não, Erros em sistemas de IA podem ter consequências graves e não substituem a experiência humana."

            }
        ]
    },
    {
        enunciado: "Na sua opinião os governos devem regular o desenvolvimento de IA?  ",
        alternativas: [
            {
                texto: "Sim, para evitar abusos e desigualdades.",
                afirmacao: "Regulamentar a IA pode garantir segurança, ética e justiça"
            },
            {
                texto: " Não, a inovação pode ser prejudicada por regulações.", 
                afirmacao: " Regras rígidas podem limitar a criatividade e os avanços tecnológicos."
            }
        ]
    },
    {
        enunciado: "Você acha que a IA será mais benéfica para trabalhadores ou empresas?  ",
        alternativas: [
            {
                texto: "Beneficiará os trabalhadores.",
                afirmacao: "Trabalhadores: A IA pode facilitar tarefas repetitivas e criar novas oportunidades de aprendizado e crescimento."
            },

            {
                texto: " Beneficiará as empresas.",
                afirmacao: "Empresas: A IA pode aumentar lucros e eficiência, mas pode priorizar automação sobre empregos humanos."
 
            }
        ]
    }
];


let atual = 2;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
