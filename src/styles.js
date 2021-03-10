import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: salmon;
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const AddButton = styled.button`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  background-color: gray;
  color: white;
`;
export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flexbox;
  margin: auto;
  border: 30px solid #999;
  /* box-sizing: border-box; */
`;
export const MiniList = styled.div`
  float: right;
  margin-bottom: 138px;
`;
export const Description = styled.h4`
  text-align: center;
  color: salmon;
`;
export const DeleteButtonStyled = styled.button`
  color: white;
  background-color: red;
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
  }
`;
export const WatchButtonStyled = styled.button`
  color: white;
  background-color: green;
  border: none;
  font-size: medium;
  padding: 0.5rem;
  margin: auto;
  display: block;
  width: 40%;
  cursor: pointer;
`;
