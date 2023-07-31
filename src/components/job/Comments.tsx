import { Box, Card, CardContent, CardHeader, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getJobComments } from "./AdminJobStatus";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

import ErrorAlert from "../alerts/Error";
import LoadingAlert from "../alerts/Loading";
import CommentsCard from "../card/CommentsCard";
import { SmnkErrorBoundary } from "@/pages/_app";

function Comments() {
  const { _id } = useSelector((state: RootState) => state.users.user);
  const [comments, setComments] = useState<any[] | null>(null);
  const [error, setError] = useState();

  useEffect(() => {
    getJobComments(setComments, setError, _id);
  }, [_id]);

  if (error) return <ErrorAlert />;
  if (!comments) return <LoadingAlert />;
  if (Array.isArray(comments) && comments.length === 0) return <p></p>;
  return (
    <SmnkErrorBoundary>
      <Box p={2}>
        <Typography fontWeight={"bold"} mt={5} mb={2}>
          Comments:
        </Typography>
        {comments.map((comment: any) => (
          <>
            {comment.comments.map((comm: any) => (
              <CommentsCard key={comm._id} comment={comm} />
            ))}
          </>
        ))}
      </Box>
    </SmnkErrorBoundary>
  );
}

export default Comments;
