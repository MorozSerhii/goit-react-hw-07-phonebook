import { ContactText, Container, TitileContact } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactList';
import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { IsLoading, filteredContacts } from 'Redux/selectors';
import { fetchContacts } from 'Redux/operations';
import { BallTriangle } from 'react-loader-spinner';
export const App = () => {
  const filteredContactsList = useSelector(filteredContacts);
  const dispatch = useDispatch();
  const loader = useSelector(IsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <TitileContact>Contacts</TitileContact>
      <Filter />
      {loader ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      ) : (
        <ContactList />
      )}
      {!filteredContactsList.length && !loader && (
        <ContactText>No contacts</ContactText>
      )}
    </Container>
  );
};
