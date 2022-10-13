export function modalLogout() {
    return `
    <div class="modal_trade">
        <div id="profile_card" class="modal-content-stone">

        <div class="stone_title_div display_flex">
            <h2 class="modal_title">Deseja sair?</h2>
            <button type="submit" onclick="closeLogout()">
                <svg class="clickable close_modal" style="position=relative; right=50px;" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z"
                        fill="#FBBE86" />
                </svg>
            </button>
        </div>

        <button type="submit" id="logout_stone_submit" name="edit_stone" class="btn_submit">SIM</button>
        <p class="done_warning" id="status_logout"></p>
        
    </div>
    </div>
    <script src="index.js"></script>`
}