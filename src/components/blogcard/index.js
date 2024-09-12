import React from "react";
import { Card, CardContent, CardMedia, Typography, Divider, Avatar, CardHeader } from "@mui/material";

const BlogCard = ({ blog }) => {
  const handleClick = () => {
    window.open(blog.link, "_blank");
  };

  return (
    <Card
      className="clickable"
      onClick={handleClick}
      sx={{
        borderRadius: 4,
        border: "1px solid rgba(15, 179, 175, 0.4)",
        boxShadow: "0px 0px 13px rgba(0, 0, 0, 0.09)",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardMedia sx={{ height: 300, borderRadius: 1 }} image={blog.image} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {blog.title}
        </Typography>
        <Typography
          gutterBottom
          variant="body1"
          lineHeight={2}
          color="text.secondary"
        >
          {blog.description}
        </Typography>
        <Divider variant="middle" />
        <CardHeader
          avatar={<Avatar alt={blog.name} src={blog.avatar} />}
          title={blog.name}
          subheader={blog.date}
          sx={{
            "@media (max-width: 800px)": {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            },
          }}
        ></CardHeader>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
