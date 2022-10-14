export function exchangesRender(_id) {
    return `  
    <div class="trades_apphome" >
  
        <div class="trade_menu">

            <nav class="trade_gap">
                <li class="nav_title"><button class="btn_logon btn_nav" onclick="displayTroca()">Nova Troca</button></li>

                <li class="nav_title"><button class="btn_logon btn_nav" onclick="minhasTrocas()">Minhas Trocas</button></li>

                <li class="nav_title"><button class="btn_logon btn_nav" onclick="minhasOfertas()">Minhas Ofertas</button></li>

                <li class="nav_title"><button class="btn_logon btn_nav" onclick="procurar()">Procurar</button></li>
            
            </nav>

        </div>

        <div id="text_Troca"></div>
        <div id="trade_box"></div>
      
    </div>
    `
}

// app_trades


{/* <div  class="display_flex_row" >
<div class="display_flex trades">
    <div class="trade_menu">

        <nav class="nav_gap">
            <li class="nav_title"><button class="btn_logon btn_nav" onclick="displayTroca()">Nova Troca</button></li>

            <li class="nav_title"><button class="btn_logon btn_nav" onclick="minhasTrocas()">Minhas Trocas</button></li>

            <li class="nav_title"><button class="btn_logon btn_nav" onclick="minhasOfertas()">Minhas Ofertas</button></li>

            <li class="nav_title"><button class="btn_logon btn_nav" onclick="procurar()">Procurar</button></li>
        
        </nav>

    </div>

    <div id="display_box"></div>
</div>
</div> */}