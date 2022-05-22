## Project Structure

- assets
  - fonts
    - name font
  - images
    - all images
- pages
  - main
    - index.ts
    - main.ts
    - components
      - some component
  - some
    - index.ts
    - some.ts
    - components
      - some component
- modules
  - main module
    - constants
    - sagas
      - index.ts
      - some saga
    - store
      - index.ts
      - root-reducer.ts
      - reducer.ts
        - main.ts
    - models.ts
    - utils
  - some module
    - constants
    - sagas
      - index.ts
      - some saga
    - store
      - index.ts
      - root-reducer.ts
      - reducer.ts
        - main.ts
    - models.ts
    - utils

Icons are stored as react components in `/components/icons`


## Components

Components are stored in `/components`

Components Structure:

- named export occurs in `index`
- in `model` description of interfaces

```
▿component-name
  stylede.ts
  component-name.tsx
  model.ts
  index.ts
```

## Style Variables

Styles are stored as react function in `/utils/index.ts`

- named `export const GlobalStyles`

## Module Structure
* styles/{pageName}.ts - Page styles


where is the stor? where to store data?

* /modules/{page-name}/store
* /modules/{page-name}/store/reducers - reducers
* /modules/{page-name}/store/sagas - saga

```
--font-weight-400: 400;
--gap-m: 16px;
```

