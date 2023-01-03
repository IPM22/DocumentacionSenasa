---
sidebar_position: 4
---

# Anulación autorización

Este método **POST** será utilizado para anular una autorización, el cual procesará los datos enviados por el solicitante y hará las validaciones correspondientes para anular una autorización de medicamentos previamente emitida desde SeNaSa.

:::info

Antes de utilizar este servicio se tiene que poseer un **token de acceso** para que sea suministrado en la cabecera **Authorization**. Este token lo puedes poseer en el servicio [Autenticación](/docs/gestion-medicamentos/autenticacion.md).

:::

## Endpoint

```
{{Servidor}}/AuthenticateUser
```

:::note

La palabra **{{Servidor}}** se sustiye por el nombre de servidor del ambiente que vaya a utilizarse.

:::

## Parametros

| Parametro          | Descripción                                                         |
| ------------------ | ------------------------------------------------------------------- |
| CodigoFarmacia     | Campo de usuario identificador de la sesión.                        |
| CodigoAutorizacion | Campo de contraseña para identificación del usuario para la sesión. |
| MotivoAnulacion    | Campo identificador del método para inicio de sesión.               |

```
{
"CodigoFarmacia": 123,
"CodigoAutorizacion":123456789,
"MotivoAnulacion": "Aqui el motivo"
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
    "CodigoAutorizacion": 0,
    "CodError": 0,
    "MontoCopago": 0.0,
    "MontoAutorizado": 0.0,
    "TotalFactura": 0.0,
    "Mensaje": null,
    "MensajeDisponibilidad": null,
    "ErrorNumber": 0,
    "ErrorMessage": "La Autorización ya ha sido anulada exitosamente"
}

```

:::info

Existe un tiempo limite para poder anular una autorización de **72 horas** despues de ser emitida, por lo cual es necesario realizar este proceso antes te este tiempo limite.

:::
