import {
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Employee } from '../../redux/interfaces/employee';
import {
  addEmployeeRequest,
  updateEmployeeRequest,
} from '../../redux/store/actions';
import {
  Wrapper,
  EmployeeModalContainer,
  ButtonContainer,
} from './EmployeeModal.styles';

interface props {
  handleClose: () => void;
  employee: Employee | undefined;
}

const EmployeeModal: React.FC<props> = ({ handleClose, employee }) => {
  const [name, setName] = useState<string>(employee ? employee.name : '');
  const [gender, setGender] = useState<string>(employee ? employee.gender : '');
  const [birth, setBirth] = useState<string>(
    employee ? employee.birth.substring(0, 10) : ''
  );
  const [salary, setSalary] = useState<string>(
    employee ? employee.salary.toString() : ''
  );

  const dispatch = useDispatch();

  const handleEditButton = (id: string) => {
    const employeeData = {
      _id: id,
      name,
      gender,
      birth,
      salary: parseInt(salary),
    };

    dispatch(updateEmployeeRequest(employeeData));
    handleClose();
  };

  const handleAddButton = () => {
    const employeeData = {
      _id: '',
      name,
      gender,
      birth,
      salary: parseInt(salary),
    };
    dispatch(addEmployeeRequest(employeeData));
    handleClose();
  };
  return (
    <Wrapper>
      <EmployeeModalContainer>
        <i className="fas fa-times" onClick={handleClose}></i>
      </EmployeeModalContainer>
      <div>
        <TextField
          variant="outlined"
          label="Name"
          type="text"
          placeholder="Bereket"
          value={name}
          onChange={e => setName(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <FormControl variant="outlined" fullWidth>
          <InputLabel required id="gender">
            Gender
          </InputLabel>
          <Select
            labelId="gender"
            label="Gender"
            required
            value={gender}
            onChange={e => setGender(e.target.value as string)}
            placeholder="Male"
            variant="outlined"
            fullWidth
          >
            <MenuItem value={'Male'}>Male</MenuItem>
            <MenuItem value={'Female'}>Female</MenuItem>
          </Select>
        </FormControl>

        <TextField
          variant="outlined"
          label="Birth Date"
          type="date"
          value={birth}
          onChange={e => setBirth(e.target.value)}
          margin="normal"
          fullWidth
          required
        />

        <TextField
          variant="outlined"
          label="Salary"
          type="text"
          placeholder="5000"
          value={salary}
          onChange={e => setSalary(e.target.value)}
          margin="normal"
          fullWidth
          required
        />
      </div>
      <ButtonContainer>
        <Button
          variant="contained"
          onClick={e =>
            employee ? handleEditButton(employee._id) : handleAddButton()
          }
        >
          {employee ? 'Edit Employee' : 'Add Employee'}
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default EmployeeModal;
