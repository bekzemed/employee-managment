import { Wrapper, SidebarItem, SideItems } from './Sidebar.styles';

const Sidebar: React.FC = () => {
  return (
    <Wrapper>
      <SidebarItem>
        <SideItems>
          <i className="fas fa-tachometer-alt fa-2x"></i>
          <p>Dashboard</p>
        </SideItems>
      </SidebarItem>
    </Wrapper>
  );
};

export default Sidebar;
