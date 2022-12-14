export function modalDeleteProfile(_data) {
    return `
    <div class="modal modal_display" style="display = "block";">
        <div id="profile_card" class="modal-content-stone">
        <div class="profile_title_editable display_flex">
            <h2 class="modal_title">Deletar: ${_data.name}</h2>
            <button id="closeDelete" onclick="profile()">
                <svg class="clickable" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z"
                        fill="#FBBE86" />
                </svg>
            </button>
        </div>
        
        <br><p class="done_warning" id="profile_name">Deseja realmente deletar o perfil?</p><br>
        <p class="done_warning" id="profile_name">Email: ${_data.email}</p><br>

        <button type="submit" id="delete_profile" name="delete_profile" class="btn_submit">DELETAR</button>
        <p class="done_warning" id="statusDelete"></p>
        </div>
    </div>
    `
}