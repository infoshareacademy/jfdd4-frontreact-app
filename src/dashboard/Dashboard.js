import React from 'react'
import { Row, Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'react-bootstrap'
import { Link } from 'react-router'
import './Dashboard.css'
import { Card, CardTitle, CardActions, Button, Icon } from 'react-mdl';


export default (props) =>

<Row>
    <div style={{ height: '100px'}}></div>
     <Col xs={12} md={4}>
         <Link to={'/products'}  style={{ textDecoration: 'none',  textAlign: 'center'}}>
             <Card shadow={0} style={{width: '320px', height: '320px', margin: '20px auto 20px'}}>
                 <CardTitle expand style={{background: '#00A493', color: '#fff'}}>
                     <Icon name="search" style={{color: '#fff', fontSize: '80px', margin: 'auto'}}/>
                 </CardTitle>
                 <CardActions border>
                     <Button>WYBIERZ PRODUKTY</Button>
                 </CardActions>
             </Card>
         </Link>
    </Col>
    <Col xs={12} md={4}>
        <Link to={'/list'}  style={{ textDecoration: 'none',  textAlign: 'center'}}>
            <Card shadow={0} style={{width: '320px', height: '320px', margin: '20px auto 20px'}}>
                <CardTitle expand style={{background: '#00A493', color: '#fff'}}>
                    <Icon name="add_shopping_cart" style={{color: '#fff', fontSize: '80px', margin: 'auto'}}/>
                </CardTitle>
                <CardActions border>
                    <Button>TWOJA LISTA ZAKUPÓW</Button>
                </CardActions>
            </Card>
        </Link>
        </Col>
    {/*background: '#276D73'*/}
    <Col xs={12} md={4}>
        <Link to={'/maps'}  style={{ textDecoration: 'none',  textAlign: 'center'}}>
        <Card shadow={0} style={{width: '320px', height: '320px', margin: '20px auto 20px'}}>
            <CardTitle expand style={{ background: '#00A493', color: '#fff'}}>
                <Icon name="add_location" style={{color: '#fff', fontSize: '80px', margin: 'auto'}}/>
            </CardTitle>
            <CardActions border>
                    <Button>ZOBACZ NA MAPIE</Button>
            </CardActions>
        </Card>
        </Link>
    </Col>
</Row>
