import { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();

    if (value === '') {
      return toast.error('Search bar is empty!!!');
    }

    onSubmit(value);
    form.reset;
  };

  return (
    <header>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input type='text' autoComplete='off' autoFocus placeholder='Search images and photos' name='search' />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
