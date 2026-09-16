export function Card({
  children,
  className = "",
  as: Tag = "div",
  ...props
}) {
  return (
    <Tag
      className={`rounded-lg border border-line bg-white p-7 transition-colors duration-200 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}