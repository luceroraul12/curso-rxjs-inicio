interface Factura{
    id: number;
    nombre: string;
}

interface Pago{
    id: number;
    factura: Factura;
}


let facturas: Factura[] = [
    {id: 1, nombre: "carrefour"},
    {id: 2, nombre: "movistar"},
    {id: 3, nombre: "vea"},
    {id: 4, nombre: "naranja"},
    {id: 5, nombre: "Europa"}
]

let pagos: Pago[] = [
    {id: 1, factura: {id: 1, nombre: "carrefour"}},
    {id: 2, factura: {id: 2, nombre: "movistar"}},
    {id: 3, factura: {id: 3, nombre: "vea"}},
    {id: 4, factura: {id: 1, nombre: "carrefour"}},
    {id: 5, factura: {id: 3, nombre: "vea"}},
    {id: 6, factura: {id: 2, nombre: "movistar"}},
]

let facturasAsociadas: Factura[] = pagos
                                    .map(p => p.factura)
                                    .map((f) => facturas.filter(fTotal => f.id == fTotal.id)[0]);

let setFacturasAsociadas: Factura[] = Array.from(new Set(facturasAsociadas));

let facturasRestantes: Factura[] = facturas.filter(f => !setFacturasAsociadas.includes(f));

console.log("facturas totales", facturas);
console.log("\npagos totales", pagos);

console.log("\nfacturas asociadas a los pagos en list", facturasAsociadas);
console.log("\nfacturas asociadas pero en set", setFacturasAsociadas);
console.log("\nfacturas restantes", facturasRestantes);




