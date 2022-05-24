const joaoAltura = 1.73;
const joaoPeso = 61;
const mariaAltura = 1.67;
const mariaPeso = 53;

const calcularIMC = (peso, altura) => {
    return peso / altura ** 2;
};

const IMCjoao = calcularIMC(joaoPeso, joaoAltura);
const IMCMaria = calcularIMC(mariaPeso, mariaAltura);

if (IMCjoao > IMCMaria) {
    console.log(true);
} else {
    console.log(false);
} 
