"use client";

import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { useState } from "react";

import PageTransition from "@/components/animations/PageTransition";

export default function Providers({ children }) {
    // Create a new QueryClient instance for each session
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        staleTime: 60 * 1000, // 1 minute
                        refetchOnWindowFocus: false,
                    },
                },
            })
    );

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange={false}
        >
            <QueryClientProvider client={queryClient}>
                <PageTransition>
                    {children}
                </PageTransition>
                <Toaster
                    richColors
                    position="bottom-right"
                    closeButton
                    toastOptions={{
                        duration: 4000,
                        className: "glass border border-white/10",
                    }}
                />
            </QueryClientProvider>
        </ThemeProvider>
    );
}