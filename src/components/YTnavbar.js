"use client"
import "@/stylesheets/YTnavbar.css"
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";

function Navigation() {
  return (
    <div className="Navbar">
      <div className="NavbuttonDiv2">
        <nav>
          <ul>
            <RxHamburgerMenu
              className="HamBurger"
              style={{
                color: "white",
                fontSize: "45px",
                padding: "10px",
                borderRadius: "70px",
                marginLeft: "17px",
               
              }}
            />
            <li style={{ cursor: "not-allowed" }}>
              <Link href="/" style={{ cursor: "not-allowed" }}>
                <MdHomeFilled
                  style={{
                    color: "white",
                    fontSize: "50px",
                    padding: "10px",
                    paddingTop: "17px",
                    marginLeft: "13px",
                    cursor: "not-allowed"
                  }}
                />
                Home
              </Link>
            </li>
            <li style={{ cursor: "not-allowed" }}>
              <Link href="/" style={{ cursor: "not-allowed" }}>
                <SiYoutubeshorts
                  style={{
                    color: "white",
                    fontSize: "50px",
                    padding: "10px",
                    paddingTop: "17px",
                    marginLeft: "13px",
                    cursor: "not-allowed"
                  }}
                />
                Shorts
              </Link>
            </li>
            <li style={{ cursor: "not-allowed" }}>
              <Link href="/" style={{ cursor: "not-allowed" }}>
                <MdOutlineSubscriptions
                  style={{
                    color: "white",
                    fontSize: "50px",
                    padding: "10px",
                    paddingTop: "17px",
                    marginLeft: "13px",
                    cursor: "not-allowed"
                  }}
                />
                Subscriptions
              </Link>
            </li>
            <li style={{ cursor: "not-allowed" }}>
              <Link href="/" style={{ cursor: "not-allowed" }}>
                <MdOutlineVideoLibrary
                  style={{
                    color: "white",
                    fontSize: "50px",
                    padding: "10px",
                    paddingTop: "17px",
                    marginLeft: "13px",
                    cursor: "not-allowed"
                  }}
                />
                You
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navigation;
