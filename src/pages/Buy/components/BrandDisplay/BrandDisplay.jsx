import React, { Component } from 'react';
import Img from '@icedesign/img';
import { Grid } from '@icedesign/base';
import { enquireScreen } from 'enquire-js';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/less/bootstrap.less'
import src from "./img/logo.png"

import Operations from "../../../../api/api";

const select = Operations.select

const { Row, Col } = Grid;


export default class BrandDisplay extends Component {
  static displayName = 'BrandDisplay';

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      dataSource : []
    };
  }

  componentWillMount =async() => {
    let result = await select()
    this.setState({dataSource : result.data})
  }
  componentDidMount() {
    this.enquireScreenRegister();
  }

  enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      this.setState({
        isMobile: mobile,
      });
    }, mediaCondition);
  };

  onClick =(id) => {

    window.location.href = window.location.origin + '#/detail?id=' + id 
  }
  render() {
    const { isMobile } = this.state;
    const logoWidth = isMobile ? 150 : 195;
    const logoHeight = isMobile ? 150 : 175;

    return (
      <div className="brand-display" style={styles.container}>
        <div style={styles.brandHeader}>
          <h5 style={styles.brandTitle}>品牌展示</h5>
        </div>
        <Row gutter="20" wrap>
          {this.state.dataSource.map((item, index) => {
            return (
              <Col sm = '6' xm = '4' lg = '3' key = {index}>
                <div className="panel panel-default panel-part" >
                  <div className="panel-heading">
                    <h3 className="panel-title">Scrappy</h3>
                  </div>
                  <div>
                    <img alt="140*140" data-src="holder.js/140x140" className="img-rounded img-center" style={{width: '230px', height:'230px'}} src={item.picture[0]} data-holder-rendered="true" />
              <br/><br/>
                    <strong>品牌</strong>: <span className="part-breed">{item.brand}</span><br/>
                    <strong>产地</strong>: <span className="part-location">{item.location}</span><br/>
                    <strong>总库存</strong>: <span className="part-quantity">{item.stock}</span><br/>
                     <strong>剩余库存</strong>: <span className="part-surplusstock">{item.surplusstock}</span><br/><br/>
                     <button className="btn btn-default btn-adopt" type="button"  onClick = {() =>{this.onClick(item.partsId)}}>详情</button>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '100%',
    maxWidth: '1080px',
    margin: '0 auto',
    padding: '80px 20px',
  },
  brandHeader: {
    position: 'relative',
    textAlign: 'center',
  },
  brandTitle: {
    marginBottom: '40px',
    fontSize: '20px',
    color: '#333333',
  },
  brandItem: {
    height: '175px',
    background: '#fff',
    display: 'inline-block',
    verticalAlign: 'top',
    marginBottom: '30px',
    overflow: 'hidden',
  },
  brandItemContent: {
    display: 'flex',
  },

  caseContent: {},
  caseSubject: {
    margin: '0 10px 0',
    lineHeight: '60px',
    height: '60px',
  },
  subjectImage: {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
  },
  subjectDesc: {
    fontSize: '16px',
    color: '#333333',
    height: '60px',
    verticalAlign: 'top',
    marginLeft: '12px',
  },
  caseDetail: {
    marginTop: 0,
    fontSize: '12px',
    color: '#666666',
    padding: '0 16px',
    textAlign: 'left',
  },
};
