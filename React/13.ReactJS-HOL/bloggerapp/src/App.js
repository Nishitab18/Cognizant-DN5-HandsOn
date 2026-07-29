import React from "react";
import BookDetails from "./BookDetails";
import BlogDetails from "./BlogDetails";
import CourseDetails from "./CourseDetails";

function App() {
  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  let bookComponent;

  // Method 1: if-else conditional rendering
  if (showBooks) {
    bookComponent = <BookDetails />;
  } else {
    bookComponent = <h2>Book Details are not available</h2>;
  }

  return (
    <div style={{ display: "flex", gap: "50px", margin: "30px" }}>

      <div>
        {bookComponent}
      </div>

      <div>
        {/* Method 2: Ternary Operator */}
        {showBlogs ? (
          <BlogDetails />
        ) : (
          <h2>Blog Details are not available</h2>
        )}
      </div>

      <div>
        {/* Method 3: Logical && Operator */}
        {showCourses && <CourseDetails />}
      </div>

    </div>
  );
}

export default App;