import React from 'react';
import './Footer.css'; // Importing CSS file

function Footer() {
    return (
        <footer className="footer">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="footer-links">
                                <a href="/about">About Us</a>
                                <a href="/contact">Contact Us</a>
                                <a href="/terms">Terms Of Use</a>
                                <a href="/privacy">Privacy Policy</a>
                                <a href="/weather">Weather Today</a>
                                <a href="/newsletters">HT Newsletters</a>
                            </div>
                        </td>
                        <td>
                            <div className="footer-links">
                                <a href="/subscription">Subscription</a>
                                <a href="/disclaimer">Disclaimer</a>
                                <a href="/ad-rates">Print Ad Rates</a>
                                <a href="/code-of-ethics">Code Of Ethics</a>
                                <a href="/site-map">Site Map</a>
                                <a href="/rss-feeds">RSS Feeds</a>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <br></br>
            <hr></hr>
            <p>@ Copyright by News.Com</p>
        </footer>
    );
}

export default Footer;
