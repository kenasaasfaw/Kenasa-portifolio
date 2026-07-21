export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-foreground/80 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <a
        href="#hero"
        className="px-6 py-3 rounded-lg bg-primary text-background font-semibold hover:opacity-90 transition"
      >
        Go Home
      </a>
    </div>
  );
};
