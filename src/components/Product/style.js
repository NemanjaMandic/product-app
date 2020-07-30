import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Title = styled("h3")`
  font-size: 1rem;
`;

const ProductLink = styled(Link)`
  color: #000;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: #ff6600;
  }
  &:hover img {
    transform: scale(1.1);
  }
`;

const Image = styled("img")`
  width: 185px;
  height: 200px;
  transition: 0.3s;
`;

export { Title, ProductLink, Image };
