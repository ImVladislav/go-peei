"use client"
import { useState, useEffect } from "react"
import s from "./Modal.module.scss"

export default function Modal({ show, onClose, children }) {
    const [isBrowser, setBrowser] = useState(false)
    
    useEffect(() => {
        setBrowser(true)
    }, [])
    
    const handleClose = (e) => {
        e.preventDefault()
        onClose()
    }

    const modalContent = show ? (
        <div className={s.overlay}>
            <div className={s.modal}>
                <div className={s.header}>
                    <a href="#" onClick={handleClose}>
                        <button className="btn">close</button>
                    </a>
                </div>
                <div className={s.body}>
                    {children}
                </div>
            </div>
        </div>
    )
}