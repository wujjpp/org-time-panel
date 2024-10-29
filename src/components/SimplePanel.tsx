/*
 * Created by Wu Jian Ping on - 2024/10/29.
 */

import React,{Component} from 'react';
import { css, cx } from '@emotion/css';

import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
// eslint-disable-next-line no-restricted-imports
import moment from 'moment';

const getStyles = () => {
  return {
    wrapper: css`
      font-family: Open Sans;
      position: relative;
      text-align: center;
    `,
  };
};


interface Props extends PanelProps<SimpleOptions> {}

interface State {
  time: string;
}

export class SimplePanel extends Component<Props, State> {
  styles = getStyles();

  state: State = {
    time: ''
  };

  componentDidMount() {
    const {options} = this.props;
    setInterval(()=>{
      this.setState({time: moment().format(options.format)})
    }, 1000)
  }

  render() {
    const {width, height, options} = this.props;

    return (
      <div
        className={cx(
          this.styles.wrapper,
          css`
            width: ${width}px;
            height: ${height}px;
            line-height: ${height}px;
            font-size: ${options.fontSize};
            color: ${options.color};
            padding-top: 1px;
          `
        )}
      >
        {this.state.time}
      </div>
    )
  }
}
