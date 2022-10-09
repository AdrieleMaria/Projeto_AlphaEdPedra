export function modalDeleteStone() {
    return `
    <aside id="cadastrate_modal">
        <div class="modal_title_div display_flex">
            <h2 class="modal_title">Deletar</h2>
            <svg class="clickable" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.385 0.5L11 8.885L2.615 0.5L0.5 2.615L8.885 11L0.5 19.385L2.615 21.5L11 13.115L19.385 21.5L21.5 19.385L13.115 11L21.5 2.615L19.385 0.5Z"
                    fill="#FBBE86" />
            </svg>
        </div>
        
        <p class="done_warning" id="stone_name">Deseja realmente deletar a pedra?</p>
        <p class="done_warning" id="stone_name">Nome</p>
        <p class="done_warning" id="stone_weight">Peso</p>

        <button type="submit" id="delete_stone" name="delete_stone" class="btn_submit">DELETAR</button>
        <p class="done_warning"></p>
    </aside>
    `
}