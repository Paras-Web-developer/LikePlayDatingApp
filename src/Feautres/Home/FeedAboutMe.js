import React from "react";
import styled from "styled-components";

//Image
import editIcon from "../../Assets/Images/editIcon.png";
// import editIcon from "../../Assets/Images/me1.jpeg";

//FakeData
import { Images, AboutUser } from "./DataPage";
import EditPofileDetails from "./EditPofileDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Countvalue } from "../../Redux/SliceOfRedux/EditProfile";
import { useSelector } from "react-redux";

const FeedAboutMe = () => {
  // const profile_data = useSelector((e) => e.LoginSlice.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <FeedAboutMeCss>
      <div className="aboutMe">
        <div className="edit-div">
          <p>About me</p>
          <img
            src={editIcon}
            alt="editicon"
            onClick={() => {
              dispatch(Countvalue(6));
              navigate("/MyProfileEdit");
            }}
          />
        </div>
        {/* <span>{profile_data?.about_me}</span> */}
      </div>

      <div className="imagesDiv">
        <div className="edit-div">
          <p>Images</p>{" "}
          <img
            src={editIcon}
            alt="editicon"
            onClick={() => {
              dispatch(Countvalue(1));
              navigate("/MyProfileEdit");
            }}
          />
        </div>
        <div className="pics">
          {/* {profile_data?.user_images_while_signup.map((val, index) => {
            return (
              <div className="picsDiv">
                <img src={process.env.REACT_APP_BASEURL_IMAGE+val?.image_url} alt="img" />
              </div>
            );
          })} */}
        </div>
      </div>

      {/* Aboutuser */}
      {/* {AboutUser.FullName !== undefined && ( */}
      <div className="detailsBox">
        <div className="boxDiv">
          <div>
            <h4>Full Name</h4>
            {/* <span>{profile_data.user_name}</span> */}
            <p>Paras Grover</p>
          </div>
          <div>
            <h4>Age</h4>
            {/* <span>{profile_data.age}</span> */}
            <p>21 Years Old</p>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <h4>Gender</h4>
            {/* <span>{profile_data.gender==="0"?"Male":"Female"}</span> */}
            <p>male</p>
          </div>
          <div>
            <h4>Interested In</h4>
            {/* <span>{profile_data.interested_in==="1"?"Female":"Male"}</span> */}
            <p>Female</p>
          </div>
        </div>
        <img className="editImgIcon" src={editIcon} alt="editicon" />
      </div>
      {/* )} */}
      {/* UserDetails */}
      <div className="detailsBox">
        <div className="boxDiv">
          <div>
            <h4>Status</h4>
            {/* <span>{profile_data?.status}</span> */}
          </div>
          <div>
            <h4>Body Type</h4>
            {/* <span>{profile_data?.body_type}</span> */}
            <p>Fit</p>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <h4>Height</h4>
            {/* <span>{profile_data?.height}</span> */}
            <p>5.7 Foot</p>
          </div>
          <div>
            <h4>Education</h4>
            {/* <span>{profile_data?.education}</span> */}
            <p>bachelor of computer application</p>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <h4>Employment</h4>
            {/* <span>{profile_data?.employment}</span> */}
            <p>React js developer</p>
          </div>
        </div>
        <img
          className="editImgIcon"
          src={editIcon}
          alt="editicon"
          onClick={() => {
            dispatch(Countvalue(3));
            navigate("/MyProfileEdit");
          }}
        />
      </div>

      {/* residence */}
      <div className="detailsBox">
        <div className="boxDiv">
          <div>
            <h4>Country of Residence</h4>
            {/* <span>{profile_data?.residence_country}</span> */}
            <p>India</p>
          </div>
          <div>
            <h4>State</h4>
            {/* <span>{profile_data?.state}</span> */}
            <p>Haryana</p>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <h4>City</h4>
            {/* <span>{profile_data?.city}</span> */}
            <p>Sonipat</p>
          </div>
          <div>
            <h4>Nationality</h4>
            {/* <span>{profile_data?.nationality}</span> */}
            <p>Indian</p>
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <h4>Religion</h4>
            {/* <span>{profile_data?.religion}</span> */}
            <p>Hindu</p>
          </div>
          <div>
            <h4>Tribe to date</h4>
            {/* <span>{profile_data?.tribe_to_date}</span> */}
          </div>
        </div>
        <img
          className="editImgIcon"
          src={editIcon}
          alt="editicon"
          onClick={() => {
            dispatch(Countvalue(4));
            navigate("/MyProfileEdit");
          }}
        />
      </div>

      {/* age */}
      <div className="detailsBox">
        <div className="boxDiv">
          <div>
            <h4>Age Range preferred to date</h4>
            {/* <span>{profile_data?.age_range_for_date}</span> */}
            <p>17 to 25</p>
          </div>
          <div>
            <h4>Tribe to date</h4>
            {/* <span>{profile_data?.tribe_to_date}</span> */}
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <h4>Looking for</h4>
            {/* <span>{profile_data?.looking_for}</span> */}
            <p>Female</p>
          </div>
          <div>
            <h4>Education</h4>
            {/* <span>{profile_data?.education}</span> */}
          </div>
        </div>
        <div className="boxDiv">
          <div>
            <h4>Employment</h4>
            {/* <span>{profile_data?.employment}</span> */}
          </div>
        </div>
        <img
          className="editImgIcon"
          src={editIcon}
          alt="editicon"
          onClick={() => {
            dispatch(Countvalue(5));
            navigate("/MyProfileEdit");
          }}
        />
      </div>
    </FeedAboutMeCss>
  );
};

export default FeedAboutMe;

const FeedAboutMeCss = styled.div`
  font-family: "Poppins", sans-serif;
  p {
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 0.3rem;
  }
  span {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    color: #7b7f91;
  }

  .aboutMe {
    height: auto;
  }

  .edit-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .imagesDiv {
    margin: 1rem 0;
  }
  .pics {
    display: grid;
    grid-template-columns: 18.5% 18.5% 18.5% 18.5% 18.5%;
    justify-content: space-between;
    width: 100%;
    height: 10rem;
  }
  .picsDiv {
    width: 100%;
    height: 10rem;
    img {
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
    }
  }

  .detailsBox {
    background: #f8f8f8;
    border-radius: 0.5rem;
    margin: 0.5rem 0;
    position: relative;
    padding: 0.4rem 0.8rem;
  }

  .boxDiv {
    padding: 0.5rem 0;
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .editImgIcon {
    position: absolute;
    top: 0.8rem;
    right: 0.8rem;
  }
  h4 {
    color: #a8580f;
  }
  img {
    /* width: 200px; */
  }
`;
