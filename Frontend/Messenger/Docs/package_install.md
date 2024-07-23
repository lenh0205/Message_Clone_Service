
# 'create-react-app' with 'typescript' template
```r
npx create-react-app my-app --template typescript
```

# Tailwind
```r - cmd
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```js - tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

```css - index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# react-route
```r
npm install react-router-dom
```
```js - index.js
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```