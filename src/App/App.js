
import './App.css';
import Header from '../Header/Header';
import Breacrum from '../Breacrumb/Breacrum';
import Content from '../Content/Content';
import Footer from '../Footer/Footer';

function App() {
  return (
          <div>
            {/* Page Preloder */}
            {/* <div id="preloder">
              <div className="loader" />
            </div> */}
            {/* Header Section Begin */}
            <Header></Header>
            {/* Header End */}
            {/* Breadcrumb Section Begin */}
            <Breacrum></Breacrum>
            {/* Breadcrumb Section Begin */}
            {/* Product Shop Section Begin */}
              <Content></Content>
            {/* Product Shop Section End */}
            {/* Partner Logo Section Begin */}
            <Footer></Footer>
          </div>
        );
      }

export default App;
