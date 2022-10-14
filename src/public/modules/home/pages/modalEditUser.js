export function modalEditUser(_data) {
    return `
    <main>
    <div class="modal modal_display" style="display='block';">
        <div id="profile_card" class="modal-content-stone">
            <div class="profile_title_editable display_flex">
                <h3 class="profile_title">Editar Dados Pessoais</h3>
                <button id="closeDelete" onclick="profile()">
                <svg class="clickable" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z"
                        fill="#FBBE86" />
                </svg>
            </button>
            </div>

            <div class="profile_info"> 
                <div class="display_input_edit">
                    <input class="modal_input" type="text" id="name" name="name" placeholder="Nome" value="${_data.data.name}"/>

                    <input class="modal_input" type="text" id="email" name="weight" placeholder="Email" value="${_data.data.email}"/>

                    <input class="modal_input" type="text" id="phone" name="weight" placeholder="Telefone" value="${_data.data.phone}"/>
                    
                    <div>
                        <button type="submit" id="edit_user_submit" name="edit_stone" class="btn_submit">EDITAR</button>
                    </div>
            
                    <p class="done_warning" id="statusEdit"></p>
                </div>
            </div>
        </div>
    </div>

    </main>
    `
}