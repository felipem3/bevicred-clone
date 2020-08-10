import React from 'react';
import {
  RiSmartphoneLine as SmartphoneIcon,
  RiBankLine as BankIcon,
  RiMoneyDollarCircleLine as MoneyIcon,
  RiChat1Line as ChatIcon,
} from 'react-icons/ri';

import Header from '../../components/Header';

import './styles.css';

function Landing() {
  return (
    <div id="page-landing" className="container">
      <Header />
      <div className="presentation">
        <div className="background">
          <h1 className="title">o seu cliente formaliza sem sair de casa.</h1>
        </div>
        <article className="features">
          <div className="feature-item">
            <div className="feature-item-icon">
              <SmartphoneIcon />
            </div>
            <p>
              <strong>Venda empréstimo online</strong> seguro pelo celular
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-item-icon">
              <MoneyIcon />
            </div>
            <p>
              Seja o próximo<strong> parceiro digital</strong>
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-item-icon">
              <BankIcon />
            </div>
            <p>
              <strong>Simulador de consignado</strong> em bancos parceiros de
              uma só vex
            </p>
          </div>
        </article>
      </div>

      <article className="download-app">
        <h2 className="title">como meu cliente baixa o aplicativo?</h2>
        <p className="description">
          Na loja Google Play se o celular for android ou App Store se for
          iPhone.
        </p>
        <div className="smartphone-container">
          {/* <img
            className="smartphone"
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/mockup-phone-video-1.png"
            alt="iPhone"
          /> */}
          <img
            className="smartphone-video"
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/GIF_download_appcliente_googleplay.gif?ssl=1"
            alt="video como instalar"
          />
        </div>
        <div className="links-container">
          <a href="/">
            <img
              src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/google-play-dark.png"
              alt="Google Play"
            />
          </a>
          <a href="/">
            <img
              src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/apple-store-dark.png"
              alt="App Store"
            />
          </a>
        </div>
      </article>
      <article className="how-to-sing-up">
        <h2 className="title">
          oriente seu cliente a fazer o cadastro no aplicativo
        </h2>
        <p className="description">
          Ele deve informar o CPF e o número de celular. Esta parte é muito
          importante para validarmos a segurança na sua venda!
        </p>
        <div className="screenshots">
          <img
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/login-client-1-4.png"
            alt="Print Informe CPF"
          />
          <img
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/login-client-2-1-3.png"
            alt="Print Informe Telefone"
          />
        </div>
      </article>
      <article className="sms-validation">
        <h2 className="title">validação via SMS e nova senha</h2>
        <p className="description">
          Seu cliente receberá um código por mensagem SMS no celular para
          confirmar seu acesso.
        </p>
        <p className="description">
          Depois, deverá criar uma senha de 4 números para entrar no aplicativo.
        </p>
        <div className="screenshots">
          <img
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/token-client-1-3.png"
            alt="Print Código SMS"
          />
          <img
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/pass-client-1-2.png"
            alt="Print Senha"
          />
        </div>
      </article>
      <article className="signature">
        <h2 className="title">assinatura digital</h2>
        <p className="description">
          Hora da selfie! A foto é a assinatura do seu cliente. Isto ajudará
          nossa inteligência artificial a garantir que ninguém vai fazer um
          empréstimo indevido em seu nome.
        </p>
        <p className="description">
          O contratante deve entrar com a senha de 4 números que criou e pronto!
        </p>
        <div className="screenshots">
          <img
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/signature-digital-1.png"
            alt="Print Instruções Selfie"
          />
          <img
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/signature-digital-2.png"
            alt="Print Tirar Selfie"
          />
        </div>
      </article>
      <article className="simulation">
        <h2 className="title">simulação de empréstimo</h2>
        <p className="description">
          Seu cliente pode aceitar a proposta de crédito enviada por você ou
          simular e contratar um empréstimo sem sair de casa - e você recebe
          comissão do mesmo jeito!
        </p>
        <div className="screenshots">
          <img
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/escolha_banco_app_cliente.png"
            alt="Print Simulações"
          />
        </div>
      </article>
      <article className="send-infos">
        <h2 className="title">envio de informações</h2>
        <p className="description">
          O próximo passo para fazer o empréstimo online é a confirmação dos
          dados pessoais e bancários do cliente para enviar ao banco.
        </p>
        <div className="screenshots">
          <img
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/login-client-1-4.png"
            alt="Print Envio de Informações"
          />
        </div>
      </article>
      <article className="suggestion">
        <h2 className="title">assinatura da proposta de empréstimo</h2>
        <p className="description">
          oriente seu cliente a registrar o documento e realizar a assinatura
          com a tecnologia de biometria facial!
        </p>
        <div className="screenshots">
          <img
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/mockup_bevi_digital_confirmacaoi-1.png"
            alt="Print Simulações"
          />
        </div>
      </article>
      <article className="done">
        <h2 className="title">pronto! :)</h2>
        <p className="description">
          A tecnologia de inteligência artificial cruza os dados entre selfie e
          documento e, confirmando a identidade, finaliza a proposta para o
          banco.
        </p>
        <div className="screenshots">
          <img
            src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/send-simuate-sucess-mobile-1-2.png"
            alt="Print Envio de Informações"
          />
        </div>
      </article>
      <article className="more-features">
        <div className="more-features-item">
          <div className="feature-item-icon">
            <MoneyIcon color="#25c9d9" />
          </div>
          <h3 className="title">acompanhamento de propostas</h3>
          <p className="description">
            O aplicativo permite que o cliente veja o status das suas propostas
            de empréstimo bancário e seja notificado quando houver pendências,
            for aprovada ou reprovada.
          </p>
        </div>
        <div className="more-features-item">
          <div className="feature-item-icon">
            <ChatIcon color="#25c9d9" />
          </div>
          <h3 className="title">outras facilidades</h3>
          <p className="description">
            Seu cliente também pode editar ou atualizar seus dados pessoais,
            dados bancários e endereço a qualquer momento no menu &quot;Minha
            conta&quot;.
          </p>
        </div>
      </article>
      <footer>
        <img
          className="logo"
          alt="bevi"
          src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/logo_bevi_branca_crop-4.png"
        />
        <div className="download">
          <p>
            <span className="blue-text">Baixe o aplicativo</span> agora mesmo:
          </p>
          <div className="download-links">
            <a href="/">
              <img
                src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/google-play-dark.png"
                alt="Google Play"
              />
            </a>
            <a href="/">
              <img
                src="https://storage.googleapis.com/wordpress-parceiro-production.appspot.com/1/apple-store-dark.png"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
