import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CaretRightFilled } from '@ant-design/icons';

function Videos() {
  return (
    <Video>
      <li>
        <Link to='#FIXME'><img src='http://placehold.it/1000x500/270458' alt='Video Title' /></Link>
        <PlayButton />
      </li>
      <li>
        <h3><Link to='#FIXME'>Dummy Heading</Link></h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi delectus quod autem sint, veritatis reprehenderit mollitia odit at doloribus ea non nobis nihil tenetur eligendi perspiciatis vitae beatae magnam ratione libero quidem eos omnis maxime quas! Nobis earum non, iste quidem magni voluptates maxime cum necessitatibus perferendis sequi a tempore atque similique, repudiandae fugiat illo labore minima nisi maiores itaque! Possimus aliquam asperiores saepe temporibus aperiam id illum minima debitis nobis modi, voluptatum mollitia reprehenderit itaque officiis quaerat totam accusamus voluptates dicta blanditiis at quisquam commodi numquam nisi nulla. Modi qui consequuntur architecto nulla quam voluptas, doloremque expedita! Quis, aliquam!</p>
      </li>
    </Video>
  )
}

const Video = styled.ul`
  display: flex;

  li {
    width: 50%;
    height: 359px;
    position: relative;
    list-style-type: none;
    
    img {
      width: 100%;
      height: 100%;
    } 
  }

  li:nth-child(2) {
    box-sizing: border-box;
    padding: 60px 0 0 50px;

    h3 {
      padding-bottom: 5px;
      font-size: 31px;

      a {
        color: ${props => props.theme.colors.primary1};
        font-size: inherit;
      }
    }

    p {
      height: 110px;
      padding-bottom: 58px;
      position: relative;
      overflow: hidden;
      color: ${props => props.theme.colors.secondary1};
      font-size: 21px;

      ::before {
        width: 100%;
        height: 100%;
        background-image: linear-gradient(transparent 74%, white 99%);
        position: absolute;
        content: '';
      }
    }
  }
`;

const PlayButton = styled(CaretRightFilled)`
  position: absolute;
  top: 50%;
  left: 50%;
  color: ${props => props.theme.colors.primary2};
  font-size: 100px;
  pointer-events: none;
  transform: translate(-50%, -50%);
`;

export default Videos;