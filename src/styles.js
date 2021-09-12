import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.primary};
  min-height: 100vh;
`;

export const Header = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  .header-text {
    color: ${(props) => props.secondary};
    font-size: 80px;
    font-family: "Roboto", sans-serif;
  }
`;

export const SearchBarContainer = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  .searchbar {
    width: 600px;
    height: 40px;
    border-style: solid 2px;
    border-color: ${(props) => props.secondary};
    border-radius: 40px;
    font-size: 30px;
    padding: 10px;
    text-align: center;
    box-shadow: rgb(0 0 0 / 40%) 10px 10px 20px, rgb(0 0 0 / 45%) 5px 10px 5px;
    background-color: ${(props) => props.primary};
    color: ${(props) => props.secondary};
  }
  .searchbar:focus {
    outline: none;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 300px;
    height: 320px;
    padding: 20px;
    margin: 40px;
    border-style: solid;
    border-width: 3px;
    border-radius: 10px;
    border-color: ${(props) =>
      props.primary == "#fafafa" ? "#303030" : "#808080"};
    font-size: 22px;
    background-color: ${(props) => props.primary};
    box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 20px,
      rgba(0, 0, 0, 0.45) 0px 6px 6px;
    word-wrap: break;
    color: ${(props) => props.secondary};
  }
  .text {
    font-family: "Roboto", sans-serif;
  }
`;

export const Toggle = styled.div`
  position: absolute;
  right: 3vw;
  top: 255px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .text {
    margin-bottom: 10px;
    color: ${(props) => props.secondary};
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #212121;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: ${(props) => props.primary};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #fafafa;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #ffffff;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
