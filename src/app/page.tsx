'use client';
import Menu from "@/components/menu";
import NavbarSimple from "@/components/navbar";
import { useState } from "react";


export default function Home() {
  const [open, setOpen] = useState(false)

  const openMenu = () => setOpen(true)
  const closeMenu = () => setOpen(false)

  return (
    <main>
      <NavbarSimple openMenu={openMenu} />
      <Menu open={open} setOpen={openMenu} setClose={closeMenu} />
    </main>
  )
}
