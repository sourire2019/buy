import React, { Component } from 'react';
import Img from '@icedesign/img';
import { Grid } from '@icedesign/base';
import { enquireScreen } from 'enquire-js';

import Operations from "../../../../api/api";

import Web3 from 'web3';
import TruffleContract from "truffle-contract";

import Coin from '../../../../../build/contracts/Coin.json'

import src from './img/logo.png';
const detail = Operations.detail;

const { Row, Col } = Grid;

export default class BrandDisplay extends Component {
  static displayName = 'BrandDisplay';

  constructor(props) {
    super(props);
    this.state = {
      isMobile: false,
      dataSource : {},
      id : window.location.hash.split("=")[1] || "0",
      web3Provider : null,
      contracts : {},
      url : '',
      req : {}
    };
  }

  componentWillMount = async() => {
    let result = await detail(this.state.id)
    this.setState({dataSource : result})
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
      web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    this.setState({
      web3Provider : web3.currentProvider,
      web3 : web3
    })
    this.initContract();
  }

  initContract = () => {

    let Purchase = TruffleContract(Coin);
    this.setState({Purchase : TruffleContract(Coin)})
       this.state.Purchase.setProvider(this.state.web3Provider);
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

  buy =() => {
    var purchaseInstance;
    let athis = this;
    this.state.web3.eth.getAccounts(function(err,accounts){
      if(err){
        console.log(err)
      }else{
        athis.state.Purchase.deployed().then(function(instance){
          let purchaseInstance = instance;
            let str = '0x3F01D33faa61E890A2975574DBcf6b764868C5EE'
          return purchaseInstance.Purchase(str,1*1e2,1,1,"'"+1+"'", {from : accounts[0]});
        }).then(function(result) {
          let value = {};
          value.txHash = result.tx;
          value.blockNumber = result.receipt.blockNumber;
          athis.state.Purchase.deployed().then(function(ins){
            return ins.getMessage.call();
          }).then(function(res){
            value.userId = res;
            console.log(value)
            alert("购买成功")
          })
        }) 
      }
    })
  }
  render() {
    const { isMobile } = this.state;
    const logoWidth = isMobile ? 150 : 195;
    const logoHeight = isMobile ? 150 : 175;

    return (
      <div className="brand-display" style={styles.container}>
          <div style={styles.brandHeader}>
            <h1 className="text-center" style={{fontSize: '36px', marginBottom: '10px', marginTop: '20px'}}>商品详情页面</h1>
            <hr/>
            <br/>
          </div>
          <a href="/" style={{position: 'absolute', top: '38%', right: '0' }}>返回首页</a>
          <Row>
            <Col xxs="24" s="24" l="12">
                <div style={{border: '1px solid'}}>
                  <img alt="140*140" 
                    className="img-rounded img-center" style={{width: '100%'}} 
                    src={src}
                   />
                </div>
                <Row>
                <Col xxs="8" s="8" l="8" style = {{float : 'left', marginTop : '10px'}}>
                  <img src={src}
                  style={{width: '100%'}}/>
                </Col>
                <Col xxs="8" s="8" l="8" style = {{float : 'left' , marginTop : '10px'}}>
                  <img src={src}
                  style={{width: '100%'}}/>
                </Col>
                <Col xxs="8" s="8" l="8" style = {{float : 'left', marginTop : '10px'}}>
                  <img src={src}
                  style={{width: '100%'}}/>
                </Col>
              </Row>
            </Col>
            <Col xxs="24" s="24" l="10" style = {{marginLeft : '100px', marginTop : '80px'}}>
              <h1 className ="panel-title" style={{lineHeight: '1', fontSize: '16px', fontWeight: '700', fontFamily: 'microsoft yahei'}} >Scrappy</h1>
              <br />
              <ul>
                <li>
                  <strong>品牌&nbsp;</strong>:&nbsp;<span className="part-breed">米其林</span><br/>
                  <br />
                </li>
                <li>
                  <strong>产地&nbsp;</strong>:&nbsp;<span className="part-location">中国上海</span><br/><br />
                </li>
                <li>
                  <strong>购买数量&nbsp;</strong>:&nbsp;<input className="min" name="" type="button" value="-" />
                  <input className="text_box" name="goodnum" type="text" value="1" style={{width:'40px', margin: '0', padding: '0' }} />
                  <input className="add" name="" type="button" value="+" />
                  （剩余库存: <span className="part-quantity">27</span>）
                  <br/><br/>
                </li>
                <li>
                  <strong>价格&nbsp;</strong>:&nbsp;<span className="part-price"> $122</span>
                </li>
              </ul>
              <button className="btn-adopt" style={{width: '50%', marginLeft: '25%',backgroundColor: '#ffeded', border: '1px solid #FF0036', color: '#FF0036',  fontFamily: 'microsoft yahei', height: '38px', lineHeight: '38px', textAlign: 'center', fontSize: '16px'}} onClick= {() => {this.buy()}}>立即购买</button>
            </Col>
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
