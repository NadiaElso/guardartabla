const productos: string[] = new Array(5);

productos[0] = "Azucar";
productos[1] = "Yerba";
productos[2] = "Harina";
productos[3] = "Aceite";
productos[4] = "Manteca";
for (let index = 0; index < productos.length; index++) {
  const productoss = document.createElement("tr");

  const celda = document.createElement("td");
  celda.textContent = productos[index];
  productoss.appendChild(celda);
  console.log(productoss);
  console.log(celda);
}

const precio: number[] = new Array(5);
precio[0] = 100;
precio[1] = 100;
precio[2] = 100;
precio[3] = 100;
precio[4] = 100;
for (let index = 0; index < precio.length; index++) {
  const precios = document.createElement("tr");

  const celda = document.createElement("td");
  celda.textContent = precio[index];
  precios.appendChild(celda);
  console.log(precios);
  console.log(celda);
}

const stock: number[] = new Array(5);

stock[0] = 10;
stock[1] = 10;
stock[2] = 10;
stock[3] = 10;
stock[4] = 10;
for (let index = 0; index < stock.length; index++) {
  const stocks = document.createElement("tr");

  const celda = document.createElement("td");
  celda.textContent = stock[index];
  stocks.appendChild(celda);
  console.log(stocks);
  console.log(celda);
}

const encabezados: string[] = new Array(3);
encabezados[0] = "Productos";
encabezados[1] = "Precio";
encabezados[2] = "Stock";
for (let index = 0; index < encabezados.length; index++) {
  const tabla = document.getElementById("table");
  const headers = document.createElement("th");
  tabla?.appendChild(headers);
  headers.textContent = encabezados[index];
  console.log(headers);
  console.log(tabla);
}
