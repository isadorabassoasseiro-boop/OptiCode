function FooterLink({ href, texto }) {
  return (
    <li>
      <a href={href}>
        {texto}
      </a>
    </li>
  );
}

export default FooterLink;