const chai = require('chai');
const chaiHttp = require('chai-http');

import { app } from '../server';

chai.use(chaiHttp);
chai.should();

// Helpers //
function shouldHaveResponseWithCode(code: any, res: Response, type: string = 'text/html') {
    res.should.be.an('object')
    res.should.haveOwnProperty('status');
    res.status.should.be.equal(code);
    res.type.should.be.equal(type);
    res.text.length.should.be.greaterThan(0);
}

describe('@GET index', () => {

    it('should have response with code 200 and html content', (done) => {
        chai.request(app)
            .get('/')
            .end((err: any, res: Response) => {
                shouldHaveResponseWithCode(200, res )
                done();
            });
    })

});