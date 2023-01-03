---
sidebar_position: 7
---

# Consulta de reclamaciones

Este método **GET** será utilizado para consultar reclamaciones, el cual procesará los datos enviados por RDF y hará las validaciones correspondientes para emitir la consulta de reclamación hacia SeNaSa.

:::info

Antes de utilizar este servicio se tiene que poseer un **token de acceso** para que sea suministrado en la cabecera **Authorization**. Este token lo puedes poseer en el servicio [Autenticación](/docs/gestion-medicamentos/autenticacion.md).

:::

## Endpoint

```
{{Servidor}}/Reclamacion/ConsultarReclamacion
```

:::note

La palabra **{{Servidor}}** se sustiye por el nombre de servidor del ambiente que vaya a utilizarse.

:::

## Parametros

| Parametro      | Tipo     | Descripción                                  |
| -------------- | -------- | -------------------------------------------- |
| NumReclamacion | Numérico | Campo de usuario identificador de la sesión. |

```
{
    "NumReclamacion" :1101
}
```

## Datos de Salida

Al realizar la solicitud, retorna los siguientes valores:

| Campo                           | Tipo     | Descripción                                                         |
| ------------------------------- | -------- | ------------------------------------------------------------------- |
| CodigoFarmacia                  | Numérico | Campo de usuario identificador de la sesión.                        |
| UsuarioFarmacia                 | Numérico | Campo de contraseña para identificación del usuario para la sesión. |
| RNC                             | Texto    | Campo identificador del método para inicio de sesión.               |
| NCF                             | Texto    | Numero de comprobante fiscal de la factura.                         |
| FechaFactura                    | Fecha    | Fecha en que se recibe la factura.                                  |
| FechaRecepcion                  | Fecha    | Fecha de la factura.                                                |
| Total                           | Decimal  | Monto total a reclamar                                              |
| [Reclamaciones](#reclamaciones) | Listado  | Listado de reclamaciones con sus datos, formato JSON.               |

### Reclamaciones

| Parametro          | Tipo     | Descripción                                                                                                             |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| CodigoAutorizacion | Numérico | Numero de la autorización que se reclama.                                                                               |
| MontoReclamado     | Decimal  | Monto de la autorización.                                                                                               |
| MotivoObjecion     | Texto    | En caso de necesitar objetar una reclamación, deberá indicar el código de motivo (Proveniente del catálogo de motivos). |

```
{
    "CodError": 1000,
    "Mensaje": "Reclamación registrada satisfactoriamente",
    "CodigoCargue": 123456,
    "NumReclamacion": 1279,
    "DetalleReclamacion": {
        "CodigoFarmacia": 16775,
        "UsuarioFarmacia": 55,
        "RNC": "123456590",
        "NumeroFactura": 0,
        "NCF": "94216989803",
        "Fecha": "2020-01-02T00:00:00",
        "Total": 3850.0,
        "Reclamaciones": [
            {
                "CodigoAutorizacion": 123456,
                "MontoReclamado": 1925.00,
                "MotivoObjecion": 0,
                "MontoObjetado": 0.00,
                "CodError": 0,
                "Mensaje": null,
                "IdEstado": 1,
                "Estado": "Aceptada",
	  "EstadoAutorizacion": “Cerrada”,
                "ErrorNumber": 0,
                "ErrorMessage": null
            },
            {
                "CodigoAutorizacion": 123456,
                "MontoReclamado": 1925.00,
                "MotivoObjecion": 1025,
                "MontoObjetado": 1925.00,
                "CodError": 0,
                "Mensaje": "Medicamento no especifica cantidad y/o días de tratamiento.",
                "IdEstado": 1,
                "Estado": "Aceptada",
                "EstadoAutorizacion": “Cerrada”,
                "ErrorNumber": 0,
                "ErrorMessage": null
            }
        ],
        "CodError": 1000,
        "Mensaje": "Reclamación registrada satisfactoriamente",
        "CodigoCargue": 123
    }
}

```
