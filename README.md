# 💻 My Portfolio

Here you can see the source code of my portfolio, with information about me, my skills, my projects and my contacts. The project uses the following technologies: Typescript, ReactJS, Vite and Material UI5.

To run it, follow one of the steps below. 👇

## DEV

To run the project in dev mode:

```shell
yarn dev --port 3000
```

If you are running the application in a remote environment or in a container, you will need to use the `--host` flag to expose the network:

```shell
yarn dev --port 3000 --host
```

The project will run on port `3000`.

## PROD

In order to run the project optimally in production, we will follow a few more steps.

First we need to build:

```shell
yarn build
```

When executed, the `dist` folder with the optimized files will be generated. Then you need to serve these files with an http/https server, for example, I'm going to use nodejs http-server (for production you should use something more robust):

```shell
npx http-server ./dist --port 3000
```

The project will run on port `3000`.

# Links úteis

Typescript:\
https://www.typescriptlang.org/

Node:\
https://nodejs.org/

React:\
https://react.dev/

Materia-UI:\
https://mui.com/

Vite:\
https://vitejs.dev/

Skill Icons:\
https://skillicons.dev/
