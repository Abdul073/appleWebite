import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React, { useEffect } from 'react';


//...
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://4306fae0e167f5da96f618ac9ba369e5@o4507564671500288.ingest.us.sentry.io/4507757611974656",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration(),
  ],
 
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  replaysSessionSampleRate: 0.1, 
  replaysOnErrorSampleRate: 1.0, 
});




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);