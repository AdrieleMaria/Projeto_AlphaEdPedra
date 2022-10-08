export function login() {
    return `
    <div>
        <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.6668 4.00008C14.6668 3.26675 14.0668 2.66675 13.3335 2.66675H2.66683C1.9335 2.66675 1.3335 3.26675 1.3335 4.00008V12.0001C1.3335 12.7334 1.9335 13.3334 2.66683 13.3334H13.3335C14.0668 13.3334 14.6668 12.7334 14.6668 12.0001V4.00008ZM13.3335 4.00008L8.00016 7.33342L2.66683 4.00008H13.3335ZM13.3335 12.0001H2.66683V5.33341L8.00016 8.66675L13.3335 5.33341V12.0001Z" fill="black"/>
        </svg>
        <input type="email" id="email" name="user_email" placeholder="Email"/>
    </div>                
    <div>
        <svg class="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5.33342H13.3333C13.5101 5.33342 13.6797 5.40365 13.8047 5.52868C13.9298 5.6537 14 5.82327 14 6.00008V14.0001C14 14.1769 13.9298 14.3465 13.8047 14.4715C13.6797 14.5965 13.5101 14.6667 13.3333 14.6667H2.66667C2.48986 14.6667 2.32029 14.5965 2.19526 14.4715C2.07024 14.3465 2 14.1769 2 14.0001V6.00008C2 5.82327 2.07024 5.6537 2.19526 5.52868C2.32029 5.40365 2.48986 5.33342 2.66667 5.33342H4V4.66675C4 3.60588 4.42143 2.58847 5.17157 1.83832C5.92172 1.08818 6.93913 0.666748 8 0.666748C9.06087 0.666748 10.0783 1.08818 10.8284 1.83832C11.5786 2.58847 12 3.60588 12 4.66675V5.33342ZM3.33333 6.66675V13.3334H12.6667V6.66675H3.33333ZM7.33333 9.33342H8.66667V10.6667H7.33333V9.33342ZM4.66667 9.33342H6V10.6667H4.66667V9.33342ZM10 9.33342H11.3333V10.6667H10V9.33342ZM10.6667 5.33342V4.66675C10.6667 3.9595 10.3857 3.28123 9.88562 2.78113C9.38552 2.28103 8.70724 2.00008 8 2.00008C7.29276 2.00008 6.61448 2.28103 6.11438 2.78113C5.61428 3.28123 5.33333 3.9595 5.33333 4.66675V5.33342H10.6667Z" fill="#533F36"/>
        </svg>
        <input type="password" id="password" name="password" placeholder="Senha"/>
    </div>
    <p id="status"><p>
    <button type="submit" id="loginSubmit" class="btn_submit">Login</button>`
}