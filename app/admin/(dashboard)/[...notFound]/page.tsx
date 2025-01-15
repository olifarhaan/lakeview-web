import React from "react";
import { Button } from "@nextui-org/button";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center ">
      <h1 className="text-6xl font-bold ">404</h1>
      <h2 className="text-2xl mt-4">Page Not Found</h2>
      <p className="mt-2 ">
        Sorry, the page you're looking for does not exist.
      </p>
      <Button as="a" href="/admin/dashboard/home" className="mt-6" color="primary">
        Go Back to Home
      </Button>
    </div>
  );
};

export default NotFoundPage;
