import React from 'react'

const Footer = () => {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bgNav ">
            <div className="col-md-4 d-flex align-items-center">
                <s className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <svg className="bi" width="30" height="24"></svg>
                </s>
                <span className="mb-3 mb-md-0 text-light">&copy; 2022 Company, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-5">
                <li className="ms-3 text-light"><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="feather feather-instagram"
                    viewBox="0 0 24 24"
                >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                    <path d="M17.5 6.5L17.51 6.5"></path>
                </svg>
                </li>
                <li className="ms-3 text-light">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="feather feather-facebook"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </li>
                <li className="ms-3 text-light">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="feather feather-twitter"
                        viewBox="0 0 24 24"
                    >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </li>
            </ul>
        </footer>
    )
}

export default Footer