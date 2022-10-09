export function inventoriesRender() {
    return `       
    <div class="display_flex display_gap stone_search">
    <input type="text" title="Procure no seu inventário" id="stone_search"></input>
    <button type="button" id="stone_search_button" class="btn_submit">BUSCAR</button>
    </div>

    <div id="inventory">
        <div id="new_stone" class="inventory_icon">
            <button class="stone">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.625 18.375V0H18.375V18.375H0V23.625H18.375V42H23.625V23.625H42V18.375H23.625Z"
                        fill="#533F36" />
                </svg>
            </button>
        </div>

        <div class="inventory_icon">
            <button class="stone">
                <img />
            </button>
            <p class="stone_name">NOME</p>
            <div class="edit_delete">
                
                <svg width="20" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.36726 2.74832H7.11874C7.25542 2.74832 7.36726 2.64323 7.36726 2.51478V2.74832H16.811V2.51478C16.811 2.64323 16.9229 2.74832 17.0596 2.74832H16.811V4.85015H19.0477V2.51478C19.0477 1.4843 18.1562 0.646484 17.0596 0.646484H7.11874C6.02214 0.646484 5.13057 1.4843 5.13057 2.51478V4.85015H7.36726V2.74832ZM23.0241 4.85015H1.15424C0.604387 4.85015 0.160156 5.2676 0.160156 5.7843V6.71845C0.160156 6.8469 0.271991 6.95199 0.408677 6.95199H2.28501L3.05232 22.2195C3.10202 23.2149 3.97806 24.0002 5.03738 24.0002H19.1409C20.2034 24.0002 21.0763 23.2178 21.126 22.2195L21.8933 6.95199H23.7696C23.9063 6.95199 24.0181 6.8469 24.0181 6.71845V5.7843C24.0181 5.2676 23.5739 4.85015 23.0241 4.85015ZM18.9017 21.8984H5.27658L4.5248 6.95199H19.6535L18.9017 21.8984Z"
                        fill="black" />
                </svg>
                <svg width="20" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.651367 22.2038H24.5094V24.0002H0.651367V22.2038ZM20.5898 6.93402C21.2715 6.21545 21.2715 5.13758 20.5898 4.41901L17.5224 1.18542C16.8407 0.46684 15.8182 0.46684 15.1366 1.18542L2.35551 14.6587V20.4073H7.80876L20.5898 6.93402ZM16.3295 2.44292L19.3969 5.67651L16.8407 8.37117L13.7733 5.13758L16.3295 2.44292ZM4.05965 18.6109V15.3773L12.5804 6.39509L15.6478 9.62868L7.12711 18.6109H4.05965Z"
                        fill="black" />
                </svg>
            </div>
        </div>

    </div> `
}