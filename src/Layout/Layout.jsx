import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
const Layout = () => {
  const [childData, setChildData] = useState('Home');
  const handleChildData = (data) => {
    setChildData(data);
    console.log('Data from child:', data);
  };
  return <div>
    <Header onData={handleChildData}/>
    <Body childData={childData} />
    <Footer />
  </div>;
};

export default Layout;
