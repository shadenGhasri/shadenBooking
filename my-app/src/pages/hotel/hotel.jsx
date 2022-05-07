import "./hotel.scss";
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";

const Hotel = () => {
  return (
    <>
      <Navbar />
      <Header type="list" />

      <MailList />
      <Footer />
      
    </>
  );
};

export default Hotel;
