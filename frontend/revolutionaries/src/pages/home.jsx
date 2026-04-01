import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import BookMock from "../components/BookMock";
import Resources from "../components/Resources";
import Notifications from "../components/Notifications";

function Home() {
  return (
    <>
      <div class="text-center">
        <div class="row px-0">
          <div class="col-sm-12 col-lg-4 ">
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <Resources />
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <BookMock />
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="container text-center">
              <div class="row">
                <div class="col-sm-12 col-lg-8">
                  <Notifications />
                </div>
                <div class="col">
                  <Notifications />
                </div>
              </div>
              <div class="row">
                <div class="col">Upcoming</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
