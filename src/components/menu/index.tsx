import { Button, Drawer, IconButton, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai'
import { MdDashboard } from 'react-icons/md'
import { BsCartFill } from 'react-icons/bs'
import { HiDocument } from 'react-icons/hi'
import { FaUsers } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'

type MenuProps = {
    setOpen: () => void,
    setClose: () => void,
    open: boolean
}

export default function Menu({ setOpen, setClose, open }: MenuProps) {

    return (
        <>
            <Drawer open={open} onClose={setClose}>
                <div className="flex items-center justify-between p-4">
                    <Typography variant="h5">E-COMMERCE ADMIN</Typography>
                    <IconButton variant="text" color="blue-gray" onClick={setClose}>
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