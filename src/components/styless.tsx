import styled from "styled-components/macro";

export const Container = styled.div`
  background-color:#FFFFFF;
  display: flex;
  max-width:2000px
  
`;
export const Entity = styled.div`
  width:1600px
  color: #070707;
  border-bottom: 1px solid #808080;
  max-width: 2000px;
  width: 100%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  width:1400px;
  padding: 75px 80px;
  max-width: 2000px;
  margin: auto;
  flex-direction: column;
  display: flex;
`;
export const Question = styled.div`
  font: 25px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  background: #FFFFFF;
  padding: 0.75em 1.12em;
  align-items: center;
`;
export const Text = styled.p`
  max-height: 900px;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  background: #FFFFFF;
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;

  @media (max-width: 550px) {
    font-size: 15px;
    line-height: 25px;
  }
`;
export const Header = styled.h1`
  color: #070707;
  line-height: 3;
  margin-top: 0 !important;
  font-size: 40px;
  margin-bottom: 9px;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 33px;
  }

  color: #070707;
`;