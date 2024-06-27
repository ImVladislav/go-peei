import Link from 'next/link'

import Translator from '../../translator/Translator'

import styles from './copyright.module.scss'

const Copyright = () => {
	return (
		<div className={styles.wrap}>
			<p className={styles.copy}>
				<span>&copy;</span> 2024
				<Translator>allRightsReserved</Translator>
			</p>
			<div>
				<div className={styles.inner}>
					<div className={styles.link_wrap}>
						<Link className={styles.link} href='/development-team'>
							<Translator>theWebsiteDevelopmentTeam</Translator>
						</Link>
						{/* <Link className={styles.link} href="/">
              Privacy Policy
            </Link>
          </div>
          <div className={styles.link_wrap}>
            <Link className={styles.link} href="/">
              Terms of Service
            </Link>
            <Link className={styles.link} href="/">
              Cookies Settings
            </Link> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Copyright
