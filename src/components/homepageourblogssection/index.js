import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Stack } from "@mui/material";
import api from "../../api/api";
import BlogCard from "../blogcard";

const OurBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        setBlogs(response.data);
      } catch (error) {
        // console.error("Error retrieving blogs:", error);
      }
    };

    getBlogs();
  }, []);

  return (
    <Stack spacing={5} mt={20} alignItems="center" justifyContent="center">
      <Typography variant="h4" textAlign="center">
        Our Blogs
      </Typography>
      <Grid container spacing={4} alignItems="stretch">
        {blogs.map((blog, index) => (
          <Grid item lg={4} md={6} sm={6} xs={12} key={index}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default OurBlogs;
