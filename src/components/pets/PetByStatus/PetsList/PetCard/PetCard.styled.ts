import styled from "@emotion/styled";
import { Card, CardMedia, Grid } from "@mui/material";

export const StyledCard = styled(Card)`
bgColor: "black",
 color: "white",
  height: '100%',
  border: "1px solid black",
`;

export const StyledMedia = styled(CardMedia)`
height: '140',
flex: '1',
object-fit: 'cover',
overflow: 'hidden',
cursor: 'pointer',
border: '5px',
transition:all 0.5s
`;
