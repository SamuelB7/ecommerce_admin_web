import { Button, Drawer, IconButton, Typography } from "@material-tailwind/react";
import { useState } from "react";

export default function Menu() {
    const [open, setOpen] = useState(false)

    const openMenu = () => setOpen(true)
    const closeMenu = () => setOpen(false)

    return (
        <>
            <Button onClick={openMenu}>OPEN MENU</Button>
            <Drawer open={open} onClose={closeMenu} className="p-4">
                <div className="mb-6 flex items-center justify-between">
                    <Typography>E-COMMERCE ADMIN</Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeMenu}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
            </Drawer>
        </>
    )
}