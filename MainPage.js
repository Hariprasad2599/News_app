import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './MainPage.css';
import NewsPage from './NewsPage';
import Footer from './Footer';

function ProductPage() {
    const [infoVisible1, setInfoVisible1] = useState(false);
    const [infoVisible2, setInfoVisible2] = useState(false);
    const [infoVisible3, setInfoVisible3] = useState(false);

    const toggleInfo1 = () => {
        setInfoVisible1(!infoVisible1);
        setInfoVisible2(false);
        setInfoVisible3(false);
    };

    const toggleInfo2 = () => {
        setInfoVisible2(!infoVisible2);
        setInfoVisible1(false);
        setInfoVisible3(false);
    };

    const toggleInfo3 = () => {
        setInfoVisible3(!infoVisible3);
        setInfoVisible1(false);
        setInfoVisible2(false);
    };

    return (
        <div className="product-page">
            <div className="container mt-4">
                <table className="product-table">
                    <tbody>
                        <div className="center-text">
                        <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '36px', color: '#FF4500', textShadow: '2px 2px 4px #000000' }}>Latest News</h1>
                        </div>
                        <tr>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Google Icon.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    {/* <h2>Google Launches New Transparency Center to Share More Information on Platform Policies</h2> */}
                                    <h2>
                                        <a href="#" className="link-style">Google Launches New Transparency Center to Share More Information on Platform Policies</a>
                                    </h2>
                                    <button onClick={toggleInfo1} className="button">Read More</button>
                                    {infoVisible1 && (
                                        <div id="additionalInfo1">
                                            <p>Google is all set to welcome a new version of its Transparency Center.</p>
                                            <p>The new version is designed to make it easier for users to access all of Google’s various policy and process documentation.</p>
                                            <p>As per screenshots, the updated Transparency Center aims to provide a simplified, streamlined access point for Google’s various rule documents and processes. It will also include stats and notes on the platform’s policies and approaches.</p>
                                            <p>The update will be handy as it will make it easier to understand all of Google’s various policies. For marketers, the new update can be a helpful resource to ensure that you’re aligning with Google’s rules</p>
                                        </div>
                                    )}
                                </div>
                            </td>

                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\ICICI-BANK.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    {/* <h2>YouTube Updates Channel Permissions Controls to Make Assigning In-App Help Easier.</h2> */}
                                    <h2>
                                        <a href="#" className="link-style">ICICI Bank Q4 Results: Net profit jumps 17% to Rs 10,707 crore, asset quality stays healthy.</a>
                                    </h2>
                                    {/* Use onClick event handler to toggle visibility */}
                                    <button onClick={toggleInfo2} className="button">Read More</button>
                                    {/* Use infoVisible state to conditionally display additional information */}
                                    {infoVisible2 && (
                                        <div id="additionalInfo2">
                                            <p>Private sector lender ICICI Bank on April 27 reported a net profit of Rs 10,707 crore for the January-March quarter of the financial year 2023-24, which marks a 17 percent jump as compared to Rs 9,122 crore clocked in the year-ago period.</p>
                                            <p>The net profit is in line the market estimates of Rs 10,331 crore. The bank recommended a dividend of Rs 10 per share. </p>
                                            <p>  The net interest income (NII) of Rs 19,093 crore, increased by 8 percent as compared to Rs 17,667 crore reported in the corresponding quarter of the previous fiscal. The NII is slightly higher as against the estimates of Rs 18,958 crore.</p>
                                            <p>The bank's gross non-performing asset (NPA) stood at 2.16 percent, down from 2.81 percent recorded in the same quarter last year. On the other hand, net NPA for the quarter stood at 0.42 percent compared to 0.48 percent last year.</p>
                                        </div>


                                    )}
                                </div>
                            </td>

                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Instagram Icon.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    {/* <h2>Instagram To Introduce New Option to Hide Your Like Activity in the App</h2> */}
                                    <h2>
                                        <a href="#" className="link-style">Instagram To Introduce New Option to Hide Your Like Activity in the App.</a>
                                    </h2>
                                    {/* Use onClick event handler to toggle visibility */}
                                    <button onClick={toggleInfo3} className="button">Read More</button>
                                    {/* Use infoVisible state to conditionally display additional information */}
                                    {infoVisible3 && (
                                        <div id="additionalInfo3">
                                            <p>Instagram is currently testing a new feature that will allow users to hide their Like activity within the app.</p>
                                            <p>According to an example shared by social media specialist Matt Navarra, some users are seeing pop-up notifications.</p>
                                            <p>According to the pop-up, they can hide likes from anybody they choose. It will help you to conceal your like activity from those who do not follow you. It will also restrict visibility to close pals.</p>
                                            <p>This option provides consumers with an additional level of assurance. In other words, it will make them feel more at ease when using the program.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                        </tr>
                        {/* Other product cards */}
                    </tbody>
                </table>

                < NewsPage />
                <Footer />
            </div>
        </div>
    );
}

export default ProductPage;
