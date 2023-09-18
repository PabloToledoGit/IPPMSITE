import "./index.css";
import React from "react";
import igreja from "./igreja.svg"

function Descricao() {
  return (
    <div class="corpo__sec1">
      <div class="corpo__div">
        <div class="corpo__div__div">
          <h1 class="corpo__div__div__titulo typewriter titulo1">
            Olá, seja
            <strong class="corpo__div__div__front">Bem-Vindo</strong>
          </h1>
          <span class="corpo__div__div__paragrafo">
            A igreja pentecostal profetizando milagres
          </span>
          <a
            class="corpo__div__div__botao btn btn3"
            href="https://www.instagram.com/diipablo/"
          >
            Fale Conosco!!
          </a>
        </div>
        <img
          class="corpo__div__imagem"
          src={igreja}
          alt="foto da igreja"
        />
      </div>
    </div>
  );
}

export default Descricao;
