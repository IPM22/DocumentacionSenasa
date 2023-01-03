---
sidebar_position: 3
---

# Generación de autorización

Este método **POST** será utilizado para generar una autorización, el cual procesará los datos enviados por RDF y hará las validaciones correspondientes para emitir una autorización de medicamentos proveniente desde SeNaSa.

:::info

Antes de utilizar este servicio se tiene que poseer un **token de acceso** para que sea suministrado en la cabecera **Authorization**. Este token lo puedes poseer en el servicio [Autenticación](/docs/gestion-medicamentos/autenticacion.md).

:::

## Endpoint

```
{{Servidor}}/Autorizacion/Autorizar
```

:::note

La palabra **{{Servidor}}** se sustiye por el nombre de servidor del ambiente que vaya a utilizarse.

:::

## Parametros

| Parametro         | Descripción                                                                              |
| ----------------- | ---------------------------------------------------------------------------------------- |
| CodigoFarmacia    | Código de proveedor de la farmacia(establecido en el catálogo de prestadores de SeNaSa). |
| ContratoAfiliado  | Código de contrato del afiliado dentro de SeNaSa.                                        |
| Medicamentos      | Listado de medicamentos que quieren ser autorizados.                                     |
| CodigoProgramaPyP | Código del programa PyP al que pertenece el afiliado.                                    |
| Telefono          | Numero telefónico del afiliado.                                                          |

:::info

Si eliges utilizar el [tipo de documento ](#tipo-de-documento) cedula, la misma debe ser suministrada con guiones.

:::

### Medicamentos

| Parametro   | Descripción                                                                               |
| ----------- | ----------------------------------------------------------------------------------------- |
| simon       | Correspondiente al número de autorización perteneciente al sistema que hace la solicitud. |
| Cantidad    | Código de proveedor de la farmacia(establecido en el catálogo de prestadores de SeNaSa).  |
| Precio      | Código de contrato del afiliado dentro de SeNaSa.                                         |
| Descripcion | Listado de medicamentos que quieren ser autorizados.                                      |

```
{

   "CodigoFarmacia": "123456",
   "ContratoAfiliado": "123456",
   "Medicamentos": [
     {
       "simon": "14021",
       "Cantidad": 2,
       "Precio": 13,
       "Descripcion": "Acetaminofen - Alfa 300 mg 1 Tabletas"
     }
   ],
   "CodigoProgramaPyP": 0,
   "Telefono":000000000
}
```

## Datos de Salida

Al realizar la solicitud, retorna los siguientes valores:

| Campo                 | Tipo     | Descripción                                                                                                        |
| --------------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| CodigoAutorizacion    | Numérico | Código de la autorización proveniente de SeNaSa.                                                                   |
| MontoCopago           | Decimal  | Monto a pagar por el afiliado.                                                                                     |
| MontoAutorizado       | Decimal  | Monto de cobertura proveniente de SeNaSa.                                                                          |
| TotalFactura          | Decimal  | Monto total de la factura.                                                                                         |
| CodError              | Texto    | Código del error generado dentro de SeNaSa.                                                                        |
| Mensaje               | Texto    | Mensaje correspondiente a la autorización y su procesamiento.                                                      |
| MensajeDisponibilidad | Texto    | Detalle de medicamentos no disponibles en caso de que aplique.                                                     |
| ErrorNumber           | Fecha    | Código de error enviado por el api.                                                                                |
| ErrorMessage          | Numérico | Mensaje enviado por el api, aplica para excepciones de flujo, conexión y disponibilidad del servicio del afiliado. |

```
{
    "CodigoAutorizacion": 123456789,
    "CodError": 1,
    "MontoCopago": 50.00,
    "MontoAutorizado": 250.00,
    "TotalFactura": 50.00,
    "Mensaje": "Autorización emitida satisfactoriamente",
    "MensajeDisponibilidad": "",
    "ErrorNumber": 0,
    "ErrorMessage": null
}
```
