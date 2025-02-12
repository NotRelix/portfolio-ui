import React from "react";
import Image from "next/image";
import ProfileCard from "@/components/layout/ProfileCard";

const Blog = () => {
  return (
    <>
      <div className="flex gap-2">
        <div className="flex-grow h-fit">
          <ProfileCard />
        </div>
        <div className="flex-grow-[9] bg-neutral-900 relative overflow-hidden">
          
        </div>
      </div>
    </>
  );
};

export default Blog;
