import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black100};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
