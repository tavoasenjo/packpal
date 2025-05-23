const Header = () => {
  return (
    <header className='bg-primary flex items-center justify-center gap-5 border-b-4 border-secondary'>
      <h1 className='text-shadow-lg/30 py-10 font-logo text-6xl sm:text-8xl text-secondary font-bold text-center'>
        PackPal
      </h1>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='size-14 sm:size-24  text-secondary'>
        <path d='M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z' />
        <path d='M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z' />
      </svg>
    </header>
  );
};

export default Header;
