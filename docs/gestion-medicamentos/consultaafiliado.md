---
sidebar_position: 2
---

# Consulta de afiliados

Este método **GET** será utilizado para consultar los datos de un afiliado, el cual indicará si el afiliado está disponible para recibir servicios y las informaciones personales correspondientes al afiliado.

:::info

Antes de utilizar este servicio se tiene que poseer un **token de acceso** para que sea suministrado en la cabecera **Authorization**. Este token lo puedes poseer en el servicio [Autenticación](/docs/gestion-medicamentos/autenticacion.md).

:::

## Endpoint

```
{{Servidor}}/Afiliado/GetAfiliado
```

:::note

La palabra **{{Servidor}}** se sustiye por el nombre de servidor del ambiente que vaya a utilizarse.

:::

## Parametros

| Parametro     | Descripción                                                       |
| ------------- | ----------------------------------------------------------------- |
| TipoDocumento | Numero que identifica el [tipo de documento ](#tipo-de-documento) |
| NoDocumento   | Número del documento enviado                                      |

:::info

Si eliges utilizar el [tipo de documento ](#tipo-de-documento) cedula, la misma debe ser suministrada con guiones.

:::

### Tipos de Documento

| Codigo | Detalle        |
| ------ | -------------- |
| 1      | Cédula         |
| 2      | NSS            |
| 3      | CodigoAfiliado |

## Datos de Salida

Al realizar la solicitud, retorna los siguientes valores:

| Campo                                               | Tipo     | Descripción                                                                                                        |
| --------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| CodAfiliado                                         | Numérico | Código del afiliado, también perteneciente al contrato del afiliado.                                               |
| Nombres                                             | Texto    | Nombres del afiliado.                                                                                              |
| Apellidos                                           | Texto    | Apellidos del afiliado.                                                                                            |
| Cedula                                              | Texto    | Número de cédula del afiliado.                                                                                     |
| Nss                                                 | Texto    | Número de Seguridad Social del afiliado.                                                                           |
| Sexo                                                | Texto    | Sexo del afiliado.                                                                                                 |
| Carnet                                              | Texto    | Número de carnet del afiliado.                                                                                     |
| FechaNacimiento                                     | Fecha    | Fecha de nacimiento del afiliado.                                                                                  |
| Estado                                              | Numérico | Código correspondiente al estado del afiliado en nuestros registros.                                               |
| EstadoDesc                                          | Texto    | Descripción del estado.                                                                                            |
| Contrato                                            | Numérico | Codigo que identifica al afiliado                                                                                  |
| Regimen                                             | Texto    | Régimen del afiliado, relacionado al plan en caso de no poseer un Plan Medicamento.                                |
| NoPlanMedicamento                                   | Numérico | Código del plan de medicamento del afiliado, relacionado al plan especial de medicamento.                          |
| PlanMedicamento                                     | Texto    | Descripción del plan especial de medicamento.                                                                      |
| [ListaPlanesMedicamentos](#listaplanesmedicamentos) | Lista    | Lista de planes que posee el afiliado.                                                                             |
| [ListaProgramaPyP](#listaprogramapyp)               | Lista    | Lista de programas que posee el afiliado.                                                                          |
| TipoPlan                                            | Numérico | Tipo de plan del afiliado.                                                                                         |
| CodigoProgramaPyP                                   | Numérico | Codigo que identifica el programa de (PyP) al que pertenece el afiliado                                            |
| ProgramaPyP                                         | Texto    | Nombre del programa de (PyP) al que pertenece el afiliado                                                          |
| CodigoCirculo                                       | Numérico | Codigo que identifica el circulo de (PyP) al que pertenece el afiliado                                             |
| Circulo                                             | Texto    | Nombre del circulo de (PyP) al que pertenece el afiliado                                                           |
| Telefono                                            | Texto    | Numero de telefono del afiliado.                                                                                   |
| Celular                                             | Texto    | Numero de celular del afiliado.                                                                                    |
| TieneDisponible                                     | Booleano | Identifica si un afiliado posee disponible.                                                                        |
| ErrorNumber                                         | Numérico | Código de error enviado por el api.                                                                                |
| ErrorMessage                                        | Numérico | Mensaje enviado por el api, aplica para excepciones de flujo, conexión y disponibilidad del servicio del afiliado. |

### ListaPlanesMedicamentos

| Campo           | Tipo     | Descripción                                                 |
| --------------- | -------- | ----------------------------------------------------------- |
| IdPlan          | Numérico | Código que identifica el plan.                              |
| NombrePlan      | Texto    | Nombre del plan.                                            |
| IdTipoPlan      | Numérico | Código que identifica el tipo de plan.                      |
| TipoPlan        | Texto    | Descripción del tipo de plan.                               |
| MontoTope       | Decimal  | Monto que detalla el tope del plan.                         |
| Disponible      | Decimal  | Monto que detalla el disponible del afiliado en dicho plan. |
| FechaRenovacion | Fecha    | Fecha que aclara cuando el disponible sera repuesto.        |

### ListaProgramaPyP

| Campo          | Tipo     | Descripción                                     |
| -------------- | -------- | ----------------------------------------------- |
| CodigoPrograma | Numérico | Código que identifica el programa del afiliado. |
| Programa       | Texto    | Nombre del programa.                            |
| CodigoCirculo  | Numérico | Código que identifica el codigo del circulo.    |
| Circulo        | Texto    | Descripción del nombre del circulo.             |

```
{
    "CodAfiliado": {{codigo}},
    "Nombres": "{{nombres}}",
    "Apellidos": "{{apellidos}}",
    "Cedula": "{{cedula}}",
    "Nss": "{{nss}}",
    "Sexo": "M",
    "Carnet": "{{carnet}}",
    "FechaNacimiento": "1992-09-08",
    "Estado": 3,
    "EstadoDesc": "OK (CORRECTO)",
    "Contrato": {{contrato}},
    "Regimen": "CONTRIBUTIVO",
    "NoPlanMedicamento": 225,
    "PlanMedicamento": "MEDICINA AMB. RD$ 10,000.00 AL 70% ( + 1,000 afiliados ) N",
    "ListaPlanesMedicamentos": [
        {
            "IdPlan": 2,
            "NombrePlan": "Plan Básico de Salud",
            "IdTipoPlan": 1,
            "TipoPlan": "Plan Básico de Salud",
            "MontoTope": 8000.00,
            "Disponible": 0.00,
            "FechaRenovacion": "2023-02-01T00:00:00"
        },
        {
            "IdPlan": 225,
            "NombrePlan": "MEDICINA AMB. RD$ 10,000.00 AL 70% ( + 1,000 afiliados ) N",
            "IdTipoPlan": 2,
            "TipoPlan": "Plan Complementario de Salud",
            "MontoTope": 10000.00,
            "Disponible": 10000.00,
            "FechaRenovacion": "2023-09-01T00:00:00"
        }
    ],
    "ListaProgramaPyP": [
        {
            "CodigoPrograma": 0,
            "Programa": null,
            "CodigoCirculo": 0,
            "Circulo": null
        }
    ],
    "TipoPlan": 2,
    "CodigoProgramaPyP": 0,
    "ProgramaPyP": null,
    "CodigoCirculo": 0,
    "Circulo": null,
    "Telefono": "{{Telefono}}",
    "Celular": null,
    "TieneDisponible": true,
    "ErrorNumber": 1000,
    "ErrorMessage": "Afiliado disponible para recibir medicamentos"
}
```
