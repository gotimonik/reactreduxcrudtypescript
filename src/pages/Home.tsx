import React, { Suspense } from "react";

const Home = () => {
  const ListPost = React.lazy(() => import("../components/ListPost"));
  return (
    <div>
      <Suspense fallback={<div> Loading... </div>}>
        <ListPost />
      </Suspense>
    </div>
  );
};

export default Home;
