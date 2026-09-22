# COVID Tracker

A React dashboard project that displays COVID case, recovery, and death totals, with a country selector and charts.

## Features

- Global and country summary cards.
- A country picker backed by an external API.
- A global historical line chart and a country comparison bar chart.
- Animated totals using React CountUp.

## Stack

React 16, Create React App, Material UI, Axios, Chart.js, and react-chartjs-2.

## Run locally

From the repository directory, with Node.js and npm installed:

```bash
npm ci
npm start
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

The build command writes the static application to `build/`.

## Data flow

[App.js](src/App.js) loads totals and updates the selected country. [src/api/index.js](src/api/index.js) contains the data requests:

| View | Configured source |
| --- | --- |
| Global totals and country data | disease.sh |
| Global daily chart | covid19.mathdro.id |

The UI is split into [cards](src/components/Cards/Card.jsx), [country selection](src/components/CountryPicker/CountryPicker.jsx), and [charts](src/components/Chart/Chart.jsx).

## Project status

This is a legacy learning project. The repository uses React Scripts 3 and older chart and UI dependencies; modern Node.js versions may require toolchain updates. Current API availability and data freshness have not been verified, so a successful build does not guarantee populated charts.

The data is intended for demonstrating API integration and visualization, not for medical decisions. The configured `npm test` command starts the Create React App test runner, but no application test files are included.
