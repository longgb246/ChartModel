import React, { Component } from 'react'
import { Select, Input, DatePicker, Upload, Button, Icon, message, Form, Switch } from 'antd'

import './index.less'
const { Item } = Form

export default class MockOne extends Component {

  state = {
    isShowSalesInput: true,
    isShowPreSalesInput: true,
    isShowInitStockInput: true,
    isShowInitPurchaseInput: true,
    isShowVLTInput: true,
    isShowActualStockInput: true,
  }

  toggleShowSalesInput = () => {
    let currentStatus = !this.state.isShowSalesInput
    this.setState({
      isShowSalesInput: currentStatus
    })
  }
  toggleShowPreSalesInput = () => {
    let currentStatus = !this.state.isShowPreSalesInput
    this.setState({
      isShowPreSalesInput: currentStatus
    })
  }
  toggleShowInitStockInput = () => {
    let currentStatus = !this.state.isShowInitStockInput
    this.setState({
      isShowInitStockInput: currentStatus
    })
  }
  toggleShowInitPurchaseInput = () => {
    let currentStatus = !this.state.isShowInitPurchaseInput
    this.setState({
      isShowInitPurchaseInput: currentStatus
    })
  }
  toggleShowVLTInput = () => {
    let currentStatus = !this.state.isShowVLTInput
    this.setState({
      isShowVLTInput: currentStatus
    })
  }
  toggleShowActualStockInput = () => {
    let currentStatus = !this.state.isShowActualStockInput
    this.setState({
      isShowActualStockInput: currentStatus
    })
  }

  render() {
    let { isShowSalesInput, isShowPreSalesInput, isShowInitStockInput, isShowInitPurchaseInput,
          isShowVLTInput, isShowActualStockInput} = this.state
    return (
      <div>
        <div className="data-container">
          <div className="sub-title">数据读取</div>
          <Form>
            <Item>
              销量数据：
              <Switch onChange={this.toggleShowSalesInput} style={{margin : '0 15px'}} className="switch-btn" checkedChildren="上传" unCheckedChildren="输入"/>
              {isShowSalesInput ? <Input style={{width : 150}}/> :
                (<Upload>
                  <Button>
                    <Icon type="upload" />上传文件
                  </Button>
                </Upload>)
              }
            </Item>
            <Item>
              预测销量数据：
              <Switch onChange={this.toggleShowPreSalesInput} style={{margin : '0 15px'}} className="switch-btn" checkedChildren="上传" unCheckedChildren="输入"/>
              {isShowPreSalesInput ? <Input style={{width : 150}}/> :
                (<Upload>
                  <Button>
                    <Icon type="upload" />上传文件
                  </Button>
                </Upload>)
              }
            </Item>
            <Item>
              初始库存数据：
              <Switch onChange={this.toggleShowInitStockInput} style={{margin : '0 15px'}} className="switch-btn" checkedChildren="上传" unCheckedChildren="输入"/>
              {isShowInitStockInput ? <Input style={{width : 150}}/> :
                (<Upload>
                  <Button>
                    <Icon type="upload" />上传文件
                  </Button>
                </Upload>)
              }
            </Item>
            <Item>
              初始采购数据：
              <Switch onChange={this.toggleShowInitPurchaseInput} style={{margin : '0 15px'}} className="switch-btn" checkedChildren="上传" unCheckedChildren="输入"/>
              {isShowInitPurchaseInput ? <Input style={{width : 150}}/> :
                (<Upload>
                  <Button>
                    <Icon type="upload" />上传文件
                  </Button>
                </Upload>)
              }
            </Item>
            <Item>
              VLT数据：
              <Switch onChange={this.toggleShowVLTInput} style={{margin : '0 15px'}} className="switch-btn" checkedChildren="上传" unCheckedChildren="输入"/>
              {isShowVLTInput ? <Input style={{width : 150}}/> :
                (<Upload>
                  <Button>
                    <Icon type="upload" />上传文件
                  </Button>
                </Upload>)
              }
            </Item>
            <Item>
              实际库存数据：
              <Switch onChange={this.toggleShowActualStockInput} style={{margin : '0 15px'}} className="switch-btn" checkedChildren="上传" unCheckedChildren="输入"/>
              {isShowActualStockInput ? <Input style={{width : 150}}/> :
                (<Upload>
                  <Button>
                    <Icon type="upload" />上传文件
                  </Button>
                </Upload>)
              }
            </Item>
          </Form>
        </div>
        <div className="condition-container">
          <div className="sub-title">参数设置</div>
        </div>
      </div>
    )
  }
}
