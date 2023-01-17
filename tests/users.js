const assert = require("assert");
const chai = require("chai");
const chatHttp =  require("chai-http");
const app = require("../server");

chai.use(chatHttp);
chai.should();

describe("/POST user", () => {
    it("API should CREATE a new user", (done) => {
        let users = {
            username: "test1",
            email: "test1@developer.com",
            password: "test1@123456789"
        }
        chai
            .request(app)
            .post("/api/users/")
            .send(users)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            });
    });
});

describe("/PATCH/:id user", () => {
    it("API should PATCH a user by id", (done) => {
        const id = 1
        let user = {
            id: id,
            username: "test2",
            email: "test2@developer.com",
            password: "test2@123456789"
        }
        chai
            .request(app)
            .patch(`/api/users/${id}`)
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            });
    });
});

describe("/GET users", () => {
    it("API should GET list of users", (done) => {
        chai
            .request(app)
            .get("/api/users/")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            });
    });

    it("API should GET a user by id", (done) => {
        const id = 1;
        chai
            .request(app)
            .get(`/api/users/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            });

    });
});

describe("/DELETE user", () => {
    it("API should DELETE user", (done) => {
        const id = 2;
        chai
            .request(app)
            .delete(`/api/users/${id}`)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            });

    });
});