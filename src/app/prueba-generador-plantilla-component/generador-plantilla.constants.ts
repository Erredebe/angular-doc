export const htmlContent = `
<html>
<head>
    <title>Propuesta de Venta</title>
</head>
<body>
    <h1>PROPUESTA DE VENTA</h1>

    <table>
        <tr>
            <th colspan="4"></th>
        </tr>
        <tr>
            <th>ID Oferta</th>
            <td>90498913</td>
            <th>Fecha de Oferta</th>
            <td>06/06/2024</td>
        </tr>
        <tr>
            <th>ID</th>
            <td>7534962</td>
            <th>Promo</th>
            <td>R14401-01</td>
        </tr>
        <tr>
            <th>Servicer</th>
            <td colspan="3">Haya</td>
        </tr>
        <tr>
            <th class="">DT</th>
            <td colspan="3">DT Centro</td>
        </tr>
    </table>

    <div class="section-title">Resumen de la Propuesta</div>
    <p>ID OFERTA: 90498913</p>
    <p>Fecha Oferta: 06/06/2024</p>
    <p>ID: 7534962</p>
    <p>ID Cliente: 853123</p>
    <p>Promo: R14401-01</p>
    <p>DT: DT Centro</p>
    <p>Dirección: Calle LABASTIDA nº 14</p>
    <p>Municipio: Madrid</p>
    <p>Provincia: Madrid</p>
    <p>CP: 028034</p>
    <p>Soc. Propietaria: BBVA SA</p>
    <p>Estado disp.: Disponible para la venta con oferta</p>
    <p>Disp. comercial: Disponible</p>
    <p>Responsable comercial: Alonso Rodriguez Leticia</p>

    <div class="section-title">Resumen Económico</div>
    <p>Número de Activos: 1</p>
    <p>Oferta: 705.00000 €</p>
    <p>Precio Mínimo: 705.200 €</p>
    <p>PVP: 705.200 €</p>
    <p>Diferencia PVP: 0.03 %</p>
    <p>Comisión Haya: 28.200 €</p>
    <p>Tasación: 1.183.85324 €</p>
    <p>Fecha Tasación: 15/03/2023</p>

    <div class="section-title">Identificación del Comprador Principal y Oferta</div>
    <p>Nombre / Raz. Social: San Matias Invest S.L.</p>
    <p>CIF/NIF: B44861672</p>
    <p>Forma de pago: Contado</p>
    <p>Prescriptor: HAYA REAL ESTATE S.L.U.</p>
    <p>Email: noreply@haya.es</p>

    <div class="section-title">Comercialización</div>
    <p>Publicado: Si</p>
    <p>Fecha Última Publicación: 02/04/2024</p>
    <p>Última tarifa (€): 705.200</p>
    <p>Fecha Mejor Of. Recibida: 06/06/2024</p>
    <p>Mejor Of. Recibida (€): 705.000 €</p>
    <p>Días Publicado: 65</p>
    <p>Fecha Primera Publicación: 02/04/2024</p>
</body>
</html>
`;

export const pruebaPlantilla = `
<html>
  <head>
    <meta charset="UTF-8">
    <style>
      body {
        font-family: "Arial", sans-serif;
        font-size: 11pt;
        color: #000;
        line-height: 1.15;
        padding: 20px;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
        tr{
        height: 10px;
}}
      th, td {
    font-size: 14px;
    vertical-align: middle;
      }
      th {
    font-size: 13px;
    background-color: #9cc3e5;
    color: #fff;
    text-align: right;
    padding-right: 6px;
      }
      h1 {
        font-size: 20pt;
        text-align: center;
        color: #333;
        margin-bottom: 20px;
      }
      .section-title {
        font-size: 16pt;
        font-weight: bold;
        color: #333;
        margin-top: 20px;
        border-bottom: 2px solid #333;
        padding-bottom: 5px;
      }
      .content-img {
        display: block;
        margin: 10px auto;
      }
    </style>
  </head>
  <body>
    <h1>PROPUESTA DE VENTA</h1>

    <table>
       <tr>
        <th colspan="6"></th>
      </tr>
      <tr>
        <th>ID Oferta</th>
        <td>{{idOferta}}</td>
        <th>ID</th>
        <td>{{id}}</td>
        <th>Servicer</th>
        <td>{{servicer}}</td>
      </tr>
      <tr>
        <th>Fecha de Oferta</th>
        <td>{{fechaOferta}}</td>
        <th>Promo</th>
        <td>{{promo}}</td>
        <th>DT</th>
        <td>{{dt}}</td>
      </tr>
    </table>

    <div class="section-title">Resumen de la Propuesta</div>

    <table>
      <tr>
        <th>ID OFERTA:</th>
        <td>{{idOferta}}</td>
        <th>Fecha Oferta:</th>
        <td>{{fechaOferta}}</td>
        <th>Delegacion</th>
        <td>{{delegacion}}</td>
      </tr>
      <tr>
        <th>ID:</th>
        <td>{{id}}</td>
        <th>ID Cliente:</th>
        <td>{{idCliente}}</td>
      </tr>
      <tr>
        <th>Promo:</th>
        <td>{{promo}}</td>
        <th>DT:</th>
        <td>{{dt}}</td>
      </tr>
      <tr>
        <th>Dirección:</th>
        <td colspan="5">{{direccion}}</td>
      </tr>
      <tr>
        <th>Municipio:</th>
        <td>{{municipio}}</td>
        <th>Provincia:</th>
        <td>{{provincia}}</td>
        <th>CP:</th>
        <td>{{cp}}</td>
      </tr>
      <tr>
        <th>Soc. Propietaria:</th>
        <td>{{socPropietaria}}</td>
        <th>Estado disp.:</th>
        <td>{{estadoDisp}}</td>
      </tr>
      <tr>
        <th>Disp. comercial:</th>
        <td>{{dispComercial}}</td>
        <th>FC Disp. comercial:</th>
        <td>{{fcDispComercial}}</td>
      </tr>
      <tr>
        <th>Responsable comercial:</th>
        <td>{{responsableComercial}}</td>
        <th>Disp. Administrativo:</th>
        <td>{{dispAdministrativo}}</td>
      </tr>
      <tr>
        <th>Disp. Técnico:</th>
        <td>{{dispTecnico}}</td>
        <th>Motivo Técnico:</th>
        <td>{{motivoTecnico}}</td>
      </tr>
    </table>
  </body>
</html>
`;

