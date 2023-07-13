# Buddyhead front end

## Technologies

- [NextJS](https://nextjs.org/docs/getting-started/project-structure) 13.4.9
- React 18.2
- TypeScript 5.1
- Node 18.13.0
- React Bootstrap 5.2
- SCSS
- Redux Toolkit 1.9.5
- Redux/RTK Query
- React Hook Form 7.45.1
- [Hygen](https://hygen.io/) CLI
- Using Server and Client Components
- Preloaded data client side via Redux
- Prettier
- ESLint

TODO:

- [Hygen](https://hygen.io/) integration
  - Creating forms/components/pages via CLI commands
- Middleware
- Setup [Strapi CMS](https://strapi.io)
  - Link to CMS repo - [CMS]()
- Connect front end to CMS
- Create pages
  - Home, About, Contact, Blog, Blog Detail, etc
- Create components
- Set up [data fetching](https://nextjs.org/docs/app/building-your-application/data-fetching) for SSR/CSR/ISR

## Getting Started

First, run the development server:

```bash
# using Node 18.13.0
nvm use 18
git clone URL
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## CLI

Using [Hygen](https://www.hygen.io/docs/quick-start) to scaffold pages, components, forms. All generators are located in `_templates` directory.

Install Hygen globally

```bash
$ npm i -g hygen
```

### Components

[React Bootstrap](https://react-bootstrap.github.io/components/alerts/) has various components we can utilize and change to fit within our design system
Create a new component named MyComponent in `@/components/shared/MyComponent/index.tsx`

```bash
$ hygen component new
1. What is the component name? MyComponent
2. What is the component type? shared
3. Do you want to add a stylesheet? (y/N) y

or using flags
$ hygen component new --name MyComponent --type shared --hasStyles
```

Adding a stylesheet will

1. create the stylesheet in `@/components/{type}/MyComponent/MyComponent.module.scss`
2. will import the stylesheet into MyComponent and include it in the parent div

### Forms

Forms are already configured with the [UI library](https://react-bootstrap.github.io/) components and [React Hook Form](https://www.react-hook-form.com/get-started/). Just update the Interface and inputs.

Creating and importing a form will help with a greater separation of concerns and debugging.

Create a new form named MyForm in `@/forms/auth/LoginForm/index.tsx`

```bash
$ hygen form new
1. What is the form name? LoginForm
2. What is the form type? utils

or
$ hygen form new --name LoginForm --type auth
```

### Pages (WIP for Next 13.4)

Next has a `/pages` directory that is configured with the router.
To create a new page named MyPage in `pages/my-page.tsx`

- Not configured for pages in `@/app` directory.

```bash
$ hygen page new
1. What is the page title? MyPage

or
$ hygen page new --title MyPage
```
