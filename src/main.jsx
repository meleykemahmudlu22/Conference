import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import App from './App.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "pk_live_Y2xlcmsuY29uZmVyYW5jZS12ZXJjZWwudmVyY2VsLmFwcCQ";

createRoot(document.getElementById('root')).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ClerkProvider>
);
