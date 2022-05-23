import "./home.scss";
import Nav from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import Featured from "../../components/featured/featured";
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";
import { useState, useEffect } from "react";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setUser(null);
      return;
    }

    const response = {
      data: {
        user: {
          name: "shaden",
          email: "shaden@gmail.com",
        },
      },
    };
    if (!response.data.user) {
      setUser(null);
      return;
    }
    setUser({ user: response.data.user });
  },[]);

  return (
    <>
      <Nav user={user} />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </>
  );
};

export default Home;
