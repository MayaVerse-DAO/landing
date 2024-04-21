import type { NextPage } from "next";
import styles from "./index.module.css";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={styles.base}>
      <header className={styles.baseInner}>
        <div className={styles.frameParent}>
          <div className={styles.lineWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.socialMediaIcons}>
            <h1 className={styles.mayaverse}>MayaVerse</h1>
            <nav className={styles.socialMediaIconsInner}>
              <nav className={styles.aboutUsParent}>
                <div className={styles.aboutUs}>About Us</div>
                <div className={styles.guide}>Guide</div>
                <Link href={"https://linktr.ee/mayaverse"} target="_blank">
                  <div className={styles.socials}>Socials</div>
                </Link>
                <Link
                  href={"https://mayaverse.gitbook.io/mayaverse/"}
                  target="_blank"
                >
                  <div className={styles.docs}>Docs</div>
                </Link>
              </nav>
            </nav>
          </div>
        </div>
      </header>
      <main className={styles.bgParent}>
        <img
          className={styles.bgIcon}
          alt=""
          src="https://i.postimg.cc/QMwXknJw/back.png"
        />
        <img
          className={styles.twitterIcon}
          loading="lazy"
          alt=""
          src="https://gateway.ipfs.io/ipfs/QmQz38YnDbyGCdkCu8jYyytANyDVUtxbhksUDEF64guEjY"
        />
        <img
          className={styles.instagramIcon}
          loading="lazy"
          alt=""
          src="https://gateway.ipfs.io/ipfs/QmQz38YnDbyGCdkCu8jYyytANyDVUtxbhksUDEF64guEjY"
        />
        <img
          className={styles.style3Copy4}
          loading="lazy"
          alt=""
          src="https://gateway.ipfs.io/ipfs/QmaCpqZxd5SC7sJ2UvihBjoa3Q8LH7pMwL5xFqsVengYXC"
        />
      </main>
      <div className={styles.sayMyNameWrapper}>
        <h1 className={styles.sayMyNameContainer}>
          <span className={styles.sayMyNameContainer1}>
            <p className={styles.say}>Say</p>
            <p className={styles.my}> My</p>
            <p className={styles.name}> Name</p>
          </span>
        </h1>
      </div>
      <div className={styles.createAccountLoginWrapper}>
        <div className={styles.createAccountLogin}>
          <button className={styles.buttonRegister}>
            <div className={styles.buttonRegisterChild} />
            <Link href={"https://register-mayaverse.vercel.app/"}>
              <div className={styles.createAccount}>Create Account</div>
            </Link>
          </button>
          <button className={styles.buttonLogin}>
            <div className={styles.buttonLoginChild} />
            <Link href={"https://login-mayaverse.vercel.app/"}>
              <div className={styles.login}>Login</div>
            </Link>
          </button>
        </div>
      </div>
      <div className={styles.followUs}>
        <div className={styles.buttonSeparator}>
          <div className={styles.callToSocialMedia} />
        </div>
      </div>
    </div>
  );
};

export default Home;
