import React from 'react'
import { withTranslation } from 'react-i18next'
import { Card, CardHeader, CardBody, Row, Col, FormGroup, Input, Label, Form, Button } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { FormControl, FormGroup as FG } from 'react-bootstrap'
import { getEnvVars } from '../../../environment'
import { connect } from 'react-redux'
import { Row as RRow } from 'reactstrap'

const Stripe = ({ t, stripe }) => {
  const { secretKey, publishableKey, secretKeyError, publishableKeyError } = stripe

  return (
    <div className="content">
      <Row>
        <div className="col-12">
          <Card>
            <CardHeader>
              <h4 className="card-title">{t('Stripe Configuration')}</h4>
            </CardHeader>
            <CardBody>
              <Form>
                <div className="form-group">
                  <Row>
                    <Col md="4">
                      <Label>{t('Publishable Key')}</Label>
                      <FormGroup
                        className={
                          publishableKeyError === null
                            ? ''
                            : publishableKeyError
                              ? 'has-success'
                              : 'has-danger'
                        }>
                        <Input
                          className="form-control-alternative"
                          id="input-publishablekey"
                          placeholder="pk_test_placeholder"
                          type="text"
                          defaultValue={publishableKey}
                          disabled
                        ></Input>
                      </FormGroup>
                    </Col>
                    <Col md="4">
                      <Label>{t('Secret Key')}</Label>
                      <FormGroup
                        className={
                          secretKeyError === null
                            ? ''
                            : secretKeyError
                              ? 'has-success'
                              : 'has-danger'
                        }>
                        <Input
                          className="form-control-alternative"
                          id="input-secretkey"
                          placeholder="sk_test_placeholder"
                          type="text"
                          defaultValue={secretKey}
                          disabled></Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="4">
                      <Button
                        className="btn-block mb-2"
                        type="button"
                        color="primary"
                        disabled
                        size="lg">
                        {t('Save')}
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stripe: state.stripeReducer,
})

export default withRouter(withTranslation()(Stripe))