import React from "react";
import BlogBanner from "../components/blog/blogBanner.tsx/BlogBanner";
import BlogContent from "../components/blog/blogContent/BlogContent";
import Pagination from "../components/blog/blogContent/Pagination";
import Support from "../components/shop/support/Support";

const page = () => {
  return (
    <div>
      <BlogBanner />
      <BlogContent />
      <Pagination />
      <Support />
    </div>
  );
};

export default page;
