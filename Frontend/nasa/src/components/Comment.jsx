import { Stack, Typography } from '@mui/material'
import React from 'react'

const Comment = ({title}) => {
  return (
    <Stack
      sx={{
        width: "500px",
        hieght: "100px",
        p: 3,
        backgroundColor: "aliceblue",
        borderTopLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
        tenetur quasi dolorem perferendis impedit pariatur fugiat tempora
        assumenda, sed praesentium reiciendis sequi quam, iure est debitis.
        Suscipit, voluptates. Et, blanditiis.
      </Typography>
    </Stack>
  );
}

export default Comment
