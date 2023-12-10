function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-gray-700 text-white footer-center">
      <div>Copyright &copy; {footerYear} All rights reserved.</div>
    </footer>
  );
}

export default Footer;
