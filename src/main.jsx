import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import AdminPage from './AdminPage';
import './styles.css';
import logo from './assets/logo-white.png';
import { transformations } from './components/data';

const STORAGE_KEY = 'jrf_transformations';

const faviconSizes = ['16x16', '32x32', '180x180'];
faviconSizes.forEach((size) => {
  const rel = size === '180x180' ? 'apple-touch-icon' : 'icon';
  const selector = `link[rel='${rel}'][sizes='${size}']`;
  const faviconLink = document.querySelector(selector) || document.createElement('link');

  faviconLink.rel = rel;
  faviconLink.type = 'image/png';
  faviconLink.sizes = size;
  faviconLink.href = logo;

  if (!faviconLink.parentNode) {
    document.head.appendChild(faviconLink);
  }
});

const savedTransformations = window.localStorage.getItem(STORAGE_KEY);
let initialTransformations = transformations;

if (savedTransformations) {
  try {
    const parsed = JSON.parse(savedTransformations);
    if (Array.isArray(parsed)) {
      initialTransformations = parsed;
    }
  } catch {
    initialTransformations = transformations;
  }
}

function Root() {
  const [transformationsData, setTransformationsData] = React.useState(initialTransformations);

  React.useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(transformationsData));
  }, [transformationsData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App transformationsData={transformationsData} />} />
        <Route
          path="/admin"
          element={
            <AdminPage
              transformationsData={transformationsData}
              setTransformationsData={setTransformationsData}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
