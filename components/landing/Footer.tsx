export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <a href="#" className="logo">
          <img src="/favicon.svg" alt="" width={26} height={26} className="logo-img" />
          MUSYNC
        </a>
        <div className="footer-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
          <a href="#">Contato</a>
        </div>
        <div className="copy">© 2026 MUSYNC · Feito para empresas de música ao vivo</div>
      </div>
    </footer>
  );
}
