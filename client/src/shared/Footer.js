import "./Footer.css"


export const Footer = ()=>{


    return(
        <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 footer-item">
              <h4 className="lang-en">Services</h4>
             
              
              <ul className="menu-list ps-4 lang-en">
                <li><a href="#">Part Time Job</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Full Time Job</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">Remotly Job</a></li>
              </ul>
             
            </div>
            <div className="col-md-4 col-sm-12 footer-item">
             
            <h4 className="lang-en">Departments</h4>
              <ul className="menu-list ps-4 lang-en">
                <li><a href="#about">Machine Learning</a></li>
               
                <li><a href="#pricing">Web Development</a></li>
                <li><a href="faq.html">Mobile Development</a></li>
                <li><a href="faq.html">Internet Technology</a></li>
                
              </ul>
              
            </div>
            <div className="col-md-4 col-sm-12 footer-item">
              <h4 className="lang-en">Get in touch</h4>
              
              <ul className="menu-list ps-4">
                <li className="get-in-touch">
                  <i className="fa fa-envelope"></i>
                  <a id='email'href="#">Employment@gmail.com</a>
                </li>
                <li className="get-in-touch">
                  10th-Abbas Elakkad Street , cairo-Egypt.
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </footer>
    )
};