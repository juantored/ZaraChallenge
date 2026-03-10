import * as chai from "chai";
import request from 'supertest';
import app from "../app.js";

const { expect } = chai;

// Prueba de la API DE mobiles
describe("Mobiles", function() {
    it("Prueba de la API de /mobiles donde deberia devolver un array", async function (){
        const response = await request(app).get("/mobiles?limit=15");

        console.log(response.body);

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an("array");
        expect(response.body.length).to.be.greaterThan(10);

    });
});

// Prueba de la API DE mobile
describe("Mobile", function() {
    const mobile = "XMI-13TPro"

    it("Prueba de la API de /mobiles/:id donde deberia devolver toda la info de mobile", async function (){
        const response = await request(app).get(`/mobiles/${mobile}`);

        console.log(response.body);

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an("object"); 
        expect(response.body.brand).to.equal("XIAOMI");

    });
});