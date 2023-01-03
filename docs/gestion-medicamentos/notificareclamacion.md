---
sidebar_position: 6
---

# Notificación de reclamaciones

Este método **POST** será utilizado para notificar reclamaciones, el cual procesará los datos enviados por RDF y hará las validaciones correspondientes para emitir una notificación de reclamación hacia SeNaSa.

:::info

Antes de utilizar este servicio se tiene que poseer un **token de acceso** para que sea suministrado en la cabecera **Authorization**. Este token lo puedes poseer en el servicio [Autenticación](/docs/gestion-medicamentos/autenticacion.md).

:::

## Endpoint

```
{{Servidor}}/Reclamacion/Notificar
```

:::note

La palabra **{{Servidor}}** se sustiye por el nombre de servidor del ambiente que vaya a utilizarse.

:::

## Parametros

| Parametro                       | Tipo     | Descripción                                                         |
| ------------------------------- | -------- | ------------------------------------------------------------------- |
| CodigoFarmacia                  | Numérico | Codigo Identificador de una Reclamacion.                            |
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
   "CodigoFarmacia":1234,
   "UsuarioFarmacia":123,
   "RNC":123456789,
   "NCF":94236989868,
   "FechaFactura":"2022-01-02",
   "FechaRecepcion":"2022-01-02",
   "Total":4.2,
   "Reclamaciones":[
      {
        "CodigoAutorizacion":123456789,
        "MontoReclamado":0.70,
        "MotivoObjecion":0
      },
      {
        "CodigoAutorizacion":123456798,
        "MontoReclamado":0.70,
        "MotivoObjecion":0
      }

   ]
}
```

### Motivos de Objeción

Esta es una lista de los motivos de objeción catalogados en nuestro sistema.

| Codigo | Descripción                                                                   |
| ------ | ----------------------------------------------------------------------------- |
| 1011   | Indicación sin sello.                                                         |
| 1012   | indicación sin firma del médico.                                              |
| 1013   | indicación sin fecha.                                                         |
| 1014   | indicación sin membrete.                                                      |
| 1015   | indicación sin nombres del afiliado.                                          |
| 1016   | indicación con tachadura y/o liquido corrector.                               |
| 1017   | indicación con diferentes tipos de tintas en el bolígrafo.                    |
| 1018   | indicación con diferentes tipografías.                                        |
| 1019   | indicación sin exequatur del médico.                                          |
| 1020   | Firma en sello no valida.                                                     |
| 1021   | Fecha alterada.                                                               |
| 1022   | Firma alterada.                                                               |
| 1023   | Medicamento con monto mayor al autorizado (Glosa parcial en la autorización). |
| 1024   | Medicamento no especifica vía de administración.                              |
| 1025   | Medicamento no especifica cantidad y/o días de tratamiento.                   |
| 1026   | indicación con nombre incompleto de afiliado.                                 |
| 1027   | Medicamento autorizado a nombre de otro afiliado.                             |
| 1028   | Ticket y/o factura sin firma del afiliado.                                    |
| 1029   | Firma del afiliado y el Proveedor con el mismo tipo de letra.                 |
| 1030   | Indicación no valida por presentar promoción.                                 |
| 1031   | Indicación en copia no especifica uso continuo.                               |
| 1032   | Indicación presenta fecha vencida.                                            |
| 1033   | indicación en copia.                                                          |
| 1034   | Indicación con sello en copia.                                                |
| 1035   | indicación con firma gomigrafo.                                               |
| 1036   | Autorización reversada en el sistema.                                         |
| 1037   | Medicamento facturado no está autorizado.                                     |
| 1038   | Medicamentos despechados sobrepasa días de tratamiento.                       |
| 1039   | Medicamento no presenta forma farmacéutica.                                   |
| 1040   | Medicamento no especifica MG                                                  |
| 1041   | Fecha de indicación superior a la fecha de autorización.                      |
| 1042   | Medicamento no presenta concentración.                                        |
| 1043   | medicamento indicado no corresponde con la especialidad del médico.           |
| 1044   | Medicamento controlado sin receta de la DNCD.                                 |
| 1045   | indicación con fecha agregada (Diferente tinta y/o tipografía).               |
| 1046   | indicación alterada.                                                          |
| 1047   | indicación con medicamentos agregados.                                        |
| 1048   | Autorización duplicada en esta factura.                                       |
| 1049   | Autorización pagada en NCG B15........                                        |
| 1050   | Autorización glosada en el NCG........                                        |
| 1051   | Autorización relacionada no está física                                       |
| 1052   | Autorización con monto menor a lo autorizado.                                 |
| 1053   | Ticket y/o factura sin firma del proveedor.                                   |
| 1054   | Autorización no sumada en la esta factura.                                    |
| 1058   | No. Autorización no coincide con el indicado en la factura.                   |
| 1060   | Medicamento facturado no está indicado.                                       |
| 1061   | Cambio en concentración del medicamento.                                      |
| 1062   | Cambio en marca comercial del medicamento.                                    |
| 1063   | Autorización reclamada, no presenta la receta médica.                         |
| 1064   | Autorización relacionada no está física.                                      |
| 1065   | Cambio en presentación o forma farmacéutica                                   |
| 1067   | Falta copia de cédula o carnet de afiliado                                    |

## Datos de Salida

Al realizar la solicitud, retorna los siguientes valores:

| Campo              | Tipo     | Descripción                                               |
| ------------------ | -------- | --------------------------------------------------------- |
| CodError           | Numérico | Código del error generado dentro de SeNaSa.               |
| Mensaje            | Texto    | Describe el resultado final                               |
| CodigoCargue       | Numérico | Codigo de SeNaSa que certifica la carga de la notificion. |
| NumReclamacion     | Numérico | Codigo Identificador de la Reclamacion.                   |
| DetalleReclamacion | Numérico | Listado de las reclamaciones enviadas.                    |

Se envían los parámetros para notificar la reclamacion. Se enviará un JSON en el body del request con los parámetros especificados.

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
        "CodigoCargue": 1204446
    }
}

```
