import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import Header from '../Header/playersHeader';

const Shape = styled.i`
  text-align: center;
  cursor: pointer;
`;

const shape = (color, shapeFont) =>
  <div style={{ fontSize: '2.8em', position: 'absolute', bottom: '0', width: '100%' }}>
    <Shape style={{ color, marginBotom: '0px' }} className={`fa fa-${shapeFont} fa-5x`} />
  </div>
;

const Computer = ({ computer, currentLoad }) =>
  <div style={{ flex: '1', position: 'relative', width: '100%' }}>
    <Header title="COMPUTER" />
    { (currentLoad > 0) ?
      <Spin style={{ marginTop: '13em' }} size="large" />
        :
      shape(computer.color, computer.shape)
    }
  </div>
;

Computer.propTypes = {
  computer: React.PropTypes.object.isRequired,
  currentLoad: React.PropTypes.number.isRequired,
};


export default Computer;
