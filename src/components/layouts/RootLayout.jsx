
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './RootLayout.css';
import reactLogo from "../../assets/react.svg";
import iconeLogin from "../../assets/icone-login.png";
import facebookLogo from "../../assets/facebook.png";
import igLogo from "../../assets/ig-icon1.png";
import youtubeLogo from "../../assets/youtube.png";



export default function RootLayout() {
    return (
        <>
            <div className="background-image">

                <header>

                    <nav>
                        <img src={reactLogo} alt="" />
                        <NavLink to="/" className="active"> Home </NavLink>
                        <NavLink to="/contacts" > Contacts </NavLink>
                        {/* <NavLink to="/firstComponent" > FirstComponent </NavLink> */}
                        <NavLink to="/mainGoal" > MainGoal </NavLink>
                        <NavLink to="/courseGoal" > CourseGoal </NavLink>
                        <NavLink to="/reactSubject" > ReactSubject </NavLink>
                        <NavLink to="/discount" > Discount </NavLink>
                       {/*  <NavLink to="/delete" > Delete </NavLink> */}
                        <NavLink to="/courses" > Courses </NavLink>
                      {/*   <NavLink to="/courses2" > Courses2 </NavLink> */}
                        <NavLink to="/listaCompras" > ListaCompras </NavLink>
                        <NavLink to="/PrendasNatal" > PrendasNatal </NavLink>
                        <NavLink to="/login" > Login <img src={iconeLogin} className="login-icon" /></NavLink>
                    </nav>
                </header>


                <Outlet />



                <footer className="site-footer">
                    <div>
                        <p className="footer-left">© 2025 • REACT PROJECT • Todos os direitos reservados</p>
                    </div>
                    <div className="footer-right">
                        <img src={facebookLogo} className="social" />
                        <img src={igLogo} className="social" />
                        <img src={youtubeLogo} className="social" />
                    </div>
                </footer>
            </div>
        </>
    )
}