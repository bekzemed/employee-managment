import { Wrapper, ItemContainer } from './Navbar.styles';

const Navbar: React.FC = () => {
  return (
    <Wrapper>
      <ItemContainer>
        <img src="./images/logo.png" alt="ADDIS SOFTWARE" />
        <p>Hi, guest</p>
      </ItemContainer>
    </Wrapper>
  );
};

export default Navbar;
