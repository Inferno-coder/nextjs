export default function dashboard({children}) {
    return (
    <>
        <h1>Header</h1>
      <section className="flex  justify-between p-24">   
       {children}
      </section>
       <h1>Footer</h1>
       </>
    );
  }
  