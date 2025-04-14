import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import { AnimatePresence } from 'motion/react';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        el.classList.add("h-screen")
        el.style.display = "flex";
        el.style.flexDirection = "column";
        root.render(
            <AnimatePresence>
                <App {...props}/>
            </AnimatePresence>  
        );
    },
    progress: {
        color: '#4B5563',
    },
});
