import "@/styles/globals.css";
import '@/public/css/font-awesome.min.css';
import '@/public/css/themify-icons.css';
import '@/public/css/flaticon.css';
import '@/public/css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/public/css/spacing.min.css';
import '@/public/css/leaflet.css';
import '@/public/css/menu.css';
import '@/public/css/style.css';
import '@/public/css/responsive.css';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
