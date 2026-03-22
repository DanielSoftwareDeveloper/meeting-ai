export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="">From Public Layout</h1>
      {children}
    </div>
  );
}