export const pruebaPlantilla2 = `<html>
  <head>
    <meta content="text/html; charset=UTF-8" http-equiv="content-type" />
    <style type="text/css">
      @import url(https://themes.googleusercontent.com/fonts/css?kit=fpjTOVmNbO4Lz34iLyptLUXza5VhXqVC6o75Eld_V98);
      ol {
        margin: 0;
        padding: 0;
      }
      table td,
      table th {
        padding: 0;
      }
      .c37 {
        border-right-style: solid;
        padding: -14.8pt -14.8pt -14.8pt -14.8pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 58.5pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c35 {
        border-right-style: solid;
        padding: -14.8pt -14.8pt -14.8pt -14.8pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 175.5pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c34 {
        border-right-style: solid;
        padding: 2.1pt 2.1pt 2.1pt 2.1pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 81pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c20 {
        border-right-style: solid;
        padding: -14.8pt -14.8pt -14.8pt -14.8pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 59.2pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c13 {
        border-right-style: solid;
        padding: -14.8pt -14.8pt -14.8pt -14.8pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 81pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c27 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #548dd4;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 198.4pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c44 {
        border-right-style: solid;
        padding: 2.1pt 2.1pt 2.1pt 2.1pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 175.5pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c25 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #548dd4;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 21.2pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c21 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #548dd4;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 134.7pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c57 {
        border-right-style: solid;
        padding: -9.2pt -9.2pt -9.2pt -9.2pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 175.5pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c52 {
        border-right-style: solid;
        padding: -9.2pt -9.2pt -9.2pt -9.2pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 594pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c7 {
        border-right-style: solid;
        padding: 2.1pt 2.1pt 2.1pt 2.1pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 58.5pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c55 {
        border-right-style: solid;
        padding: -9.2pt -9.2pt -9.2pt -9.2pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 58.5pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c30 {
        border-right-style: solid;
        padding: -14.8pt -14.8pt -14.8pt -14.8pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 594pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c31 {
        border-right-style: solid;
        padding: 2.1pt 2.1pt 2.1pt 2.1pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 59.2pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c54 {
        border-right-style: solid;
        padding: -9.2pt -9.2pt -9.2pt -9.2pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 96.8pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c15 {
        border-right-style: solid;
        padding: -14.8pt -14.8pt -14.8pt -14.8pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 96.8pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c16 {
        border-right-style: solid;
        padding: 2.1pt 2.1pt 2.1pt 2.1pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 123pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c26 {
        border-right-style: solid;
        padding: -9.2pt -9.2pt -9.2pt -9.2pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 81pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c22 {
        border-right-style: solid;
        padding: -9.2pt -9.2pt -9.2pt -9.2pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 59.2pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c48 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #548dd4;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 567pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c45 {
        border-right-style: solid;
        padding: 2.1pt 2.1pt 2.1pt 2.1pt;
        border-bottom-color: #9cc3e5;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #9cc3e5;
        vertical-align: top;
        border-right-color: #9cc3e5;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #9cc3e5;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 96.8pt;
        border-top-color: #9cc3e5;
        border-bottom-style: solid;
      }
      .c56 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 1pt;
        border-right-width: 1pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 1pt;
        border-top-style: solid;
        background-color: #548dd4;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 70.9pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c53 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 198.4pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c39 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 567pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c10 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 219.7pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c41 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 269.4pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c17 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 120.5pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c24 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 1pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 1pt;
        width: 198.4pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c23 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 1pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 198.4pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c9 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 70.9pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c2 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 21.2pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c1 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 134.7pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c42 {
        border-right-style: solid;
        padding: 0pt 5.4pt 0pt 5.4pt;
        border-bottom-color: #000000;
        border-top-width: 0pt;
        border-right-width: 0pt;
        border-left-color: #000000;
        vertical-align: top;
        border-right-color: #000000;
        border-left-width: 0pt;
        border-top-style: solid;
        border-left-style: solid;
        border-bottom-width: 0pt;
        width: 198.4pt;
        border-top-color: #000000;
        border-bottom-style: solid;
      }
      .c6 {
        -webkit-text-decoration-skip: none;
        color: #000000;
        font-weight: 400;
        text-decoration: underline;
        vertical-align: baseline;
        text-decoration-skip-ink: none;
        font-size: 11pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c40 {
        margin-left: 7pt;
        padding-top: 0pt;
        padding-bottom: 4pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: center;
        margin-right: -64.7pt;
      }
      .c5 {
        color: #000000;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 11pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c32 {
        color: #000000;
        font-weight: 400;
        text-decoration: none;
        vertical-align: baseline;
        font-size: 28pt;
        font-family: "Calibri";
        font-style: normal;
      }
      .c14 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1.1500000000000001;
        orphans: 2;
        widows: 2;
        text-align: left;
        height: 11pt;
      }
      .c4 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: left;
        height: 11pt;
      }
      .c11 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      .c8 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: right;
      }
      .c0 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        orphans: 2;
        widows: 2;
        text-align: justify;
      }
      .c3 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1.15;
        text-align: left;
        height: 11pt;
      }
      .c36 {
        padding-top: 0pt;
        padding-bottom: 0pt;
        line-height: 1;
        text-align: left;
      }
      .c38 {
        margin-left: 13.9pt;
        border-spacing: 0;
        border-collapse: collapse;
        margin-right: auto;
      }
      .c49 {
        border-spacing: 0;
        border-collapse: collapse;
        margin-right: auto;
      }
      .c28 {
        background-color: #ffffff;
        max-width: 523.5pt;
        padding: 21.2pt 72pt 72pt 0pt;
      }
      .c47 {
        font-weight: 400;
        font-family: "Calibri";
      }
      .c19 {
        font-weight: 700;
        font-family: "Calibri";
      }
      .c18 {
        height: 17.4pt;
      }
      .c33 {
        margin-right: -0.1pt;
      }
      .c43 {
        height: 11pt;
      }
      .c12 {
        height: 0pt;
      }
      .c29 {
        height: 3.5pt;
      }
      .c51 {
        color: #ffffff;
      }
      .c46 {
        height: 14.2pt;
      }
      .c50 {
        font-size: 28pt;
      }
      .title {
        padding-top: 0pt;
        color: #000000;
        font-size: 26pt;
        padding-bottom: 3pt;
        font-family: "Arial";
        line-height: 1.1500000000000001;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      .subtitle {
        padding-top: 0pt;
        color: #666666;
        font-size: 15pt;
        padding-bottom: 16pt;
        font-family: "Arial";
        line-height: 1.1500000000000001;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      li {
        color: #000000;
        font-size: 11pt;
        font-family: "Arial";
      }
      p {
        margin: 0;
        color: #000000;
        font-size: 11pt;
        font-family: "Arial";
      }
      h1 {
        padding-top: 20pt;
        color: #000000;
        font-size: 20pt;
        padding-bottom: 6pt;
        font-family: "Arial";
        line-height: 1.1500000000000001;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h2 {
        padding-top: 18pt;
        color: #000000;
        font-size: 16pt;
        padding-bottom: 6pt;
        font-family: "Arial";
        line-height: 1.1500000000000001;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h3 {
        padding-top: 16pt;
        color: #434343;
        font-size: 14pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.1500000000000001;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h4 {
        padding-top: 14pt;
        color: #666666;
        font-size: 12pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.1500000000000001;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h5 {
        padding-top: 12pt;
        color: #666666;
        font-size: 11pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.1500000000000001;
        page-break-after: avoid;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
      h6 {
        padding-top: 12pt;
        color: #666666;
        font-size: 11pt;
        padding-bottom: 4pt;
        font-family: "Arial";
        line-height: 1.1500000000000001;
        page-break-after: avoid;
        font-style: italic;
        orphans: 2;
        widows: 2;
        text-align: left;
      }
    </style>
  </head>
  <body class="c28 doc-content">
    <p class="c40 title"><span class="c19 c50">PROPUESTA DE VENTA</span></p>
    <p class="c14"><span class="c5"></span></p>
    <a id="t.033480007740cf50a359c5f0339efe8f621433d7"></a><a id="t.0"></a>
    <table class="c49">
      <tr class="c46">
        <td class="c30" colspan="6" rowspan="1">
          <p class="c36"></p>
        </td>
      </tr>
      <tr class="c18">
        <td class="c16" colspan="1" rowspan="1">
          <p class="c8 c33">
            <span class="c19">ID Oferta</span>
          </p>
        </td>
        <td class="c34" colspan="1" rowspan="1">
          <p class="c11"><span class="c5">{{idOferta}}</span></p>
        </td>
        <td class="c31" colspan="1" rowspan="1">
          <p class="c8"><span class="c19">ID</span></p>
        </td>
        <td class="c45" colspan="1" rowspan="1">
          <p class="c36"><span class="c5">{{id}}</span></p>
        </td>
        <td class="c7" colspan="1" rowspan="1">
          <p class="c8"><span class="c19">Servicer</span></p>
        </td>
        <td class="c44" colspan="1" rowspan="1">
          <p class="c36"><span class="c5">{{servicer}}</span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c16" colspan="1" rowspan="1">
          <p class="c8 c33"><span class="c19">Fecha de Oferta</span></p>
        </td>
        <td class="c34" colspan="1" rowspan="1">
          <p class="c11"><span class="c5">{{fechaOferta}</span></p>
        </td>
        <td class="c31" colspan="1" rowspan="1">
          <p class="c8"><span class="c19">Promo</span></p>
        </td>
        <td class="c45" colspan="1" rowspan="1">
          <p class="c36"><span class="c5">{{promo}}</span></p>
        </td>
        <td class="c7" colspan="1" rowspan="1">
          <p class="c8"><span class="c19">DT</span></p>
        </td>
        <td class="c44" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{dt}}</span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c52" colspan="6" rowspan="1">
          <p class="c36 c43"><span class="c5"></span></p>
        </td>
      </tr>
    </table>
    <br/>
    <p class="c14"><span class="c5"></span></p>
    <a id="t.a9fe18c62b4b0de7f48be3f00183c435317dddc6"></a><a id="t.1"></a>
    <table class="c38">
      <tr class="c12">
        <td class="c48" colspan="6" rowspan="1">
          <p class="c11">
            <span class="c47 c51">&nbsp;Resumen de la propuesta</span>
          </p>
        </td>
      </tr>
      <tr class="c29">
        <td class="c39" colspan="6" rowspan="1">
          <p class="c4"><span class="c6"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">ID OFERTA:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{idOferta}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c9" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c10" colspan="2" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Fecha Oferta:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{fechaOferta}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c9" colspan="1" rowspan="1">
          <p class="c11"><span class="c5">Delegacion</span></p>
        </td>
        <td class="c10" colspan="2" rowspan="1">
          <p class="c11"><span class="c5">{{delegacion}}</span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">ID:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{id}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c9" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c10" colspan="2" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">ID Cliente</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{idCliente}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c41" colspan="2" rowspan="15">
          <p class="c11"><span class="c47">{{tablaPrueba}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="15">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Promo:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{promo}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">DT:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{dt}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Direcci&oacute;n:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{direccion}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Municipio:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{municipio}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Provincia</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{provincia}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">CP:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{cp}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Soc. Propietaria:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{socPropietaria}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Estado disp.:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{estadoDisp}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Disp. comercial:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{dispComercial}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">FC Disp. comercial:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{fcDispComercial}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Responsable comercial:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{responsableComercial}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c47">Disp. Administrativo:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{dispAdministrativo}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Disp. T&eacute;cnico:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{dispTecnico}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8"><span class="c5">Motivo T&eacute;cnico:</span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0"><span class="c5">{{motivoTecnico}}</span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c8 c43"><span class="c5"></span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c0 c43"><span class="c5"></span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c9" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c10" colspan="2" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c17" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c1" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c2" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c9" colspan="1" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
        <td class="c10" colspan="2" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
      <tr class="c12">
        <td class="c39" colspan="6" rowspan="1">
          <p class="c4"><span class="c5"></span></p>
        </td>
      </tr>
    </table>
    <p class="c14"><span class="c5"></span></p>
    <p class="c14"><span class="c5"></span></p>
    <p class="c14"><span class="c5"></span></p>
  </body>
</html>
`;

