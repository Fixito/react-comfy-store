import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <main className="grid min-h-screen place-items-center px-8">
        <div className="space-y-4 text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
          <Link to="/" className="btn btn-secondary">
            Go back home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center px-8">
      <h4 className="text-center text-4xl font-bold">There was an error... </h4>
    </main>
  );
};

export default Error;
