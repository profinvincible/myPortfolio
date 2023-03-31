import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import navbarGroupimage from "../public/images/navbarGroupimage.png";
import Image from "next/image";
import owner from "../public/images/owner.png";

const Navbar = () => {
  return (
    <section className={styles.heroImage}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            {/* <div style={{ marginBottom: "450px" }}> */}
            <p className={styles.p}>MI</p>
            {/* </div> */}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div className={styles.navlink}>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="/">
                    Home
                  </Link>
                </li>
              </div>
              <div className={styles.navlink}>
                <li className="nav-item">
                  <Link href="/aboutme" className="nav-link">
                    About Me
                  </Link>
                </li>
              </div>
              <div className={styles.navlink}>
                <li className="nav-item">
                  <Link href="/services" className="nav-link">
                    Services
                  </Link>
                </li>
              </div>
              {/* <Image
                style={{ height: "700px", width: "auto" }}
                src={navbarImage}
                alt={"/"}
              /> */}
              <div className={styles.navlink}>
                <li className="nav-item">
                  <Link href="/portfolio" className="nav-link">
                    Portfolio
                  </Link>
                </li>
              </div>
              {/* <Image
                style={{ height: "500px", width: "auto" }}
                className="col-lg-6 rounded float-end mb-5 pb-5"
                src={navbarGroupimage}
                alt={"/"}
              /> */}
            </ul>
          </div>
        </div>
      </nav>
      <div className="container justify-content-center d-none d-lg-block d-md-block d-sm-none d-xs-none">
        <div className="row">
          <div className="col-lg-8 col-md-6 mt-5 pt-5">
            <h2 className={styles.myPortfoliotext}>Muoghalu Ijeoma Florence</h2>
          </div>
          <Image
            style={{ height: "400px", width: "auto" }}
            className="col-lg-4 col-md-6"
            src={owner}
            alt={"/"}
          />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
