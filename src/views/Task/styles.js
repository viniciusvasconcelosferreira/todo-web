import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Form = styled.div`
  width: 50%;
  margin-bottom: 50px;
`

export const TypeIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .inative {
    opacity: 0.5;
  }

  button {
    background: none;
    border: none;
  }

  img {
    width: 50px;
    height: 50px;
    padding: 10px;
    margin: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }
`
export const Input = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;

  span {
    color: #707070;
    margin: 5px 0;
  }

  input {
    font-size: 16px;
    padding: 15px;
    border: none;
    border-bottom: 1px solid #EE6B26;
  }

  input[type="date"]::-webkit-calendar-picker-indicator, input[type="time"]::-webkit-calendar-picker-indicator {
    width: 20px;
    height: 20px;
    filter: invert(17%) sepia(10%) saturate(6271%) hue-rotate(203deg) brightness(93%) contrast(98%);
    cursor: pointer;
    //background: none;
  }

  img {
    width: 20px;
    height: 20px;
    position: relative;
    left: 96%;
    bottom: 30px;
  }
`
export const TextArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;

  span {
    color: #707070;
    margin: 5px 0;
  }

  textarea {
    font-size: 16px;
    border: 1px solid #EE6B26;
  }
`
export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    color: #20295F;
    font-weight: bold;
    font-size: 18px;

    &:hover {
      opacity: 0.7;
    }
  }

  div {
    display: flex;
    align-items: center;
    color: #EE6B26;
    font-weight: bold;
    font-size: 18px;

    input[type=checkbox] {
      transform: scale(1.3);
      //filter: invert(63%) sepia(40%) saturate(6985%) hue-rotate(347deg) brightness(98%) contrast(90%);
      //outline: 1px solid #EE6B26;
      //outline-offset: -1px;
    }
  }
`
export const Save = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  text-align: center;

  button {
    width: 100%;
    border-radius: 30px;
    background-color: #EE6B26;
    border: none;
    color: white;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    padding: 10px;
    line-height: 1.2;

    &:hover {
      opacity: 0.7;
    }
  }
`