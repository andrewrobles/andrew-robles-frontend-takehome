import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './Navbar.module.css'

import Image from 'next/image'

export default function Navbar() {
    return <nav className={`shadow navbar navbar-dark bg-primary p-0 ${styles.navbarCustom}`}>
        <div className={`${styles.logo} d-flex justify-content-center py-2`}>
            <Image src="/MasteryCodingLogo.png" width='104px' height='37'/>
        </div>
    </nav>
}