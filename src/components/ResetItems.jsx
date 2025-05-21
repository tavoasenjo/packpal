const ResetItems = ({ resetList }) => {
  return (
    <section className='bg-red-400 flex justify-center py-5'>
      <button
        onClick={resetList}
        className='border-2 border-amber-50 text-amber-50 p-2 rounded-md uppercase'>
        reset list
      </button>
    </section>
  );
};

export default ResetItems;
