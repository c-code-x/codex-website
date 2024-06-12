"use client";
import { Metadata } from "next";
import "../app/globals.css";
import { usePathname } from "next/navigation";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

//meta tags
export const meta: Metadata = {
    title: "Codex - Club",
    description:
        "CODEX is a student-run organization at the University of GITAM that aims to provide students with the resources and opportunities to learn about computer science and software development. We learn, we build, and we share!",
    keywords:
        "codex, gitam, codex website, technical club, programming, coding club, gitam club, club, student club, active student gitam student clubs,  technology",
    authors: [{ name: "CodeX - CoreTeam" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname() as string; // Add type assertion here
    const noLayoutPaths = ["/underconstruction"];
    const shouldApplyLayout = !noLayoutPaths.includes(pathname);

    return (
        <html lang="en">
            <body>
                {shouldApplyLayout ? (
                    <>
                        <NavBar />
                        {children}
                        <Footer />
                    </>
                ) : (
                    <>{ children }</>
                )}
            </body>
        </html>
    );
}
