import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/context/theme-provider";

import {cn} from "@/lib/utils"
import {AuthProvider} from "@/context/auth-context";
import {SettingsProvider} from "@/context/settings-provider";


const fontSans = ({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Admin Panel",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
        )}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        > <SettingsProvider>
            <AuthProvider>
                {children}

            </AuthProvider>
        </SettingsProvider>

        </ThemeProvider>
        </body>
        </html>
    );
}
