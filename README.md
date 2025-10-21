# CompBioCat Lab Website

This repository contains the source code for the CompBioCat research group's public website built using React and Tailwind CSS.

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. To run a local development server:
   ```
   npm run dev
   ```

## Building and Deploying

To build and deploy the site to GitHub Pages:

1. Build the static files:
   ```
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```
   npm run deploy
   ```

The deployment script will publish the `dist` directory to the `gh-pages` branch which powers the site at https://compbiocat.github.io.

## Publications

Add DOIs to the `dois.txt` file, one DOI per line. The site will fetch publication details automatically using the DOI reader script.
