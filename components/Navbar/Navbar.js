import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Navbar.module.css'

import Image from 'next/image'

export default function Navbar() {
    return <nav className={`navbar navbar-dark bg-primary p-0`}>
        <span className={`${styles.logo} d-flex justify-content-center py-2`}>
            <Image src="/MasteryCodingLogo.png" width='104px' height='34'/>
        </span>
    </nav>
}