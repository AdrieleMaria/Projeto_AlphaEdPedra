export function cadastro() {
    return `
    <div>
        <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3723 13.0573C14.9709 12.1591 14.3885 11.3433 13.6574 10.6553C12.9285 9.96524 12.0651 9.41508 11.1149 9.03518C11.1064 9.03116 11.0979 9.02915 11.0893 9.02513C12.4149 8.1206 13.2766 6.64724 13.2766 4.98492C13.2766 2.23116 10.9149 0 8 0C5.08513 0 2.72344 2.23116 2.72344 4.98492C2.72344 6.64724 3.58514 8.1206 4.91066 9.02713C4.90215 9.03116 4.89364 9.03316 4.88513 9.03719C3.93194 9.41708 3.07663 9.96181 2.34259 10.6573C1.61219 11.3459 1.02984 12.1615 0.627709 13.0593C0.232652 13.9382 0.0195891 14.8805 5.32039e-05 15.8352C-0.000514675 15.8566 0.00346833 15.878 0.0117677 15.8979C0.020067 15.9179 0.0325146 15.9361 0.0483771 15.9515C0.0642397 15.9669 0.0831961 15.9791 0.104129 15.9874C0.125063 15.9957 0.14755 16 0.170265 16H1.44685C1.54047 16 1.61494 15.9296 1.61706 15.8432C1.65962 14.2915 2.31919 12.8382 3.48514 11.7367C4.69151 10.597 6.29363 9.96985 8 9.96985C9.70637 9.96985 11.3085 10.597 12.5149 11.7367C13.6808 12.8382 14.3404 14.2915 14.3829 15.8432C14.3851 15.9317 14.4595 16 14.5531 16H15.8297C15.8524 16 15.8749 15.9957 15.8959 15.9874C15.9168 15.9791 15.9358 15.9669 15.9516 15.9515C15.9675 15.9361 15.9799 15.9179 15.9882 15.8979C15.9965 15.878 16.0005 15.8566 15.9999 15.8352C15.9787 14.8744 15.768 13.9397 15.3723 13.0573ZM8 8.44221C7.02341 8.44221 6.10427 8.08241 5.41278 7.42915C4.7213 6.77588 4.34045 5.90754 4.34045 4.98492C4.34045 4.06231 4.7213 3.19397 5.41278 2.5407C6.10427 1.88744 7.02341 1.52764 8 1.52764C8.97659 1.52764 9.89573 1.88744 10.5872 2.5407C11.2787 3.19397 11.6595 4.06231 11.6595 4.98492C11.6595 5.90754 11.2787 6.77588 10.5872 7.42915C9.89573 8.08241 8.97659 8.44221 8 8.44221Z" fill="#533F36"/>
        </svg>
        <input class="login_input" type="text" id="name" name="user_name" placeholder="Nome"/>
    </div>
    <div>
        <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6668 4.00008C14.6668 3.26675 14.0668 2.66675 13.3335 2.66675H2.66683C1.9335 2.66675 1.3335 3.26675 1.3335 4.00008V12.0001C1.3335 12.7334 1.9335 13.3334 2.66683 13.3334H13.3335C14.0668 13.3334 14.6668 12.7334 14.6668 12.0001V4.00008ZM13.3335 4.00008L8.00016 7.33342L2.66683 4.00008H13.3335ZM13.3335 12.0001H2.66683V5.33341L8.00016 8.66675L13.3335 5.33341V12.0001Z" fill="black"/>
        </svg>
        <input class="login_input" type="email" id="email" name="user_email" placeholder="Email"/>
    </div>                
    <div>
        <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3021 2.53368L13.1721 0.405949C12.9121 0.145982 12.5641 0 12.1961 0C11.8281 0 11.48 0.143982 11.22 0.405949L8.92604 2.69566C8.66604 2.95563 8.52004 3.30559 8.52004 3.67354C8.52004 4.0435 8.66404 4.38945 8.92604 4.65142L10.718 6.44519C10.3098 7.39625 9.72325 8.26036 8.99004 8.99088C8.25604 9.72878 7.39803 10.3107 6.44603 10.7227L4.65402 8.92888C4.39402 8.66892 4.04602 8.52294 3.67802 8.52294C3.4965 8.52226 3.31668 8.55782 3.14908 8.62753C2.98149 8.69724 2.8295 8.79969 2.70201 8.92888L0.406002 11.2186C0.146001 11.4786 0 11.8285 0 12.1965C0 12.5664 0.144001 12.9124 0.406002 13.1744L2.53401 15.3021C2.97801 15.746 3.59002 16 4.21802 16C4.34802 16 4.47402 15.99 4.60202 15.968C7.25003 15.5321 9.87804 14.1222 12.0001 12.0025C14.1201 9.87877 15.5281 7.25109 15.9681 4.60143C16.0941 3.84952 15.8421 3.07562 15.3021 2.53368V2.53368ZM14.5501 4.36346C14.1601 6.72116 12.8921 9.07287 10.982 10.9826C9.07204 12.8924 6.72203 14.1602 4.36402 14.5502C4.06802 14.6002 3.76402 14.5002 3.54802 14.2862L1.45801 12.1965L3.67402 9.97875L6.07003 12.3785L6.08803 12.3965L6.52003 12.2365C7.82989 11.7549 9.01937 10.9944 10.006 10.0075C10.9927 9.02064 11.7529 7.83105 12.2341 6.52119L12.3941 6.08924L9.97804 3.67554L12.1941 1.45782L14.2841 3.54756C14.5001 3.76353 14.6001 4.06749 14.5501 4.36346Z" fill="#533F36"/>
        </svg>
        <input class="login_input" type="text" id="phone" name="user_phone" placeholder="Telefone"/>
    </div>
    <div>
        <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5.33342H13.3333C13.5101 5.33342 13.6797 5.40365 13.8047 5.52868C13.9298 5.6537 14 5.82327 14 6.00008V14.0001C14 14.1769 13.9298 14.3465 13.8047 14.4715C13.6797 14.5965 13.5101 14.6667 13.3333 14.6667H2.66667C2.48986 14.6667 2.32029 14.5965 2.19526 14.4715C2.07024 14.3465 2 14.1769 2 14.0001V6.00008C2 5.82327 2.07024 5.6537 2.19526 5.52868C2.32029 5.40365 2.48986 5.33342 2.66667 5.33342H4V4.66675C4 3.60588 4.42143 2.58847 5.17157 1.83832C5.92172 1.08818 6.93913 0.666748 8 0.666748C9.06087 0.666748 10.0783 1.08818 10.8284 1.83832C11.5786 2.58847 12 3.60588 12 4.66675V5.33342ZM3.33333 6.66675V13.3334H12.6667V6.66675H3.33333ZM7.33333 9.33342H8.66667V10.6667H7.33333V9.33342ZM4.66667 9.33342H6V10.6667H4.66667V9.33342ZM10 9.33342H11.3333V10.6667H10V9.33342ZM10.6667 5.33342V4.66675C10.6667 3.9595 10.3857 3.28123 9.88562 2.78113C9.38552 2.28103 8.70724 2.00008 8 2.00008C7.29276 2.00008 6.61448 2.28103 6.11438 2.78113C5.61428 3.28123 5.33333 3.9595 5.33333 4.66675V5.33342H10.6667Z" fill="#533F36"/>
        </svg>
        <input class="login_input" type="password" id="password" name="password" placeholder="Senha"/>
    </div>
    <div>
        <svg class="icon" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4.66667H11.3333C11.5101 4.66667 11.6797 4.7369 11.8047 4.86193C11.9298 4.98695 12 5.15652 12 5.33333V13.3333C12 13.5101 11.9298 13.6797 11.8047 13.8047C11.6797 13.9298 11.5101 14 11.3333 14H0.666667C0.489856 14 0.320286 13.9298 0.195262 13.8047C0.0702379 13.6797 0 13.5101 0 13.3333V5.33333C0 5.15652 0.0702379 4.98695 0.195262 4.86193C0.320286 4.7369 0.489856 4.66667 0.666667 4.66667H2V4C2 2.93913 2.42143 1.92172 3.17157 1.17157C3.92172 0.421427 4.93913 0 6 0C7.06087 0 8.07828 0.421427 8.82843 1.17157C9.57857 1.92172 10 2.93913 10 4V4.66667ZM8.66667 4.66667V4C8.66667 3.29276 8.38572 2.61448 7.88562 2.11438C7.38552 1.61428 6.70724 1.33333 6 1.33333C5.29276 1.33333 4.61448 1.61428 4.11438 2.11438C3.61428 2.61448 3.33333 3.29276 3.33333 4V4.66667H8.66667ZM5.33333 8.66667V10H6.66667V8.66667H5.33333ZM2.66667 8.66667V10H4V8.66667H2.66667ZM8 8.66667V10H9.33333V8.66667H8Z" fill="#533F36"/>
            </svg>
            
        <input class="login_input" type="password" id="password2" name="password" placeholder="Confirme sua senha"/>
    </div>
    <p id="status"><p>
    <button type="submit" id="cadastroSubmit" class="btn_submit" value="submit">Cadastrar</button>`

}