export const pruebaPlantilla3 = `
<html xmlns:v="urn:schemas-microsoft-com:vml"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:w="urn:schemas-microsoft-com:office:word"
xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
xmlns="http://www.w3.org/TR/REC-html40">

<head>
<meta http-equiv=Content-Type content="text/html; charset=windows-1252">
<meta name=ProgId content=Word.Document>
<meta name=Generator content="Microsoft Word 15">
<meta name=Originator content="Microsoft Word 15">
<link rel=File-List href="plantilla_archivos/filelist.xml">
<link rel=Edit-Time-Data href="plantilla_archivos/editdata.mso">
<!--[if !mso]>
<style>
v\:* {behavior:url(#default#VML);}
o\:* {behavior:url(#default#VML);}
w\:* {behavior:url(#default#VML);}
.shape {behavior:url(#default#VML);}
</style>
<![endif]--><!--[if gte mso 9]><xml>
 <o:DocumentProperties>
  <o:LastAuthor>Castro Manuel, Alberto</o:LastAuthor>
  <o:Revision>2</o:Revision>
  <o:Created>2024-08-07T09:25:00Z</o:Created>
  <o:LastSaved>2024-08-07T09:25:00Z</o:LastSaved>
  <o:Pages>1</o:Pages>
  <o:Words>119</o:Words>
  <o:Characters>680</o:Characters>
  <o:Company> </o:Company>
  <o:Lines>5</o:Lines>
  <o:Paragraphs>1</o:Paragraphs>
  <o:CharactersWithSpaces>798</o:CharactersWithSpaces>
  <o:Version>16.00</o:Version>
 </o:DocumentProperties>
</xml><![endif]-->
<link rel=dataStoreItem href="plantilla_archivos/item0001.xml"
target="plantilla_archivos/props002.xml">
<link rel=themeData href="plantilla_archivos/themedata.thmx">
<link rel=colorSchemeMapping href="plantilla_archivos/colorschememapping.xml">
<!--[if gte mso 9]><xml>
 <w:WordDocument>
  <w:SpellingState>Clean</w:SpellingState>
  <w:TrackMoves>false</w:TrackMoves>
  <w:TrackFormatting/>
  <w:PunctuationKerning/>
  <w:ValidateAgainstSchemas/>
  <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid>
  <w:IgnoreMixedContent>false</w:IgnoreMixedContent>
  <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText>
  <w:DoNotPromoteQF/>
  <w:LidThemeOther>EN-US</w:LidThemeOther>
  <w:LidThemeAsian>X-NONE</w:LidThemeAsian>
  <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript>
  <w:Compatibility>
   <w:BreakWrappedTables/>
   <w:SnapToGridInCell/>
   <w:WrapTextWithPunct/>
   <w:UseAsianBreakRules/>
   <w:DontGrowAutofit/>
   <w:SplitPgBreakAndParaMark/>
   <w:EnableOpenTypeKerning/>
   <w:DontFlipMirrorIndents/>
   <w:OverrideTableStyleHps/>
  </w:Compatibility>
  <w:DoNotOptimizeForBrowser/>
  <m:mathPr>
   <m:mathFont m:val="Cambria Math"/>
   <m:brkBin m:val="before"/>
   <m:brkBinSub m:val="&#45;-"/>
   <m:smallFrac m:val="off"/>
   <m:dispDef/>
   <m:lMargin m:val="0"/>
   <m:rMargin m:val="0"/>
   <m:defJc m:val="centerGroup"/>
   <m:wrapIndent m:val="1440"/>
   <m:intLim m:val="subSup"/>
   <m:naryLim m:val="undOvr"/>
  </m:mathPr></w:WordDocument>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <w:LatentStyles DefLockedState="false" DefUnhideWhenUsed="false"
  DefSemiHidden="false" DefQFormat="false" DefPriority="99"
  LatentStyleCount="376">
  <w:LsdException Locked="false" Priority="0" QFormat="true" Name="Normal"/>
  <w:LsdException Locked="false" Priority="9" QFormat="true" Name="heading 1"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 2"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 3"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 4"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 5"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 6"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 7"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 8"/>
  <w:LsdException Locked="false" Priority="9" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="heading 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index 9"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 1"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 2"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 3"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 4"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 5"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 6"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 7"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 8"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" Name="toc 9"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="header"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footer"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="index heading"/>
  <w:LsdException Locked="false" Priority="35" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="caption"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of figures"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="envelope return"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="footnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="line number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="page number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote reference"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="endnote text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="table of authorities"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="macro"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="toa heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Bullet 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Number 5"/>
  <w:LsdException Locked="false" Priority="10" QFormat="true" Name="Title"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Closing"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Signature"/>
  <w:LsdException Locked="false" Priority="1" SemiHidden="true"
   UnhideWhenUsed="true" Name="Default Paragraph Font"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="List Continue 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Message Header"/>
  <w:LsdException Locked="false" Priority="11" QFormat="true" Name="Subtitle"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Salutation"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Date"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text First Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Note Heading"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Body Text Indent 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Block Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Hyperlink"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="FollowedHyperlink"/>
  <w:LsdException Locked="false" Priority="22" QFormat="true" Name="Strong"/>
  <w:LsdException Locked="false" Priority="20" QFormat="true" Name="Emphasis"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Document Map"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Plain Text"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="E-mail Signature"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Top of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Bottom of Form"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal (Web)"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Acronym"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Address"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Cite"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Code"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Definition"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Keyboard"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Preformatted"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Sample"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Typewriter"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="HTML Variable"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Normal Table"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="annotation subject"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="No List"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Outline List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Simple 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Classic 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Colorful 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Columns 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Grid 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 4"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 5"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 7"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table List 8"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table 3D effects 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Contemporary"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Elegant"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Professional"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Subtle 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 1"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 2"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Web 3"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Balloon Text"/>
  <w:LsdException Locked="false" Priority="39" Name="Table Grid"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Table Theme"/>
  <w:LsdException Locked="false" SemiHidden="true" Name="Placeholder Text"/>
  <w:LsdException Locked="false" Priority="1" QFormat="true" Name="No Spacing"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 1"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 1"/>
  <w:LsdException Locked="false" SemiHidden="true" Name="Revision"/>
  <w:LsdException Locked="false" Priority="34" QFormat="true"
   Name="List Paragraph"/>
  <w:LsdException Locked="false" Priority="29" QFormat="true" Name="Quote"/>
  <w:LsdException Locked="false" Priority="30" QFormat="true"
   Name="Intense Quote"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 1"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 1"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 1"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 1"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 1"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 2"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 2"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 2"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 2"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 2"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 2"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 3"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 3"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 3"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 3"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 3"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 3"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 4"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 4"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 4"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 4"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 4"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 4"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 5"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 5"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 5"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 5"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 5"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 5"/>
  <w:LsdException Locked="false" Priority="60" Name="Light Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="61" Name="Light List Accent 6"/>
  <w:LsdException Locked="false" Priority="62" Name="Light Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="63" Name="Medium Shading 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="64" Name="Medium Shading 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="65" Name="Medium List 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="66" Name="Medium List 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="67" Name="Medium Grid 1 Accent 6"/>
  <w:LsdException Locked="false" Priority="68" Name="Medium Grid 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="69" Name="Medium Grid 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="70" Name="Dark List Accent 6"/>
  <w:LsdException Locked="false" Priority="71" Name="Colorful Shading Accent 6"/>
  <w:LsdException Locked="false" Priority="72" Name="Colorful List Accent 6"/>
  <w:LsdException Locked="false" Priority="73" Name="Colorful Grid Accent 6"/>
  <w:LsdException Locked="false" Priority="19" QFormat="true"
   Name="Subtle Emphasis"/>
  <w:LsdException Locked="false" Priority="21" QFormat="true"
   Name="Intense Emphasis"/>
  <w:LsdException Locked="false" Priority="31" QFormat="true"
   Name="Subtle Reference"/>
  <w:LsdException Locked="false" Priority="32" QFormat="true"
   Name="Intense Reference"/>
  <w:LsdException Locked="false" Priority="33" QFormat="true" Name="Book Title"/>
  <w:LsdException Locked="false" Priority="37" SemiHidden="true"
   UnhideWhenUsed="true" Name="Bibliography"/>
  <w:LsdException Locked="false" Priority="39" SemiHidden="true"
   UnhideWhenUsed="true" QFormat="true" Name="TOC Heading"/>
  <w:LsdException Locked="false" Priority="41" Name="Plain Table 1"/>
  <w:LsdException Locked="false" Priority="42" Name="Plain Table 2"/>
  <w:LsdException Locked="false" Priority="43" Name="Plain Table 3"/>
  <w:LsdException Locked="false" Priority="44" Name="Plain Table 4"/>
  <w:LsdException Locked="false" Priority="45" Name="Plain Table 5"/>
  <w:LsdException Locked="false" Priority="40" Name="Grid Table Light"/>
  <w:LsdException Locked="false" Priority="46" Name="Grid Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="Grid Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="Grid Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="Grid Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="Grid Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="Grid Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="Grid Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="Grid Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="Grid Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="Grid Table 7 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="46" Name="List Table 1 Light"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark"/>
  <w:LsdException Locked="false" Priority="51" Name="List Table 6 Colorful"/>
  <w:LsdException Locked="false" Priority="52" Name="List Table 7 Colorful"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 1"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 1"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 1"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 1"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 1"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 1"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 2"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 2"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 2"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 2"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 2"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 2"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 3"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 3"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 3"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 3"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 3"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 3"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 4"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 4"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 4"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 4"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 4"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 4"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 5"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 5"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 5"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 5"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 5"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 5"/>
  <w:LsdException Locked="false" Priority="46"
   Name="List Table 1 Light Accent 6"/>
  <w:LsdException Locked="false" Priority="47" Name="List Table 2 Accent 6"/>
  <w:LsdException Locked="false" Priority="48" Name="List Table 3 Accent 6"/>
  <w:LsdException Locked="false" Priority="49" Name="List Table 4 Accent 6"/>
  <w:LsdException Locked="false" Priority="50" Name="List Table 5 Dark Accent 6"/>
  <w:LsdException Locked="false" Priority="51"
   Name="List Table 6 Colorful Accent 6"/>
  <w:LsdException Locked="false" Priority="52"
   Name="List Table 7 Colorful Accent 6"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Mention"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Smart Hyperlink"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Hashtag"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Unresolved Mention"/>
  <w:LsdException Locked="false" SemiHidden="true" UnhideWhenUsed="true"
   Name="Smart Link"/>
 </w:LatentStyles>
</xml><![endif]-->
<style>
<!--
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:roman;
	mso-font-pitch:variable;
	mso-font-signature:-536869121 1107305727 33554432 0 415 0;}
@font-face
	{font-family:Calibri;
	panose-1:2 15 5 2 2 2 4 3 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-469750017 -1073732485 9 0 511 0;}
@font-face
	{font-family:Verdana;
	panose-1:2 11 6 4 3 5 4 4 2 4;
	mso-font-charset:0;
	mso-generic-font-family:swiss;
	mso-font-pitch:variable;
	mso-font-signature:-1610610945 1073750107 16 0 415 0;}
 /* Style Definitions */
 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-parent:"";
	margin:0cm;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Arial",sans-serif;
	mso-fareast-font-family:Arial;
	mso-ansi-language:#000A;}
h1
	{mso-style-priority:9;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-next:Normal;
	margin-top:20.0pt;
	margin-right:0cm;
	margin-bottom:6.0pt;
	margin-left:0cm;
	line-height:115%;
	mso-pagination:widow-orphan lines-together;
	page-break-after:avoid;
	mso-outline-level:1;
	font-size:20.0pt;
	font-family:"Arial",sans-serif;
	mso-font-kerning:0pt;
	mso-ansi-language:#000A;
	font-weight:normal;}
h2
	{mso-style-noshow:yes;
	mso-style-priority:9;
	mso-style-qformat:yes;
	mso-style-next:Normal;
	margin-top:18.0pt;
	margin-right:0cm;
	margin-bottom:6.0pt;
	margin-left:0cm;
	line-height:115%;
	mso-pagination:widow-orphan lines-together;
	page-break-after:avoid;
	mso-outline-level:2;
	font-size:16.0pt;
	font-family:"Arial",sans-serif;
	mso-ansi-language:#000A;
	font-weight:normal;}
h3
	{mso-style-noshow:yes;
	mso-style-priority:9;
	mso-style-qformat:yes;
	mso-style-next:Normal;
	margin-top:16.0pt;
	margin-right:0cm;
	margin-bottom:4.0pt;
	margin-left:0cm;
	line-height:115%;
	mso-pagination:widow-orphan lines-together;
	page-break-after:avoid;
	mso-outline-level:3;
	font-size:14.0pt;
	font-family:"Arial",sans-serif;
	color:#434343;
	mso-ansi-language:#000A;
	font-weight:normal;}
h4
	{mso-style-noshow:yes;
	mso-style-priority:9;
	mso-style-qformat:yes;
	mso-style-next:Normal;
	margin-top:14.0pt;
	margin-right:0cm;
	margin-bottom:4.0pt;
	margin-left:0cm;
	line-height:115%;
	mso-pagination:widow-orphan lines-together;
	page-break-after:avoid;
	mso-outline-level:4;
	font-size:12.0pt;
	font-family:"Arial",sans-serif;
	color:#666666;
	mso-ansi-language:#000A;
	font-weight:normal;}
h5
	{mso-style-noshow:yes;
	mso-style-priority:9;
	mso-style-qformat:yes;
	mso-style-next:Normal;
	margin-top:12.0pt;
	margin-right:0cm;
	margin-bottom:4.0pt;
	margin-left:0cm;
	line-height:115%;
	mso-pagination:widow-orphan lines-together;
	page-break-after:avoid;
	mso-outline-level:5;
	font-size:11.0pt;
	font-family:"Arial",sans-serif;
	color:#666666;
	mso-ansi-language:#000A;
	font-weight:normal;}
h6
	{mso-style-noshow:yes;
	mso-style-priority:9;
	mso-style-qformat:yes;
	mso-style-next:Normal;
	margin-top:12.0pt;
	margin-right:0cm;
	margin-bottom:4.0pt;
	margin-left:0cm;
	line-height:115%;
	mso-pagination:widow-orphan lines-together;
	page-break-after:avoid;
	mso-outline-level:6;
	font-size:11.0pt;
	font-family:"Arial",sans-serif;
	color:#666666;
	mso-ansi-language:#000A;
	font-weight:normal;
	font-style:italic;
	mso-bidi-font-style:normal;}
p.MsoTitle, li.MsoTitle, div.MsoTitle
	{mso-style-priority:10;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-next:Normal;
	margin-top:0cm;
	margin-right:0cm;
	margin-bottom:3.0pt;
	margin-left:0cm;
	line-height:115%;
	mso-pagination:widow-orphan lines-together;
	page-break-after:avoid;
	font-size:26.0pt;
	font-family:"Arial",sans-serif;
	mso-fareast-font-family:Arial;
	mso-ansi-language:#000A;}
p.MsoSubtitle, li.MsoSubtitle, div.MsoSubtitle
	{mso-style-priority:11;
	mso-style-unhide:no;
	mso-style-qformat:yes;
	mso-style-next:Normal;
	margin-top:0cm;
	margin-right:0cm;
	margin-bottom:16.0pt;
	margin-left:0cm;
	line-height:115%;
	mso-pagination:widow-orphan lines-together;
	page-break-after:avoid;
	font-size:15.0pt;
	font-family:"Arial",sans-serif;
	mso-fareast-font-family:Arial;
	color:#666666;
	mso-ansi-language:#000A;}
span.SpellE
	{mso-style-name:"";
	mso-spl-e:yes;}
.MsoChpDefault
	{mso-style-type:export-only;
	mso-default-props:yes;
	mso-ascii-font-family:Arial;
	mso-fareast-font-family:Arial;
	mso-hansi-font-family:Arial;
	mso-bidi-font-family:Arial;
	mso-font-kerning:0pt;
	mso-ligatures:none;
	mso-ansi-language:#000A;}
.MsoPapDefault
	{mso-style-type:export-only;
	line-height:115%;}
@page WordSection1
	{size:595.45pt 841.7pt;
	margin:21.25pt 72.0pt 72.0pt 0cm;
	mso-header-margin:36.0pt;
	mso-footer-margin:36.0pt;
	mso-page-numbers:1;
	mso-paper-source:0;}
div.WordSection1
	{page:WordSection1;}
-->
</style>
<!--[if gte mso 10]>
<style>
 /* Style Definitions */
 table.MsoNormalTable
	{mso-style-name:"Tabla normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-noshow:yes;
	mso-style-priority:99;
	mso-style-parent:"";
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-para-margin:0cm;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Arial",sans-serif;
	mso-ansi-language:#000A;}
table.MsoTableGrid
	{mso-style-name:"Tabla con cuadr�cula";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-priority:39;
	mso-style-unhide:no;
	border:solid windowtext 1.0pt;
	mso-border-alt:solid windowtext .5pt;
	mso-padding-alt:0cm 5.4pt 0cm 5.4pt;
	mso-border-insideh:.5pt solid windowtext;
	mso-border-insidev:.5pt solid windowtext;
	mso-para-margin:0cm;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Arial",sans-serif;
	mso-ansi-language:#000A;}
table.TableNormal
	{mso-style-name:"Table Normal";
	mso-tstyle-rowband-size:0;
	mso-tstyle-colband-size:0;
	mso-style-unhide:no;
	mso-style-parent:"";
	mso-padding-alt:0cm 0cm 0cm 0cm;
	mso-para-margin:0cm;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Arial",sans-serif;
	mso-ansi-language:#000A;}
table.a
	{mso-style-name:"";
	mso-tstyle-rowband-size:1;
	mso-tstyle-colband-size:1;
	mso-style-unhide:no;
	mso-style-parent:"Table Normal";
	mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;
	mso-para-margin:0cm;
	line-height:115%;
	mso-pagination:widow-orphan;
	font-size:11.0pt;
	font-family:"Arial",sans-serif;
	mso-ansi-language:#000A;}
</style>
<![endif]--><!--[if gte mso 9]><xml>
 <o:shapedefaults v:ext="edit" spidmax="1028"/>
</xml><![endif]--><!--[if gte mso 9]><xml>
 <o:shapelayout v:ext="edit">
  <o:idmap v:ext="edit" data="1"/>
 </o:shapelayout></xml><![endif]-->
</head>

<body lang=EN-US style='tab-interval:36.0pt;word-wrap:break-word'>

<div class=WordSection1>

<p class=MsoTitle align=center style='margin-top:0cm;margin-right:-64.65pt;
margin-bottom:4.0pt;margin-left:7.05pt;text-align:center;line-height:normal;
mso-pagination:widow-orphan;page-break-after:auto'><b style='mso-bidi-font-weight:
normal'><span lang=es style='font-size:28.0pt;font-family:"Calibri",sans-serif;
mso-ascii-theme-font:major-latin;mso-fareast-font-family:Calibri;mso-hansi-theme-font:
major-latin;mso-bidi-theme-font:major-latin'>PROPUESTA DE VENTA</span></b><span
lang=es style='font-size:28.0pt;font-family:"Calibri",sans-serif;mso-ascii-theme-font:
major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>

<p class=MsoNormal><span lang=es style='font-family:"Calibri",sans-serif;
mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
major-latin'><o:p>&nbsp;</o:p></span></p>

<table class=a border=1 cellspacing=0 cellpadding=0 width=792 style='border-collapse:
 collapse;mso-table-layout-alt:fixed;border:none;mso-border-alt:solid black 1.0pt;
 mso-yfti-tbllook:1536;mso-padding-alt:5.0pt 5.0pt 5.0pt 5.0pt;mso-border-insideh:
 1.0pt solid black;mso-border-insidev:1.0pt solid black'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;page-break-inside:avoid;
  height:14.15pt'>
  <td width=792 colspan=6 valign=top style='width:594.0pt;border:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:-14.85pt -14.85pt -14.85pt -14.85pt;height:14.15pt'>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes'><!--[if gte vml 1]><v:shapetype
   id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t"
   path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f">
   <v:stroke joinstyle="miter"/>
   <v:formulas>
    <v:f eqn="if lineDrawn pixelLineWidth 0"/>
    <v:f eqn="sum @0 1 0"/>
    <v:f eqn="sum 0 0 @1"/>
    <v:f eqn="prod @2 1 2"/>
    <v:f eqn="prod @3 21600 pixelWidth"/>
    <v:f eqn="prod @3 21600 pixelHeight"/>
    <v:f eqn="sum @0 0 1"/>
    <v:f eqn="prod @6 1 2"/>
    <v:f eqn="prod @7 21600 pixelWidth"/>
    <v:f eqn="sum @8 21600 0"/>
    <v:f eqn="prod @7 21600 pixelHeight"/>
    <v:f eqn="sum @10 21600 0"/>
   </v:formulas>
   <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect"/>
   <o:lock v:ext="edit" aspectratio="t"/>
  </v:shapetype><v:shape id="image2.png" o:spid="_x0000_s1027" type="#_x0000_t75"
   alt="Picture" style='position:absolute;margin-left:527.25pt;margin-top:5.2pt;
   width:61.45pt;height:18.4pt;z-index:251659264;visibility:visible;
   mso-wrap-style:square;mso-wrap-distance-left:0;mso-wrap-distance-top:0;
   mso-wrap-distance-right:0;mso-wrap-distance-bottom:0;
   mso-position-horizontal:absolute;mso-position-horizontal-relative:page;
   mso-position-vertical:absolute;mso-position-vertical-relative:page'>
   <v:imagedata src="plantilla_archivos/image001.png" o:title="Picture"/>
   <w:wrap anchorx="page" anchory="page"/>
  </v:shape><![endif]--><![if !vml]><span style='mso-ignore:vglayout;
  position:absolute;z-index:251659264;margin-left:703px;margin-top:6px;
  width:82px;height:25px'><img width=82 height=25
  src="plantilla_archivos/image002.gif" alt=Picture v:shapes="image2.png"></span><![endif]><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:17.35pt'>
  <td width=164 valign=top style='width:123.0pt;border:solid #9CC3E5 1.0pt;
  border-top:none;mso-border-top-alt:solid #9CC3E5 1.0pt;background:#9CC3E5;
  padding:2.15pt 2.15pt 2.15pt 2.15pt;height:17.35pt'>
  <p class=MsoNormal align=right style='margin-right:-.1pt;text-align:right;
  line-height:normal'><!--[if gte vml 1]><v:shape id="image1.png" o:spid="_x0000_s1026"
   type="#_x0000_t75" style='position:absolute;left:0;text-align:left;
   margin-left:5.75pt;margin-top:-5.35pt;width:28.15pt;height:47.2pt;z-index:251658240;
   visibility:visible;mso-wrap-style:square;mso-wrap-distance-left:0;
   mso-wrap-distance-top:0;mso-wrap-distance-right:0;
   mso-wrap-distance-bottom:0;mso-position-horizontal:absolute;
   mso-position-horizontal-relative:page;mso-position-vertical:absolute;
   mso-position-vertical-relative:page'>
   <v:imagedata src="plantilla_archivos/image003.png" o:title=""/>
   <w:wrap anchorx="page" anchory="page"/>
  </v:shape><![endif]--><![if !vml]><span style='mso-ignore:vglayout;
  position:relative;z-index:251658240'><span style='left:0px;position:absolute;
  left:8px;top:-8px;width:38px;height:63px'><img width=38 height=63
  src="plantilla_archivos/image004.jpg" v:shapes="image1.png"></span></span><![endif]><b
  style='mso-bidi-font-weight:normal'><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-fareast-font-family:Verdana;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin;color:black;mso-color-alt:windowtext'>ID
  Oferta</span></b><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-fareast-font-family:Verdana;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
  none;border-bottom:solid #9CC3E5 1.0pt;border-right:solid #9CC3E5 1.0pt;
  mso-border-top-alt:solid #9CC3E5 1.0pt;mso-border-left-alt:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:2.15pt 2.15pt 2.15pt 2.15pt;height:17.35pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-fareast-font-family:
  Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;
  color:black;mso-color-alt:windowtext'>{{<span class=SpellE>idOferta</span>}}</span><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=79 valign=top style='width:59.25pt;border-top:none;border-left:
  none;border-bottom:solid #9CC3E5 1.0pt;border-right:solid #9CC3E5 1.0pt;
  mso-border-top-alt:solid #9CC3E5 1.0pt;mso-border-left-alt:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:2.15pt 2.15pt 2.15pt 2.15pt;height:17.35pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><b
  style='mso-bidi-font-weight:normal'><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-fareast-font-family:Verdana;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin;color:black;mso-color-alt:windowtext'>ID</span></b><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=129 valign=top style='width:96.75pt;border-top:none;border-left:
  none;border-bottom:solid #9CC3E5 1.0pt;border-right:solid #9CC3E5 1.0pt;
  mso-border-top-alt:solid #9CC3E5 1.0pt;mso-border-left-alt:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:2.15pt 2.15pt 2.15pt 2.15pt;height:17.35pt'>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin;color:black;mso-color-alt:windowtext'>{{id}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=78 valign=top style='width:58.5pt;border-top:none;border-left:none;
  border-bottom:solid #9CC3E5 1.0pt;border-right:solid #9CC3E5 1.0pt;
  mso-border-top-alt:solid #9CC3E5 1.0pt;mso-border-left-alt:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:2.15pt 2.15pt 2.15pt 2.15pt;height:17.35pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  class=SpellE><b style='mso-bidi-font-weight:normal'><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin;color:black;mso-color-alt:windowtext'>Servicer</span></b></span><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=234 valign=top style='width:175.5pt;border-top:none;border-left:
  none;border-bottom:solid #9CC3E5 1.0pt;border-right:solid #9CC3E5 1.0pt;
  mso-border-top-alt:solid #9CC3E5 1.0pt;mso-border-left-alt:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:2.15pt 2.15pt 2.15pt 2.15pt;height:17.35pt'>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin;color:black;mso-color-alt:windowtext'>{{<span class=SpellE>servicer</span>}}</span><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=164 valign=top style='width:123.0pt;border:solid #9CC3E5 1.0pt;
  border-top:none;mso-border-top-alt:solid #9CC3E5 1.0pt;background:#9CC3E5;
  padding:2.15pt 2.15pt 2.15pt 2.15pt'>
  <p class=MsoNormal align=right style='margin-right:-.1pt;text-align:right;
  line-height:normal'><b style='mso-bidi-font-weight:normal'><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin;color:black;mso-color-alt:windowtext'>Fecha de Oferta</span></b><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=108 valign=top style='width:81.0pt;border-top:none;border-left:
  none;border-bottom:solid #9CC3E5 1.0pt;border-right:solid #9CC3E5 1.0pt;
  mso-border-top-alt:solid #9CC3E5 1.0pt;mso-border-left-alt:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:2.15pt 2.15pt 2.15pt 2.15pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-fareast-font-family:
  Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;
  color:black;mso-color-alt:windowtext'>{{<span class=SpellE>fechaOferta</span>}</span><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=79 valign=top style='width:59.25pt;border-top:none;border-left:
  none;border-bottom:solid #9CC3E5 1.0pt;border-right:solid #9CC3E5 1.0pt;
  mso-border-top-alt:solid #9CC3E5 1.0pt;mso-border-left-alt:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:2.15pt 2.15pt 2.15pt 2.15pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  class=SpellE><b style='mso-bidi-font-weight:normal'><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin;color:black;mso-color-alt:windowtext'>Promo</span></b></span><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=129 valign=top style='width:96.75pt;border-top:none;border-left:
  none;border-bottom:solid #9CC3E5 1.0pt;border-right:solid #9CC3E5 1.0pt;
  mso-border-top-alt:solid #9CC3E5 1.0pt;mso-border-left-alt:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:2.15pt 2.15pt 2.15pt 2.15pt'>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none'><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin;color:black;mso-color-alt:windowtext'>{{<span class=SpellE>promo</span>}}</span><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=78 valign=top style='width:58.5pt;border-top:none;border-left:none;
  border-bottom:solid #9CC3E5 1.0pt;border-right:solid #9CC3E5 1.0pt;
  mso-border-top-alt:solid #9CC3E5 1.0pt;mso-border-left-alt:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:2.15pt 2.15pt 2.15pt 2.15pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><b
  style='mso-bidi-font-weight:normal'><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-fareast-font-family:Verdana;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin;color:black;mso-color-alt:windowtext'>DT</span></b><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=234 valign=top style='width:175.5pt;border-top:none;border-left:
  none;border-bottom:solid #9CC3E5 1.0pt;border-right:solid #9CC3E5 1.0pt;
  mso-border-top-alt:solid #9CC3E5 1.0pt;mso-border-left-alt:solid #9CC3E5 1.0pt;
  background:#9CC3E5;padding:2.15pt 2.15pt 2.15pt 2.15pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin;color:black;mso-color-alt:windowtext'>{{<span class=SpellE>dt</span>}}</span><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-fareast-font-family:Verdana;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3;mso-yfti-lastrow:yes'>
  <td width=792 colspan=6 valign=top style='width:594.0pt;border:solid #9CC3E5 1.0pt;
  border-top:none;mso-border-top-alt:solid #9CC3E5 1.0pt;background:#9CC3E5;
  padding:-9.15pt -9.15pt -9.15pt -9.15pt'>
  <p class=MsoNormal style='line-height:normal;mso-pagination:none;border:none;
  mso-padding-alt:31.0pt 31.0pt 31.0pt 31.0pt;mso-border-shadow:yes'><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
</table>

<p class=MsoNormal><span lang=es style='font-family:"Calibri",sans-serif;
mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
major-latin'><o:p>&nbsp;</o:p></span></p>

<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=756
 style='width:20.0cm;margin-left:13.95pt;border-collapse:collapse;border:none;
 mso-border-alt:solid windowtext .5pt;mso-yfti-tbllook:1184;mso-padding-alt:
 0cm 5.4pt 0cm 5.4pt'>
 <tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes'>
  <td width=756 colspan=6 valign=top style='width:20.0cm;border:solid windowtext 1.0pt;
  border-bottom:none;mso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:
  solid windowtext .5pt;mso-border-right-alt:solid windowtext .5pt;background:
  #548DD4;mso-background-themecolor:text2;mso-background-themetint:153;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin;color:white;mso-themecolor:background1'><span
  style='mso-spacerun:yes'>�</span>Resumen de la propuesta</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:1;height:3.5pt'>
  <td width=756 colspan=6 valign=top style='width:20.0cm;border:none;
  padding:0cm 5.4pt 0cm 5.4pt;height:3.5pt'>
  <p class=MsoNormal style='line-height:normal'><u><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p><span
   style='text-decoration:none'>&nbsp;</span></o:p></span></u></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>ID OFERTA:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>idOferta</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=95 valign=top style='width:70.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=293 colspan=2 valign=top style='width:219.7pt;border:none;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:3'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Fecha Oferta:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>fechaOferta</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=95 valign=top style='width:70.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span class=SpellE><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Delegacion</span></span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=293 colspan=2 valign=top style='width:219.7pt;border:none;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=ES style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:ES'>{{<span
  class=SpellE>delegacion</span>}}</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:4'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>ID:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{id}}</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=95 valign=top style='width:70.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=293 colspan=2 valign=top style='width:219.7pt;border:none;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:5'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>ID Cliente</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>idCliente</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=359 colspan=2 rowspan=15 valign=top style='width:269.35pt;
  border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'>{{tablaPrueba}}<u><o:p></o:p></u></span></p>
  </td>
  <td width=28 rowspan=15 valign=top style='width:21.25pt;border:none;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:6'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  class=SpellE><span lang=ES style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin;mso-ansi-language:ES'>Promo</span></span><span lang=ES
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>:</span><span lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:
  major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>promo</span>}}</span><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:7'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>DT:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>dt</span>}}</span><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:8'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Direcci�n:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>direccion</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:9'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Municipio:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{municipio}}</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:10'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Provincia</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{provincia}}</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:11'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>CP:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>cp</span>}}</span><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:12'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Soc. Propietaria:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>socPropietaria</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:13'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Estado disp.:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>estadoDisp</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:14'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Disp. comercial:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>dispComercial</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:15'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>FC Disp. comercial:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>fcDispComercial</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:16'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Responsable comercial:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>responsableComercial</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:17'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Disp. Administrativo:</span><u><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></u></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>dispAdministrativo</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:18'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Disp. T�cnico:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>dispTecnico</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:19'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>Motivo T�cnico:</span><span lang=es style='font-family:"Calibri",sans-serif;
  mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
  major-latin'><o:p></o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=ES style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin;mso-ansi-language:
  ES'>{{<span class=SpellE>motivoTecnico</span>}}</span><span lang=es
  style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p></o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:20'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal align=right style='text-align:right;line-height:normal'><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='text-align:justify;line-height:normal'><span
  lang=es style='font-family:"Calibri",sans-serif;mso-ascii-theme-font:major-latin;
  mso-hansi-theme-font:major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=95 valign=top style='width:70.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=293 colspan=2 valign=top style='width:219.7pt;border:none;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:21'>
  <td width=161 valign=top style='width:120.5pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=180 valign=top style='width:134.65pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=28 valign=top style='width:21.25pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=95 valign=top style='width:70.9pt;border:none;padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
  <td width=293 colspan=2 valign=top style='width:219.7pt;border:none;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:22;mso-yfti-lastrow:yes'>
  <td width=756 colspan=6 valign=top style='width:20.0cm;border:none;
  padding:0cm 5.4pt 0cm 5.4pt'>
  <p class=MsoNormal style='line-height:normal'><span lang=es style='font-family:
  "Calibri",sans-serif;mso-ascii-theme-font:major-latin;mso-hansi-theme-font:
  major-latin;mso-bidi-theme-font:major-latin'><o:p>&nbsp;</o:p></span></p>
  </td>
 </tr>
 <![if !supportMisalignedColumns]>
 <tr height=0>
  <td width=161 style='border:none'></td>
  <td width=180 style='border:none'></td>
  <td width=28 style='border:none'></td>
  <td width=95 style='border:none'></td>
  <td width=265 style='border:none'></td>
  <td width=28 style='border:none'></td>
 </tr>
 <![endif]>
</table>

<p class=MsoNormal><span lang=es style='font-family:"Calibri",sans-serif;
mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
major-latin'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span lang=es style='font-family:"Calibri",sans-serif;
mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
major-latin'><o:p>&nbsp;</o:p></span></p>

<p class=MsoNormal><span lang=es style='font-family:"Calibri",sans-serif;
mso-ascii-theme-font:major-latin;mso-hansi-theme-font:major-latin;mso-bidi-theme-font:
major-latin'><o:p>&nbsp;</o:p></span></p>

</div>

</body>

</html>
`;

