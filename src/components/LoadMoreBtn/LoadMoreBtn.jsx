const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div>
      <button onClick={loadMore} type='button'>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
