import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-md-4">
              <img
                src="https://lh3.googleusercontent.com/8Mb-DxNZax8Yjm6i3IYSGltRd2f-kwLOd9B04Qny5uXJIh0ANB9XWnWYz6mWyaH8Djff9_D6JjeduVW3XOgFae9kd4jawCrf5L3xXgrVOaiz8l0xLkeOHYr8Nu3tX0BxI5ID2_WYH49p4DvT4cXJz91zukejX49ZZASMYKQ2O5j4swPh1JHofrfjUwlDfEUAwKipcnoC-kBEq__l1SxWLImhm0d35FXRe2x4x6VtcIEUXOmBHxav-VXvJptdHZzW0NVZDLwJLsMgl3pN7v-qGilNp_qdCAoMUkRqnRjxwGGp5Aa1MdaQzYKFYcMDtAuYXOJlaBBeMXWO4eaYPXtO4BZXMLllsj11rB1iDfizx7FTPxVyFAQgWcV7jeqAvLKO6vJLcGPV6y3LHO4opfAjzqQOV3DfhU6y-INFr-GZeCq1uOJP4tV5TuFAI5E8ZpqioIfCn6hXq9cc1pwp33Wc91izB1sssP2x3vfMu-L1jUkPx-Y8xTFuKyGh7HrUkFfIHC1L8RDuWwdzmdOG_yB90AKL_T98650D2YDzmD1sKFw37V_4WeXIxoVSn5PQut0n5W873PNCpK65PWdtaTvHJmECmqQRPOkyYiFAjH5YVJ7rCu5nEiUJqDvQLRXdI6qReIaLpDu6EHdQ8FcSV3AVtdmbIecf3uA=w308-h466-no"
                className="img-fluid"
                alt="main"
              />
            </div>
            <div className="col col-md-8">
              <img
                src="https://lh3.googleusercontent.com/kxzd16RaHL1Dl8S1CjGpUSsNv3fM5bu8OsW1h_0tvxGl_mCrBkOi85_ew5oQf67bJZAspgeMF3YdoxLtSnjgeEldkNbCZmGzn9rwfuS8ebwuneU0r96ynfdbDnVNAmphcBwvoXIZYbfoAmJoaCkA051ZMxFj55Qp_14YGviMEe6mya18FQbSOsFYvsmV0SFDuBtSnD4LUXhQZxd_JL7CmVcqZnDWDjaweMAj6fx0cp0oaR9XfJBk8LB1eUq4vv2SdVqEVQMh08-W7NjOUjzfNNQQ2zJDHp6gvvwvisXNnzETilI5Tk_0Yt6La9W0srkH2ZhzgOJwKSw4LzolskX9bET2P9AXP8W7ZN6MVRVIbj8c4OzVfgfYj7VXvZhYIH-8Wzrzk8XPaiGL-e7tTD6HkRe8DnuD0LqwnK0pvVErQM0KHlLYic9XsGdxd9lPATn2-ahUDHllz9pKLCJji1PE-qZv1ddJHzJfqmkpb4z0Hz3dosJA8tSjROjv_yOolonnIddCXtdydHm484bJhFyMymtnyzWNCsBQ4M1WKVPdDELfD4YqC4r55iuZ7CJC1R4nrfxPB_2hvwDWYHkeiN-DfQUwpPm5viW07830hfa3qHA1G0FEHll6Gm_QzD-3FPwOToIx9JDZZ4tuhNChsVszr7PtjugEl9WNyP98iIvwptjLoNkLq2f9P-pYWFtx5g=s200-no"
                className="logo-app"
                alt="weathify logo"
              />
              <h2>
                The weather app for <strong>impulsive</strong> solo travelers
              </h2>
              <br />
              <div className="container download">
                <button className="btn btn-dark">Download for Android</button>
                <button className="btn btn-dark">Download for IOS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
