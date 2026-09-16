export function Link({ href = "#", className, children, ...props }) {
  const external = href.startsWith("http") || href.startsWith("mailto:");
  if (external) {
    return (
      <a
        href={href}
        className={className}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}