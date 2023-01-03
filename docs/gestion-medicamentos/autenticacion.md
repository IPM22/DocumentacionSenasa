---
sidebar_position: 1
---

# Autenticación

Este método **POST** será utilizado para realizar el inicio de sesión para el uso de cualquiera de los métodos pertenecientes al WebApi. Genera un token para el acceso validando las credenciales obtenidas del usuario.

:::info

Esta debe ser la **primera solicitud** realizada en el API para poder obtener un **token de acceso**.

:::

## Endpoint

```
{{Servidor}}/AuthenticateUser
```

:::note

La palabra **{{Servidor}}** se sustiye por el nombre de servidor del ambiente que vaya a utilizarse.

:::

## Parametros

| Parametro  | Descripción                                                         |
| ---------- | ------------------------------------------------------------------- |
| username   | Campo de usuario identificador de la sesión.                        |
| password   | Campo de contraseña para identificación del usuario para la sesión. |
| grant_type | Campo identificador del método para inicio de sesión.               |

```
{
  "username": "usuario123",
  "password": "Clave123",
  "grant_type": "Bearer"
}
```

## Datos de Salida

Al realizar la solicitud, retorna los siguientes valores:

| Campo        | Tipo     | Descripción                                 |
| ------------ | -------- | ------------------------------------------- |
| access_token | Texto    | Token de sesión luego de usuario logueado.  |
| token_type   | Texto    | Tipo de token que se está generando bearer. |
| expires_in   | Numerico | Tiempo de expiración del token.             |

```
{
    "access_token": "E7FjXjITbVq3FuuA6E1-QhF_MXn1i4ipc-BjVwjkGZCRZWCT_c3ezwHKLitbfGGLiLvCH0bMWf9F0ZGXxYYRy6wn8Q9WkN5WEI-_ZlMAh47d3rP__QTEfE5NDGMdR3piuiurxI6vNdZoAyzprYau1bK_c143wxC2iFpzjHugN6qeDq-3mzsUCPPCZ1xH65znY9X_StFycpENgBVu8b4ddBA3aFASSSNFN-gocOcZOeVCM1lLzSlWGHg9sXF_mLLD",
    "token_type": "bearer",
    "expires_in": 86399
}
```

:::note

El **access_token** sera utilizado para **validar su identidad** en cada solicitud que realice en el API.

:::
