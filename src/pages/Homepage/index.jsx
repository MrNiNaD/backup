import React from 'react';
import Videos from './components/Videos';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrapper } from "./../../asset/GlobalStyle";
import Container from './container';

function HomePage() {
  return (
    <>
      <Header>
        <Wrapper>
          <Logo>
            <Link to='/'>
              <img src="images/logo.png" alt="logo"/>
            </Link>
          </Logo>

          <Nav>
            <Link to='#FIXME'>sign in</Link>
          </Nav>
        </Wrapper>
      </Header>

      <main>
        <Info>
          <Wrapper>
            <div>
              <h2>TutEmpire</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officiis at, quas quis aliquam ullam! Perspiciatis modi, incidunt magnam vero sint quod voluptatem iure. Nam ipsam qui mollitia, amet dolor natus, consequatur, soluta in odit placeat possimus. Cupiditate, laudantium commodi!</p>
            </div>
            <figure>
              <img src='http://placehold.it/1000x500/02D3F0' alt='Classroom'/>
            </figure>
          </Wrapper>
        </Info>

        <Description>
          <Wrapper>
            <p>
              <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptates maiores impedit, quas at voluptatem quis?</span>
            </p>
          </Wrapper>
        </Description>

        <section>
          <Wrapper>
            <Videos />
          </Wrapper>
        </section>
      </main>
    </>
  );
}

const Header = styled.header`
  ${Wrapper} {
    padding: 15px 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;


const Logo = styled.h1`
  font-size: 31px;

  img {
    width: 90px;
    height: 90px;
  }
`;

const Nav = styled.nav`
  a {
      padding: 8px 15px;
      border-radius: 9999px;
      background-color: ${props => props.theme.colors.primary2};
      background-image: linear-gradient(
        to right, 
        transparent 13%, 
        ${props => props.theme.colors.primary1} 45%,
        transparent 96%
      );
      background-repeat: no-repeat;
      background-position: -44px 0;
      color: ${props => props.theme.colors.secondary2};
      font-size: 23px;
      font-weight: 700;
      text-transform: capitalize;
      transition: background-position 1.5s ease;

      :hover {
        background-position: 46px 0;
      }
  }
`;

const Info = styled.section`
  ${Wrapper} {
    height: 300px;
    display: flex;

    > div, figure {
      width: 50%;
    }
    
    > div {
      box-sizing: border-box;
      padding: 48px 62px 0 0;

      h2 {
        color: ${props => props.theme.colors.primary1};
        font-size: 31px;
      }

      p {
        color: ${props => props.theme.colors.secondary1};
        font-size: 18px;
        text-align: justify;
      }
    }

    figure {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

const Description = styled.section`
  ${Wrapper} {
    padding: 35px 0 71px;
  }
  
  p {
    width: 80%;
    margin: 0 auto;
    position: relative;
    font-size: 22px;
    text-align: center;

    ::before {
      width: 198px;
      height: 8px;
      margin: 0 auto;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: ${props => props.theme.colors.primary2};
      content: '';
      transform: translateY(180%);
    }
  }

  span {
    display: block;
    color: ${props => props.theme.colors.secondary1};
  }
`;

export default Container(HomePage);
