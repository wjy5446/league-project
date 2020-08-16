import React from "react";
import { Switch, Route } from "react-router-dom";
import LeaguePage from "./LeaguePage";
import TeamPage from "./TeamPage";
import MainTemplate from "../components/main/MainTemplate";
import MainReponsive from "../components/main/MainResponsive";
import ContentLayout from "../components/common/ContentLayout";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";
import HomeSearch from "../components/search/HomeSearch";
import SearchBar from "../components/search/SearchBar";

function HomePage() {
  return (
    <MainTemplate>
      <Header />
      <Switch>
        <Route path="/" component={HomeSearch} exact />
        <Route path={["/league", "/team"]} component={SearchBar} exact />
      </Switch>
      <MainReponsive>
        <ContentLayout
          content={
            <>
              <Switch>
                <Route
                  path={["/", "/league", "/myleague"]}
                  component={LeaguePage}
                  exact
                />
                <Route path={("/team", "/myteam")} component={TeamPage} exact />
              </Switch>
            </>
          }
        />
      </MainReponsive>
      <Footer />
    </MainTemplate>
  );
}

export default HomePage;
