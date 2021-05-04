import NavBar from 'components/navbar/index';
import Footer from 'components/footer/index';
import DataTable from 'components/datatable/index';


function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className = 'text-primary'>Ola Mundo!</h1>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
