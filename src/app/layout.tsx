"use client";
import { AuthProvider } from '@/contexts/Auth/AuthPorvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloLink, ApolloProvider, HttpLink } from '@apollo/client'
import { client } from '@/apollo'
import { ApolloNextAppProvider, NextSSRApolloClient, NextSSRInMemoryCache, SSRMultipartLink } from '@apollo/experimental-nextjs-app-support/ssr'

const inter = Inter({ subsets: ['latin'] })

/* export const metadata: Metadata = {
  title: 'E-COMMERCE ADMIN',
  description: 'Generated by create next app',
} */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  function makeClient() {
    const httpLink = new HttpLink({
      uri: "http://localhost:3333/graphql",
    });

    return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link:
        typeof window === "undefined"
          ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
          : httpLink,
    });
  }


  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      <AuthProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
        </html>
      </AuthProvider>
    </ApolloNextAppProvider>
  )
}
