import Logo from '@/components/Logo';

function App() {
  return (
    <main className='w-screen h-screen bg-primary-cloud pt-[180px]'>
      <header className='container h-max flex-center flex-col gap-9 mx-auto'>
        <Logo />

        <p className='roboto text-sm text-primary-sky tracking-[0.2em] uppercase'>
          question 1 / 7
        </p>
      </header>

      {/* Survey steps container */}
      <section className='container mx-auto'></section>
    </main>
  );
}

export default App;
