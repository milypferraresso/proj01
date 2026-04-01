let valorCompra = prompt("Digite o valor da compra:");

if (valorCompra >= 100) {
    let desconto = valorCompra * 0.1;
    let valorComDesconto = (valorCompra - desconto)
    alert("Desconto: R$" + desconto);
    alert("Total com desconto: R$ " + valorComDesconto);
}else {
    alert("Valor sem desconto" + valorCompra);
}