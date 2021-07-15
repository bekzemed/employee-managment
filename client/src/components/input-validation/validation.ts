export default function Validation(
  name: string,
  gender: string,
  birth: string,
  salary: number
) {
  let errors = {
    name: '',
    gender: '',
    birth: '',
    salary: '',
  };

  if (!name.trim()) {
    errors.name = 'Name field required';
  }
  if (!gender.trim()) {
    errors.gender = 'Gender field required';
  }
  if (!birth.trim()) {
    errors.birth = 'Birth Date field required';
  }
  if (!salary) {
    errors.salary = 'Salary field required';
  }

  return errors;
}
