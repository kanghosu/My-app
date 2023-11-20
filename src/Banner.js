import styled from "styled-components";

const BannerContainer = styled.div`
  padding: 50px 0;
  background-color: #282c34;
  color: white;
  text-align: center;
`;

const Banner = () => {
  return (
    <BannerContainer>
      <h2>Welcome to My App</h2>
      <p>Enjoy your stay!</p>
    </BannerContainer>
  );
};

export default Banner;
