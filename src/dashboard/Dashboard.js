import React from 'react'
import { Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'react-bootstrap'
import { Link } from 'react-router'
import './Dashboard.css'

export default (props) =>

<Row>
     <Col xs={12} md={4}>
        <Link to={'/products'}>
            <div className="main-icon">
                Produkty
            </div>
        </Link>
    </Col>
    <Col xs={12} md={4}>
            <Link to={'/list'}>
                <div className="main-icon">
                    Lista zakupów
                </div>
            </Link>
        </Col>
    <Col xs={12} md={4}>
        <Link to={'/maps'}>
            <div className="main-icon">
                Mapy
            </div>
        </Link>
    </Col>
</Row>