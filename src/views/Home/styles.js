import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`
export const FilterArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 30px;

  button {
    background: none;
    border: none;
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -40px;
  margin-bottom: 50px;

  a {
    text-decoration: none;
    color: black;
  }
`

export const Title = styled.div`
  width: 100%;
  border-top: 1px solid #20295F;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  h3 {
    color: #20295F;
    position: relative;
    top: -35px;
    background: white;
    padding: 0 20px;
  }
`