export const plantilla4 = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento Word Completo</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            width: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        h1, h2, h3, h4, h5, h6 {
            margin: 10px 0;
            text-align: center;
        }
        p {
            margin: 10px 0;
            text-align: justify;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        th, td {
            padding: 8px;
            border: 1px solid #000;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        .no-border {
            border: none;
        }
        .text-center {
            text-align: center;
        }
        .text-right {
            text-align: right;
        }
        .small-table th, .small-table td {
            padding: 4px;
            font-size: 10px;
        }
        .small-table {
            width: 100%;
            margin: 0 auto;
        }
    </style>
</head>
<body>

    <h1>Documento de Ejemplo para Word</h1>
    <h2>Subtítulo Principal</h2>

    <p>Este es un párrafo de ejemplo que se justifica para mostrar cómo se vería el texto en un documento de Word. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula ex a magna convallis, quis dapibus leo egestas.</p>

    <h3>Ejemplo de Tabla Simple</h3>
    <table>
        <thead>
            <tr>
                <th>Columna 1</th>
                <th>Columna 2</th>
                <th>Columna 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dato 1</td>
                <td>Dato 2</td>
                <td>Dato 3</td>
            </tr>
            <tr>
                <td>Dato 4</td>
                <td>Dato 5</td>
                <td>Dato 6</td>
            </tr>
        </tbody>
    </table>

    <h3>Ejemplo de Tabla con Colspan y Alineaciones</h3>
    <table>
        <thead>
            <tr>
                <th class="text-center" colspan="2">Encabezado Combinado</th>
                <th>Alineado a la Izquierda</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-center">Centrado</td>
                <td class="text-right">Derecha</td>
                <td>Izquierda</td>
            </tr>
            <tr>
                <td colspan="3">Celda con Colspan de 3 columnas</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
        </tbody>
    </table>

    <h3>Ejemplo de Tabla con Celdas y Fuente Más Pequeñas</h3>
    <table class="small-table">
        <thead>
            <tr>
                <th>Columna A</th>
                <th>Columna B</th>
                <th>Columna C</th>
                <th>Columna D</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Dato A1</td>
                <td>Dato B1</td>
                <td>Dato C1</td>
                <td>Dato D1</td>
            </tr>
            <tr>
                <td>Dato A2</td>
                <td>Dato B2</td>
                <td>Dato C2</td>
                <td>Dato D2</td>
            </tr>
            <tr>
                <td colspan="2" class="text-center">Columna Combinada</td>
                <td colspan="2" class="text-right">Texto Alineado a la Derecha</td>
            </tr>
        </tbody>
    </table>

    <h3>Otro Ejemplo de Sección</h3>
    <p>Esta sección incluye un ejemplo adicional de texto. Phasellus sit amet justo non metus dictum mollis. Integer suscipit, arcu eu vestibulum vestibulum, felis ligula pharetra orci, sed cursus neque tortor id augue.</p>

    <h4>Lista no Ordenada</h4>
    <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ul>

    <h4>Lista Ordenada</h4>
    <ol>
        <li>Primer Elemento</li>
        <li>Segundo Elemento</li>
        <li>Tercer Elemento</li>
    </ol>
    <h5>Imagen de Ejemplo</h5>
    <p class="text-center"><img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" /></p>

</body>
</html>`;
