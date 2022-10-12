export function modalEditUser(_data) {
    return `
    <main>
        <div id="profile_card">
            <div class="profile_title_div">
                <h3 class="profile_title">Editar Dados Pessoais</h3>
            </div>

            <div class="profile_info"> 
                <div>
                    <input class="modal_input" type="text" id="name" name="name" placeholder="Nome" value="${_data.data.name}"/>
                    <input class="modal_input" type="text" id="email" name="weight" placeholder="Email" value="${_data.data.email}"/>
                    <input class="modal_input" type="text" id="phone" name="weight" placeholder="Telefone" value="${_data.data.phone}"/>
                    
                    <div class="close_modal">
                    <button type="submit" id="edit_user_submit" name="edit_stone" class="btn_submit">EDITAR</button>
                    </div>
            
                    <p class="done_warning" id="statusEdit"></p>
                </div>
            </div>
        </div>

    </main>
    `
}