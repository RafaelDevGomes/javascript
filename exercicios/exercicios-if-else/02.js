var nota = 11
console.log('Bem-vindo ao sistema de notas do colégio.')
console.log(`Sua nota é: ${nota}`)

if (nota > 10 || nota < 0) {
    console.log('Você digitou uma nota inválida.')
} else if (nota >= 9) {
    console.log('Meus parabéns campeão! honra adquirida 🏅🥇')
} else if (nota >= 7) {
    console.log('Passou, parabéns.')
} else if(nota >= 5) {
    console.log('Você ficou em recuperação, contate o professor da matéria para realizar a recuperação.')
}  else {
    console.log('Você digitou uma nota inválida.')
}
