This is to report a bug about nextjs revalidation with app router.

## Getting Started

First, build the productions server and run:

```
yarn build
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The result should be revalidated based on:
```
export const revalidate = 1
```
but after some refreshes, it stops updating and returns a totally empty page. If it is stale in your current tab, try it in another browser or a private tab to bypass the browser cache and you'll see the empty page rather than the stale not revalidated data.