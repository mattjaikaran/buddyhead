# Buddyhead Server

Back end admin panel/cms to manage content.

### Features

- Strapi CMS
  - [Strapi Docs](https://docs.strapi.io/dev-docs/cli#strapi-develop)
- NodeJS
- Dynamic Zones/Page Builder
- Components located in `@/src/components`
  - Buttons, Alert, Cards located in `@/src/components/shared`

### Getting Started

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

```bash
$ git clone https://github.com/mattjaikaran/buddyhead
$ cd buddyhead # can rename to server
$ yarn
$ yarn develop
```

### TODO:

- Integrate Dynamic Zones
  - Ability to create a custom page based on the components in the page builder.
- Connect Strapi to front end
- Make sure the `[slug].tsx` on the front end is pulling the data from the correct slug and displaying everything
