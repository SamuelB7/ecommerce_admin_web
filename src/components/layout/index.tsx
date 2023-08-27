"use client"
import { useState } from 'react'
import Menu from "@/components/menu";
import NavbarSimple from "@/components/navbar";

type LayoutProps = {
    title?: string,
    children: React.ReactNode
}

export default function Layout({ title, children }: LayoutProps) {
    const [open, setOpen] = useState(false)
    const openMenu = () => setOpen(true)
    const closeMenu = () => setOpen(false)

    return (
        <main>
            <NavbarSimple openMenu={openMenu} />
            <h1>{title}</h1>
            <Menu open={open} setOpen={openMenu} setClose={closeMenu} />
            {children}
        </main>
    )
}