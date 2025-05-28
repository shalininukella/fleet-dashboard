## 🚀 Fleet Dashboard - Frontend

A responsive dashboard built using React.js for monitoring fleet usage and vehicle stats.

### 📦 Backend Setup (Mock API)

This project assumes you are using **json-server** as a mock API for testing purposes.

#### ▶ How to Start the Mock API

1. Install `json-server` globally (if not already installed):

   ```bash
   npm install -g json-server
   ```

2. Ensure you have a `db.json` file in your project root with appropriate mock data.

3. Start the mock server:

   ```bash
   json-server --watch db.json --port 4000
   ```

4. Your endpoints will be available at:

   * `http://localhost:4000/overview`
   * `http://localhost:4000/usageStats`

Update your `api.ts` service file accordingly if you use a different port or path.

### 🧠 Assumptions and Design Decisions

* **Mock API** is used via `json-server` to simulate real backend interactions.
* `OverviewCard`, `GraphSection`, `LoadingSpinner`,`Button` and `RangeSelector` have been modularized as reusable components for maintainability and scalability.
* The dashboard supports a **7/15/30 day filter**, designed for quick access to key usage trends.
* Visual design uses **TailwindCSS** and **React Icons** to maintain a modern and responsive UI.
* Loading states are managed using a **custom spinner** component.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
