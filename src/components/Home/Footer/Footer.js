import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section className="container">
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            
                            <h6>About</h6>
                            <p class="text-justify">
                                SvnTour <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the upcoming programmers with the code. Tour Media focuses on providing the most efficient code or snippets as the code wants to besimple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
                            </p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Categories</h6>
                            <ul class="footer-links">
                                <li>
                                    <a href="/">C</a>
                                </li>
                                <li>
                                    <a href="/">UI Design</a>
                                </li>
                                <li>
                                    <a href="/">PHP</a>
                                </li>
                                <li>
                                    <a href="/">Java</a>
                                </li>
                                <li>
                                    <a href="/">Android</a>
                                </li>
                                <li>
                                    <a href="/">Templates</a>
                                </li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li>
                                    <a href="/">About Us</a>
                                </li>
                                <li>
                                    <a href="/">Contact Us</a>
                                </li>
                                <li>
                                    <a href="/">Contribute</a>
                                </li>
                                <li>
                                    <a href="/">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/">Sitemap</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">
                                Copyright &copy; 2021 All Rights Reserved by <a href="/"> SvnTour Service</a>.</p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                {/* <li>
                                    <a class="facebook" href="/">
                                        <i class="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="twitter" href="/">
                                        <i class="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a class="linkedin" href="/">
                                        <i class="fa fa-linkedin"></i>
                                    </a>
                                </li> */}

                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
