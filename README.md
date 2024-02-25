## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Assigment explanation

When merged to the main branch, I squashed the commits to avoid additional noise. However, I did not delete branches to preserve the commit history. You can switch between branches to view the entire history.

### Frontend

#### Known Issues

- The use of sub-components in non-client components is not currently supported in the app router mode of next.js. see [docs](https://github.com/ant-design/ant-design-examples/blob/main/examples/with-nextjs-app-router-inline-style/src/app/with-sub-components/page.tsx)
- Most UI components should be customized from the ThemeConfiguration object:

```jsx
const config: ThemeConfig = {
    token: {
        colorPrimary: '#01857c',
    },
    components: {
       // ...components styles here
    },
};
```

- Need to research if it's possible to use one "source of truth" for styles. There should be some way to do this, keeping styles centralized (use variables both in .SCSS files and .tsx files).
- Added .scss compiler from the beginning, but probably it can be avoided to use it here.
- I didn't implement Error Boundaries as it requires some time and used simple error handling, but in a real project, this should be definitely done.
- Research if it's possible to do such things better; looks like a hotfix

```jsx
const Pie = dynamic(() => import('@ant-design/charts').then((mod) => mod.Pie), {
  ssr: false,
  loading: () => <Skeleton />,
});
```

### Backend

ZOD + tRPC was completely new for me, so I've tried to do it as best as I could. Please do not judge too much; I believe a few more days would help me to improve it, but it is as it is.
