import React from "react";
import { Route } from "react-router-dom";
import LeaguePage from "./LeaguePage";
import MainTemplate from "../components/main/MainTemplate";
import MainReponsive from "../components/main/MainResponsive";
import ContentLayout from "../components/common/ContentLayout";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import HomeSearch from "../components/search/HomeSearch";

function HomePage() {
  return (
    <MainTemplate>
      <Header />
      <HomeSearch />
      <MainReponsive>
        <ContentLayout
          content={
            <>
              <Route path={["/", "/league"]} component={LeaguePage} exact />
            </>
          }
        />
      </MainReponsive>
      <Footer />
    </MainTemplate>
  );
}

export default HomePage;
