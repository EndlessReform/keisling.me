import React from "react"
import styles from "./homepage.module.css"
import { Helmet } from "react-helmet"

// Organisms
import Navbar from "../components/nav_dark.js"
import Footer from "../components/footer.js"

function ThreeListItem (props) {
    return(
        <li>
            <a href={props.link}>{props.linkName}</a>
            <p>🡪</p>
        </li>
    )
}

class homepage extends React.Component {
    render() { 
        return(
            <div className={styles.wrapper}>
                <Navbar />
                <Helmet>
                    <title>Jacob | Homepage</title>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                    <meta name="msapplication-TileColor" content="#da532c" />
                </Helmet>
                <div className={styles.para}>
                    <h1 className={styles.welcome_text}>Home</h1>
                </div>
                <div className={styles.cat}>
                    <h1>Courses</h1>
                    <div className={styles.threeWrapper}>
                        <div className={styles.threeBody}>
                            <h2>Latin</h2>
                            <ul>
                                <ThreeListItem link = 'https://logeion.uchicago.edu/lexidium' linkName = "Logeion" />
                                <ThreeListItem link = 'https://www.thelatinlibrary.com/' linkName = "Latin Library" />
                                <ThreeListItem link = "http://www.perseus.tufts.edu/hopper/" linkName = "Perseus" />
                                <ThreeListItem link = "http://www.logical.ai/arma/" linkName = "AI Scansion" />
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.cat}>
                    <h1>Study</h1>
                    <div className={styles.threeWrapper}>
                        <div className={styles.threeBody}>
                            <h2>Internships</h2>
                            <ul>
                                <ThreeListItem link='https://github.com/Pitt-CSC/Summer2021-Internships' linkName = "Pitt CSC Spreadsheet" />
                                <ThreeListItem link='https://leetcode.com/' linkName = "Leetcode" />
                                <ThreeListItem link='https://www.hackerrank.com/' linkName = "HackerRank" />
                                <ThreeListItem link='https://uchicago.joinhandshake.com/login' linkName = "Handshake" />
                                <ThreeListItem link='https://www.indeed.com/' linkName = "Indeed" />
                            </ul>
                        </div>
                        <div className={styles.threeBody}>
                            <h2>Japanese</h2>
                            <ul>
                                <ThreeListItem link='https://www.imabi.net/' linkName = "Imabi" />
                                <ThreeListItem link='https://tangorin.com/' linkName = "Tangorin" />
                                <ThreeListItem link='https://www3.nhk.or.jp/news/easy/' linkName = "NHK Easy News" />
                                <ThreeListItem link='https://jlptsensei.com/jlpt-n4-grammar-list/' linkName = "JLPT N4 Points" />
                                <ThreeListItem link='https://community.wanikani.com/' linkName = "WaniKani Forums" />
                            </ul>
                       </div>                        
                       <div className={styles.threeBody}>
                            <h2>Employment</h2>
                            <ul>
                                <ThreeListItem link='https://wd5.myworkday.com/uchicago/d/home.htmld' linkName = "Workday" />
                                <ThreeListItem link='https://net-git01.uchicago.net/users/sign_in' linkName = "Gitlab" />
                            </ul>
                       </div>
                    </div>
                </div>
                <div className={styles.cat}>
                    <h1>Spending time</h1>
                    <div className={styles.threeWrapper}>
                        <div className={styles.threeBody}>
                            <h2>Find new content</h2>
                            <ul>
                                <ThreeListItem link = "https://hn.algolia.com/" linkName = "Search Hacker News" />
                                <ThreeListItem link = "https://dev.to/" linkName = "Dev" />
                                <ThreeListItem link = "https://www.producthunt.com/" linkName = "Product Hunt" />
                                <ThreeListItem link = "https://mostrecommendedbooks.com/gpt3/" linkName = "GPT-3 Books" />
                            </ul>
                        </div>
                        <div className={styles.threeBody}>
                            <h2>Find fresh styles</h2>
                            <ul>
                                <ThreeListItem link="https://www.typewolf.com/" linkName = "Typewolf" />
                                <ThreeListItem link="https://letterformarchive.org/" linkName = "Letterform Archive" />
                                <ThreeListItem link='https://www.ecommercestack.co/' linkName = "Marketing Inspo" />
                                <ThreeListItem link='https://artvee.com' linkName = "Artvee" />
                            </ul>
                       </div>                        
                       <div className={styles.threeBody}>
                            <h2>Kick back</h2>
                            <ul>
                                <ThreeListItem link='https://www.youtube.com/playlist?list=PL0IctxYlofuGhRIrM06-_e_9QOcXE_7kp' linkName = "Study Playlist" />
                                <ThreeListItem link='https://news.ycombinator.com/news' linkName = "Hacker News" />
                                <ThreeListItem link='https://shapez.io/' linkName = "Shapez" />
                                <ThreeListItem 
                                    link='https://rooms.lib.uchicago.edu/seats?lid=4267&gid=23823&c=-1' 
                                    linkName = "UChicago Study Seats" 
                                />
                            </ul>
                       </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
export default homepage;