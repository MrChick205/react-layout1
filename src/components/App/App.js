// import React from 'react';
// import './App.css';
// import Dientich_hcn from './Dientich_hcn'; // ✔ đúng
// import { Counter_function } from './Counter_function'; // Sử dụng dấu ngoặc nhọn
// import Header from '../Header/Header';
// import LeftContent from '../Content/LeftContent';
// import RightContent from '../Content/RightContent';
// import Footer from '../Footer/Footer';
// import Products from '../Products/Products';
// import MyForm from '../Form/FormReact';  

// MENU
import React from 'react';
import MenuForm from '../Coffee/Order';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Ứng Dụng Tính Tiền Menu</h1>
      <MenuForm />
    </div>
  );
};

export default App;

// PRODUCT
// function App() {
//   return (
//     <div className="App">
//       {/* <Counter_function />
//       // <Dientich_hcn /> */}
//         {/* <Header></Header>
//         <LeftContent></LeftContent>
//         <RightContent></RightContent>
//         <Footer></Footer> */}
//         {/* <Products /> */}
//         <MyForm/>
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react';											
// import { getData } from '../Room/Room';											
// class App extends Component {											
// list = [];											
// dem = 1;											
// constructor(props) {											
// super(props);											
// this.state = {											
// id: '',											
// name: '',											
// myfile: '',											
// type_room: '',											
// area: '',											
// price: '',											
// oldprice: ''											
// };											
// this.onSubmit = this.saveLocalStorage.bind(this);											
// this.onChange = this.myChangeHandler.bind(this);											
// this.handleMessage = this.handleMessage.bind(this);											
											
// if (localStorage && localStorage.getItem('rooms')) {											
											
// this.list = JSON.parse(localStorage.getItem('rooms'));											
// } else {											
											
// this.list = [];											
// }											
// }											
											
// saveLocalStorage = (event) => {											
// this.list.push(this.state);											
// console.log(this.list);											
// localStorage.setItem('rooms', JSON.stringify(this.list));											
// this.setState({ id: "", name: "", myfile: "", type_room: "", area: "", price: "", oldprice: ""});											
// event.preventDefault();											
// };											
											
// myChangeHandler = (event) => {											
// let nam = event.target.name;											
// let val = event.target.value;											
// if(nam === 'myfile'){											
// val = event.target.files[0].name;											
// };											
											
// this.setState({ [nam]: val });											
// event.preventDefault();											
// };											
// handleMessage(event) {											
// alert('Thanks for your order!');											
// event.preventDefault();											
// }											
// render() {											
// const rom = getData();											
// localStorage.setItem('rooms', JSON.stringify(rom));											
// return (											
// <div className="container">											
// <h2>Add Room</h2>											
// <form onSubmit={this.handleSubmit}>											
// <label>Enter your name:</label>											
// <input className="form-control"											
// type="text"											
// name="name"											
// value={this.state.name}											
// placeholder={this.state.value}											
// onChange={this.myChangeHandler}											
// />											
// <label>Enter Image:</label>											
// <input											
// type='file'											
// name="myfile"											
// id="myfile"											
// value={this.state.myfile.name}											
// onChange={this.myChangeHandler}											
// />											
											
// <label>Enter TypeRoom:</label>											
// <input className="form-control"											
// type="text"											
// name="type_room"											
// value={this.state.type_room}											
// placeholder={this.state.value}											
// onChange={this.myChangeHandler}											
// />											
											
// <label>Enter Area:</label>											
// <input className="form-control"											
// type="text"											
// name="area"											
// value={this.state.area}											
// placeholder={this.state.value}											
// onChange={this.myChangeHandler}											
// />											
											
// <label>Enter Price:</label>											
// <input className="form-control"											
// type="text"											
// name="price"											
// value={this.state.price}											
// placeholder={this.state.value}											
// onChange={this.myChangeHandler}											
// />											
											
// <label>Enter oldPrice:</label>											
// <input className="form-control"											
// type="text"											
// name="oldprice"											
// value={this.state.oldprice}											
// placeholder={this.state.value}											
// onChange={this.myChangeHandler}											
// />											
											
											
// <button type="submit" id="add" onClick={this.saveLocalStorage} className="btn btn-primary">											
// Add											
// </button>											
// <button type="submit" id="add" onClick={this.handleMessage} className="btn btn-primary">											
// Dat Phong											
// </button>											
// </form>											
// <br></br>											
// <br></br>											
// <div>											
// <ul class="nav">											
// <li class="nav-item">											
// <a class="nav-link active" href="#">TRANG CHỦ</a>											
// </li>											
// <li class="nav-item">											
// <a class="nav-link disabled" href="#">PHÒNG VÀ MỨC GIÁ</a>											
// </li>											
// <li class="nav-item">											
// <a class="nav-link" href="#">ĐẶT PHÒNG</a>											
// </li>											
// <li class="nav-item">											
// <a class="nav-link" href="#">HÌNH ẢNH</a>											
// </li>											
// <li class="nav-item">											
// <a class="nav-link" href="#">GIỚI THIỆU</a>											
// </li>											
// </ul>											
											
// <div >											
// </div>											
// </div>											
// <table className="table table-striped table-dark">											
// <thead>											
// <tr>											
// <th>ID</th>											
// <th>NAME</th>											
// <th>TYPE ROOM</th>											
// <th>IMAGE</th>											
// <th>AREA</th>											
// <th>PRICE</th>											
// <th>OLDPRICE</th>											
// </tr>											
// </thead>											
// <tbody>											
// {this.list.map((item, index) => {											
// return (											
// <tr>											
// <td>{index + 1}</td>											
// <td>{item.name}</td>											
// <td>{item.type_room}</td>											
// <td><img src={"images/" + item.myfile} style={{ width:'50px', height:'50px' }}/></td>											
// <td>{item.area}</td>											
// <td>{item.price}</td>											
// <td>{item.oldprice}</td>											
// </tr>											
// );											
// })}											
// </tbody>											
// </table>											
											
// </div >											
											
// );											
// }											
// }											
// export default App;											