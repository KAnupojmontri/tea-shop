import {
  HeadContent,
  Scripts,
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Footer from "../components/Footer";

import appCss from "../styles.css?url";
import Navbar from "#/components/Navbar";

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: appCss }],
    scripts: [{ children: THEME_INIT_SCRIPT }],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en">
      <head>
        {/* จัดการ Meta tags และ Styles อัตโนมัติ */}
        <HeadContent />
      </head>
      <body>
        <Navbar />
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
        <Footer />
        <Scripts />
        {/* Devtools (จะแสดงเฉพาะในโหมด Development) */}
        <TanStackRouterDevtools position="bottom-right" />
      </body>
    </html>
  );
}