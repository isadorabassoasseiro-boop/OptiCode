function FooterColuna({ titulo, children }) {
  return (
    <div className="colunaRodape">

      <h3>{titulo}</h3>

      <ul>
        {children}
      </ul>

    </div>
  );
}

export default FooterColuna;