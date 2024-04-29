
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Entertainment.css';


function ProductPage() {
    const [infoVisible4, setInfoVisible4] = useState(false);
    const [infoVisible5, setInfoVisible5] = useState(false);
    const [infoVisible6, setInfoVisible6] = useState(false);
    const [infoVisible7, setInfoVisible7] = useState(false);
    const [infoVisible8, setInfoVisible8] = useState(false);
    const [infoVisible9, setInfoVisible9] = useState(false);

    const toggleInfo4 = () => {
        setInfoVisible4(!infoVisible4);
        setInfoVisible5(false);
        setInfoVisible6(false);
    };

    const toggleInfo5 = () => {
        setInfoVisible5(!infoVisible5);
        setInfoVisible4(false);
        setInfoVisible6(false);
    };

    const toggleInfo6 = () => {
        setInfoVisible6(!infoVisible6);
        setInfoVisible7(false);
        setInfoVisible8(false);
    };


    const toggleInfo7 = () => {
        setInfoVisible7(!infoVisible7);
        if (infoVisible7) {
            setInfoVisible8(false);
            setInfoVisible9(false);
        }
    };

    const toggleInfo8 = () => {
        setInfoVisible8(!infoVisible8);
        if (infoVisible8) {
            setInfoVisible7(false);
            setInfoVisible9(false);
        }
    };

    const toggleInfo9 = () => {
        setInfoVisible9(!infoVisible9);
        if (infoVisible9) {
            setInfoVisible8(false);
            setInfoVisible6(false);
        }
    };

    return (
        <div className="product-page">
            <style>{`
                .product-cell {
                    width: 33.33%;
                    padding: 10px;
                    position: relative;
                }

                .image-text {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background-color: rgba(0, 0, 0, 0.7);
                    color: white;
                    padding: 10px;
                    font-size: 40px;
                    font-weight: bold;
                }

                .link-style {
                    text-decoration: none;
                    color: inherit;
                    cursor: pointer;
                }

                .link-style:hover {
                    color: blue;
                }

                /* Disable image zoom on hover for images inside the product-table */
                .product-table img {
                    pointer-events: none;
                }
                .button {
                    background: linear-gradient(to bottom, #4CAF50 0%, #45a049 100%);
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                    margin: 4px 2px;
                    transition-duration: 0.4s;
                    cursor: pointer;
                    border-radius: 12px;
                    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
                }

                .button:hover {
                    background: linear-gradient(to bottom, #45a049 0%, #4CAF50 100%);
                    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.5);
                }
                //css
                /* Advanced CSS for tables */
                .product-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                
                .product-table th, .product-table td {
                    border: 1px solid #dddddd;
                    padding: 8px;
                    text-align: left;
                }
                
                .product-table th {
                    background-color: #f2f2f2;
                }

                /* Additional CSS for table cells */
                .product-cell {
                    width: 33.33%;
                    padding: 10px;
                    position: relative;
                }
 
            `}</style>

            <div className="container mt-4">
                <table className="product-table">
                    <tbody>
                        <div className="center-text">
                            <h1 style={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', fontSize: '36px', color: '#FF4500', textShadow: '2px 2px 4px #000000' }}>Education News</h1>
                        </div>
                        <tr>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Education\News1.jpg" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">CUET UG 2024 exam city slip will be May 5, confirms UGC </a>
                                    </h2>
                                    <button onClick={toggleInfo4} className="button">Read More</button>
                                    {infoVisible4 && (
                                        <div id="additionalInfo4">
                                            <p>chairman University Entrance Test for Undergraduates (CUET UG) 2024 by May 5, confirms UGC Chairman Mamidala Jagadesh Kumar.
                                                Once issued, candidates who have registered for the CUET UG 2024 exam will be able to access and download the intimation slip from the officialwebsite at cuetug.ntaonline.in.</p>
                                            <p>According to UGC chairman Mamidala Jagadesh Kumar, candidates can expect to see their CUET UG exam city information on the National Testing Agency's website by May 5th, or even earlier.</p>

                                        </div>

                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Education\News2.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">Engineering Entrance Exams in India</a>
                                    </h2>
                                    <button onClick={toggleInfo5} className="button">Read More</button>

                                    {infoVisible5 && (
                                        <div id="additionalInfo5">
                                            <p>Engineering entrance exams in India are an important part ofstudent looking to pursue a career in engineering. The compe competition is tough, with lakhs of students appearing for these exams every year.
                                                Clearing engineering entrance examswith a good score is essential for securing admission to to top engineering colleges in India.</p>
                                            <p>If you are a student looking to pursue a career in engineering, you are in the right place.
                                                We provide comprehensive information and the latest updates about all the national, state, and
                                                university level engineering entrance exams in India. You can find details about the eligibility
                                                criteria, exam pattern, syllabus, important dates, and more for all the major engineering entrance
                                                exams in India, including JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEEE, MHT-CET, KCET, TNEA, and other
                                                state level engineering entrance examinations.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Education\News3.jpg" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">PSEB 8th, 12th Result 2024 likely onApril 30, here's how to check your scorecards</a>
                                    </h2>
                                    <button onClick={toggleInfo6} className="button">Read More</button>

                                    {/* <button onClick={toggleInfo6} style={{ cursor: 'pointer' }}>Read More</button> */}
                                    {infoVisible6 && (
                                        <div id="additionalInfo6">
                                            <p>The Punjab Secondary Education Board (PSEB) is set announce the results for both class 8th and 12th on April 302024.
                                                The specific time of release is yet to be confirmed officially, but students can anticipate accessing their
                                                scorecards on the PSEB website, pseb.ac.in, by month-end.</p>
                                            <p>The Punjab Secondary Education Board (PSEB) is expected to declare the results
                                                for both class 8th and 12th on April 30,2024. The official confirmation regarding
                                                the exact time of  result release is still awaited, but students can expect their
                                                scorecards on the PSEB website, pseb.ac.in, by the end of the month.</p>
                                            <p>The PSEB successfully conducted the class 12th exams from February 13 to March 30,
                                                2024, and the class 8th exams from  March 7 to 27, 2024.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            {/* Rest of your code */}
                        </tr>
                        {/* Repeat the same pattern for other rows and products */}
                        <tr>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Education\News4.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">TS EAMCET 2024 Hall Ticket Live Updates: Telangana EAPCET admit card link today at eamcet.tsche.ac.in
                                        </a>
                                    </h2>

                                    <button onClick={toggleInfo7} className="button">Read More</button>
                                    {infoVisible7 && (
                                        <div id="additionalInfo7">
                                            <p>Manabadi TS EAMCET Hall Ticket 2024 Live Updates: The Jawaharlal Nehru Technological University (JNTU) Hyderabad will today
                                                (April 29) release the admit card for the Telangana State Engineering, Agriculture and Medical Common Entrance Test (TS EAMCET) 2024.
                                                Applicants can download the TS EAPCET 2024 hall ticket at the official website – eapcet.tsche.ac.in.</p>
                                            <p>The Telangana EAPCET is held for admission to various undergraduate programmes in engineering,
                                                agriculture and pharmacy in colleges in Telangana.</p>
                                            <p>As per the schedule, the TS EAMCET 2024 exam will be conducted on May 7, 8, 9, 10 and 11. The TS EAMCET entrance exam will be conducted in computer-based (CBT) mode for a duration of three hours.</p>
                                        </div>

                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Education\News5.avif" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">CUET UG 2024 city slip likely by May 5, admit cards in second week</a>
                                    </h2>

                                    <button onClick={toggleInfo8} className="button">Read More</button>
                                    {infoVisible8 && (
                                        <div id="additionalInfo8">
                                            <p>The National Testing Agency (NTA) is likely to release advanced city intimation slip for Common University Entrance Test,
                                                Undergraduate (CUET UG) 2024 by May 5, UGC Chief, M Jagadesh Kumar, said.  Once released, students will be able to check
                                                the slip at the official CUET UG 2024 website — exams.nta.ac.in/CUET-UG/</p>
                                            <p>The city intimation slips will now be released from May 15 and the admit cards will be released in the second week of May.
                                                Usually, NTA releases admit cards for CUET UG at least three days before the exam dates to ensure no unfair means can be practiced.</p>
                                            <p>NTA will conduct the CUET UG 2024 between May 15 and 24. This time, the exams will be conducted in Hybrid mode (CBT, and Pen & Paper)
                                                mode for about 13.48 lakh candidates at various examination centers located in 380 cities including 26 cities outside India.</p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            <td className="product-cell">
                                <div className="card" style={{ width: '400px' }}>
                                    <img src="Assets\Education\News6.webp" className="card-img-top compressed-img" alt="Google" style={{ width: '100%', maxHeight: '200px', height: 'auto' }} />
                                    <h2>
                                        <a href="#" className="link-style">JEE Main 2024 Topper: ‘Prioritised quality over quantity,’ says Visharad Srivastava</a>
                                    </h2>

                                    <button onClick={toggleInfo9} className="button">Read More</button>
                                    {infoVisible9 && (
                                        <div id="additionalInfo9">
                                            <p>JEE Main 2024 Topper: Mastering the fundamentals is the key,
                                                said Visharad Srivastava from Maharashtra’s Navi Mumbai who scored 100 percentile in National Testing Agency’s JEE Main 2024.
                                                He is among 56 other candidates who scored 100 percentile in the JEE Main session 2. </p>
                                            <a href=''><p>JEE Main 2024 Result Updates</p></a>
                                            <p>“ I familiarised myself with the JEE Advanced syllabus and exam pattern early on.
                                                This helped me create a focused study plan throughout the two years,” said the boy who scored 100 per cent in Class 10. </p>
                                            <p>Like other toppers, Srivastava aims to study computer science engineering from the Indian Institute of Technology-Bombay.
                                                “It’s a place where you’re surrounded by the best – brilliant professors at the forefront of research, cut-throat competition from fellow
                                                JEE toppers and a curriculum that constantly adapts to industry needs,” said Visharad who prioritised quality over quantity and aimed for
                                                5-6 focused hours of daily study, with breaks interspersed to avoid burnout. </p>
                                        </div>
                                    )}
                                </div>
                            </td>
                            {/* Rest of your code */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ProductPage;
