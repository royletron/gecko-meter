# Geck-o-meter

A sample React component `<Meter />` which is used by an application `<GeckoMeter />`. The component is used to display a small radial meter, with a min and max value and also the given value displayed by a 'needle'. The application the uses Redux to fetch the data from an external source and feeds it into the component for demo purposes.

## Getting Started

Just check out the repository and then run:

```bash
npm install
```

You can then boot Webpack-dev-server (which will do everything else) using

```bash
npm run dev
```

By default you can then find the running application at `http://localhost:3333/`. There are also a series of tests written in Jest, using the new snapshot feature to compare the output of the component against a pre-rendered (a.k.a known good) version. To test use the following command:

```bash
npm test
```
