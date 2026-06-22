"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import PageTransition from "@/components/animations/PageTransition";

const queryClient = new QueryClient();

export default function Providers({
    children,
}) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
        >
            <QueryClientProvider
                client={queryClient}
            >
                <PageTransition>
                    {children}
                </PageTransition>

                <Toaster richColors />
            </QueryClientProvider>
        </ThemeProvider>
    );
}