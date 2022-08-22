import styled from "styled-components";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  background-color: #243342;
  padding: 20px;
`;

const Layout = (): JSX.Element => {
  return (
    <StyledContainer>
      <Header />
      <Counter />
    </StyledContainer>
  );
};

export default Layout;
