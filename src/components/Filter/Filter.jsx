import { useDispatch, useSelector } from 'react-redux';
import { Label, Form, InputName, TextFilter } from './Filter.styled';

import { setFilter } from 'Redux/filterSlice';
import { filterValue } from 'Redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(filterValue);
  return (
    <Form>
      <Label>
        <TextFilter>Find contacts by name</TextFilter>
        <InputName
          type="text"
          name="filter"
          title="find some contact"
          required
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
        />
      </Label>
    </Form>
  );
};
