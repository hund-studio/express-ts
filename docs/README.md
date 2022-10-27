# 📦 express-ts

A minimal boilerplate for an Express app /w Typescript

Ideal for API and server-side applications without UI.

Check out [express-ts-react](https://github.com/hund-studio/express-ts-react) for an Express without React solution.

## Getting Started

### Setup

#### [Method 1] Using Github template

You can easily clone this starter as a new repository in your Github account by using the green button on top right of the [Github Repo](https://github.com/hund-studio/express-ts)

![use-template-button](./assets/use-template-button.svg)

#### [Method 2] Manually cloning this repository

1. Clone this repository
2. Delete existing `.git` folder
3. Install npm modules with `npm install`

```bash
git clone git@github.com:hund-studio/express-ts.git
mv express-ts-react my-project
cd my-project
sudo rm -r .git
```

4. If needed, and strongly recommended, `init` a new repository

```bash
git init
git remote add origini <remotegiturl>
git add .
git commit -m "initial commit"
git push --force origin master
```

### Develop

Before proceed you must install all required `node_module` by running:

```bash
npm install
```

In order to start development you will need to serve webpack watched code (using `nodemon`) by running:

```bash
npm run serve
```

### Deploy

To deploy your app you must `build` it for production by running:

```bash
npm run build
```

The `build` task will generate a `./bundle` folder inside your `root` directory.
Upload the `server` folder on you production machine and, using SSH or watherver you prefer, install all required `node_modules` by running:

```bash
npm install
```

Finally run you application using `pm2` or `node` command (try avoid `nodemon` and `npm run serve` inside production environments).

## Additional tools

### Database

If your app needs a database consider using [Prisma](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgres) with a sqLite solution and setup it inside the `root` of your project.

```tree
..express-ts::
.
|--prisma
   `--schema.prisma
|--public
|--views
`--index.ts
```
