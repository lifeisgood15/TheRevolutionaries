import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">
            <div class="container text-center">
              <div class="row">
                <div class="col">
                  <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                      <h5 class="card-title">Resource Vault</h5>
                      <h6 class="card-subtitle mb-2 text-body-secondary">
                        Card subtitle
                      </h6>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card’s content.
                      </p>
                      <a href="#" class="card-link">
                        Card link
                      </a>
                      <a href="#" class="card-link">
                        Another link
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">Mocks</div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="container text-center">
              <div class="row">
                <div class="col">Feedback pending</div>
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
