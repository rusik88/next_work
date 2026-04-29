import "./layout.css";
import {Poppins} from "next/font/google";
import {NextFont} from "next/dist/compiled/@next/font";

const poppins: NextFont = Poppins({
    weight: ["100", "400", "700"],
    subsets: ["latin"],
});

export default function ClientLayout({children}: Readonly<{children: React.ReactNode; }>) {
    return (
        <section className={poppins.className}>{children}</section>
    );
}
