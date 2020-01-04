import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Colors from '../../../consts/Colors';

class ProgressBar extends PureComponent {
  render() {
    let { total, completed } = this.props;

    return (
      <Track>
        <Completed percentage={(completed / total) * 100} />
      </Track>
    );
  }
}

const Track = styled.div`
  transition: all 0.4s;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: 2px;
  width: 99%;
  height: 6px;
  border-radius: 4px;
  background-color: ${Colors.grey};
  box-shadow: ${Colors.boxShadow};
`;

const Completed = styled.div`
  height: 100%;
  border-radius: 4px;
  background-color: ${Colors.black};
  width: ${(props) => props.percentage}%;
  transition: width 0.4s;
`;

export default ProgressBar;
