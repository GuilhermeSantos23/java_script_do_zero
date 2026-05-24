let idade = 14;

if (idade>=16)
{
    console.log("Você pode votar!");
}
else
{
    console.log("Você ainda é muito novo, infelizmente ainda não pode votar!");
}
//parte1
//////////////////////////////////////////////////////////////////////////////////////
let dia_da_semana = "Sábado";

switch (dia_da_semana)
{
    case "Segunda-Feira": console.log("Hoje é Segunda-feira");
    break;
    case "Terça-Feira": console.log("Hoje é Terça-feira");
    break;
    case "Quarta-Feira": console.log("Hoje é Quarta-feira");
    break;
    case "Quinta-Feira": console.log("Hoje é Quinta-feira");
    break;
    case "Sexta-Feira": console.log("Hoje é Sexta-feira");
    break;
    case "Sábado": console.log("Hoje é Sábado");
    break;
    case "Domingo": console.log("Hoje é Domingo");
    break;
    default: console.log("Dia da semana inexistente!");
}
