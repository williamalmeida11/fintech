const clientes = ["`Samuel", "Joana",];
 
for (item of clientes){
    console.log("`cliente: " + item);
 
}
 
clientes.push ("``Matheus");
console.log("`Adicionado mais um cliente");
for (item of clientes){
    console.log("`cliente: " + item);
}
 