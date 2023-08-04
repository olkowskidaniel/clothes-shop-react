import styled from "styled-components";

export const BackgroundImage = styled.div`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: ${({imageUrl}) => `url(${imageUrl})`};
`
export const DirectoryItemBody = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: white;
    border: 1px solid black;
    opacity: 0.7;

    h2 {
      font-weight: bold;
      margin: 0 6px 0;
      font-size: 22px;
      color: #4a4a4a;
    }
    p {
      font-weight: lighter;
      font-size: 16px;
    } 
`

export const DirectoryItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &.large {
      height: 380px;
    }
    &:first-child {
      margin-right: 7.5px;
    }
    &:last-child {
      margin-left: 7.5px;
    }
  
    &:hover {
      cursor: pointer;
      & ${BackgroundImage} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
      & ${DirectoryItemBody} {
        opacity: 0.9;
      }
    }
`