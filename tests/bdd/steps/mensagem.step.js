import { Given, When, Then } from "@cucumber/cucumber";
import app from "../../../src/server/server.js";
import request from "supertest";
import assert from "assert";

let payload, response;

Given("que eu tenha uma mensagem valida", function () {
  payload = {
    usuario: "usuario_0001",
    conteudo: "olá mundo",
  };
});
Given("que eu tenha uma mensagem sem o campo usuario", function () {
  payload = {
    conteudo: "olá mundo",
  };
});

When("enviar a mensagem para cadastrar", async ()=> {
   response = await request(app).post("/mensagens").send(payload) ;
   console.log("response: ", response.status, response.body)
});

Then("a mensagem deve ser registrada com sucesso", function () {
  assert.equal(response.status, 201);
});
Then("a mensagem não é cadastrada", function () {
   assert.equal(response.status, 500);
});

Then(
  "deve apresentar erro indicando que o campo 'usuario' é obrigatório",
  function () {
    assert.ok(response.body.error.includes("o campo usuário é obrigatório"));
  }
);
