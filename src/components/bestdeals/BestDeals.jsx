import React from "react";
import "../bestdeals/BestDeals";
import "../bestdeals/BestDeals.css";
import Rating from "@mui/material/Rating";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function BestDeals() {
  return (
    <div className='best-deals p-14'>
      <div className='container'>
        <div className='head'>
          <h2>Best Deals</h2>
          <a href='/'>View all</a>
        </div>

        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(10)).map((_, index) => (
            <Grid2 xs={2} sm={4} md={4} lg={12 / 5} key={index}>
              <article className='card'>
                <div className='card-img'>
                  <img
                    src='https://cdn3d.iconscout.com/3d/premium/thumb/smartwatch-4705582-3918013.png'
                    alt='card'
                  />
                </div>
                <div className='card-info'>
                  <p className='card-title'>Fitness and activity Tracker</p>
                  <p className='card-price'>$33.3</p>
                  <Rating
                    name='read-only'
                    value={5}
                    readOnly
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "#3187ED",
                      },
                      fontSize: 14,
                    }}
                  />
                </div>
              </article>
            </Grid2>
          ))}
        </Grid2>
      </div>
    </div>
  );
}

export default BestDeals;
