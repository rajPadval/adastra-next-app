"use client";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

import { Provider } from "react-redux";
import store from "@/redux/store";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import ConnectWithUs from "./components/ConnectWithUs";
import { usePathname } from "next/navigation";
import AdminNavbar from "./pages/admin/dashboard/components/AdminNavbar";
import Aos from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log("Container is : ", container);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
          {pathname === "/pages/admin/dashboard" ? <AdminNavbar /> : <Navbar />}
          <Toaster />
          {children}
          {pathname !== "/pages/admin/dashboard" && <ConnectWithUs />}
          {pathname !=="/pages/admin/dashboard" && (
            <Particles
              id="tsparticles"
              init={particlesInit}
              loaded={particlesLoaded}
              options={{
                // background: {
                //     color: {
                //         value: "#0d47a1",
                //     },
                // },
                fpsLimit: 120,
                interactivity: {
                  events: {
                    onClick: {
                      enable: true,
                      mode: "push",
                    },
                    onHover: {
                      enable: true,
                      mode: "repulse",
                    },
                    resize: true,
                  },
                  modes: {
                    push: {
                      quantity: 4,
                    },
                    repulse: {
                      distance: 200,
                      duration: 0.4,
                    },
                  },
                },
                particles: {
                  color: {
                    value: "#ffffff",
                  },
                  links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.03,
                    width: 0.3,
                  },
                  move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                      default: "bounce",
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                  },
                  number: {
                    density: {
                      enable: true,
                      area: 800,
                    },
                    value: 30,
                  },
                  opacity: {
                    value: 0.5,
                  },
                  shape: {
                    type: "circle",
                  },
                  size: {
                    value: { min: 1, max: 5 },
                  },
                },
                detectRetina: true,
              }}
            />
          )}
        </body>
      </html>
    </Provider>
  );
}
