import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`;
export const Description = styled.h4`
  text-align: center;
`;
export const DeleteButtonStyled = styled.p`
  color: red;
  border: none;
  font-size: medium;
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    font-style: italic;
`;
export const WatchButtonStyled = styled.p`
  color: green;
  border: none;
  font-size: medium;
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  cursor: pointer;
`;
