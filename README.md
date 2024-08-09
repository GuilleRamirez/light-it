# Como correr el proyecto?

Para correr la aplicación podemos utilizar

```
npm run dev
```

Para correr los tests y coverage podemos correr respectivamente

```
npm run test
npm run coverage
```

El coverage nos creará una carpeta tests, la cual dentro del path:

/tests/unit/coverage nos crea un index.html el cual nos muestra el coverage del codigo.

# Tecnologías usadas:

### [Vite](https://vitejs.dev/) [<img src="./src/assets/readme/vite.png" width="50" heigth="50">](https://vitejs.dev)

Para crear la app de react, si bien existen tecnologías como webpack, preferí utilizar vite por la simplicidad que propoprciona, la gran velocidad que tiene al buildear el proyecto y una gran comunidad para cualquier tipo de dudas.

### [react-router-dom](https://reactrouter.com/en/main) [<img src="./src/assets/readme/react-router.png" width="50" heigth="50">](https://reactrouter.com/en/main)

### [vitest](https://vitest.dev/) [<img src="./src/assets/readme/vitest.png" width="50" heigth="50">](https://vitest.dev/)

Si bien existen tecnologías como jest, al utilizar vite, vitest fue una opcion simple, nativo a vite, las configuraciones son minimas y faciles de configurar.
