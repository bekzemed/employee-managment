import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Employee from './components/employee/Employee';
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Employee />
      </div>
    </>
  );
};

export default App;
