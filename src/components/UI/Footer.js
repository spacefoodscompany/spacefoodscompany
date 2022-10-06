import "./Footer.css";

const Footer = () => {
    return(
    <footer class="footer ">
      <div class="copyright">
        Copyright &copy; 2021 by Space Foods Company. All rights reserved.
      </div>
      <div class="social-links">
        <a class="footer-link" href="https://www.instagram.com/spacefoodscompany/"><i
              class="fab fa-instagram fa-lg"></i></a>
      </div>
      <div class="address">
        <p class="footer-heading">Contact Us</p>
          <address class="contacts">
            <p>Baltimore, MD 21230</p>
            <a class="footer-link" alt="Space Foods Company email"
            href="mailto:nft@spacefoodscompany.com">nft@spacefoodscompany.com</a>
          </address>
      </div>
  </footer>);
}
export default Footer;