Template from: https://github.com/magic-ike/leanfolio.git

### Running Locally

npm

```bash
git clone https://github.com/magic-ike/leanfolio.git
cd leanfolio
npm install
npm run dev
```

Yarn

```bash
git clone https://github.com/magic-ike/leanfolio.git
cd leanfolio
yarn
yarn dev
```

### Making Changes

- Go to `data/portfolio.js` and replace the placeholder data with your own.

- To add a favicon to your site, put your `favicon.ico` file directly in the `public/` folder.

### Deployment

- Go to [Vercel](https://vercel.com/dashboard) and sign up for an account if necessary.

- Click **New Project**.

- Import your repository. This should take you to the project configuration screen.

- **_(Optional - Google Analytics)_** If you want to add Google Analytics tracking to your live portfolio, you'll need to grab the environment variable you added to your local environment and add it to this environment. Expand the **Environment Variables** dropdown and add the following name-value pair:

| NAME                            | VALUE (WILL BE ENCRYPTED) |
| ------------------------------- | ------------------------- |
| GOOGLE_ANALYTICS_MEASUREMENT_ID | Your Measurement ID       |

- Click **Deploy**.

- If everything went smoothly, your portfolio should now be live. Congrats! 🎉
