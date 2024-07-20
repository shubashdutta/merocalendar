import React from "react";

// import "./Blogpagedetails.css";
import "../../css/blogpagedetails.css";

import { Link } from "react-router-dom";

import { BolgPage } from "../../Data/BolgsPage";

const Blogpagedetails = () => {
  return (
    <>
      <div className="custom-container ">
        <img
          src="https://api.nepalipatro.com.np/storage/banners/0JvME9WKDapD8AVI.png"
          alt=""
        />
        <div className="Method_Festivals d-flex">
          <Link to="">nepalipatro</Link>
          <Link to="">Festivals</Link>
          <p>Method_Festivals</p>
        </div>

        <div className="Nepali_English d-flex flex-row-reverse">
          <button>Nepali</button>
          <button>english</button>
        </div>

        <div className="Method">
          <h3>Method of planting Tulasi</h3>
          <p>July 2, 2021</p>
        </div>

        <p>Methods of planting Tulasi</p>

        <div className="main-div-blogpage">
          <h5>Methods of planting Tulasi</h5>

          <p>
            Tulasi: Hindus’ holy plant with surprising health benefits Tulasi:
            Hindus’ holy plant with surprising health benefits Onlinekhabar
            Onlinekhabar Onlinekhabar Friday, July 31, 2020 0Comments 95 Shares
            facebook sharing buttontwitter sharing buttonmessenger sharing
            button Photo: Pixabay Tulasi (also known as holy basil or basil) is
            cultivated in most of the Hindu’s houses and worshiped daily. Along
            with its religious connotation in Nepal and India among Hindu, this
            plant has also got medicinal and nutritious properties. Tulasi
            (sometimes spelled as ‘Tulsi’) is a herb from the Lamiaceae family
            that is native to India and Southeast Asia. Tulasi (Ocimum sanctum)
            is also considered ‘The queen of herbs’ as it is regarded as a
            pre-eminent herb in Ayurvedic medicine. In traditional medicine,
            Tulasi and each of its parts including stems, roots, leaves,
            flowers, and seeds have been recommended for curing multiple
            diseases like bronchitis, malaria, diarrhoea, dysentery, skin
            disease, arthritis, eye diseases, insect bites and so on. Tulasi
            plants are enriched in vitamins A, C and K and minerals like
            calcium, magnesium, phosphorus, protein, fibre, iron, and potassium.
            This scared herb has a plethora of health benefits, many backed by
            several studies. Let’s discuss some key advantages that you can get
            from this holy plant.
          </p>
        </div>

        <div className="Related-post">
          <h5>Related-pos</h5>
          <div className="main_div">
            {BolgPage.map((Bolgsdata, key) => (
              <div className="Bolgspage_centerdiv">
                <img src={Bolgsdata.ImgUrl} alt="" />

                <h5>{Bolgsdata.Title}</h5>
                <p>{Bolgsdata.Date}</p>

                <h6>{Bolgsdata.About}</h6>
              </div>
            ))}
          </div>
        </div>

        <div className="Explore_more d-flex">
          <button>Festivals</button>
          <button>International Days</button>
          <button>Jayanti</button>
          <button>National Day</button>
          <button>New'sLetter</button>
          <button>Notice</button>
          <button>Notice</button>
        </div>

        <div>
          <form>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Comment </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Name*</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email*</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlInput1">Website</label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
              />
            </div>

            <button type="submit">Post a comment</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Blogpagedetails;
