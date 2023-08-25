import { Button, Drawer, IconButton, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'
import { MdDashboard } from 'react-icons/md'
import { BsCartFill } from 'react-icons/bs'
import { HiDocument } from 'react-icons/hi'
import { FaUsers } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'

export default function Menu() {
    const [open, setOpen] = useState(false)

    const openMenu = () => setOpen(true)
    const closeMenu = () => setOpen(false)

    return (
        <>
            <Button onClick={openMenu}>OPEN MENU</Button>
            <Drawer open={open} onClose={closeMenu}>
                <div className="flex items-center justify-between p-4">
                    <Typography variant="h5">E-COMMERCE ADMIN</Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeMenu}>
                        <AiOutlineClose />
                    </IconButton>
                </div>
                <List>
                    <ListItem>
                        <ListItemPrefix>
                            <MdDashboard />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <FaUsers />
                        </ListItemPrefix>
                        Users
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <BsCartFill />
                        </ListItemPrefix>
                        Products
                    </ListItem>
                    <ListItem>
                        <ListItemPrefix>
                            <HiDocument />
                        </ListItemPrefix>
                        Orders
                    </ListItem>
                    <ListItem className="absolute bottom-2 max-w-[85%]">
                        <ListItemPrefix>
                            <IoLogOut />
                        </ListItemPrefix>
                        Logout
                    </ListItem>
                </List>
            </Drawer>
        </>
    )
}