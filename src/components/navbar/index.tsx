import { useEffect, useState } from "react"
import { IconButton, Navbar, Typography } from "@material-tailwind/react"
import { GiHamburgerMenu } from 'react-icons/gi'

type NavbarSimpleProps = {
    openMenu: () => void
}

export default function NavbarSimple({ openMenu }: NavbarSimpleProps) {

    return (
        <>
            <Navbar className="mx-auto max-w-screen-2xl px-6 py-3">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <IconButton onClick={() => openMenu()}>
                        <GiHamburgerMenu />
                    </IconButton>
                    <Typography>
                        USER NAME HERE
                    </Typography>
                </div>
            </Navbar>
        </>
    )
}