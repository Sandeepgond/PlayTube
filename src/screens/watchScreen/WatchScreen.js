import React from 'react'
import { Row,Col } from 'react-bootstrap'

const WatchScreen = () => {
  return (
    <Row>
      <Col lg={8} >

        <div className='watchScreen_player'>
          <iframe></iframe>
        </div>
      </Col>

      <Col lg={4} ></Col>
    </Row>
    
  )
}

export default WatchScreen

