// import React from 'react';
// import logo from './logo.svg';

// class App extends React.Component {
//   render(){
//     return (
//       <div className="App">

//       </div>
//     );
//   }
// }
// export default App;


import React from 'react';
import styled from 'styled-components';

const Wrap=styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 1em;
`
 
const Primary=styled.div`
    max-width: 650px;
    margin: 0 auto;
    font-family: 'Sen', sans-serif;
`

const Block = styled.div`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid darkgray;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-bottom: 3vh;
  margin-top: 1vh;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: darkgray;
    color: white;
  }
`;


const Congnghe = () => (
    <Block>
      <h1>Chào mừng bạn đến với blog công nghệ</h1>
      <p>Chiều 29/9, nhiều người dùng mạng MobiFone nhận thông báo thiết bị không thể xác thực PDP.</p>
      <p>Khoảng 16h20 chiều 29/9, người dùng mạng di động MobiFone phản ánh tình trạng chập chờn, thậm chí mất kết nối. Cột sóng của các máy dùng SIM 3G, 4G đều ở mức thấp, chỉ 1-2 vạch. Khi truy cập mạng thì máy báo không có Internet, kèm thông báo lỗi xác thực PDP.

Viết tắt của Packet Data Protocol, PDP là giao thức sử dụng chuyển mạch gói (packet switching), kỹ thuật dùng mạng gửi thông tin từ máy tính đến nơi nhận, trong đó dữ liệu được chia thành các gói (pack) chứa địa chỉ IP gửi, địa chỉ nhận và số thứ tự của gói.

Giao thức PDP được sử dụng cho các hệ thống mạng không dây GPRS (General Packet Radio Services) và HSDPA (High-Speed Downlink Packet Access).</p>      
    </Block>
)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        full: '',
       title: '',
       data: 'Initial data...'
    }
    // this.updateState = this.updateState.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };
  handlePostChange(e) {
    this.setState({data: e.target.value});
  }
  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }
  handleClick(e){
    var content= this.state.title + ' ' + this.state.data;
    {this.setState({full:content})}
  }
  render(){
  return (    
    <Wrap>       
      <Primary>
        <div>
          <h4>Title</h4>
        <input value= {this.state.title} onChange={this.handleTitleChange} />
        <textarea value = {this.state.data} onChange={this.handlePostChange}  type="textarea" id="subject" placeholder="Subject" maxlength="140" rows="7"></textarea>
        <button onClick = {this.handleClick} value="Submit">Post bài</button>
        <h3>Your post </h3> {this.state.full}
        </div>
        <Congnghe/>
      </Primary>
    </Wrap>       
  );
  }
}

export default App;