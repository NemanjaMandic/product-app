import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Wrapper = styled("div")`
  padding: 55px;
`;

const Title = styled("h1")`
  font-size: 2.3rem;
`;

const Description = styled("p")`
  text-align: left;
  letter-spacing: 1px;
  line-height: 22px;
  margin-bottom: 45px;
`;

const FlexDiv = styled("div")`
  display: flex;
  flex-direction: column;
  @media (min-width: 760px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled("div")`
  flex: 1;
  padding: 0 25px;
`;

const Div = styled("div")`
  flex: 1;
`;

const Image = styled("img")`
  max-width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const SpecificationLabel = styled("p")`
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: underline;
`;

const Specification = styled("p")`
  font-size: 1rem;
  letter-spacing: 1px;
  line-height: 22px;
  text-align: left;
`;

const Price = styled("p")`
  font-size: 2.3rem;
  font-weight: 700;
`;

const Button = styled("button")`
  background-color: #000000;
  color: #ffffff;
  border: 0;
  cursor: pointer;
  display: block;
  padding: 11px 35px;
  text-transform: uppercase;
  &:disabled {
    background-color: #999999;
    cursor: auto;
  }
`;

const FormWrapper = styled("div")`
  display: flex;
  justify-content: center;
`;

const Form = styled("form")`
  text-align: left;
`;

const Label = styled("label")`
  display: block;
`;

const BackLink = styled(Link)`
  font-size: 1.3rem;
  color: #000000;
  text-decoration: none;
`;

const CommentsWrapper = styled("div")`
  margin-bottom: 20px;
`;

const NoComments = styled("p")`
  font-size: 1rem;
  color: #999999;
`;
export {
  Wrapper,
  Title,
  Description,
  FlexDiv,
  ImageWrapper,
  Image,
  Div,
  SpecificationLabel,
  Specification,
  Price,
  Button,
  Label,
  FormWrapper,
  Form,
  BackLink,
  CommentsWrapper,
  NoComments,
};
