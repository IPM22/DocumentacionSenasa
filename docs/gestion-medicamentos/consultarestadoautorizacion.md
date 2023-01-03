---
sidebar_position: 5
---

# Consulta estado de autorizaciones.

Este método **GET** será utilizado para consultar el estado de una autorización, el cual presentara el estado actual de la autorización proveniente desde SeNaSa.

:::info

Antes de utilizar este servicio se tiene que poseer un **token de acceso** para que sea suministrado en la cabecera **Authorization**. Este token lo puedes poseer en el servicio [Autenticación](/docs/gestion-medicamentos/autenticacion.md).

:::

## Endpoint

```
{{Servidor}}/Autorizacion/ConsultarEstadoAutorizacion
```

:::note

La palabra **{{Servidor}}** se sustiye por el nombre de servidor del ambiente que vaya a utilizarse.

:::

## Parametros

| Parametro          | Tipo     | Descripción                                                     |
| ------------------ | -------- | --------------------------------------------------------------- |
| NumeroAutorizacion | Numérico | Numero identificador de la autorización que se desea consultar. |

```
{
    "NumeroAutorizacion" :1234567
}
```

## Datos de Salida

Al realizar la solicitud, retorna los siguientes valores:

| Campo        | Tipo     | Descripción                                                 |
| ------------ | -------- | ----------------------------------------------------------- |
| CodigoEstado | Numérico | Código del estado de la autorización proveniente de SeNaSa. |
| Estado       | Texto    | Estado en texto de la autorización generada.                |
| CodError     | Numérico | Código del error generado dentro de SeNaSa.                 |
| Mensaje      | Texto    | Mensaje correspondiente a la consulta                       |

```
{
    "CodigoEstado": 2,
    "Estado": "Cerrada",
    "CodError": 0,
    "Mensaje": "Consulta realizada exitosamente"
}


```
